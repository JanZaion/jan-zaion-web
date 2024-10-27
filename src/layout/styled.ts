import styled from 'styled-components';

export const Container = styled.div`
  max-width: 760px;
  width: 100%;
  margin: auto;
  padding: 32px 48px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
  }
`;
