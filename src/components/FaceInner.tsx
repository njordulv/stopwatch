import { motion } from 'motion/react'
import { Hand } from '../components/Hand'
import { Nums } from '../components/Nums'
import { Face } from '../components/Face'
import { config } from '../config'
import { CounterProps } from '../interfaces'

export const FaceInner = ({ count }: CounterProps) => {
  return (
    <motion.div
      className="face-inner"
      initial="hidden"
      animate="visible"
      variants={config.face}
    >
      <Hand
        count={count}
        mode={10000}
        height={40}
        width={1}
        className="hand hand-inner"
      />
      <Face
        width={80}
        height={80}
        radius={40}
        lineConfigs={[
          {
            start: 40,
            end: 36,
            total: 60,
            amount: 180,
            rad: 2.01,
            color: '#454545',
            strokeWidth: 1,
          },
          {
            start: 40,
            end: 33,
            total: 30,
            amount: 90,
            rad: 2.01,
            color: '#454545',
            strokeWidth: 1,
            variants: config.seconds,
          },
          {
            start: 40,
            end: 33,
            total: 6,
            amount: 18,
            rad: 2.01,
            color: 'white',
            strokeWidth: 1,
            variants: config.fives,
          },
        ]}
      />
      <Nums
        numerals={config.numeralsSecondary}
        radius={23}
        center={46}
        segments={90}
        font={13}
      />
    </motion.div>
  )
}
