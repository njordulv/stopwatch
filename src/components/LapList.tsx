import { motion } from 'motion/react'
import { formatTime } from '../utils/formatTime'
import { useStore } from '../store'
import { config } from '../config'

export const LapList = () => {
  const { laps } = useStore()

  return (
    <motion.ul
      initial="initial"
      animate="animate"
      className="lap-list"
      transition={{
        staggerChildren: 0.05,
      }}
    >
      {laps.map((lap, index) => (
        <motion.li
          key={index}
          variants={config.lapsVariants}
          transition={config.transitionList}
        >
          <span>Lap {index + 1}</span>
          <span>{formatTime(lap)}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
