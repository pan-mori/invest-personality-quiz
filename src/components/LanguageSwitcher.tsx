import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6">
      {/* Home Button */}
      <Button
        asChild
        className="w-20 h-20 bg-transparent hover:bg-transparent text-white hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center p-4"
      >
        <a href="/" className="flex items-center justify-center">
          <span className="text-5xl">🏠</span>
        </a>
      </Button>

      {/* Language Switcher */}
      <div className="flex gap-4 items-center">
        <Button
          onClick={() => toggleLanguage('cs')}
          variant="outline"
          size="sm"
          className={`px-3 py-2 gap-1.5 ${
            i18n.language === 'cs'
              ? 'bg-indigo-600 text-black border-indigo-700 hover:bg-indigo-700'
              : ''
          }`}
        >
          <span className="text-lg">🇨🇿</span>
          <span className="text-xs font-bold">CS</span>
        </Button>
        <Button
          onClick={() => toggleLanguage('en')}
          variant="outline"
          size="sm"
          className={`px-3 py-2 gap-1.5 ${
            i18n.language === 'en'
              ? 'bg-indigo-600 text-black border-indigo-700 hover:bg-indigo-700'
              : ''
          }`}
        >
          <span className="text-lg">🇬🇧</span>
          <span className="text-xs font-bold">EN</span>
        </Button>
      </div>
    </div>
  )
}
