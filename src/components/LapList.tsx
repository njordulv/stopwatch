import { formatTime } from '../utils/formatTime'
import { useStore } from '../store'

export const LapList = () => {
  const { laps } = useStore()
  return (
    <ul className="lap-list">
      {laps.map((lap, index) => (
        <li key={index}>
          <span>Lap {index + 1}</span>
          <span>{formatTime(lap)}</span>
        </li>
      ))}
    </ul>
  )
}
