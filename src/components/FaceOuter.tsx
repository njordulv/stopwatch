import { Hand } from '../components/Hand'
import { Nums } from '../components/Nums'
import { Face } from '../components/Face'
import { useStore } from '../store'
import { config } from '../config'

export const FaceOuter = () => {
  const { count, lapStart, lapPauseTime } = useStore()
  let adjustedLapTime = 0

  if (lapStart) {
    if (lapPauseTime) {
      adjustedLapTime = lapPauseTime - lapStart
    } else {
      adjustedLapTime = Date.now() - lapStart
    }
  }

  return (
    <>
      <Hand
        rotation={(count / 1000) * 6}
        height={150}
        width={2}
        color="orange"
        borderColor="orange"
        className="hand"
      />
      {lapStart > 0 && (
        <Hand
          rotation={(adjustedLapTime / 1000) * 6}
          height={150}
          width={2}
          color="mediumslateblue"
          borderColor="mediumslateblue"
          className="hand hand-lap"
        />
      )}
      <Face
        width={300}
        height={300}
        radius={150}
        lineConfigs={[
          {
            start: 150,
            end: 144,
            total: 240,
            amount: 720,
            rad: 2.009,
            color: '#454545',
            strokeWidth: 2,
          },
          {
            start: 150,
            end: 138,
            total: 60,
            amount: 180,
            rad: 2.009,
            color: '#454545',
            variants: config.seconds,
            strokeWidth: 2,
          },
          {
            start: 150,
            end: 138,
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
        radius={120}
        center={150}
        segments={180}
        font={22}
      />
    </>
  )
}
