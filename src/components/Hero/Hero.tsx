import BigButton from '../BigButton/BigButton';
import {
  SectionText,
  MainTitle,
  Section,
} from '../GlobalComponents/GlobalComponents';

const Hero = () => (
  <Section>
    <MainTitle>
      Hi, I am Jan.
      <br />I develop software
    </MainTitle>
    <SectionText>{'< Web / TypeScript / Max for Live >'}</SectionText>
    <BigButton />
  </Section>
);

export default Hero;
