import { motion, AnimatePresence } from 'motion/react'
import { formatTime } from '../utils/formatTime'
import { getLapClass } from '../utils/getLapClass'
import { useStore } from '../store'
import { config } from '../config'

export const LapList = () => {
  const { count, laps, lapStart, showLapArrow, adjustedLapTime } = useStore()
  const reversedLaps = [...laps, count].reverse()
  const totalLaps = reversedLaps.length
  const lapsLength = laps.length
  const minLap = totalLaps > 0 ? Math.min(...reversedLaps) : 0
  const maxLap = totalLaps > 0 ? Math.max(...reversedLaps) : 0

  return (
    <div className="laps">
      <motion.ul initial="initial" animate="animate" className="laps__list">
        <AnimatePresence>
          {reversedLaps.map((lap, index) => {
            const originalIndex = lapsLength - index
            const isCurrentLap = originalIndex === lapsLength

            return (
              count > 0 && (
                <motion.li
                  key={`lap-${index}`}
                  variants={config.lapsVariants}
                  className={`laps__item ${getLapClass(
                    lap,
                    totalLaps,
                    maxLap,
                    minLap
                  )}`}
                  exit={{
                    opacity: 0,
                    y: -50,
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
                  <span className="laps__item-number">
                    Lap {originalIndex + 1}
                  </span>
                  <span className="laps__item-time">
                    {showLapArrow && lapStart > 0 && isCurrentLap
                      ? formatTime(adjustedLapTime)
                      : formatTime(lap)}
                  </span>
                </motion.li>
              )
            )
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  )
}
