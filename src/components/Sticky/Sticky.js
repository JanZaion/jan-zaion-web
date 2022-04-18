import { StickyBar, StickyBtn, BtnCont } from './StickyStyles';

const Sticky = ({ repo, download, sticky }) => (
  <StickyBar sticky>
    <BtnCont>
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
    </BtnCont>
  </StickyBar>
);

export default Sticky;
