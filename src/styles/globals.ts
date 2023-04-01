import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    // the fuck is this?
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 700;
    color: ${(props) => props.theme.colors.title};
    margin-bottom: 16px;
    
    @media ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 12px;
    }
    
    @media ${(props) => props.theme.breakpoints.sm} {
      line-height: 40px;
      margin-bottom: 8px;
    }
  }

  h2::before {
    content: '';
    display: block;
    width: 64px;
    height: 3px;
    background: ${(props) => props.theme.colors.divider}; 
    margin-bottom: 12px;
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
