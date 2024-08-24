import React from 'react'
import { resume2 } from '../icons/icons'

const Education = () => {
    const education =[
        {
            degree:'Bachelor of Software Engineering',
            year:'2017 - 2021',
            institute:"National Textile University",
        },
        {
            degree:'Intermediate',
            year:'2015 - 2017',
            institute:"Punjab Group of Colleges",
            
        }
    ]
  return (
    <div className=''>
    
    <div className='relative mt-4 '>
      <div className='absolute -left-12 top-0 bottom-0 w-[1px]   bg-white'></div>
      <div className='flex flex-row gap-3 items-center md:ps-4 '>
      <img src={resume2.src} alt='resume' width={44} height={44} />
      <h4 className='plusJakara_bold text-2xl text-white '>Education</h4>
    </div>
      {
        education?.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-2 md:ml-6 relative">
          
            <div className="absolute -left-[70px] top-12 transform -translate-x-2.5 w-5 h-5 bg-aqua rounded-full"></div>
            <h6 className="font-semibold text-aqua text-xl m-0 mt-11">
              {item?.degree}
            </h6>   
            <div className="text-gray-300 text-sm">
              {item?.year}
            </div>
            <div className="text-white">
              {item?.institute}
            </div>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Education
