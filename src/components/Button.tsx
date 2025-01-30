import { ButtonProps } from '@/interfaces'

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      aria-label={`Button ${children}`}
    >
      {children}
    </button>
  )
}
