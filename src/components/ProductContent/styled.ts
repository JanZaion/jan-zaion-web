import styled from 'styled-components';

export const ProductContentText = styled.div`
  line-height: 36px;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  font-size: ${(props) => props.theme.typography.article.fontSize};

  p,
  ul,
  ol {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 18px;

    @media ${(props) => props.theme.breakpoints.sm} {
      line-height: 30px;
    }
  }

  ul,
  ol {
    margin-left: 32px;
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
    margin-top: 22px;
    margin-bottom: 22px;
    font-size: ${(props) => props.theme.typography.title3.fontSize};
  }

  h3 {
    font-size: ${(props) => props.theme.typography.title4.fontSize};
  }

  h4 {
    font-size: ${(props) => props.theme.typography.title5.fontSize};
  }
`;
