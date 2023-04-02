import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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

    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      article: {
        fontSize: string;
        lineHeight: number;
      };
      subtitle1: {
        fontSize: string;
        lineHeight: number;
      };
      subtitle2: {
        fontSize: string;
        lineHeight: number;
      };
      title1: {
        fontSize: string;
        lineHeight: number;
      };
      title2: {
        fontSize: string;
        lineHeight: number;
      };
      title3: {
        fontSize: string;
        lineHeight: number;
      };
      title4: {
        fontSize: string;
        lineHeight: number;
      };
      title5: {
        fontSize: string;
        lineHeight: number;
      };
    };
  }
}
