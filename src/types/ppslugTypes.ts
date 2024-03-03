import type { Testimonials } from './testemonials';

export type DocuPageProps = {
  frontmatter: {
    title: string;
    tagLine: string;
    coverImage: string;
    repo: URL;
    download: URL;
    testimonials?: Testimonials;
  };
  content: string;
  head: HeadT;
};

export type HeadT = {
  metaTitle: string;
  metaDescription: string;
};
