import { motion, AnimatePresence } from 'motion/react'
import { formatTime } from '../utils/formatTime'
import { useStore } from '../store'
import { config } from '../config'

export const LapList = () => {
  const { laps, lapStart, showLapArrow, adjustedLapTime } = useStore()
  const reversedLaps = [...laps].reverse()
  const totalLaps = reversedLaps.length
  const minLap = totalLaps > 0 ? Math.min(...reversedLaps) : 0
  const maxLap = totalLaps > 0 ? Math.max(...reversedLaps) : 0

  const getLapClass = (lap: number) => {
    if (maxLap === lap && totalLaps > 2) return 'danger-color'
    if (minLap === lap && totalLaps > 2) return 'primary-color'
    return 'default-color'
  }

  return (
    <motion.ul initial="initial" animate="animate" className="lap-list">
      <AnimatePresence>
        {reversedLaps.map((lap, index) => {
          const originalIndex = laps.length - index - 1
          const isCurrentLap = originalIndex === laps.length - 1

          return (
            <motion.li
              key={`lap-${originalIndex}`}
              variants={config.lapsVariants}
              className={getLapClass(lap)}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.95,
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
              <span>Lap {originalIndex + 1}</span>
              <span>
                {showLapArrow && lapStart > 0 && isCurrentLap
                  ? formatTime(adjustedLapTime)
                  : formatTime(lap)}
              </span>
            </motion.li>
          )
        })}
      </AnimatePresence>
    </motion.ul>
  )
}
