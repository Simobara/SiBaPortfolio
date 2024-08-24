
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import BannerCard from './bannerCard';
import { blur_, slider1, slider2 } from '@/app/icons/icons';

const  Carousel_ = () => {
  const images = [slider1.src, slider2.src]
  return (
    <>
      <div className='bg-gray 2xl:container grid mx-auto'>
          <Swiper
            className="mySwiper w-full p-0 m-0"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            modules={[Autoplay, EffectFade]}
          >
            {images?.map((item, index) => {
              return (

                <SwiperSlide key={index}>
                  <div className="relative">
                    <img src={item} className="h-[600px]  w-full object-cover z-30" />
                    <div className="absolute md:top-[150px] sm:bottom-[30px]   md:left-[163px] sm:left-[40px] left-[10px] bottom-[30px] block   " style={{ zIndex: "99" }} >
                      <BannerCard />
                    </div>
                    <div className='blur_smoke absolute z-50'>

                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className='blur md:h-[8rem] h-[3rem]' style={{ zIndex: "9999", background: '#C1F5FF', top: '17rem', width: ' 100%', left: '-16rem' }}>

          </div>
        </div>


    </>

  );
};

export default Carousel_;

