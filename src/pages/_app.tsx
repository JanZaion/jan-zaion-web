import Head from 'next/head';

import Theme from '../styles/theme';

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
        <meta content={metaDescription} name="description" />
        <meta content={metaKeywords} name="keywords" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
