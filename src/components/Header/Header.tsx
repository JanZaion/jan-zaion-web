import Link from 'next/link';

import { DarkmodeButton } from '../DarkmodeButton/DarkmodeButton';

import { Container, Menu, DarkModeButtonContainer, NavLink } from './styled';

const Header = () => (
  <Container>
    <Menu>
      <Link href="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="/#about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="/#contact">
        <NavLink>Contact</NavLink>
      </Link>
    </Menu>
    <DarkModeButtonContainer>
      <DarkmodeButton />
    </DarkModeButtonContainer>
  </Container>
);

export default Header;
