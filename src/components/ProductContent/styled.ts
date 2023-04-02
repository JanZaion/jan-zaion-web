import styled from 'styled-components';

export const ProductContentText = styled.div`
  max-width: 860px;
  line-height: 2em;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  font-size: ${(props) => props.theme.typography.article.fontSize};

  p,
  ul,
  ol {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 1em;
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 1em;
    margin-left: 4rem;
  }

  ol {
    list-style-type: decimal;
  }
  ol > li {
    list-style-type: decimal;
  }
  ol {
    list-style-type: inherit;
  }
  ul > li {
    list-style: inherit;
  }
  img {
    max-width: 100%;
  }

  h2 {
    margin-top: 0.8em;
    margin-bottom: 0.8em;
    font-size: ${(props) => props.theme.typography.title3.fontSize};
  }

  h3 {
    font-size: ${(props) => props.theme.typography.title4.fontSize};
  }

  h4 {
    font-size: ${(props) => props.theme.typography.title5.fontSize};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 24px;
  }
`;
