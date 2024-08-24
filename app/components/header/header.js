
"use client";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { logo2 } from '@/app/icons/icons';

const Header = () => {
  const navbarItems = [
    { id: 1, to: "what_i_do", label: "What I do" },
    { id: 2, to: "gallery", label: "Gallery" },
    { id: 3, to: "introduce", label: "Who I am" },
    { id: 4, to: "skills", label: "Skills" },
    { id: 5, to: "resume", label: "Resume" },
    { id: 6, to: "faq", label: "FAQ" },
    { id: 7, to: "contact", label: "Contacts" },
  ];

  const [active, setActive] = useState();
  const [toggler, setToggler] = useState(false);
  const { src } = logo2;

  useEffect(() => {
    const toggler_ = document.getElementById('toggler');

    toggler_.classList.add('toggler_bg2');
    
    if (toggler) {
      const ulElements = document.getElementsByTagName('ul');
      for (let i = 0; i < ulElements.length; i++) {
        ulElements[i].classList.add('ul_bg');
      }
    
    }
    

    const handleScroll = () => {
      const element = document.getElementById('navbar');
      const uls = document.getElementsByClassName('lis_');
      const toggler_ = document.getElementById('toggler');

      if (!element || !uls || !toggler_) {
        console.error('Elements not found');
        return;
      }

      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 && !toggler) {
        const ulElements = document.getElementsByTagName('ul');
        for (let i = 0; i < ulElements.length; i++) {
          ulElements[i].classList.remove('ul_bg');
        }
        element.classList.add('nav_shadow');
        for (let i = 0; i < uls.length; i++) {
          if (window.innerWidth >= 1024 && !toggler) {
            // uls[i].classList.add('pills_uls');
            uls[i].classList.add('colors');

            uls[i].classList.remove('pills_uls2');
          } else if (toggler && active) {
            uls[i].classList.add('pills_uls2');
            uls[i].classList.remove('pills_uls');
           
          }
          // uls[i].classList.add('border_classs');
        }

        toggler_.classList.add('toggler_bg');
        toggler_.classList.remove('toggler_bg2');
      }else if( document.body.scrollTop >  200 || document.documentElement.scrollTop && toggler){
        element.classList.remove('F');

      }
       else {
        element.classList.remove('nav_shadow');
        for (let i = 0; i < uls.length; i++) {
          uls[i].classList.remove('pills_uls');
          uls[i].classList.remove('pills_uls2');
          uls[i].classList.remove('border_classs');
        }
        toggler_.classList.add('toggler_bg2');
        toggler_.classList.remove('toggler_bg');
      }
    };  
    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [active, toggler]);

  useEffect(() => {
   
    var uls = document.getElementsByClassName('lis_');
    if (active && toggler) {
      for (let i = 0; i < uls.length; i++) {
        uls[i].classList.remove('pills_uls');
        uls[i].classList.add('pills_uls2');
        uls[i].classList.remove('border_classs');
      }
    } else if (toggler && document.body.scrollTop >  200){
      
      for (let i = 0; i < uls.length; i++) {
        uls[i].classList.remove('pills_uls');
        uls[i].classList.add('pills_uls2');
        uls[i].classList.remove('border_classs');
      }
    }else if(!toggler && active){
      for (let i = 0; i <uls.length; i++) {
        console.log(uls[i],i,"index")
        uls[i].classList.remove('pills_uls2');
        uls[i].classList.add('pills_uls');
        uls[i].classList.add('border_classs');
      }
    }
    else  {
      for (let i = 0; i < uls.length; i++) {
        uls[i].classList.remove('border_classs');
      }
    }
  }, [active, toggler]);

  const handleToggle = () => {
    setToggler(!toggler);
  };

  return (
    <>
      <nav
        className="bg-primary text-white"
        id="navbar"
        style={{ position: "fixed", width: "100%", top: 0, zIndex: "999", backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <div className="md:px-36 bg-transparent">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-1 container mx-auto">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={src} className="h-14 w-14 rounded-full" alt="Logo" />
            </a>
            <button
              onClick={handleToggle}
              id="toggler"
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg xl:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              // aria-expanded={(toggler && active) ? 'false' : 'true'} 
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`w-full xl:block xl:w-auto ${toggler ? 'block' : 'hidden'}`} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 rounded-xl xl:flex-row justify-center xl:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                {navbarItems.map((item) => (
                  <li key={item.id}>
                    <Link
                    id={item?.id}
                      onClick={() => {
                        setActive(item.id);
                        setToggler(false); // Close the dropdown when an item is clicked
                      }}
                      className={`plusJakara_regular text-[14px] lis_ block cursor-pointer py-2 px-3 rounded md:bg-transparent xl:p-0 ${active === item.id ? "border_classs " : " border_classs_not"}`}
                      to={item.to}
                      smooth={true}
                      duration={500}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
