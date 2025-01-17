import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { FaceOuter } from './components/FaceOuter'
import { FaceInner } from './components/FaceInner'
import { Button } from './components/Button'
import { Timer } from './components/Timer'
import { Sign } from './components/Sign'
import { useStore } from './store'
import { config } from './config'
import '@/App.css'

function App() {
  const { count, setCount, isRunning, setRunning } = useStore()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current!)
      intervalRef.current = null
      setCount(Date.now() - startTimeRef.current)
      setRunning(false)
    } else {
      setRunning(true)
      startTimeRef.current = Date.now() - count
      intervalRef.current = setInterval(() => {
        setCount(Date.now() - startTimeRef.current)
      }, 10)
    }
  }

  const reset = () => {
    clearInterval(intervalRef.current!)
    intervalRef.current = null
    setCount(0)
    setRunning(false)
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current!)
  }, [])

  return (
    <div className="wrapper">
      <h1>Stopwatch</h1>
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
          onClick={reset}
          className="default"
          text="Reset"
          disabled={count === 0}
        />
        <Button
          onClick={toggleTimer}
          text={`${isRunning ? 'Stop' : 'Start'}`}
          className={`${isRunning ? 'warning' : 'primary'}`}
        />
      </motion.div>
    </div>
  )
}

export default App
