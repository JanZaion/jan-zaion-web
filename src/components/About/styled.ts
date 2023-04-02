import styled from 'styled-components';

import { SectionText } from '../GlobalComponents/GlobalComponents';

export const AboutText = styled(SectionText)`
  font-size: ${(props) => props.theme.typography.article.fontSize};
`;
