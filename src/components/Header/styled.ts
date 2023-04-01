import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 2.5rem;
  padding-left: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px 16px 0;
    grid-template-columns: repeat(2, 0fr);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  /* make this the full width once darkmode button is here by making a wrapper elem */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    grid-area: 2 / 1 / 3 / 5;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    display: grid;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: block;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 1 / 1 / 1;
  }
`;

export const NavLink = styled.span`
  font-size: 2rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  transition: 0.4s ease;

  &:hover {
    color: ${(props) => props.theme.colors.link};
    opacity: 1;
    cursor: pointer;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  padding-left: 0px;

  &:hover {
    padding-left: 8px;
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
