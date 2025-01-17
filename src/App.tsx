import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { FaceOuter } from './components/FaceOuter'
import { FaceInner } from './components/FaceInner'
import { Button } from './components/Button'
import { Timer } from './components/Timer'
import { Sign } from './components/Sign'
import { config } from './config'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false)
    } else {
      startTimeRef.current = Date.now() - count
      setIsRunning(true)
    }
  }

  const reset = () => {
    clearInterval(intervalRef.current!)
    intervalRef.current = null
    setCount(0)
    setIsRunning(false)
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount(Date.now() - startTimeRef.current)
      }, 10)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    return () => clearInterval(intervalRef.current!)
  }, [isRunning])

  return (
    <div className="wrapper">
      <h1>Stopwatch</h1>
      <motion.div
        className="face"
        initial="hidden"
        animate="visible"
        variants={config.face}
      >
        <FaceOuter count={count} />
        <FaceInner count={count} />
        <Sign />
        <Timer count={count} />
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
