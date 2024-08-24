"use client";
import "flowbite";
import Carousel_ from "./common/carousel";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { social } from "./icons/icons";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <Carousel_ />
      <Banner />
      <Footer />
      <div className="whatsapp-btn">
        <a href="https://wa.me/+923080415415" target="_blank">
          <img src={social.src} alt="" />
        </a>
      </div>
    </main>
  );
}
