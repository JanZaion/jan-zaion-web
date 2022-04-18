import styled from 'styled-components';

export const StickyBar = styled.div`
  /* position: sticky; */
  position: ${(props) => (props.sticky ? 'sticky' : 'relative')};
  top: 0;
  width: 100%;
  background: #0f1624;
  color: #ffffff;
  height: 60px;
  padding-left: 6.5vw;
  display: flex;
  align-items: center;
`;

export const BtnCont = styled.div`
  /* align-items: center;
  display: flex; */
`;

export const StickyBtn = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  margin-right: 1rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;
