export const menu = {
  open: {
    width: '90px', // Reduced to 75% of previous width
    height: '56px', // Reduced to 75% of previous height
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '55px',
    height: '40px',
    top: '0px',
    right: '-4px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const links = [
  {
    url: '#our-services',
    linkTo: 'Our Services',
  },
  {
    url: '#contact-us',
    linkTo: 'ContactUs',
  },
  {
    url: '#our-works',
    linkTo: 'Our Works',
  },
];