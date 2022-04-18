import { Section, SectionTitle, SectionText, SectionDivider } from '../../styles/GlobalComponents';
import { marked } from 'marked';

// import { ProductContent } from './ProductContentStyles';

const ProductContent = ({ content }) => {
  const parsedContend = marked(content).split(/(<h2+)/g);
  const sectionized = parsedContend
    .filter((str) => str !== '')
    .map((str) => {
      return str === '<h2' ? `<div style=${SectionDivider.componentStyle.rules[0]}></div>` + str : str; //root rules of a styled component, media querries are not accessed
    })
    .join(' ');

  return (
    <Section>
      <SectionText>
        <div></div>
        <div dangerouslySetInnerHTML={{ __html: marked(sectionized) }}></div>
      </SectionText>
    </Section>
  );
};

export default ProductContent;
