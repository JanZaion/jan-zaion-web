import styled from 'styled-components';

export const ProductContentContainer = styled.section`
  /* display: ${(props) => (props.grid ? 'grid' : 'flex')}; */
  /* flex-direction: ${(props) => (props.row ? 'row' : 'column')}; */
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  /* overflow: hidden; */
  /* grid-template-columns: 1fr 1fr; */

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const ProductContentText = styled.div`
  max-width: 860px;
  line-height: 2em;
  font-weight: 300;
  font-size: 18px;

  p,
  ul,
  ol {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1em;
  }

  ul,
  ol {
    color: rgba(255, 255, 255, 0.7);
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

  h2,
  h3 {
    background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    margin-top: 0.8em;
    margin-bottom: 0.8em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
