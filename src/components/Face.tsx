import { motion } from 'motion/react'
import { Lines } from './Lines'

export const Face = () => {
  const seconds = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const fives = {
    hidden: { pathLength: 0, opacity: 0 },
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
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <motion.svg
      width="288"
      height="288"
      viewBox="0 0 288 288"
      initial="hidden"
      animate="visible"
      variants={face}
    >
      <motion.circle cx="144" cy="144" r="144" fill="white" />
      <Lines start={144} end={138} total={60} amount={180} variants={seconds} />
      <Lines start={144} end={130} total={36} amount={36} variants={fives} />
    </motion.svg>
  )
}
