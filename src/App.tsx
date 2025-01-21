import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { MetaData } from './components/MetaData'
import { FaceOuter } from './components/FaceOuter'
import { FaceInner } from './components/FaceInner'
import { Sign } from './components/Sign'
import { Timer } from './components/Timer'
import { Button } from './components/Button'
import { LapList } from './components/LapList'
import { Link } from './components/Link'
import { useStore } from './store'
import { config } from './config'
import '@/App.css'

function App() {
  const {
    count,
    setCount,
    isRunning,
    setRunning,
    lap,
    setLap,
    laps,
    setLapse,
    lapStart,
    setLapStart,
    lapPauseTime,
    setLapPauseTime,
    setShowLapArrow,
  } = useStore()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current!)
      intervalRef.current = null
      setCount(Date.now() - startTimeRef.current)
      setRunning(false)
      setLap(true)
      setLapPauseTime(Date.now())
    } else {
      setRunning(true)
      startTimeRef.current = Date.now() - count
      intervalRef.current = setInterval(() => {
        setCount(Date.now() - startTimeRef.current)
      }, 10)
      setLap(false)

      if (lapPauseTime) {
        const pausedDuration = Date.now() - lapPauseTime
        setLapStart(
          (prevLapStart) => prevLapStart + pausedDuration || Date.now()
        )
      } else {
        setLapStart(Date.now())
      }

      setLapPauseTime(null)
    }
  }

  const toggleLap = () => {
    if (lap) {
      setLapStart(0)
      setLapPauseTime(null)
    } else {
      let lapTime

      if (!lapStart || lapStart === 0) {
        lapTime = count
      } else {
        lapTime = lapPauseTime ? lapPauseTime - lapStart : Date.now() - lapStart
      }

      lapTime = Math.max(0, lapTime)

      setLapse([...laps, lapTime])
      setLapStart(Date.now())
      setLapPauseTime(null)
      setShowLapArrow(true)
    }
  }

  const reset = () => {
    clearInterval(intervalRef.current!)
    intervalRef.current = null
    setCount(0)
    setRunning(false)
    setLap(false)
    setLapse([])
    setLapStart(0)
    setLapPauseTime(null)
    setShowLapArrow(false)
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current!)
  }, [])

  return (
    <>
      <MetaData />
      <div className="wrapper">
        <motion.div
          className="face"
          initial="hidden"
          animate="visible"
          variants={config.face}
        >
          <FaceOuter />
          <FaceInner />
          <Sign />
          <Timer />
        </motion.div>
        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            onClick={lap ? reset : toggleLap}
            text={`${lap ? 'Reset' : 'Lap'}`}
            className="default"
            disabled={count === 0}
          />
          <Button
            onClick={toggleTimer}
            text={`${isRunning ? 'Stop' : 'Start'}`}
            className={`${isRunning ? 'danger' : 'primary'}`}
          />
        </motion.div>
        <LapList />
        <Link
          className="github-link"
          href={config.githubLink}
          transition={config.transitionLink}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </>
  )
}

export default App
