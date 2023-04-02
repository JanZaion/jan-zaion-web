import {
  Section,
  MainTitle,
  SectionText,
} from '../GlobalComponents/GlobalComponents';

import type { ProductHeroProps } from './types';

const ProductHero = ({ title, tagLine, coverImage }: ProductHeroProps) => (
  <Section>
    <MainTitle>{title}</MainTitle>
    <SectionText>{tagLine}</SectionText>
    <img alt={title} loading="lazy" src={coverImage} title={title} />
  </Section>
);

export default ProductHero;
