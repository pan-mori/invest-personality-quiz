import { motion } from 'framer-motion'
import { PersonalityResult, BiasType } from '../types/quiz'
import { getDominantBiasInfo, getSecondaryBiases, getBiasLevel } from '../utils/scoring'
import { biasInfoMap } from '../data/biasInfo'

interface QuizResultProps {
  result: PersonalityResult
  onRestart: () => void
}

export default function QuizResult({ result, onRestart }: QuizResultProps) {
  const dominantBiasInfo = getDominantBiasInfo(result)
  const secondaryBiases = getSecondaryBiases(result, 50)
  const allBiases: BiasType[] = ['herding', 'riskAversion', 'overreaction', 'overconfident', 'highReturns']

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -360 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="w-32 h-32 mx-auto mb-8 text-7xl flex items-center justify-center animate-float shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${dominantBiasInfo.color}40, ${dominantBiasInfo.color}20)`,
                borderRadius: '50%',
                border: `3px solid ${dominantBiasInfo.color}60`
              }}
            >
              {dominantBiasInfo.icon}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="card bg-white/95 backdrop-blur-sm p-8 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Váš investiční typ
              </h1>
              <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: '#f7931a' }}></div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: dominantBiasInfo.color }}
              >
                {dominantBiasInfo.title}
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Main Result Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="card">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Vaše charakteristiky
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Typické chování card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="card p-6 shadow-lg"
                    style={{ background: 'rgba(247, 147, 26, 0.05)' }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ background: '#f7931a' }}>
                        <span className="text-white text-lg">👤</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Typické chování</h4>
                    </div>
                    <div className="space-y-3">
                      {result.characteristics.map((characteristic, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-start p-4 bg-white/90 rounded-lg border shadow-sm"
                          style={{ borderColor: 'rgba(247, 147, 26, 0.2)' }}
                        >
                          <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: '#f7931a' }}></span>
                          <span className="text-slate-700 text-base leading-relaxed font-medium">{characteristic}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Doporučení card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="card p-6 shadow-lg"
                    style={{ background: 'rgba(34, 197, 94, 0.05)' }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ background: '#22c55e' }}>
                        <span className="text-white text-lg">💡</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Doporučení pro zlepšení</h4>
                    </div>
                    <div className="space-y-3">
                      {result.tips.map((tip, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="flex items-start p-4 bg-white/90 rounded-lg border shadow-sm"
                          style={{ borderColor: 'rgba(34, 197, 94, 0.2)' }}
                        >
                          <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: '#22c55e' }}></span>
                          <span className="text-slate-700 text-base leading-relaxed font-medium">{tip}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Scores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="card">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Detailní analýza vašich sklonů
                </h3>
                <div className="space-y-6">
                  {allBiases.map((biasType, index) => {
                    const biasInfo = biasInfoMap[biasType]
                    const percentage = result.percentages[biasType]
                    const level = getBiasLevel(percentage)
                    
                    return (
                      <motion.div
                        key={biasType}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center flex-1">
                          <span className="text-3xl mr-6">{biasInfo.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-slate-900 mb-3">{biasInfo.title}</h4>
                            <div className="progress-modern">
                              <motion.div
                                className="progress-indicator"
                                initial={{ transform: 'translateX(-100%)' }}
                                animate={{ transform: `translateX(-${100 - percentage}%)` }}
                                transition={{ delay: 1.1 + index * 0.1, duration: 0.8 }}
                                style={{ background: biasInfo.color }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="font-bold text-2xl text-slate-900">{percentage}%</div>
                          <div className="text-sm font-medium text-slate-600">{level}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Biases */}
          {secondaryBiases.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="card">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    Další výrazné sklony
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {secondaryBiases.map((biasType, index) => {
                      const biasInfo = biasInfoMap[biasType]
                      const percentage = result.percentages[biasType]
                      
                      return (
                        <motion.div
                          key={biasType}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.2 }}
                          className="p-6 border-2 border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm"
                        >
                          <div className="flex items-center mb-4">
                            <span className="text-3xl mr-3">{biasInfo.icon}</span>
                            <div>
                              <h4 className="font-bold text-lg text-slate-900">{biasInfo.title}</h4>
                              <div className="text-base font-bold" style={{ color: biasInfo.color }}>
                                {percentage}%
                              </div>
                            </div>
                          </div>
                          <p className="text-base text-slate-600 leading-relaxed">{biasInfo.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRestart}
              className="btn btn-primary btn-lg mr-4"
            >
              🔄 Udělat kvíz znovu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.print()}
              className="btn btn-outline btn-lg"
            >
              🖨️ Vytisknout výsledky
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}