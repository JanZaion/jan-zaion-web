import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';
import Image from 'next/image';
import Table_of_Contents from '../../components/Table_of_Contents';

export default function DocuPage({ frontmatter: { title, cover_image }, content }) {
  return (
    <>
      <div className="documentation-container">
        <div className="row">
          <div className="table-of-contents">
            <div className="table-sub">
              <h5>Table of contents</h5>
              <Table_of_Contents content={content} />
            </div>
          </div>
          <div className="documentation-body">
            <h1>{title}</h1>
            <Image src={cover_image} alt="" width="150" height="150" />
            <div>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
            <Link href="/support/">
              <a>Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('./mds/documds/'));

  const paths = files.map((filename) => ({
    params: {
      docuslug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { docuslug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('./mds/documds/', docuslug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      docuslug,
      content,
    },
  };
}
