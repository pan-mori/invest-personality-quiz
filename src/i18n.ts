import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import csTranslations from './locales/cs.json'
import enTranslations from './locales/en.json'

const resources = {
  cs: {
    translation: csTranslations
  },
  en: {
    translation: enTranslations
  }
}

// Get saved language from localStorage or default to 'cs'
const savedLanguage = localStorage.getItem('language') || 'cs'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
