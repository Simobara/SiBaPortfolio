'use-client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Element, animateScroll as scroll } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { image1, image2, image3 } from '@/app/icons/icons';
import Image from 'next/image';
const ImageSwiper = () => {
  const images = [image1.src, image2.src, image3.src];
  return (

    <div className='-mt-5 ' >
      <Element name="gallery">
          <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          centeredSlidesBounds={true}

          modules={[Pagination]}
          className="mySwiper min-[1540px]:max-w-[90rem]  max-w-[98vw]"
        >

          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="md:h-[400px] h-[200px] object-cover"
                  style={{ width: '100%' }}
                  src={src}
                  alt={`Slide ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </Element>
    </div>
  )
}

export default ImageSwiper
