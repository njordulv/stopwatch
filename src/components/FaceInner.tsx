import { motion } from 'motion/react'
import { Hand, Nums, Face } from '@/components'
import { useStore } from '@/store'
import { config } from '@/config'

export const FaceInner = () => {
  const { count } = useStore()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="face__inner"
      variants={config.face}
    >
      <Hand
        rotation={(count / 30000) * 6}
        height={42}
        width={2}
        color="orange"
        borderColor="orange"
        className="hand hand__inner"
      />
      <Face
        width={84}
        height={84}
        radius={42}
        lineConfigs={[
          {
            start: 42,
            end: 38,
            total: 60,
            amount: 180,
            color: '#454545',
            strokeWidth: 1,
          },
          {
            start: 42,
            end: 34,
            total: 30,
            amount: 90,
            color: '#454545',
            strokeWidth: 1,
            variants: config.seconds,
          },
          {
            start: 42,
            end: 34,
            total: 6,
            amount: 18,
            color: 'white',
            strokeWidth: 1,
            variants: config.fives,
          },
        ]}
      />
      <Nums
        numerals={config.numeralsSecondary}
        radius={22}
        center={46}
        segments={90}
        font={13}
      />
    </motion.div>
  )
}
