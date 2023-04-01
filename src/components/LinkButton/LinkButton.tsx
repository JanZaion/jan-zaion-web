import Link from 'next/link';

import { Button } from '../Button/styled';

import type { LinkButtonProps } from './types';

export const LinkButton = ({ children, href, target }: LinkButtonProps) => (
  <Link href={href} target={target}>
    <Button type="button">{children}</Button>
  </Link>
);
