import { motion } from 'motion/react'
import { HandProps } from '../interfaces'

export const Hand: React.FC<HandProps> = ({
  count,
  mode,
  height,
  width,
  className,
}) => {
  const rotation = (count / mode) * 6

  return (
    <motion.div
      animate={{ rotate: rotation }}
      className={className}
      style={{ height: height, width: width }}
    />
  )
}
