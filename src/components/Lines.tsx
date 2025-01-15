import React from 'react'
import { motion } from 'motion/react'

interface LinesProps {
  start: number
  end: number
  total: number
  amount: number
  color: string
  variants?: {
    hidden: { pathLength: number; opacity: number }
    visible: {
      pathLength: number
      opacity: number
      transition: { duration: number }
    }
  }
}

export const Lines: React.FC<LinesProps> = ({
  start,
  end,
  total,
  amount,
  color,
  variants,
}) => {
  return (
    <>
      {Array.from({ length: total }).map((_, i) => {
        const angle = i * 6 * (Math.PI / amount) - Math.PI / 2.01
        const x1 = start + end * Math.cos(angle)
        const y1 = start + end * Math.sin(angle)
        const x2 = start + start * Math.cos(angle)
        const y2 = start + start * Math.sin(angle)

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="2"
            variants={variants}
          />
        )
      })}
    </>
  )
}
