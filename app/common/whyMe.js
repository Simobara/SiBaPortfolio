import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { child1, down, upper, whyme1,whyme2,whyme3 } from '@/app/icons/icons';

const WhyMe = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    const initialSlides = [
        {
            mainImage: whyme1.src,
            childImage: child1.src,
            para: "I work closely with clients to understand their requirements and deliver tailored solutions.",
        },
        {
            mainImage: whyme2.src,
            childImage: child1.src,
            para: "I ensure regular communication and updates throughout the development process.",
        },
        {
            mainImage: whyme3.src,
            childImage: child1.src,
            para: "I provide post-launch support and maintenance to ensure your application remains effective and up-to-date.",
        },
    ];
    const [slides, setSlides] = useState(initialSlides);

    return (
        <div className='bg-aqua relative md:px-28 px-8 '>
            <div className='text-center pt-16 '>
                <p className='plusJakara_bold text-primary text-4xl'>Why <span className='plusJakara_bold text-secondary'>choose me</span></p>
            </div>
            <div className='py-11'>
                <Swiper
                    className="mySwiper flex md:flex-row flex-col items-center justify-center xl:w-[63rem] w-[100%]"
                    onSwiper={setSwiperRef}
                    slidesPerView={1}
                    pagination={{
                        type: 'fraction',
                    }}
                    centeredSlides={true}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {slides?.map((slideContent, index) => (
                        <SwiperSlide key={`slide-${index}`} virtualIndex={index}>
                            <div className=' flex lg:flex-row flex-col justify-center items-center gap-10 py-9'>
                                <div className='w-auto'>
                                    <img className='w-[100%]  xs:*:h-[330px]' src={slideContent.mainImage} alt="Slide" />
                                </div>
                                <div className='w-auto'>
                                    <div className='flex flex-col gap-3'>
                                        <img className='w-[6rem] mb-9' src={slideContent.childImage} alt="Child Image" />
                                        <p className='plusJakara_bold md:text-lg text-primary md:w-[23rem] w-auto'>{slideContent.para}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div ref={prevRef} className="custom-swiper-button-prev_why_me">
                        <img width='17px' src={upper.src} alt="Previous" />
                    </div>
                    <div ref={nextRef} className="custom-swiper-button-next_why_me">
                        <img width='26px' src={down.src} alt="Next" />
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default WhyMe;
