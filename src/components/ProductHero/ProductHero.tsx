import {
  Section,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';

import { ProductHeroImg } from './styled';
import type { ProductHeroProps } from './types';

const ProductHero = ({ title, tagLine, coverImage }: ProductHeroProps) => (
  <Section>
    <SectionTitle main>{title}</SectionTitle>
    <SectionText>{tagLine}</SectionText>
    <ProductHeroImg src={coverImage} />
  </Section>
);

export default ProductHero;
