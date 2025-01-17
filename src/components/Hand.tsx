import { motion } from 'motion/react'
import { HandProps } from '../interfaces'
import { useStore } from '../store'

export const Hand: React.FC<HandProps> = ({
  mode,
  height,
  width,
  className,
}) => {
  const { count } = useStore()
  const rotation = (count / mode) * 6
  const transition = {
    duration: 0,
    delay: 0,
    ease: 'linear',
  }

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={transition}
      className={className}
      style={{ height: height, width: width }}
    />
  )
}
