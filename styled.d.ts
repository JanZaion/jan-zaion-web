import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
