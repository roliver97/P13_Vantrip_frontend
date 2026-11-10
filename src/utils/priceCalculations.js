import { getStoredRates } from '../services/currencyService'
import { currencySymbols } from './constants/constants'

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
