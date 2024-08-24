import React from 'react'
import AppButton from './appButton'
import { Lock } from 'react-feather'
import { Element, animateScroll as scroll } from 'react-scroll';

const ContactSection = () => {
  return (
    <Element name="contact">

      <div className='flex flex-col items-center   '>
        <h2 className='text-primary plusJakara_bold pt-20'>
          CONTACT ME
        </h2>
        <p className='md:w-[40rem] text-center py-7 pb-16 text-sm text-secondary'>
          In case of doubt and before undertaking any therapy independently, always rely on a suitably trained professional.
        </p>
        {/* <form className=''> */}
        <input className='w-[90%] py-2 px-3' type='text' placeholder='first name' />
        <div className='flex justify-center gap-5 py-7  p w-[90%]'>
          <input className=' w-[50%] py-2 px-3' type='text' placeholder='E-mail' />
          <input className=' w-[50%] py-2 px-3' type='text' placeholder='Object' />


        </div>
        <textarea rows="7" cols="50" className='w-[90%] py-2 px-3' type='text-area' placeholder='Your message' />
        <div className='pt-9 pb-2'>

          <input type='checkbox' />

        </div>
        <div className='text-sm text-center'>

          I have read  <button className="privacy_btn px-1  bg-white plusJakara_bold mx-1">
            <div className='flex gap-1 items-baseline'>
              <Lock className="text-primary" size={10} />
              <p className='m-0 p-0 plusJakara_bold '>
                the privacy policy
              </p>

            </div>
          </button>
          and authorize the processing of personal data
        </div>
        <div className='w-full mx-auto pt-8'>

          <AppButton flex="flex justify-center" text="Send a message
"/>
        </div>
      </div>
    </Element>
  )
}

export default ContactSection
