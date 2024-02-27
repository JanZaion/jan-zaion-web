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
  NavigationButton,
  NextIconImage,
  PrevIconImage,
  ReferenceText,
  ReferenceTextBox,
  SlideBox,
  SlideImage,
  SlideImageBox,
  StyledSwiper,
} from './styled';

type TestimonialArray = {
  image: string;
  reference: string;
  author: string;
};

export const Testimonial = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const testimonialArray: TestimonialArray[] = [
    {
      image: 'chase&status.jpg',
      reference:
        "“Chordprinter help us make Badadan. It's extemely powerfull tool.You got ideas in seconds!!!”",
      author: 'Chase and Status',
    },
    {
      image: 'balron.jpg',
      reference:
        "“I've always liked neurofunk, but Chordprinter opened my eyes and I started producing liquidfunk.”",
      author: 'Balron',
    },
    {
      image: 'morebeat.jpg',
      reference:
        '“With Chordprinter, I finish tracks half a year earlier. This is absolutely amazing!!!”',
      author: 'Morebeat',
    },
    {
      image: 'subfocus.jpeg',
      reference:
        "“Since I released Solar System, I've been having trouble finding a good idea. Chordprinter solved this problem for me.”",
      author: 'Sub Focus',
    },
    {
      image: 'skrillex.jpeg',
      reference: "“I've always missed a plugin like Chordprinter in Ableton.”",
      author: 'Skrillex',
    },
  ];

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <Container>
      <NavigationButton onClick={handlePrev} type="button">
        <PrevIconImage
          alt="Arrow"
          height={40}
          priority
          quality={10}
          src="./arrow.svg"
          width={40}
        />
      </NavigationButton>

      <StyledSwiper
        ref={sliderRef}
        autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
        loop
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={100}
        speed={500}
      >
        {testimonialArray.map((slide) => (
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

      <div className="next">
        <NavigationButton onClick={handleNext} type="button">
          <NextIconImage
            alt="Arrow"
            height={40}
            priority
            quality={10}
            src="./arrow.svg"
            width={40}
          />
        </NavigationButton>
      </div>
    </Container>
  );
};
