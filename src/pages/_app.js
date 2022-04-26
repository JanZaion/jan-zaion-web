import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const { metaTitle, metaDescription, metaKeywords } = pageProps.head;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
