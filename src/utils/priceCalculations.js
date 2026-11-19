import { getStoredRates } from '../services/currencyService'
import { currencySymbols } from './constants/constants'

const MS_PER_DAY = 1000 * 60 * 60 * 24

export const convertPrice = (eurPrice) => {
  try {
    const currentCurrency = (
      localStorage.getItem('vantrip_currency') || 'eur'
    ).toLocaleLowerCase()

    const rates = getStoredRates()

    const rate = rates[currentCurrency]
    const symbol = currencySymbols[currentCurrency]
    const convertedPrice = Math.round(eurPrice * rate)

    return { convertedPrice, symbol, formatted: `${convertedPrice} ${symbol}` }
  } catch (error) {
    console.error('Error in price conversion:', error)
    return {
      convertedPrice: eurPrice,
      symbol: '€',
      formatted: `${eurPrice} €`
    }
  }
}

export const calculateVanPricing = (van, checkInDate, checkOutDate) => {
  const hasActiveDates = checkInDate && checkOutDate

  const hasSeasonalPricing =
    hasActiveDates &&
    van.seasonalPricing &&
    van.seasonalPricing.some((season) => {
      return (
        new Date(checkInDate) >= new Date(season.startDate) &&
        new Date(checkOutDate) <= new Date(season.endDate)
      )
    })

  const rawPricePerDay = hasSeasonalPricing
    ? van.seasonalPricePerDay
    : van.defaultPricePerDay

  let nights = 0
  if (hasActiveDates) {
    const start = new Date(checkInDate)
    const end = new Date(checkOutDate)
    const diffDays = Math.ceil((end - start) / MS_PER_DAY)
    nights = diffDays > 0 ? diffDays : 0
  }

  const rawTotalPrice = nights > 0 ? rawPricePerDay * nights : 0

  return {
    nights,
    pricePerDay: convertPrice(rawPricePerDay),
    totalPrice: convertPrice(rawTotalPrice)
  }
}
