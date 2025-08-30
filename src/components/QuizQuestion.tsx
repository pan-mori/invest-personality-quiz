import { motion } from 'framer-motion'
import { Question } from '../types/quiz'

interface QuizQuestionProps {
  question: Question
  currentQuestion: number
  totalQuestions: number
  selectedAnswer: string | undefined
  onAnswerSelect: (answerId: string) => void
  onNext: () => void
  onPrevious: () => void
  isFirst: boolean
  isLast: boolean
}

export default function QuizQuestion({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  isFirst,
  isLast
}: QuizQuestionProps) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Quiz Card */}
          <div className="card">
            <div className="p-8 md:p-12">
              {/* Question Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-slate-900 mb-8 text-center leading-tight"
              >
                {question.text}
              </motion.h1>

              {/* Question Image */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                className="flex justify-center mb-12"
              >
                <div className="w-32 h-32 rounded-full flex items-center justify-center text-6xl animate-float shadow-2xl" style={{ background: '#f7931a' }}>
                  {question.image}
                </div>
              </motion.div>

              {/* Answer Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {question.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onAnswerSelect(option.id)}
                    className={selectedAnswer === option.id ? 'btn-quiz-selected' : 'btn-quiz group'}
                  >
                    <div className="flex items-start w-full">
                      <div className="mr-3 flex-shrink-0">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedAnswer === option.id
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-slate-400 group-hover:border-orange-400'
                          }`}
                          style={selectedAnswer === option.id ? { borderColor: '#f7931a', backgroundColor: '#f7931a' } : {}}
                        >
                          {selectedAnswer === option.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2.5 h-2.5 bg-white rounded-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-lg leading-relaxed text-slate-900 block">
                          {option.text}
                        </span>
                      </div>
                    </div>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  </motion.button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-between items-center"
              >
                <button
                  onClick={onPrevious}
                  disabled={isFirst}
                  className={`btn btn-primary btn-lg ${isFirst ? 'invisible' : ''}`}
                >
                  ← Předchozí
                </button>

                <button
                  onClick={onNext}
                  disabled={!selectedAnswer}
                  className="btn btn-primary btn-lg"
                >
                  {isLast ? 'Dokončit kvíz ✨' : 'Další →'}
                </button>
              </motion.div>
            </div>
          </div>

          {/* Progress Bar below quiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card bg-white/95 backdrop-blur-sm p-6 mt-8 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-base font-semibold text-slate-900">
                Otázka {currentQuestion} z {totalQuestions}
              </span>
              <span className="text-base font-bold px-3 py-1 rounded-full" style={{ color: '#f7931a', backgroundColor: 'rgba(247, 147, 26, 0.1)' }}>
                {Math.round(progress)}%
              </span>
            </div>
            <div className="progress-modern h-3">
              <motion.div
                className="progress-indicator"
                initial={{ transform: 'translateX(-100%)' }}
                animate={{ transform: `translateX(-${100 - progress}%)` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}