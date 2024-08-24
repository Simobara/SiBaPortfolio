
import { greater, icon1, icon2, icon3, icon4, icon5, lesser, whyme1, whyme2, whyme3 } from '@/app/icons/icons';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const PodiatristSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // Sample initial data
  const initialSlides = [
    { image: whyme1.src,
      content:'group of programmers and software developers working on a new project at the office.'
    },
    { image: whyme2.src,
      content:'group of programmers and software developers working on a new project at the office.'

    },
    { image: whyme3.src,
      content:'group of programmers and software developers working on a new project at the office.'

    },
    { image: whyme1.src ,
      content:'group of programmers and software developers working on a new project at the office.'

    },
    { image: whyme3.src ,
      content:'group of programmers and software developers working on a new project at the office.'

    },

    // Add more initial slides as needed
  ];
  const [slides, setSlides] = useState(initialSlides);
  return (
    <div className='w-full relative lg:px-40 px-30 '>
      <Swiper
      className='mySwiper'
        modules={[Virtual, Navigation, Pagination]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={3}
        spaceBetween={0}
        virtual
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide className='px-4' key={`slide-${index}`} virtualIndex={index}>
            <div className="flex flex-col justify-center gap-8 ">
              <img src={slideContent.image} alt={`Slide ${index + 1}`} className="h-[100px]" />
              <p className='plusJakara_light text-white'>
                {slideContent?.content}
              </p>

            </div>
          </SwiperSlide>
        ))}
        <div ref={prevRef} className="custom-swiper-button-prev ">
     <img width='17px' src={lesser.src}/>
        </div>
        <div ref={nextRef} className="custom-swiper-button-next   ">
        <img width='17px' src={greater.src}/>


        </div>
      </Swiper>
    </div>
  );
};

export default PodiatristSwiper;
