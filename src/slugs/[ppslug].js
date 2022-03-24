import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image'; //Image from next is not supposed to work or something, look into it if true
import Buy from '../../components/Buy';
import Documentation from '../../components/Documentation';
import Demo_Video from '../../components/Demo_Video';
import Section_Parser from '../../components/Section_Parser';
import Conditional_List from '../../components/Conditional_List';

export default function DocuPage({
  frontmatter: { title, tag_line, cover_image, documentation_slug, price, requirements, demo_video, testemonial },
  content,
}) {
  return (
    <>
      <div className="product-hero">
        <div className="heroic-title">
          <h1>{title}</h1>
          <p>{tag_line}</p>
        </div>
        {/* for the image, figure out a way to stretch it based on the size of the img */}
        <div className="hero-img">
          <Image src={cover_image} alt="" width="1000" height="347" />
        </div>
      </div>
      <div className="product-sticky">
        <div className="sticky-title">
          <h2>{title}</h2>
        </div>
        <Buy price={price} cssClass={'price-tag'} />
      </div>
      <div className="product-md">
        <Section_Parser content={content} inner={'md-content'} outer={'alternate'} />
        <Documentation documentation_slug={documentation_slug} title={title} />
      </div>
      <Demo_Video demo_video={demo_video} />
      <div className="seal-deal-strip">
        <div className="seal-deal">
          <Buy price={price} cssClass={'price-tag-main'} />
          <div className="requirements">
            <h3>Requirements:</h3>
            <Conditional_List list={requirements} />
          </div>
        </div>
      </div>
      <Conditional_List list={testemonial} cssClass={'testemonial'} />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('./mds/ppmds/'));

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
  const markdownWithMeta = fs.readFileSync(path.join('./mds/ppmds/', ppslug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      ppslug,
      content,
    },
  };
}
