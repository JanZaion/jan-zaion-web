// import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
// import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <UtilityList>
              <ExternalLinks href={p.source}>Learn more</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('./mds/ppmds/'));

  const ppmds = files.map((file) => {
    const slug = file.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(path.join('./mds/ppmds/', file), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      ppmds: ppmds.sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      }),
    },
  };
}

export default Projects;
