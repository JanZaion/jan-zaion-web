/* eslint-disable react/no-danger */
import { marked, Renderer } from 'marked';

import { ProductContentText } from './styled';
import type { ProductContentProps } from './types';

const ProductContent = ({ content }: ProductContentProps) => {
  const renderer = new Renderer();
  renderer.image = (href: string, title: string) => {
    return `<img src="${href}" title="${title}" alt="${title}" loading="lazy" />`;
  };

  renderer.link = (href: string, title: string, text: string) => {
    return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
  };

  const parsedContent = marked(content, { renderer });

  return (
    <article>
      <ProductContentText>
        <div dangerouslySetInnerHTML={{ __html: marked(parsedContent) }} />
      </ProductContentText>
    </article>
  );
};

export default ProductContent;
