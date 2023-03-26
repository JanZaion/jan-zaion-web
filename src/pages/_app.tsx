import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  let headData;
  pageProps.head
    ? (headData = {
        metaTitle: pageProps.head.metaTitle,
        metaDescription: pageProps.head.metaDescription,
        metaKeywords: pageProps.head.metaKeywords,
      })
    : (headData = {
        metaTitle: 'Jan Zaion',
        metaDescription:
          'I am Jan Zaion, a JavaScript developer with passion for technology and music. Contact me if you are interested in cooperation.',
        metaKeywords: 'JavaScript, React, Next, Node, Max, Max for Live',
      });

  const { metaTitle, metaDescription, metaKeywords } = headData;

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
