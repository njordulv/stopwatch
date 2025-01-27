import { motion } from 'motion/react'
import { SiGithub } from 'react-icons/si'
import { LinkProps } from '@/interfaces'

export const Link: React.FC<LinkProps> = ({
  className,
  href,
  transition,
  target,
  rel,
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={className}
      href={href}
      transition={transition}
      target={target}
      rel={rel}
      aria-label="Njordulv's Github page"
    >
      <SiGithub size={22} />
    </motion.a>
  )
}
