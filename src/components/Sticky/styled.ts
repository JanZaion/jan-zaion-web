import styled from 'styled-components';

export const StickyBar = styled.div`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.background};
  padding: 16px 48px;
  display: flex;
  gap: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px;
  }
`;
