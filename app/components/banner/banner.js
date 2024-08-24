// src/app/components/Banner.js
import React, { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  divider,
  divider_,
  home,
  intro,
  slider1,
  texture,
} from "@/app/icons/icons";
import ImageSwiper from "@/app/common/imageSwiper";
import Image from "next/image";
import PodiatristSwiper from "@/app/common/podiatristSwiper";
import App from "next/app";
import AppButton from "@/app/common/appButton";
import Accordion from "@/app/common/accordion";
import { MapPin, Phone, Star, User } from "react-feather";
import LocationForm from "@/app/common/locationForm";
import ContactSection from "@/app/common/contactSection";
import Reviews from "@/app/common/reviews";
import Carousel_ from "@/app/common/carousel";
import WhyMe from "@/app/common/whyMe";
import AppBorder from "@/app/common/appBorder";
import Education from "@/app/common/education";
import Experience from "@/app/common/experience_";
import Skills from "@/app/common/skills";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensure animations trigger on both scroll down and up
      offset: 120, // Offset to trigger the animation when elements come into view
      easing: "ease-in-out", // Easing function to smooth the animation
      mirror: true, // Repeat animations when scrolling back up
    });
  }, []);
  const accordionData = [
    {
      count: "1",
      head: "What technologies do you specialize in?",
      para: "I specialize in modern web development technologies including React, Node.js, and TypeScript. I also have experience with database management using MySQL and ORM tools like Prisma.",
    },
    {
      count: "2",
      head: "Can you build custom web applications?",
      para: "Absolutely! I can build custom web applications tailored to your specific needs. From front-end design to back-end development, I ensure the application is robust and scalable.",
    },
    {
      count: "3",
      head: "How do you ensure code quality?",
      para: "I follow best practices in software development, including writing clean, maintainable code and implementing thorough testing. I also perform regular code reviews and refactoring to improve code quality.",
    },
    {
      count: "4",
      head: "Do you offer maintenance and support?",
      para: "Yes, I offer ongoing maintenance and support for the projects I develop. This includes fixing bugs, adding new features, and ensuring the application runs smoothly over time.",
    },
    {
      count: "5",
      head: "What is your approach to project management?",
      para: "I use agile methodologies to manage projects effectively. This allows for flexibility, continuous improvement, and collaboration with clients to ensure their requirements are met and the project is delivered on time.",
    },
  ];

  const { src } = slider1;
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (accordionNumber) => {
    setOpenAccordion(
      openAccordion === accordionNumber ? null : accordionNumber
    );
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/cv/file-sample_150kB.pdf"; // Correct path to the PDF file
    link.download = "symon.pdf"; // Desired download name
    link.click();
  };
  

  return (
    <>
      <div className="gradient-border bg-gray relative"></div>
      <Element name="what_i_do">
        <div
          data-aos="fade-up"
          className="our_priority bg-aqua py-12 lg:px-44 md:px-36 px-8"
        >
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <AppBorder bgprimary="bg-primary" />
              <div className="py-3">
                <div className="plusJakara_bold text-primary m-0 p-0 md:text-5xl text-3xl md:leading-[80px] sm:leading-[40px]">
                  Bringing Your Ideas
                </div>
                <div className="plusJakara_bold text-secondary m-0 p-0 text-center md:text-5xl text-3xl">
                  to Life
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-2 lg:justify-center md:items-center">
              <div className="plusJakara_bold text-primary lg:pt-16 pt-5 lg:text-start text-center">
                <p
                  data-aos="fade-right"
                  className="plusJakara_bold text-primary text-base md:text-2xl lg:max-w-[27rem]"
                >
                  As a software developer, I create solutions that solve
                  real-world problems.
                </p>
                <p
                  data-aos="fade-right"
                  className="text-secondary pt-6 lg:max-w-[24rem]"
                  style={{ lineHeight: "25px" }}
                >
                  My goal is to deliver high-quality software that meets your
                  needs and exceeds your expectations.
                </p>
              </div>
              <div className="" data-aos="fade-left">
                <section className="lg:mt-20 mt-5 max-w-[35rem]">
                  <p className="lg:pl-6 text-secondary">My services include:</p>
                  <ul className="list-disc lg:pl-6 space-y-1">
                    <li className="text-secondary">
                      Custom web application development.
                    </li>
                    <li className="text-secondary">
                      Database design and management.
                    </li>
                    <li className="text-secondary">
                      API development and integration.
                    </li>
                    <li className="text-secondary">Maintenance and support.</li>
                    <li className="text-secondary">
                      Consulting and project management.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <div className="bg-aqua py-6">
        <div className="white_div container mx-auto"></div>
      </div>
      <div className="contact_section py-16 bg-aqua flex flex-col lg:flex-row lg:justify-center gap-9 items-center ">
        <div className="lg:text-start text-center">
          <h2
            data-aos="fade-right"
            className="plusJakara_bold text-primary md:text-4xl sm:text-xl mt-2"
          >
            +39 351 515 0689
          </h2>
        </div>
        <div className="md:w-96 w-full mt-6 lg:mt-0 px-28">
          <h4
            data-aos="fade-left"
            className="text-primary plusJakara_bold font-extrabold lg:text-start text-center"
          >
            Contact Me
          </h4>
          <p
            data-aos="fade-left"
            className="text-secondary text-sm py-3 lg:w-[22rem] w-auto lg:text-start text-center"
          >
            Reach out to discuss your project requirements and see how I can
            help bring your ideas to life.
          </p>
        </div>
      </div>
      <div className="bg_fixed h-100 position-relative">
        <div
          className="position-relative py-5 d-flex align-items-center justify-content-center h-100"
          style={{ zIndex: "100" }}
        ></div>
        <div className="bg-overlay"></div>
      </div>
      <section className="bg-primary pb-16">
        <div className="relative 2xl:container grid mx-auto">
          <ImageSwiper />
        </div>
      </section>
      <section className="Podiatrist_section bg-primary px-8 pb-28">
        <div data-aos="fade-up" className="relative w-full">
          <div className="flex flex-col items-center gap-6">
            <AppBorder />
            <h2 className="text-white text-center plusJakara_bold pb-14 pt-4">
              Why Choose Me:
            </h2>
          </div>
          <div className="container mx-auto">
            <PodiatristSwiper />
          </div>
        </div>
      </section>
      <Element name="introduce">
        <section
          data-aos="fade-up"
          className="introductory_section bg-white flex flex-col justify-center items-center h-auto pb-24"
        >
          <h3 className="text-primary plusJakara_bold pt-20 m-0 px-8 md:text-start text-center">
            About Me:
          </h3>
          <h3 className="text-secondary plusJakara_bold py-5 m-0 px-8 md:text-start text-center">
            I'm Symon, a Passionate Software Developer
          </h3>
          <div className="flex md:flex-row flex-col justify-center items-center gap-12 mt-12 px-8">
            <div data-aos="fade-left">
              <img className="md:w-[500px] w-[200px]" src={intro.src} />
            </div>
            <div data-aos="fade-right" className="md:w-[35rem]">
              <div className="md:text-sm text-secondary text-md md:w-[30rem]">
                With a strong background in computer science and a dedication to
                continuous learning,
                <span className="plusJakara_bold text-secondary">
                  I have developed a wide range of skills in software
                  development.
                </span>
              </div>
              <div className="md:text-sm text-secondary text-md md:w-[30rem] mt-5">
                My experience spans from front-end development using modern
                frameworks to back-end architecture and database management.
              </div>
              <div className="md:text-sm text-secondary text-md md:w-[30rem] mt-5">
                As a professional, I aim to establish a{" "}
                <span className="plusJakara_bold text-secondary">
                  relationship of trust and collaboration with my clients
                </span>{" "}
                to ensure their vision is realized effectively.
              </div>
              <div className="plusJakara_bold md:text-sm text-md mt-5 md:w-[28rem] text-secondary">
                By choosing to work with me, you can expect a high level of
                commitment and a tailored approach to meet your specific needs.
              </div>
              {/* <img src="../assets/png/bg_fixed.jpg"></img> */}
              <div className="pt-16" onClick={handleDownloadPDF}>
                <AppButton text="Download CV" />
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element data-aos="fade-up" name="skills">
        <section className="px-8 bg-aqua pt-14 ">
          <Skills />
        </section>
      </Element>
      <section data-aos="fade-up" id="why_me ">
        <WhyMe />
      </section>
      <Element name="resume" className="">
        <section className=" bg-primary md:pb-10 px-8 ">
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-white plusJakara_medium text-4xl resume_ pt-20  ">
              Resume
            </h5>
            <AppBorder />
          </div>
          <div className="flex justify-center items-center py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:w-[56rem] w-auto">
              <div data-aos="fade-right" className="">
                <Education />
              </div>
              <div data-aos="fade-left">
                <Experience />
              </div>
            </div>
          </div>
          <Element  data-aos="fade-down" name="faq">
            <div className="relative w-full">
              <div className="pt-12 lg:w-[62rem] w-auto mx-auto justify-center md:pb-0 pb-5">
                <AppBorder />
                <h4 className="my-4 plusJakara_bold text-white">FAQ</h4>
                <div className="flex flex-col container mx-auto border-l-2 border-solid border-white pl-10">
                  {accordionData.map((item) => (
                    <Accordion
                      key={item.count}
                      isOpen={openAccordion === item.count}
                      onToggle={handleAccordionToggle}
                      count={item.count}
                      head={item.head}
                      para={item.para}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Element>
        </section>
      </Element>
      <section  data-aos="fade-up" className="bg-aqua flex justify-center p-8">
        <ContactSection />
      </section>
      <section data-aos="fade-up" id="section" className="reviewBg">
        <Reviews />
      </section>
    </>
  );
};

export default Banner;
