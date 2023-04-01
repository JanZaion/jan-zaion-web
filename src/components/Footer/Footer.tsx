import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Section } from '../GlobalComponents/GlobalComponents';
import { SocialIcons } from '../Header/styled';

import { LinkItem, LinkList, LinkTitle } from './styled';

const Footer = () => {
  return (
    <footer>
      <Section>
        <LinkList>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jan@janzaion.pro">jan@janzaion.pro</LinkItem>
        </LinkList>
        <div>
          <SocialIcons href="https://github.com/JanZaion" target="blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/zajicekjan/"
            target="blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
