import styled from 'styled-components';

export const ButtonBack = styled.div`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    margin-bottom: 32px;
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f46737;
  opacity: 1;
  transition: 0.4s ease;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
      : 'none'};

  a {
    color: white;
  }

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
`;
