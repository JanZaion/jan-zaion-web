import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 0fr);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.colors.divider};

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    grid-area: 2 / 1 / 3 / 5;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    display: grid;
    gap: 0;
  }
`;

export const DarkModeButtonContainer = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: block;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 4px;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 1 / 1 / 1;
  }
`;

export const NavLink = styled.span`
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  transition: 0.4s ease;

  &:hover {
    color: ${(props) => props.theme.colors.link};
    opacity: 1;
    cursor: pointer;
  }
`;
