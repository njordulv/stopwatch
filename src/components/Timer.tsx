import { motion } from 'motion/react'
import { CounterProps } from '../interfaces'

export const Timer = ({ count }: CounterProps) => {
  const minutes = Math.floor(count / 60000)
  const seconds = Math.floor((count % 60000) / 1000)
  const milliseconds = Math.floor((count % 1000) / 10)
  const format = (num: number) => String(num).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="timer"
    >
      <span>{format(minutes)}</span>
      <span>{format(seconds)}</span>
      <span>{format(milliseconds)}</span>
    </motion.div>
  )
}
