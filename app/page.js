"use client";
import React from 'react';
import Header from './components/header/header';
import 'flowbite'
import Banner from './components/banner/banner';
import Carousel_ from './common/carousel';
import Footer from './components/footer/footer';
import { social } from './icons/icons';
export default function Home() {
  return (
    <main className="overflow-hidden">
    <Header/>

    <Carousel_/>
      <Banner />
      <Footer/>
      <div class="whatsapp-btn">
        <a href="https://wa.me/+923080415415" target="_blank">
           <img src={social.src} alt=""/>
        </a>
        </div>
    </main>
  );  
}
