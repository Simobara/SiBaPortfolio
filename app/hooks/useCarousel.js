import { useState, useEffect } from 'react';
const useCarousel = (intervalTime = 3000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
    const interval = setInterval(nextSlide, intervalTime); 
    return () => {
      clearInterval(interval);
    };
  }, [intervalTime]);

  return currentSlide;
};
export default useCarousel;
