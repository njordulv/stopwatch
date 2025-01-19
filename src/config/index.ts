export const config = {
  githubLink: 'https://github.com/njordulv/stopwatch',
  numeralsPrimary: [60, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
  numeralsSecondary: [30, 5, 10, 15, 20, 25],
  face: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  },
  seconds: {
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  },
  fives: {
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  },
  numVariants: {
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
  },
  transitionLink: {
    type: 'spring',
    mass: 0.6,
    stiffness: 700,
    damping: 50,
  },
  lapsVariants: {
    initial: {
      y: -12,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  },
}
