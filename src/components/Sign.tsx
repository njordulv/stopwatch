import { motion } from 'motion/react'

export const Sign = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="sign"
    >
      Njordulv
    </motion.span>
  )
}
