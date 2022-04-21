import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am Jan.
          <br />I develop software
        </SectionTitle>
        <SectionText>{'< Web / JavaScript / Max for Live >'}</SectionText>

        <Button onClick={props.handleClick}>
          <Link href="/#projects">Learn More</Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
