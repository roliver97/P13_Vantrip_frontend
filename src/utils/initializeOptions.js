import { fetchExchangeRates } from '../services/currencyService'

export const initializeOptions = () => {
  if (!localStorage.getItem('vantrip_lang')) {
    localStorage.setItem('vantrip_lang', 'es')
  }
  if (!localStorage.getItem('vantrip_currency')) {
    localStorage.setItem('vantrip_currency', 'eur')
  }

  fetchExchangeRates()
}
