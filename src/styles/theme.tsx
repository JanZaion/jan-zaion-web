import type { ReactElement } from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../themes/dark';
import light from '../themes/light';

import GlobalStyles from './globals';

const Theme = ({ children }: { children: ReactElement }) => {
  const [isLight, setIsLight] = useState(false);

  const themeSwitcher = () => setIsLight((p) => !p);
  light.themeSwitcher = themeSwitcher;
  dark.themeSwitcher = themeSwitcher;

  return (
    <ThemeProvider theme={isLight ? light : dark}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
