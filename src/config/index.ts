export const config = {
  name: 'Stopwatch App',
  title: 'Stopwatch App - Precise Timing and Lap Tracking',
  description:
    'A precise and elegant stopwatch application for tracking time with millisecond accuracy.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'stopwatch',
    'timer',
    'lap timing',
    'React App',
    'Zustqand',
    'typescript',
    'Apple stopwatch',
    'millisecond precision',
  ],
  author: 'Njordr',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    viewportFit: 'cover' as const,
    userScalable: false,
  },
  siteUrl: 'https://njordulv-stopwatch.netlify.app/',
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
    stiffness: 900,
    damping: 30,
    delay: 0.6,
  },
  lapsVariants: {
    initial: {
      y: -12,
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  },
}
