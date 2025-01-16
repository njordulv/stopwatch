import { motion } from 'motion/react'
import { config } from '../config'
import { NumeralProps } from '../interfaces'

export const Nums: React.FC<NumeralProps> = ({
  numerals,
  radius,
  center,
  segments,
  font,
}) => {
  return (
    <div className="numerals">
      {numerals.map((number, index) => {
        const angle = (index * 30 * Math.PI) / segments - Math.PI / 2
        const x = center + radius * Math.cos(angle)
        const y = center + radius * Math.sin(angle)

        return (
          <motion.span
            key={index}
            initial="offscreen"
            animate="onscreen"
            variants={config.numVariants}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            style={{
              left: x,
              top: y,
              fontSize: font,
              color: 'white',
              position: 'absolute',
            }}
          >
            {number}
          </motion.span>
        )
      })}
    </div>
  )
}
