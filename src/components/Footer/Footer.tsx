import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord, BsTelegram } from 'react-icons/bs';

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
          <SocialIcons
            href="https://discordapp.com/users/816349317437849600"
            target="_blank"
          >
            <BsDiscord size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://t.me/janzaion" target="_blank">
            <BsTelegram size="2.5rem" />
          </SocialIcons>
        </LinkContainer>
      </Section>
    </footer>
  );
};

export default Footer;
