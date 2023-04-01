import { LinkButton } from '../LinkButton/LinkButton';

import { StickyBar } from './styled';
import type { StickyProps } from './types';

const Sticky = ({ repo, download }: StickyProps) => (
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
  </StickyBar>
);

export default Sticky;
