export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      opacity: 0,

      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      opacity: 0,
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      },
    },
  };
};

export const cardFadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      opacity: 0,

      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      opacity: 0,
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.4,
        delay: delay,
        ease: [0.0, 0.1, 0.1, 0.3]
      },
    },
  };
};

export const spin = (direction, delay) => {
  return {
    onMouse: {
      
    }
  }
}