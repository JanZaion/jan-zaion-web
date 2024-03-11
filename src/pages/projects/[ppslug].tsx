/* eslint-disable react/jsx-no-useless-fragment */
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import Head from 'next/head';

import ProductContent from '../../components/ProductContent/ProductContent';
import ProductHero from '../../components/ProductHero/ProductHero';
import Sticky from '../../components/Sticky/Sticky';
import { Testimonial } from '../../components/Testemonial/Testemonial';
import { Layout } from '../../layout/Layout';
import type { DocuPageProps, HeadT } from '../../types/ppslugTypes';

const DocuPage = ({
  frontmatter: { title, tagLine, coverImage, repo, download, testimonials },
  content,
  head,
}: DocuPageProps) => {
  return (
    <>
      <Head>
        <title>{head.metaTitle}</title>
        <meta content={head.metaDescription} name="description" />
      </Head>
      <Layout>
        <ProductHero coverImage={coverImage} tagLine={tagLine} title={title} />
        <Sticky download={download} repo={repo} />
        {testimonials ? <Testimonial testimonials={testimonials} /> : <></>}
        <ProductContent content={content} />
        <Sticky download={download} repo={repo} />
      </Layout>
    </>
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

export const getStaticProps = ({
  params: { ppslug },
}: {
  params: { ppslug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/mds', `${ppslug}.md`),
    'utf8',
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const { metaTitle, metaDescription } = frontmatter as HeadT;
  const head = { metaTitle, metaDescription };

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
