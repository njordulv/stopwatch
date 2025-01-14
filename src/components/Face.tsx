import { motion } from 'motion/react'

export const Face = () => {
  const secondsLines = 60

  const seconds = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
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
      {Array.from({ length: secondsLines }).map((_, i) => {
        const angle = i * 6 * (Math.PI / 180) - Math.PI / 2
        const x1 = 144 + 138 * Math.cos(angle)
        const y1 = 144 + 138 * Math.sin(angle)
        const x2 = 144 + 144 * Math.cos(angle)
        const y2 = 144 + 144 * Math.sin(angle)

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="black"
            strokeWidth="2"
            variants={seconds}
          />
        )
      })}
    </motion.svg>
  )
}
