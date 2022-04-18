import { StickyBar, StickyBtn, BtnCont } from './StickyStyles';

const Sticky = ({ title, repo, download }) => (
  <StickyBar>
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
