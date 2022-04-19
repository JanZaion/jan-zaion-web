import { StickyBar, StickyBtn, BtnCont } from './StickyStyles';

const Sticky = ({ repo, download, sticky }) => (
  <StickyBar sticky>
    {download ? (
      <StickyBtn href={download} target="_blank">
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
