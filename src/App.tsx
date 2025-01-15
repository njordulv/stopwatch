import { useState, useEffect, useRef } from 'react'
import { Hand } from './components/Hand'
import { Face } from './components/Face'
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
      <div className="case">
        <Hand count={count} />
        <Face />
      </div>
      <div className="buttons">
        <button onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
