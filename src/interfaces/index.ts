export interface HandProps {
  count: number
}

export interface LineProps {
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

export interface NumeralProps {
  numeral: number
}

export interface ButtonProps {
  onClick: () => void
  className?: string
  text: string
  disabled?: boolean
}
