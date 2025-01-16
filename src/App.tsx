import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Hand } from './components/Hand'
import { Nums } from './components/Nums'
import { Face } from './components/Face'
import { Button } from './components/Button'
import { Sign } from './components/Sign'
import { face } from './variants'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const toggleTimer = () => {
    setIsRunning((prev) => !prev)
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
        setCount((prevCount) => prevCount + 100)
      }, 100)
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
      </motion.div>
      <div className="buttons">
        <Button onClick={reset} className="default" text="Reset" />
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
