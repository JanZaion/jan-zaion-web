import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import { Container } from './styled';
import type { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
