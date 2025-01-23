import { Hand } from '../components/Hand'
import { Nums } from '../components/Nums'
import { Face } from '../components/Face'
import { useStore } from '../store'
import { config } from '../config'

export const FaceOuter = () => {
  const { count, lapStart, showLapArrow, adjustedLapTime } = useStore()

  return (
    <>
      <Hand
        rotation={(count / 1000) * 6}
        height={156}
        width={2}
        color="orange"
        borderColor="orange"
        className="hand"
      />
      {showLapArrow && lapStart > 0 && (
        <Hand
          rotation={(adjustedLapTime / 1000) * 6}
          height={156}
          width={2}
          color="mediumslateblue"
          borderColor="mediumslateblue"
          className="hand hand--lap"
        />
      )}
      <Face
        width={312}
        height={312}
        radius={156}
        lineConfigs={[
          {
            start: 156,
            end: 150,
            total: 240,
            amount: 720,
            color: '#454545',
            strokeWidth: 2,
          },
          {
            start: 156,
            end: 144,
            total: 60,
            amount: 180,
            color: '#454545',
            variants: config.seconds,
            strokeWidth: 2,
          },
          {
            start: 156,
            end: 144,
            total: 36,
            amount: 36,
            color: 'white',
            variants: config.fives,
            strokeWidth: 2,
          },
        ]}
      />
      <Nums
        numerals={config.numeralsPrimary}
        radius={124}
        center={156}
        segments={180}
        font={24}
      />
    </>
  )
}
