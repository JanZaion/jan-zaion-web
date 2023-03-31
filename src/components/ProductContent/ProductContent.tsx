/* eslint-disable react/no-danger */
import { marked } from 'marked';

import { SectionDivider } from '../../styles/GlobalComponents';

import { ProductContentContainer, ProductContentText } from './styled';
import type { ProductContentProps } from './types';

const ProductContent = ({ content }: ProductContentProps) => {
  const parsedContend = marked(content).split(/(<h2+)/g);
  const sectionized = parsedContend
    .filter((string) => string !== '')
    .map((string) => {
      return string === '<h2'
        ? `<div style=${SectionDivider.componentStyle.rules[0]}></div>${string}`
        : string; // root rules of a styled component, media querries are not accessed
    })
    .join(' ');

  return (
    <ProductContentContainer>
      <ProductContentText>
        <div dangerouslySetInnerHTML={{ __html: marked(sectionized) }} />
      </ProductContentText>
    </ProductContentContainer>
  );
};

export default ProductContent;
