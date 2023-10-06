export const menuVars = {
  initial: {
     scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}