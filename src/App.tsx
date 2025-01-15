import { useState, useEffect, useRef } from 'react'
import { Hand } from './components/Hand'
import { Face } from './components/Face'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(
        () => setCount((prevCount) => prevCount + 1),
        1000
      )
    } else {
      clearInterval(intervalRef.current!)
    }

    return () => clearInterval(intervalRef.current!)
  }, [isRunning])

  const toggleTimer = () => {
    setIsRunning((prev) => !prev)
  }

  const reset = () => {
    setCount(0)
    setIsRunning(false)
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <div className="case">
        <Hand count={count} />
        <Face />
      </div>
      <div className="card">
        <button onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
