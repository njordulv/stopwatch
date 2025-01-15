import { motion } from 'motion/react'
import { HandProps } from '../interfaces'

export const Hand: React.FC<HandProps> = ({ count }) => {
  const rotation = (count / 1000) * 6

  return <motion.div animate={{ rotate: rotation }} className="hand" />
}
