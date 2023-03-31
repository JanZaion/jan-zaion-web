import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am Jan.
        <br />I develop software
      </SectionTitle>
      <SectionText>{'< Web / JavaScript / Max for Live >'}</SectionText>
      <Button onClick={props.handleClick} destination={'/#contact'}>
        Get in touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
