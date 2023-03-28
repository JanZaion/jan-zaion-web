import {
  Section,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import { ProductHeroImg } from './ProductHeroStyles';

const ProductHero = ({ title, tagLine, coverImage }) => (
  <Section>
    <SectionTitle main>{title}</SectionTitle>
    <SectionText>{tagLine}</SectionText>
    <ProductHeroImg src={coverImage} />
  </Section>
);

export default ProductHero;
