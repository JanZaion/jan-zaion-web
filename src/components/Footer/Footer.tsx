import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Section } from '../GlobalComponents/GlobalComponents';

import {
  SocialIcons,
  EmailContainer,
  LinkTitle,
  LinkList,
  LinkContainer,
} from './styled';

const Footer = () => {
  return (
    <footer>
      <Section>
        <LinkList>
          <LinkTitle>Email</LinkTitle>
          <EmailContainer href="mailto:jan@janzaion.pro">
            jan@janzaion.pro
          </EmailContainer>
        </LinkList>
        <LinkContainer>
          <SocialIcons href="https://github.com/JanZaion" target="_blank">
            <AiFillGithub size="2.5rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/zajicekjan/"
            target="_blank"
          >
            <AiFillLinkedin size="2.5rem" />
          </SocialIcons>
        </LinkContainer>
      </Section>
    </footer>
  );
};

export default Footer;
