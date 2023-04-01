export type DocuPageProps = {
  frontmatter: {
    title: string;
    tagLine: string;
    coverImage: string;
    repo: URL;
    download: URL;
  };
  content: string;
  head: HeadT;
};

export type HeadT = {
  metaTitle: string;
  metaDescription: string;
};
