import { motion } from 'motion/react'
import { CounterProps } from '../interfaces'

export const Hand: React.FC<CounterProps> = ({ count }) => {
  const rotation = (count / 1000) * 6

  return <motion.div animate={{ rotate: rotation }} className="hand" />
}
