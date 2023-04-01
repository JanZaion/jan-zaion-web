import styled from 'styled-components';

export const Section = styled.section`
  padding: 32px 48px 0;
  max-width: 1040px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  line-height: 56px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 48px;
    line-height: 48px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const MainTitle = styled.h1`
  padding: 58px 0 16px;
  font-size: 65px;
  line-height: 72px;
  margin: 0 0 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 56px;
    line-height: 56px;
    padding: 40px 0 12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
    line-height: 32px;
    padding: 16px 0 8px;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;

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

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? '24px' : '16px')};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? '16px' : '8px')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? '0' : '8px')};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? '32px' : '24px')};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? '16px' : '24px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? '32px' : '16px')};
  }
`;
