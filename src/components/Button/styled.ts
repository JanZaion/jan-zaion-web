import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  background: ${(props) => props.theme.colors.button};
  border: 3px solid rgba(255, 255, 255, 0.33);
  border-radius: 15px;
  padding: 16px 24px;
  font-size: 1.6rem;
  line-height: 16px;
  cursor: pointer;
  transition: 0.4s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 3px solid #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 8px 16px;
    font-size: 1.6rem;
    line-height: 16px;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 1.4rem;
  }
`;
