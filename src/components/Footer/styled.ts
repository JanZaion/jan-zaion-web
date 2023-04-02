import styled from 'styled-components';

export const EmailContainer = styled.a`
  line-height: 30px;
  color: ${(props) => props.theme.colors.title};
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    left: 6px;
    color: ${(props) => props.theme.colors.link};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 28px;
    display: flex;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.title};
  border-radius: 50px;
  padding: 8px;

  &:hover {
    padding-left: 8px;
    transform: scale(1.2);
    background-color: ${(props) => props.theme.colors.link};
    cursor: pointer;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
`;

export const LinkList = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 0 28px;
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.h4`
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
  margin-bottom: 16px;
`;
