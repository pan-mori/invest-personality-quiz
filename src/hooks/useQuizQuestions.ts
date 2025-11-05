import { useTranslation } from 'react-i18next'
import { Question } from '../types/quiz'
import { questions as staticQuestions } from '../data/questions'

export function useQuizQuestions() {
  const { t } = useTranslation()

  // Map translated questions with original scores
  const translatedQuestions: Question[] = staticQuestions.map((q, index) => {
    const translatedData = t(`quiz.mainQuiz.questions.${index}`, { returnObjects: true }) as any

    if (translatedData && translatedData.text && translatedData.options) {
      return {
        ...q,
        text: translatedData.text,
        options: q.options.map((opt, optIndex) => ({
          ...opt,
          text: translatedData.options[optIndex]
        }))
      }
    }
    return q
  })

  return translatedQuestions
}
