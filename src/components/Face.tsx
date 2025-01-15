import { motion } from 'motion/react'
import { Lines } from './Lines'

export const Face = () => {
  const seconds = {
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const fives = {
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  }

  const face = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  }

  return (
    <motion.svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      initial="hidden"
      animate="visible"
      variants={face}
    >
      <motion.circle cx="150" cy="150" r="150" fill="#141414" />
      <Lines start={150} end={142} total={240} amount={720} color="#444" />
      <Lines
        start={150}
        end={136}
        total={60}
        amount={180}
        variants={seconds}
        color="#444"
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
