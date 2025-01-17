import { Hand } from '../components/Hand'
import { Nums } from '../components/Nums'
import { Face } from '../components/Face'
import { config } from '../config'

export const FaceOuter = () => {
  return (
    <>
      <Hand mode={1000} height={150} width={2} className="hand" />
      <Face
        width={300}
        height={300}
        radius={150}
        lineConfigs={[
          {
            start: 150,
            end: 142,
            total: 240,
            amount: 720,
            rad: 2.009,
            color: '#454545',
            strokeWidth: 2,
          },
          {
            start: 150,
            end: 136,
            total: 60,
            amount: 180,
            rad: 2.009,
            color: '#454545',
            variants: config.seconds,
            strokeWidth: 2,
          },
          {
            start: 150,
            end: 136,
            total: 36,
            amount: 36,
            rad: 2.009,
            color: 'white',
            variants: config.fives,
            strokeWidth: 2,
          },
        ]}
      />
      <Nums
        numerals={config.numeralsPrimary}
        radius={118}
        center={150}
        segments={180}
        font={23}
      />
    </>
  )
}
