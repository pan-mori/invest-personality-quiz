import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface QuizIntroProps {
  onStart: () => void
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card max-w-3xl mx-auto">
              <div className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-5xl animate-float shadow-2xl"
                style={{ background: '#f7931a' }}
              >
                📊
              </motion.div>

              {/* Main Title Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="card bg-white/95 backdrop-blur-sm p-8 mb-6 shadow-xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                  {t('quiz.mainQuiz.intro.title')}
                </h1>
                <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: '#f7931a' }}></div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  {t('quiz.mainQuiz.intro.description')}
                </p>
              </motion.div>

              {/* Description Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="card bg-white/95 backdrop-blur-sm p-6 mb-6 shadow-lg"
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4 mt-1">🧠</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('quiz.mainQuiz.intro.why')}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {t('quiz.mainQuiz.intro.whyDesc')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              >
                <div className="card bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg">
                  <div className="text-2xl mb-3">🎯</div>
                  <h4 className="font-bold text-slate-900 mb-2">{t('quiz.mainQuiz.intro.benefit1Title')}</h4>
                  <p className="text-sm text-slate-600">{t('quiz.mainQuiz.intro.benefit1Desc')}</p>
                </div>
                <div className="card bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg">
                  <div className="text-2xl mb-3">⚖️</div>
                  <h4 className="font-bold text-slate-900 mb-2">{t('quiz.mainQuiz.intro.benefit2Title')}</h4>
                  <p className="text-sm text-slate-600">{t('quiz.mainQuiz.intro.benefit2Desc')}</p>
                </div>
                <div className="card bg-gradient-to-br from-pink-50 to-red-50 p-6 shadow-lg">
                  <div className="text-2xl mb-3">💡</div>
                  <h4 className="font-bold text-slate-900 mb-2">{t('quiz.mainQuiz.intro.benefit3Title')}</h4>
                  <p className="text-sm text-slate-600">{t('quiz.mainQuiz.intro.benefit3Desc')}</p>
                </div>
                <div className="card bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-lg">
                  <div className="text-2xl mb-3">📈</div>
                  <h4 className="font-bold text-slate-900 mb-2">{t('quiz.mainQuiz.intro.benefit4Title')}</h4>
                  <p className="text-sm text-slate-600">{t('quiz.mainQuiz.intro.benefit4Desc')}</p>
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="card bg-white/95 backdrop-blur-sm p-6 mb-8 shadow-lg"
              >
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="text-sm font-semibold text-slate-900">{t('quiz.mainQuiz.intro.duration')}</div>
                    <div className="text-xs text-slate-600">{t('quiz.mainQuiz.intro.durationDesc')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">❓</div>
                    <div className="text-sm font-semibold text-slate-900">{t('quiz.mainQuiz.intro.questions')}</div>
                    <div className="text-xs text-slate-600">{t('quiz.mainQuiz.intro.questionsDesc')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="text-sm font-semibold text-slate-900">{t('quiz.mainQuiz.intro.anonymous')}</div>
                    <div className="text-xs text-slate-600">{t('quiz.mainQuiz.intro.anonymousDesc')}</div>
                  </div>
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={onStart}
                  className="btn btn-primary btn-xl"
                >
                  {t('quiz.mainQuiz.intro.startButton')}
                </button>
              </motion.div>

              {/* Additional Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/crypto-quiz"
                  className="text-sm text-slate-600 hover:text-indigo-600 font-medium underline"
                >
                  {t('quiz.mainQuiz.intro.cryptoQuizLink')}
                </a>
                <a
                  href="/"
                  className="text-sm text-slate-600 hover:text-indigo-600 font-medium underline"
                >
                  {t('quiz.mainQuiz.intro.educationLink')}
                </a>
              </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}