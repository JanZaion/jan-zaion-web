import { projects } from '../../constants/constants';
import { Section, SectionTitle } from '../GlobalComponents/GlobalComponents';
import { LinkButton } from '../LinkButton/LinkButton';

import {
  BlogCard,
  CardInfo,
  GridContainer,
  CardHeader,
  ButtonContainer,
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
          <ButtonContainer>
            <LinkButton
              href={`/projects/${title.split(' ').join('-')}` as unknown as URL}
            >
              Learn more
            </LinkButton>
          </ButtonContainer>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
