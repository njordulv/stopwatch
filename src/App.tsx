import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Hand } from './components/Hand'
import { Nums } from './components/Nums'
import { Face } from './components/Face'
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
        <Hand count={count} />
        <Face
          width={300}
          height={300}
          radius={150}
          lineConfigs={[
            {
              start: 150,
              end: 142,
              total: 240,
              amount: 720,
              color: '#454545',
              strokeWidth: 2,
            },
            {
              start: 150,
              end: 136,
              total: 60,
              amount: 180,
              color: '#454545',
              variants: config.seconds,
              strokeWidth: 2,
            },
            {
              start: 150,
              end: 136,
              total: 36,
              amount: 36,
              color: 'white',
              variants: config.fives,
              strokeWidth: 2,
            },
          ]}
        />
        <Nums
          numerals={config.numeralsPrimary}
          radius={118}
          center={150}
          segments={180}
          font={23}
        />
        <motion.div
          className="face-inner"
          initial="hidden"
          animate="visible"
          variants={config.face}
        >
          <Face
            width={80}
            height={80}
            radius={40}
            lineConfigs={[
              {
                start: 40,
                end: 36,
                total: 60,
                amount: 180,
                color: '#454545',
                strokeWidth: 1,
              },
              {
                start: 40,
                end: 33,
                total: 30,
                amount: 90,
                color: '#454545',
                strokeWidth: 1,
                variants: config.seconds,
              },
              {
                start: 40,
                end: 33,
                total: 6,
                amount: 18,
                color: 'white',
                strokeWidth: 1,
                variants: config.fives,
              },
            ]}
          />
          <Nums
            numerals={config.numeralsSecondary}
            radius={23}
            center={46}
            segments={90}
            font={13}
          />
        </motion.div>
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
