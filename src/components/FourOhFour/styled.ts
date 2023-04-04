import styled from 'styled-components';

export const Four = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
`;
