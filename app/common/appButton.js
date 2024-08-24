import React from 'react'

const AppButton = (prop) => {
  return (
    <div className={prop.flex}>
      <button 
      className='md:w-[80%] w-full rounded-md bg-primary px-4 py-2 text-white'
      >
        {prop.text}
      </button>
    </div>
  )
}

export default AppButton
