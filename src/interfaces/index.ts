export interface CounterProps {
  count: number
}

export interface VariantsType {
  hidden: { pathLength: number; opacity: number }
  visible: {
    pathLength: number
    opacity: number
    transition: { duration: number }
  }
}

export interface LineProps {
  start: number
  end: number
  total: number
  amount: number
  color: string
  strokeWidth?: number
  variants?: VariantsType
}

export interface FaceProps {
  width?: number
  height?: number
  radius?: number
  lineConfigs?: Array<LineProps>
}

export interface NumeralProps {
  numerals: number[]
  radius: number
  center: number
  segments: number
  font: number
}

export interface ButtonProps {
  onClick: () => void
  className?: string
  text: string
  disabled?: boolean
}
