import Image from 'next/image';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  padding: 10px;
  margin-bottom: 16px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 90%;
  max-width: 915px;
  --swiper-pagination-color: ${(props) => props.theme.colors.link};
  --swiper-pagination-bullet-inactive-color: ${(props) =>
    props.theme.colors.link};
  --swiper-navigation-top-offset: 40%;
  --swiper-pagination-top: 200px;
  --swiper-pagination-bullet-border-radius: 2px;
  --swiper-pagination-bullet-width: 40px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-left: 200px;
`;

export const NavigationButton = styled.button`
  width: 50px;
  height: 50px;
  margin-bottom: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: gray;
  opacity: 0.75;
  transition: 0.5s;
  display: none;

  &:hover {
    opacity: 1;
  }
`;

export const PrevIconImage = styled(Image)`
  rotate: 180deg;
  margin-top: 2px;
  transition: 0.5s;

  &:hover {
    margin-right: 10px;
  }
`;

export const NextIconImage = styled(Image)`
  margin-top: 2px;
  transition: 0.5s;

  &:hover {
    margin-left: 10px;
  }
`;

export const SlideBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const SlideImageBox = styled.div`
  margin: 0 auto;
`;

export const SlideImage = styled(Image)`
  border-radius: 8px;
  width: 172px;
  height: 172px;
  margin-bottom: 50px;
`;

export const ReferenceTextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ReferenceText = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-style: italic;
`;

export const AuthorBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const Line = styled.span`
  display: block;
  margin-right: 15px;
  width: 30px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.text};
`;

export const AuthorText = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

// Media queries
const media = {
  medium: '@media screen and (min-width: 768px)',
  large: '@media screen and (min-width: 1024px)',
};

// Additional styles with media queries
// Note: If you have a different structure for your media queries, you might need to adjust this part
export const StyledSlideBox = styled(SlideBox)`
  /* ${media.large} {
    grid-template-rows: 4fr 1fr;
    grid-template-columns: 200px 1fr;
    height: 200px;
    background-color: var(--color-white);
    border-radius: 8px;
    font-size: var(--fs-text-large);
  } */
`;

export const StyledSlider = styled(StyledSwiper)`
  /* ${media.large} {
    height: 255px;
    --swiper-pagination-top: 200px;
    --swiper-pagination-bullet-height: 2px;
  } */
`;

export const StyledNavigationButton = styled(NavigationButton)`
  /* ${media.large} {
    display: block;
  } */
`;

export const StyledSlideImageBox = styled(SlideImageBox)`
  /* ${media.large} {
    grid-row-start: 1;
    grid-row-end: 3;
  } */
`;

export const StyledSlideImage = styled(SlideImage)`
  /* ${media.large} {
    margin: 0;
    width: 200px;
    height: 200px;
    border-radius: 0;
  } */
`;

export const StyledAuthorBox = styled(AuthorBox)`
  /* ${media.large} {
    justify-content: flex-start;
    margin-left: 120px;
  } */
`;

export const StyledReferenceText = styled(ReferenceText)`
  /* ${media.large} {
    max-width: 600px;
  } */
`;
