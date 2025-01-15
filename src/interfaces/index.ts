export interface HandProps {
  count: number
}

export interface LinesProps {
  start: number
  end: number
  total: number
  amount: number
  color: string
  variants?: {
    hidden: { pathLength: number; opacity: number }
    visible: {
      pathLength: number
      opacity: number
      transition: { duration: number }
    }
  }
}
