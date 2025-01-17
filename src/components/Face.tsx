import { motion } from 'motion/react'
import { Lines } from './Lines'
import { FaceProps } from '../interfaces'

export const Face: React.FC<FaceProps> = ({
  width = 300,
  height = 300,
  radius = 150,
  lineConfigs = [],
}) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <motion.circle cx={radius} cy={radius} r={radius} fill="transparent" />
      {lineConfigs.map((config, index) => (
        <Lines
          key={index}
          start={config.start}
          end={config.end}
          total={config.total}
          amount={config.amount}
          rad={config.rad}
          color={config.color}
          strokeWidth={config.strokeWidth}
          variants={config.variants}
        />
      ))}
    </motion.svg>
  )
}
