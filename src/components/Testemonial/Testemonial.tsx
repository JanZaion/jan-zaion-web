/* eslint-disable import/no-unresolved */
import { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  AuthorBox,
  AuthorText,
  Container,
  Line,
  ReferenceText,
  ReferenceTextBox,
  SlideBox,
  SlideImage,
  SlideImageBox,
  StyledSwiper,
} from './styled';
import type { TestimonialProps } from './testimonialProps';

export const Testimonial = ({ testimonials }: TestimonialProps) => {
  const sliderRef = useRef<SwiperRef>(null);

  return (
    <Container>
      <StyledSwiper
        ref={sliderRef}
        autoplay={false}
        loop
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={100}
        speed={500}
      >
        {testimonials.map((slide) => (
          <SwiperSlide key={slide.author}>
            <SlideBox>
              <SlideImageBox>
                <SlideImage
                  alt="Artist Image"
                  height={450}
                  priority
                  quality={100}
                  src={`/testimonial/${slide.image}`}
                  width={450}
                />
              </SlideImageBox>
              <div>
                <ReferenceTextBox>
                  <ReferenceText>{slide.reference}</ReferenceText>
                </ReferenceTextBox>
                <AuthorBox>
                  <Line />
                  <AuthorText>{slide.author}</AuthorText>
                </AuthorBox>
              </div>
            </SlideBox>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};
