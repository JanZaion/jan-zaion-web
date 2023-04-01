import BigButton from '../BigButton/BigButton';
import { SectionText, MainTitle } from '../GlobalComponents/GlobalComponents';

import { HeroSection } from './styled';

const Hero = () => (
  <HeroSection>
    <MainTitle>
      Hi, I am Jan.
      <br />I develop software
    </MainTitle>
    <SectionText>{'< Web / TypeScript / Max for Live >'}</SectionText>
    <BigButton />
  </HeroSection>
);

export default Hero;
