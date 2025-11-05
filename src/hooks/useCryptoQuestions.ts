import { useTranslation } from 'react-i18next'
import { cryptoQuestions, CryptoQuestion } from '../data/cryptoQuestions'

export function useCryptoQuestions() {
  const { t } = useTranslation()

  // Map translated crypto questions with original isCorrect property
  const translatedQuestions: CryptoQuestion[] = cryptoQuestions.map((q, index) => {
    const translatedData = t(`quiz.cryptoQuiz.questions.${index}`, { returnObjects: true }) as any

    if (translatedData && translatedData.text && translatedData.options) {
      return {
        ...q,
        text: translatedData.text,
        options: q.options.map((opt, optIndex) => ({
          ...opt,
          text: translatedData.options[optIndex].text,
          feedback: translatedData.options[optIndex].feedback
        }))
      }
    }
    return q
  })

  return translatedQuestions
}
