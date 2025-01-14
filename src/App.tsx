import { useState, useEffect, useRef } from 'react'
import { ClockHand } from './components/ClockHand'
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
      <ClockHand count={count} />
      <div className="card">
        <p>count is {count}</p>
        <button onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
