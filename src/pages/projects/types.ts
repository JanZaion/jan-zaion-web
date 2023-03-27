export type DocuPageProps = {
  frontmatter: {
    title: string;
    tag_line: string;
    cover_image: string;
    repo: string;
    download: string;
  };
  content: string;
  head: string;
};
