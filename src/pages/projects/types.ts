export type DocuPageProps = {
  frontmatter: {
    title: string;
    tagLine: string;
    coverImage: string;
    repo: string;
    download: string;
  };
  content: string;
  head: HeadT;
};

export type HeadT = {
  metaTitle: string;
  metaDescription: string;
};
