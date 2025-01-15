import { Variants } from 'motion/react'

export const seconds = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export const fives = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
}

export const face = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.01,
    },
  },
}

export const numVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0,
    x: -12,
    y: -18,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
  },
}
