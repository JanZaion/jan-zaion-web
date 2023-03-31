import { StickyBar, StickyBtn } from './styled';
import type { StickyProps } from './types';

const Sticky = ({ repo, download }: StickyProps) => (
  <StickyBar sticky>
    {download && (
      <StickyBtn href={download} target="about:blank">
        Download
      </StickyBtn>
    )}
    {repo && (
      <StickyBtn href={repo} target="_blank">
        Github Repo
      </StickyBtn>
    )}
  </StickyBar>
);

export default Sticky;
