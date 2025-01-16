import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Hand } from './components/Hand'
import { Nums } from './components/Nums'
import { Face } from './components/Face'
import { Button } from './components/Button'
import { Timer } from './components/Timer'
import { Sign } from './components/Sign'
import { face } from './variants'
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
        variants={face}
      >
        <Hand count={count} />
        <Face />
        <Nums />
        <Sign />
        <Timer count={count} />
      </motion.div>
      <div className="buttons">
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
      </div>
    </div>
  )
}

export default App
