"use-client";
import { useState } from 'react';
export default function Accordion({ head, para, count, isOpen, onToggle }) {
  const handleClick = () => {
    onToggle(count); 
  };
  return (
    <div className="py-2">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2 "
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={`accordion-text-${count}`}
        >
          <div className="flex flex-row gap-8 items-center">
            <p className="text-white text-sm plusJakara_bold mt-1">{count}</p>
            <span className="plusJakara_bold text-white text-sm">{head}</span>
          </div>
          <svg className="fill-white shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen && '!rotate-180'}`} />
           <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && '!rotate-180'}`} />
         </svg>    
        </button>
      </h2>
      <div
        id={`accordion-text-${count}`}
        role="region"
        aria-labelledby={`accordion-title-${count}`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden flex justify-center">
          <p className="md:w-[50rem] py-4 text-white" style={{ lineHeight: '25px' }}>
            {para}
          </p>
        </div>
      </div>
    </div>
  );
}
