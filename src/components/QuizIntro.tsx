import { motion } from 'framer-motion'

interface QuizIntroProps {
  onStart: () => void
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
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
                  Investiční Personalita
                </h1>
                <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: '#f7931a' }}></div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Objevte svou investiční personalitu pomocí vědecky podloženého kvízu
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
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Proč je to důležité?</h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      Porozumění svému investičnímu stylu je klíčem k úspěšnému dlouhodobému investování. 
                      Tento kvíz vám pomůže identifikovat vaše behaviorální vzorce.
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
                  <h4 className="font-bold text-slate-900 mb-2">Váš investiční typ</h4>
                  <p className="text-sm text-slate-600">Identifikujte svůj dominantní investiční styl</p>
                </div>
                <div className="card bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg">
                  <div className="text-2xl mb-3">⚖️</div>
                  <h4 className="font-bold text-slate-900 mb-2">Behaviorální předsudky</h4>
                  <p className="text-sm text-slate-600">Odhalte skryté vzorce v rozhodování</p>
                </div>
                <div className="card bg-gradient-to-br from-pink-50 to-red-50 p-6 shadow-lg">
                  <div className="text-2xl mb-3">💡</div>
                  <h4 className="font-bold text-slate-900 mb-2">Personalizovaná doporučení</h4>
                  <p className="text-sm text-slate-600">Získejte rady šité na míru vašemu stylu</p>
                </div>
                <div className="card bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-lg">
                  <div className="text-2xl mb-3">📈</div>
                  <h4 className="font-bold text-slate-900 mb-2">Tipy pro zlepšení</h4>
                  <p className="text-sm text-slate-600">Praktické návody k lepším výsledkům</p>
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
                    <div className="text-sm font-semibold text-slate-900">3-5 minut</div>
                    <div className="text-xs text-slate-600">Doba dokončení</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">❓</div>
                    <div className="text-sm font-semibold text-slate-900">10 otázek</div>
                    <div className="text-xs text-slate-600">Vědecky ověřených</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="text-sm font-semibold text-slate-900">100% anonymní</div>
                    <div className="text-xs text-slate-600">Žádná registrace</div>
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
                  Začít kvíz 🚀
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
                  Krypto zodpovědnost kvíz
                </a>
                <a
                  href="/"
                  className="text-sm text-slate-600 hover:text-indigo-600 font-medium underline"
                >
                  Vzdělávání pro investory
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}