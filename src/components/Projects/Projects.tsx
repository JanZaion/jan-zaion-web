import { projects } from '../../constants/constants';
import { Section, SectionTitle } from '../GlobalComponents/GlobalComponents';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
} from './styled';

const Projects = () => (
  <Section id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p) => {
        return (
          <BlogCard key={p.title}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <UtilityList>
              <ExternalLinks href={`/projects/${p.title.split(' ').join('-')}`}>
                Learn more
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
