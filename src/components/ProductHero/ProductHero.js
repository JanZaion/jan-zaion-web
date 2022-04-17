import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { ProductHeroImg } from './ProductHeroStyles';

const ProductHero = ({ title, tag_line, cover_image }) => (
  <Section>
    <SectionTitle main>{title}</SectionTitle>
    <SectionText>{tag_line}</SectionText>
    <ProductHeroImg src={cover_image} />
  </Section>
);

export default ProductHero;
