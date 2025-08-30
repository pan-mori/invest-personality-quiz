import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full"
      />
    </div>
  )
}