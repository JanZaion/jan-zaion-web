import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 16px;
  }
`;

export const SectionTitle = styled.h2`
  line-height: 56px;

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 48px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 40px;
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
  max-width: 800px;
  font-size: ${(props) => props.theme.typography.subtitle1.fontSize};
  line-height: 40px;
  font-weight: 300;
  margin-bottom: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: ${(props) => props.theme.typography.subtitle2.fontSize};
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.article.fontSize};
    line-height: 24px;
  }
`;
