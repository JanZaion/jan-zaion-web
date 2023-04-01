import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
      title: string;
    };

    colors: {
      title: string;
      primary1: string;
      background: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
