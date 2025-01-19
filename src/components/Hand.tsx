import { motion } from 'motion/react'
import { HandProps } from '../interfaces'

export const Hand: React.FC<HandProps> = ({
  rotation,
  height,
  width,
  color,
  className,
}) => {
  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{
        duration: 0,
        delay: 0,
        ease: 'linear',
      }}
      className={className}
      style={{
        height: height,
        width: width,
        backgroundColor: color,
      }}
    >
      <span
        className="hand-center"
        style={{
          borderColor: color,
        }}
      ></span>
      <span
        className="hand-end"
        style={{
          backgroundColor: color,
          borderColor: color,
        }}
      ></span>
    </motion.div>
  )
}
