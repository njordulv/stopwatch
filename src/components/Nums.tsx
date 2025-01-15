import { motion } from 'motion/react'
import { numVariants } from '../variants'

export const Nums = () => {
  const numerals = [60, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
  const radius = 116
  const center = 150

  return (
    <div className="numerals">
      {numerals.map((number, index) => {
        const angle = (index * 30 * Math.PI) / 180 - Math.PI / 2
        const x = center + radius * Math.cos(angle)
        const y = center + radius * Math.sin(angle)

        return (
          <motion.span
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            variants={numVariants}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            style={{
              left: x,
              top: y,
              fontSize: 23,
              fontWeight: 300,
              color: 'white',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {number}
          </motion.span>
        )
      })}
    </div>
  )
}
