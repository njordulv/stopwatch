export const getLapClass = (
  lap: number,
  totalLaps: number,
  maxLap: number,
  minLap: number,
  isCurrentLap: boolean
) => {
  if (isCurrentLap) return 'default-color'
  if (maxLap === lap && totalLaps > 2) return 'danger-color'
  if (minLap === lap && totalLaps > 2) return 'primary-color'
  return 'default-color'
}
