/* eslint-disable @typescript-eslint/no-empty-function */
const defaultTheme = {
  colors: {
    title: '#e8e6e6',
    text: '#ffffffcf',
    background: '#0F1624',
    divider: '#008080',
    cardHeader: '#9cc9e3',
    link: '#FFA500',
    button: '#45134a',
    layoutLine: '#FFFFFF1A',
  },

  breakpoints: {
    xs: 'screen and (max-width: 320px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },

  typography: {
    fontFamily: 'Space Grotesk, Roboto, sans-serif',
    fontSize: '16px',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    article: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '1.4rem',
    },
    subtitle2: {
      fontSize: '1.2rem',
    },
    title1: {
      fontSize: '4rem',
    },
    title2: {
      fontSize: '2.5rem',
    },
    title3: {
      fontSize: '1.8rem',
    },
    title4: {
      fontSize: '1.4rem',
    },
    title5: {
      fontSize: '0.9rem',
    },
  },

  themeSwitcher: () => {},
  light: false,
};

export default defaultTheme;
