export const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vw",
    scale: 1.2,
  },

  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "100vw",
    scale: 0.8,
  },
};

export const pageVariantsFromBottom = {
  initial: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },

  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
};

export const pageVariantsFromLeft = {
  initial: {
    opacity: 0,
    y: "100vw",
    scale: 1.2,
  },

  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vw",
    scale: 0.8,
  },
};

export const pageTransition = {
  duration: 0.5,
  transition: "linear",
  type: "spring",
  ease: "circInOut",
  stiffness: 25,
};

export const pageStyle = {
  position: "absolute",
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

export const animation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
