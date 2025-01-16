import { motion } from 'motion/react'

export const Sign = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.4 }}
      animate={{ opacity: 1, scale: 1 }}
      className="sign"
    >
      Njordulv
    </motion.div>
  )
}
