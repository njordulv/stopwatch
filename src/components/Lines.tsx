import { motion, Variants } from 'motion/react'
import { LineProps } from '@/interfaces'

export const Lines: React.FC<LineProps> = ({
  start,
  end,
  total,
  amount,
  color,
  strokeWidth,
  variants,
}) => {
  return (
    <>
      {Array.from({ length: total }).map((_, i) => {
        const angle = i * 6 * (Math.PI / amount) - Math.PI / 2
        const x1 = start + end * Math.cos(angle)
        const y1 = start + end * Math.sin(angle)
        const x2 = start + start * Math.cos(angle)
        const y2 = start + start * Math.sin(angle)
        const validVariants = variants as unknown as Variants

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={strokeWidth}
            variants={validVariants}
          />
        )
      })}
    </>
  )
}
