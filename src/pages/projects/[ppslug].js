import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image'; //Image from next is not supposed to work or something, look into it if true
import { Layout } from '../../layout/Layout';
import ProductHero from '../../components/ProductHero/ProductHero';
import Sticky from '../../components/Sticky/Sticky';

export default function DocuPage({
  frontmatter: {
    title,
    tag_line,
    cover_image,
    repo,
    download,
    documentation_slug,
    price,
    requirements,
    demo_video,
    testemonial,
  },
  content,
}) {
  return (
    <Layout>
      <ProductHero title={title} tag_line={tag_line} cover_image={cover_image} />
      <Sticky title={title} repo={repo} download={download} />

      <div className="product-md">
        {/* <Section_Parser content={content} inner={'md-content'} outer={'alternate'} /> */}
        <p>{content}</p>
        {/* <Documentation documentation_slug={documentation_slug} title={title} /> */}
      </div>
      <div className="seal-deal-strip">
        <div className="seal-deal">
          {/* <Buy price={price} cssClass={'price-tag-main'} /> */}
          <div className="requirements">
            <h3>Requirements:</h3>
            {/* <Conditional_List list={requirements} /> */}
          </div>
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
