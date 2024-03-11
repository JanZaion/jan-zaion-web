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
    const youtubeMatch = href.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\s/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[&?]v=)|youtu\.be\/)([\w-]{6,11})/,
    );
    if (youtubeMatch && youtubeMatch[1]) {
      return `<iframe width="592" height="349" src="https://www.youtube.com/embed/${youtubeMatch[1]}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

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
