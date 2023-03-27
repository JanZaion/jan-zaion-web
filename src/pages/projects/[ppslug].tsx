import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import ProductContent from '../../components/ProductContent/ProductContent';
import ProductHero from '../../components/ProductHero/ProductHero';
import Sticky from '../../components/Sticky/Sticky';
import { Layout } from '../../layout/Layout';

const DocuPage = ({
  frontmatter: { title, tag_line, cover_image, repo, download },
  content,
  head,
}) => {
  return (
    <Layout>
      <ProductHero
        cover_image={cover_image}
        tag_line={tag_line}
        title={title}
      />
      <Sticky download={download} repo={repo} sticky />
      <ProductContent content={content} />
      <Sticky download={download} repo={repo} />
    </Layout>
  );
};

export const getStaticPaths = () => {
  const files = fs.readdirSync(path.join('src/mds'));

  const paths = files.map((filename) => ({
    params: {
      ppslug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { ppslug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/mds', `${ppslug}.md`),
    'utf8',
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const { metaTitle, metaDescription, metaKeywords } = frontmatter;
  const head = { metaTitle, metaDescription, metaKeywords };

  return {
    props: {
      head,
      frontmatter,
      ppslug,
      content,
    },
  };
};

export default DocuPage;
