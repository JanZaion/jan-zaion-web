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

export const SlideBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  gap: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
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
