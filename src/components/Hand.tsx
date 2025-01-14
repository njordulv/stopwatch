import { motion } from 'motion/react'

interface HandProps {
  count: number
}

export const Hand: React.FC<HandProps> = ({ count }) => {
  const rotation = (count % 60) * 6

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 100,
      }}
      className="hand"
    />
  )
}
