import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/zajicekjan/" target="blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/JanZaion" target="blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
