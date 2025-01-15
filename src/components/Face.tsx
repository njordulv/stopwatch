import { motion } from 'motion/react'
import { Lines } from './Lines'
import { seconds, fives } from '../variants'

export const Face = () => {
  return (
    <motion.svg
      className="lines"
      width="300"
      height="300"
      viewBox="0 0 300 300"
    >
      <motion.circle cx="150" cy="150" r="150" fill="#141414" />
      <Lines start={150} end={142} total={240} amount={720} color="#454545" />
      <Lines
        start={150}
        end={136}
        total={60}
        amount={180}
        variants={seconds}
        color="#454545"
      />
      <Lines
        start={150}
        end={136}
        total={36}
        amount={36}
        variants={fives}
        color="white"
      />
    </motion.svg>
  )
}
