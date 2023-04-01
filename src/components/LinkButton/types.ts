import type { ReactNode } from 'react';

export type LinkButtonProps = {
  children: ReactNode;
  href: URL;
  target?: '_blank' | '_self' | '_parent' | '_top';
};
