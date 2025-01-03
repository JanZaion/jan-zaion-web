import { LinkButton } from '../LinkButton/LinkButton';

import { StickyBar } from './styled';
import type { StickyProps } from './types';

const Sticky = ({ repo, download, visit, demo }: StickyProps) => (
  <StickyBar>
    {download && (
      <LinkButton href={download} target="_blank">
        Download
      </LinkButton>
    )}
    {repo && (
      <LinkButton href={repo} target="_blank">
        Github Repo
      </LinkButton>
    )}
    {visit && (
      <LinkButton href={visit} target="_blank">
        Visit
      </LinkButton>
    )}
    {demo && (
      <LinkButton href={demo} target="_blank">
        Demo
      </LinkButton>
    )}
  </StickyBar>
);

export default Sticky;
