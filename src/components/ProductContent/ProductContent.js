import { SectionDivider } from '../../styles/GlobalComponents';
import { marked } from 'marked';
import { ProductContentContainer, ProductContentText } from './ProductContentStyles';

const ProductContent = ({ content }) => {
  const parsedContend = marked(content).split(/(<h2+)/g);
  const sectionized = parsedContend
    .filter((str) => str !== '')
    .map((str) => {
      return str === '<h2' ? `<div style=${SectionDivider.componentStyle.rules[0]}></div>` + str : str; //root rules of a styled component, media querries are not accessed
    })
    .join(' ');

  return (
    <ProductContentContainer>
      <ProductContentText>
        <div dangerouslySetInnerHTML={{ __html: marked(sectionized) }}></div>
      </ProductContentText>
    </ProductContentContainer>
  );
};

export default ProductContent;
