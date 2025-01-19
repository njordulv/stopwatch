import { motion, AnimatePresence } from 'motion/react'
import { formatTime } from '../utils/formatTime'
import { useStore } from '../store'
import { config } from '../config'

export const LapList = () => {
  const { laps } = useStore()
  const totalLaps = laps.length
  const minLap = totalLaps > 0 ? Math.min(...laps) : 0
  const maxLap = totalLaps > 0 ? Math.max(...laps) : 0

  const getLapClass = (lap: number) => {
    if (maxLap === lap && totalLaps > 2) return 'danger-color'
    if (minLap === lap && totalLaps > 2) return 'primary-color'
    return 'default-color'
  }

  return (
    <motion.ul initial="initial" animate="animate" className="lap-list">
      <AnimatePresence>
        {laps.map((lap, index) => (
          <motion.li
            key={`lap-${index}`}
            variants={config.lapsVariants}
            className={getLapClass(lap)}
            exit={{
              opacity: 0,
              y: -15,
              transition: {
                type: 'spring',
                mass: 2.5,
                stiffness: 600,
                damping: 50,
                duration: 0.2,
                delay: index * 0.05,
              },
            }}
          >
            <span>Lap {index + 1}</span>
            <span>{formatTime(lap)}</span>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}
