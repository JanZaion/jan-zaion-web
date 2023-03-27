import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const About = () => (
  <Section id="about">
    <SectionDivider />
    <SectionTitle>About</SectionTitle>
    <SectionText>
      My name is Jan and I&apos;m based in Brno, Czech Republic. Throughout my
      career, I&apos;ve held various positions in the IT industry. I have a
      passion for information technology, music theory and music in general. I
      love building simple solutions to complex problems. Solutions that focus
      on one thing, but do that one thing really well.
      <br />
      <br /> My native programming language is JavaScript. I&apos;ve worked with
      various technologies including React, Next, Node, Max and Max for Live.
    </SectionText>
  </Section>
);

export default About;
