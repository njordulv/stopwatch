import { motion } from 'motion/react'

interface HandProps {
  count: number
}

export const Hand: React.FC<HandProps> = ({ count }) => {
  const rotation = count * 6

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 50,
      }}
      className="hand"
    />
  )
}
