import styled from 'styled-components';

export const EmailContainer = styled.a`
  color: ${(props) => props.theme.colors.title};
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    left: 6px;
    color: ${(props) => props.theme.colors.link};
  }

  @media ${(props) => props.theme.breakpoints.md} {
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
  /* border-top: 1px solid rgba(255, 255, 255, 0.1); */

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${(props) => props.theme.colors.layoutLine};

  padding: 40px 0 28px;
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.div`
  font-size: ${(props) => props.theme.typography.title5.fontSize};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
  margin-bottom: 16px;
`;
