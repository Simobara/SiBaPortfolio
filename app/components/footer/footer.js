import { fb1, footer, insta ,footerLogo} from '@/app/icons/icons'

import React from 'react'
import { Lock } from 'react-feather'

const Footer = () => {
  return (
    <main className=' bg-primary'>
<div className='2xl:container grid m-auto'>

    <div className=' py-16 flex flex-col items-center justify-center px-5 '>
      <img src={footerLogo.src} height={200} width={200} />
      <h4 className='plusJakara_bold text-white text-sm py-2'>
      Schedule an Appointment
      </h4>
      <div className='text-center py-2 text-white text-sm'>

      Please call me to discuss and evaluate your issue,<br/> or send me a message on WhatsApp to arrange a meeting.
      </div>
      <h2 className='plusJakara_bold  mt-2 hover:text-white contact_text'>
        +39 XXXXXXXXXX
      </h2>
      <div className='flex gap-3 justify-center py-4 '>
        <img width="14px" src={fb1.src} />
        <img width="14px" src={insta.src} />

        <img />

      </div>
      <div className='white_div container mx-auto mt-20' >

      </div>
      <div className='flex flex-wrap flex-row justify-between w-[60%] pt-20'>
        <button className="privacy_btn px-1  bg-white plusJakara_bold mx-1">
          <div className='flex  gap-1 items-center'>
            <Lock className="text-primary" size={10} />
            <p className='m-0 my-1 p-0 plusJakara_bold'>
              privacy policy
            </p>

          </div>
        </button>
        <p className='text-gray text-sm'>
          Cookie Policy
        </p>

      </div>
    </div>
</div>
    </main>
  )
}

export default Footer
