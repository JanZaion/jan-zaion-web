import styled from 'styled-components';

export const StickyBar = styled.div`
  position: ${(props) => (props.sticky ? 'sticky' : 'relative')};
  top: 0;
  width: 100%;
  background: #0f1624;
  color: #ffffff;
  height: 60px;
  padding-left: 48px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 16px;
  }
`;

// export const StickyBtn = styled.a`
//   color: #d4c0c0;
//   font-size: 1.6rem;
//   padding: 1rem 1.5rem;
//   margin-right: 1rem;
//   background: #6b3030;
//   border-radius: 15px;
//   transition: 0.5s;
//   &:hover {
//     background: #801414;
//   }
// `;

/* background: none; */
export const StickyBtn = styled.button`
  color: #fff;
  background: brown;
  /* background: #304169; */
  border: 3px solid rgba(255, 255, 255, 0.33);
  /* border: none; */
  box-sizing: border-box;
  border-radius: 15px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
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

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
