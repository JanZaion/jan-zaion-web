import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image'; //Image from next is not supposed to work or something, look into it if true
import { Layout } from '../../layout/Layout';

export default function DocuPage({
  frontmatter: { title, tag_line, cover_image, documentation_slug, price, requirements, demo_video, testemonial },
  content,
}) {
  return (
    <Layout>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{tag_line}</p>
        </div>
        <div>
          {/* <Image src={cover_image} alt="" width="1000" height="347" /> */}
          <p>img placeholder</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
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
}

export async function getStaticProps({ params: { ppslug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('src/mds', ppslug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      ppslug,
      content,
    },
  };
}
