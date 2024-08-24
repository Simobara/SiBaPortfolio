
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { greater, icon, icon1, icon2, icon3, icon4, icon5, image2, lesser, slider1, star } from '@/app/icons/icons';
import { Star } from 'react-feather';
const Reviews = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const stars = [star.src, star.src, star.src, star.src]
  // Sample initial data
  const initialSlides = [
    {
      name: 'Erik Prati',
      date: "03/27/2023",
      para: "Good morning, this is already the second time I have gone to Doctor Milena Gabellini for a nail problem in particular and I must say that I am very satisfied with her work, so I am already in the process of booking"
    },
    {
      name: 'Pietro Gagliano',
      date: "03/15/2023",
      para: "I went to Milena limping, within a few sessions she restored my feet as if she had given me wings and I will always be grateful to her.Piero"
    },
    {
      name: 'PAOLA RIGHINI',
      date: "07/03/2023",
      para: "I consider Dr. Gabellini to be a great professional. In addition to being very competent in the branch of medicine such as podiatry, she has a sweetness and friendliness capable"
    },
    {
      name: 'Pietro Gagliano',
      date: "03/15/2023",
      para: "I went to Milena limping, within a few sessions she restored my feet as if she had given me wings and I will always be grateful to her.Piero"
    },
    {
      name: 'PAOLA RIGHINI',
      date: "07/03/2023",
      para: "I consider Dr. Gabellini to be a great professional. In addition to being very competent in the branch of medicine such as podiatry, she has a sweetness and friendliness capable"
    },

    // Add more initial slides as needed
  ];

  const [slides, setSlides] = useState(initialSlides);


  return (
    <main className='2xl:container flex mx-auto'>

      <div className='w-full relative lg:px-44  px-8  py-16'>
        <div className='text-center pb-16'>
          <p className='plusJakara_bold text-primary text-4xl'>Your <span className='plusJakara_bold text-secondary'>reviews</span></p>
        </div>
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

          spaceBetween={10}
          virtual
          breakpoints={{
            // when window width is >= 640px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            625: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            870: {
              slidesPerView: 3,
            },
          }}
        >
          {slides?.map((slideContent, index) => (
            <SwiperSlide key={`slide-${index}`} virtualIndex={index}>
              <div className="card  relative  pt-6 pb-14 px-9 rounded-xl h-[300px]  bg-[#F8F9F9]">
                <div className='flex flex-col items-center'>
                  <div>

                    <h5 className='plusJakara_bold fs m-0'>
                      {slideContent?.name}
                    </h5>
                    <div className='absolute top-7 right-3'>

                      <img width="21px" src={icon.src} />
                    </div>

                  </div>

                  <p className='text-black opacity-90 fs mt-0 p-0'> {slideContent?.date}</p>
                  <div className='flex  py-4'>
                    {
                      stars?.map((item, index) => {
                        return (
                          <div key={index}>
                            <img width="21px" src={item} />
                          </div>
                        )
                      })
                    }






                  </div>
                  <p className='text-center text-gray-500 fs'>
                    <ReadMoreText text={slideContent?.para} />

                  </p>

                </div>


              </div>
            </SwiperSlide>
          ))}
          <div ref={prevRef} className="custom-swiper-button-prev_review ">
            {/* <FaLessThan style={{fontWeight:"lighter"}}/> */}
            <img width='17px' src={lesser.src} />

          </div>
          <div ref={nextRef} className="custom-swiper-button-next_review   ">
            <img width='17px' src={greater.src} />


          </div>
        </Swiper>
        <div className='h-[10px] rounded-lg bg-gray-300 mt-4 mx-auto  w-[10px]'>

        </div>
        <p className='plusJakara_regular text-sm text-center pt-5'>
          Overall <span className='plusJakara_bold'>
            Google rating 5
          </span>  out of 5,based on <span className='plusJakara_bold'>53 ratings</span>
        </p>
      </div>
    </main>
  );
};
const ReadMoreText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = text?.length > 100 ? text.substring(0, 100) + '...' : text;

  return (
    <div className='text-center fs'>
      <p className='plusJakara_medium'>{isExpanded ? text : truncatedText}</p>
      {text?.length > 100 && (
        <button onClick={toggleReadMore} className='text-gray-400 mt-1 plusJakara_light'>
          {isExpanded ? 'Hide' : 'Read more'}
        </button>
      )}
    </div>
  );
};
export default Reviews;
