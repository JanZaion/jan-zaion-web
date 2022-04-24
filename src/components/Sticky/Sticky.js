import { StickyBar, StickyBtn } from './StickyStyles';

const Sticky = ({ repo, download }) => (
  <StickyBar sticky>
    {download ? (
      <StickyBtn href={download} target="about:blank">
        Download
      </StickyBtn>
    ) : (
      ''
    )}
    {repo ? (
      <StickyBtn href={repo} target="_blank">
        Repo
      </StickyBtn>
    ) : (
      ''
    )}
  </StickyBar>
);

export default Sticky;
