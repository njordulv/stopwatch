import { ButtonProps } from '../interfaces'

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  text,
  disabled,
}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {text}
    </button>
  )
}
