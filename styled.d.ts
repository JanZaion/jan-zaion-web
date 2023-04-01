import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
      title: string;
    };

    colors: {
      title: string;
      text: string;
      background: string;
      divider: string;
      cardHeader: string;
      link: string;
      button: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
