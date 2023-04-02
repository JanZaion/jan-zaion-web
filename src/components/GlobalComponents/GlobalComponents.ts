import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 48px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 32px;
  }
`;

export const MainTitle = styled.h1`
  padding: 58px 0 16px;
  margin: 0 0 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 40px 0 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 40px 0 8px;
  }
`;

export const SectionText = styled.p`
  font-size: ${(props) => props.theme.typography.subtitle1.fontSize};
  margin-bottom: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.subtitle2.fontSize};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.article.fontSize};
  }
`;
