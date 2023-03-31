import React from 'react';

import BigButton from '../BigButton/BigButton';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents';

import { LeftSection } from './styled';

const Hero = () => (
  <Section nopadding row>
    <LeftSection>
      <SectionTitle center main>
        Hi, I am Jan.
        <br />I develop software
      </SectionTitle>
      <SectionText>{'< Web / JavaScript / Max for Live >'}</SectionText>
      <BigButton />
    </LeftSection>
  </Section>
);

export default Hero;
