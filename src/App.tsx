import { useState } from 'react'
import { QuizState } from './types/quiz'
import { questions } from './data/questions'
import { calculateResult } from './utils/scoring'
import { ThemeProvider } from './contexts/ThemeContext'
import QuizIntro from './components/QuizIntro'
import QuizQuestion from './components/QuizQuestion'
import QuizResult from './components/QuizResult'
import './styles/index.css'

type AppState = 'intro' | 'quiz' | 'result'

function App() {
  const [appState, setAppState] = useState<AppState>('intro')
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 1,
    answers: {},
    isComplete: false
  })

  const handleStartQuiz = () => {
    setAppState('quiz')
    setQuizState({
      currentQuestion: 1,
      answers: {},
      isComplete: false
    })
  }

  const handleAnswerSelect = (answerId: string) => {
    setQuizState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [prev.currentQuestion]: answerId
      }
    }))
  }

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }))
    } else {
      // Quiz completed
      const result = calculateResult(quizState.answers)
      setQuizState(prev => ({
        ...prev,
        isComplete: true,
        result
      }))
      setAppState('result')
    }
  }

  const handlePrevious = () => {
    if (quizState.currentQuestion > 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }))
    }
  }

  const handleRestart = () => {
    setAppState('intro')
    setQuizState({
      currentQuestion: 1,
      answers: {},
      isComplete: false
    })
  }

  return (
    <ThemeProvider>
      {appState === 'intro' && <QuizIntro onStart={handleStartQuiz} />}

      {appState === 'quiz' && (() => {
        const currentQuestion = questions.find(q => q.id === quizState.currentQuestion)
        if (!currentQuestion) return null

        return (
          <QuizQuestion
            question={currentQuestion}
            currentQuestion={quizState.currentQuestion}
            totalQuestions={questions.length}
            selectedAnswer={quizState.answers[quizState.currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={quizState.currentQuestion === 1}
            isLast={quizState.currentQuestion === questions.length}
          />
        )
      })()}

      {appState === 'result' && quizState.result && (
        <QuizResult
          result={quizState.result}
          onRestart={handleRestart}
        />
      )}
    </ThemeProvider>
  )
}

export default App