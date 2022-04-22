import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 1040px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding-top: 2.5rem;
  padding-left: 48px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px 16px 0;
    grid-template-columns: repeat(2, 0fr);
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 1 / 2 / 5;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: flex-start;

  /* @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
  } */

  @media ${(props) => props.theme.breakpoints.sm} {
    /* padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')}; */
    padding: 0;
    grid-area: 2 / 1 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: block;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    /* grid-area: 1 / 4 / 2 / 6; */
    grid-area: 1 / 1 / 1 / 1;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  /* @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  } */
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  padding-left: 0px;
  &:hover {
    padding-left: 8px;
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
