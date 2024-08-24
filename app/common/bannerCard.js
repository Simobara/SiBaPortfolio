import React, { useEffect } from 'react'

import AppButton from './appButton'
import AOS from "aos";
import "aos/dist/aos.css";
const BannerCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensure animations trigger on both scroll down and up
      offset: 120, // Offset to trigger the animation when elements come into view
      easing: "ease-in-out", // Easing function to smooth the animation
      mirror: true, // Repeat animations when scrolling back up
    });
  }, []);
  return (
    
    <div data-aos="fade-right" className='card bg-white sm:px-9 sm:py-10 px-6 sm:w-[33rem] xs:w-[25rem] pt-6 pb-2 w-[22rem] sm:h-auto h-[15rem] rounded-2xl block z-50' style={{boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.15)", zIndex: '99'}}>
      <div className='flex flex-col justify-center align-center'>
        <div className='plusJakara_bold text-primary m-0 p-0 sm:text-[3rem] text-[1.5rem] sm:leading-tight leading-tight'>
          Symon
          <br/>
          <span className='text-secondary plusJakara_bold sm:text-[2rem] text-[1.5rem]'>Software Developer</span>
        </div>
        <p className='text-secondary plusJakara_medium mt-2 sm:text-[1.3rem] text-[1.2rem]'>
          Crafting code and creating solutions
          <br/>
          to bring ideas to life
        </p>
        <div>
          <button className='bg-primary text-white plusJakara_bold mt-3 sm:p-2 sm:px-8 p-1 px-4 rounded-[24px] sm:text-lg text-md'>
            Find Out More
          </button>
        </div>
      </div>
    </div>
  )
}

export default BannerCard
