import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../themes/default';

import GlobalStyles from './globals';

const Theme = ({ children }: { children: ReactElement }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
