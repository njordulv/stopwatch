import { motion } from 'motion/react'
import styles from './ClockHand.module.css'

interface ClockHandProps {
  count: number
}

export const ClockHand: React.FC<ClockHandProps> = ({ count }) => {
  const rotation = (count % 60) * 6

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 100,
      }}
      className={styles.hand}
    />
  )
}
