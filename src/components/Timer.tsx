import { motion } from 'motion/react'
import { formatTime } from '@/utils/formatTime'
import { useStore } from '@/store'

export const Timer = () => {
  const { count } = useStore()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="timer-wrapper"
    >
      {formatTime(count)}
    </motion.div>
  )
}
