import { projects } from '../../constants/constants';
import { Section, SectionTitle } from '../GlobalComponents/GlobalComponents';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  CardHeader,
  UtilityList,
  Img,
  CardInfoContainer,
} from './styled';

const Projects = () => (
  <Section id="projects">
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ title, image, description }) => (
        <BlogCard key={title}>
          <Img
            alt={`${title} snippet`}
            loading="lazy"
            src={image}
            title={`${title} snippet`}
          />
          <CardInfoContainer>
            <CardHeader>{title}</CardHeader>
            <CardInfo className="card-info">{description}</CardInfo>
          </CardInfoContainer>
          {/* replace with button once available */}
          <UtilityList>
            <ExternalLinks href={`/projects/${title.split(' ').join('-')}`}>
              Learn more
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
