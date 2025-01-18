export const formatTime = (count: number) => {
  const minutes = Math.floor(count / 60000)
  const seconds = Math.floor((count % 60000) / 1000)
  const milliseconds = Math.floor((count % 1000) / 10)
  const format = (num: number) => String(num).padStart(2, '0')

  return (
    <div className="timer">
      <span>{format(minutes)}</span>
      <b>:</b>
      <span>{format(seconds)}</span>
      <b>,</b>
      <span>{format(milliseconds)}</span>
    </div>
  )
}
