import styled from 'styled-components';

export const StickyBar = styled.div`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.background};
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  gap: 4px;
  z-index: 9000;
  border-bottom: 1px solid ${(props) => props.theme.colors.layoutLine};
`;
