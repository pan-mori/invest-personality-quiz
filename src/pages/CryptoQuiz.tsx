import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cryptoQuestions, CryptoOption } from '../data/cryptoQuestions'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Progress } from '../components/ui/progress'

export default function CryptoQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = cryptoQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / cryptoQuestions.length) * 100

  const handleOptionSelect = (option: CryptoOption) => {
    setSelectedOption(option.id)
    setShowFeedback(true)
    if (option.isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < cryptoQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setScore(0)
    setIsComplete(false)
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl"
        >
          <Card className="p-8 text-center backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Gratulujeme!
            </h2>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
              Dokončil jsi krypto kvíz s úspěšností{' '}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                {Math.round((score / cryptoQuestions.length) * 100)}%
              </span>
            </p>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              Skóre: {score} z {cryptoQuestions.length} správně
            </p>
            <div className="space-y-4">
              <Button
                onClick={handleRestart}
                className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-700 text-white !text-white py-7 text-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:z-0"
              >
                <span className="relative z-10">Zkusit znovu</span>
              </Button>
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full py-7 text-lg rounded-xl"
              >
                Zpět na domovskou stránku
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    )
  }

  const selectedOptionData = currentQuestion.options.find(
    opt => opt.id === selectedOption
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Otázka {currentQuestionIndex + 1} z {cryptoQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
              {/* Question */}
              <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                {currentQuestion.text}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOption === option.id
                  const showCorrect = showFeedback && option.isCorrect
                  const showIncorrect = showFeedback && isSelected && !option.isCorrect

                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => !showFeedback && handleOptionSelect(option)}
                      disabled={showFeedback}
                      whileHover={!showFeedback ? { scale: 1.02 } : {}}
                      whileTap={!showFeedback ? { scale: 0.98 } : {}}
                      className={`w-full p-4 rounded-lg text-left transition-all ${
                        showCorrect
                          ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500'
                          : showIncorrect
                          ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500'
                          : isSelected
                          ? 'bg-indigo-100 dark:bg-indigo-900/30 border-2 border-indigo-500'
                          : 'bg-gray-50 dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500'
                      } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {option.id})
                        </span>
                        <span className="flex-1 text-gray-800 dark:text-gray-200">
                          {option.text}
                        </span>
                        {showCorrect && (
                          <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                        )}
                        {showIncorrect && (
                          <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {showFeedback && selectedOptionData && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6"
                  >
                    <Card className={`p-6 ${
                      selectedOptionData.isCorrect
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
                        : 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700'
                    }`}>
                      {selectedOptionData.biasType && (
                        <div className="mb-3 font-semibold text-orange-800 dark:text-orange-300">
                          {selectedOptionData.biasType}
                        </div>
                      )}
                      <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                        {selectedOptionData.feedback}
                      </p>
                    </Card>

                    <Button
                      onClick={handleNext}
                      className="w-full mt-6 relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-700 text-white !text-white py-7 text-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:z-0"
                    >
                      <span className="relative z-10">
                        {currentQuestionIndex < cryptoQuestions.length - 1
                          ? 'Další otázka →'
                          : 'Dokončit kvíz'}
                      </span>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
