import {
  Section,
  MainTitle,
  SectionText,
} from '../GlobalComponents/GlobalComponents';

import { StyledImg } from './styled';
import type { ProductHeroProps } from './types';

const ProductHero = ({ title, tagLine, coverImage }: ProductHeroProps) => (
  <Section>
    <MainTitle>{title}</MainTitle>
    <SectionText>{tagLine}</SectionText>
    <StyledImg alt={title} loading="lazy" src={coverImage} title={title} />
  </Section>
);

export default ProductHero;
