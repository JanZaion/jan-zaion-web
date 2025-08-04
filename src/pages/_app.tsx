// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/next';
import type { AppType } from 'next/app';
import Head from 'next/head';

import Theme from '../styles/theme';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Jan Zaion</title>
      <meta
        content="I am Jan Zaion, a TypeScript developer with passion for technology and music. Contact me if you are interested in cooperation."
        name="description"
      />
    </Head>
    <Theme>
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    </Theme>
  </>
);

export default App;
