import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// const GlobalStyles = styled.div`
const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: 1rem;
    background: ${(props) => props.theme.colors.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
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

  h1 {
    font-size: ${(props) => props.theme.typography.title1.fontSize};
    line-height: 72px;

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: ${(props) => props.theme.typography.title2.fontSize};
      line-height: 56px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: ${(props) => props.theme.typography.title3.fontSize};
      line-height: 32px;
    }
  }

  h2 {
    font-size: ${(props) => props.theme.typography.title2.fontSize};

    line-height: 56px;

    @media ${(props) => props.theme.breakpoints.md} {
      line-height: 48px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: ${(props) => props.theme.typography.title3.fontSize};
      line-height: 40px;
    }
  }

  h3 {
    font-size: ${(props) => props.theme.typography.title3.fontSize};

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: ${(props) => props.theme.typography.title4.fontSize};
    }
  }

  h4 {
    font-size: ${(props) => props.theme.typography.title4.fontSize};
  }

  h5 {
    font-size: ${(props) => props.theme.typography.title5.fontSize};
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
    line-height: 36px;
    font-weight: ${(props) => props.theme.typography.fontWeightLight};

    @media ${(props) => props.theme.breakpoints.md} {
      line-height: 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      line-height: 26px;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
