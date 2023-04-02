import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => props.theme.colors.title};
  background: ${(props) => props.theme.colors.background};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.title};
  border-radius: 16px;
  padding: 16px 24px;
  line-height: 16px;
  cursor: pointer;
  transition: 0.4s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.title};
    border-color: ${(props) => props.theme.colors.background};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 8px 16px;
    line-height: 16px;
  }
`;
