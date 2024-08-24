import React from 'react'
import { resume2, resume_ } from '../icons/icons'

const Experience = () => {
    const experience =[
        {
            language:'React Js Deveoper',
            year:'2017 - 2021',
            institute:"Hashloops Technologies",
            desc:"Experienced MERN stack developer adept at crafting responsive web applications, dedicated to continuous learning and delivering top-notch software solutions for Pendandweb and its clients through collaboration and innovation."
        },
        {
            language:'React Js Deveoper',
            year:'Nov 2021 - Nov 2022',
            institute:"Penandweb",
            desc:"Experienced React JS developer proficient in crafting innovative web applications, dedicated to cross-functional teamwork, delivering scalable and maintainable code, and staying current with cutting-edge technologies and best practices."
        },
    ]
  return (
    <div className=''>
    
    <div className='relative mt-4 '>
      <div className='absolute -left-12 top-0 bottom-0 w-[1px]   bg-white'></div>
      <div className='flex flex-row gap-3 items-center md:ps-4'>
      <img src={resume_.src} alt='resume' width={40} height={40} />
      <h4 className='plusJakara_bold text-2xl text-white'>Experience</h4>
    </div>
      {
        experience?.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-2 md:ml-6 relative">
          
            <div className="absolute -left-[70px] top-12 transform -translate-x-2.5 w-5 h-5 bg-aqua rounded-full"></div>
            <h6 className="font-semibold text-aqua text-xl m-0 mt-11">
              {item?.language}
            </h6>   
            <div className="text-gray-300 text-sm">
              {item?.year}
            </div>
            <div className="text-aqua plusJakara_bold">
              {item?.institute}
            </div>
            <p className='text-white'>
              {item?.desc}
            </p>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Experience
