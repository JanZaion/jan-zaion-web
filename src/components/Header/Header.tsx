import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container, Menu, Div3, NavLink, SocialIcons } from './styled';

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
    <Div3>
      <SocialIcons
        href="https://www.linkedin.com/in/zajicekjan/"
        target="blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/JanZaion" target="blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
