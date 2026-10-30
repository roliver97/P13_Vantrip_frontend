import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import esTranslation from '../locales/es.json'
import enTranslation from '../locales/en.json'

const savedLanguage = localStorage.getItem('vantrip_lang') || 'es'

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esTranslation },
    en: { translation: enTranslation }
  },
  lng: savedLanguage, // Initial language
  fallbackLng: 'es', // Fallback language if a key is missing
  interpolation: {
    escapeValue: false
  }
})

export default i18n
