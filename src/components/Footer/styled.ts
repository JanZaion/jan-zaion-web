import styled from 'styled-components';

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    left: 6px;
    color: ${(props) => props.theme.colors.link};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }
`;

export const LinkList = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 0 28px;
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.h4`
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
  margin-bottom: 16px;
`;
