import { ButtonProps } from '../interfaces'

export const Button: React.FC<ButtonProps> = ({ onClick, className, text }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  )
}
