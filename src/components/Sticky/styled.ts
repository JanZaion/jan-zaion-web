import styled from 'styled-components';

export const StickyBar = styled.div`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.background};
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  gap: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
