import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import {
  MetaData,
  FaceOuter,
  FaceInner,
  Sign,
  Timer,
  Button,
  LapList,
  Link,
} from '@/components'
import { useStore } from '@/store'
import { config } from '@/config'
import '@/styles/app.scss'

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
    updateAdjustedLapTime,
  } = useStore()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)

  const startTimer = () => {
    const updateCount = () => {
      setCount(Date.now() - startTimeRef.current)
      animationFrameRef.current = requestAnimationFrame(updateCount)
    }
    animationFrameRef.current = requestAnimationFrame(updateCount)
  }

  const toggleTimer = () => {
    if (isRunning) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      setCount(Date.now() - startTimeRef.current)
      setRunning(false)
      setLap(true)
      setLapPauseTime(Date.now())
    } else {
      setRunning(true)
      startTimeRef.current = Date.now() - count
      startTimer()
      setLap(false)

      if (lapPauseTime) {
        const pausedDuration = Date.now() - lapPauseTime
        setLapStart((prev) => prev + pausedDuration || Date.now())
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

  useEffect(() => {
    let animationFrameId: number
    const updateLapTime = () => {
      updateAdjustedLapTime()
      animationFrameId = requestAnimationFrame(updateLapTime)
    }

    if (isRunning || lap) {
      updateLapTime()
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isRunning, lap, updateAdjustedLapTime])

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
