//! This code is only for the client-side visual interface. The final calculations, prior to any payment, would be re-calculated on the backend to ensure payment security.

const DEFAULT_RATES = {
  eur: 1,
  usd: 1.08,
  gbp: 0.85
}

const DATE_KEY = 'vantrip_rates_date'
const RATES_KEY = 'vantrip_rates'

export const fetchExchangeRates = async () => {
  const today = new Date().toISOString().split('T')[0] //"YYYY-MM-DD"
  const localSavedDate = localStorage.getItem(DATE_KEY)
  const localSavedRates = localStorage.getItem(RATES_KEY)

  if (localSavedDate === today && localSavedRates) {
    return JSON.parse(localSavedRates)
  }

  try {
    const response = await fetch(
      'https://api.frankfurter.dev/v1/latest?from=EUR&to=USD,GBP'
    )
    const data = await response.json()

    const rates = {
      eur: 1,
      usd: data.rates.USD,
      gbp: data.rates.GBP
    }

    localStorage.setItem(RATES_KEY, JSON.stringify(rates))
    localStorage.setItem(DATE_KEY, today)

    return rates
  } catch (error) {
    console.error('Error on fetch to update currencies:', error)
    return localSavedRates ? JSON.parse(localSavedRates) : DEFAULT_RATES
  }
}

export const getStoredRates = () => {
  const savedRates = localStorage.getItem(RATES_KEY)

  if (!savedRates) {
    fetchExchangeRates().catch((err) =>
      console.error('Auto-fetch failed:', err)
    )
    return DEFAULT_RATES
  }

  return JSON.parse(savedRates)
}
