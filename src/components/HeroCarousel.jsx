"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Digital Acceleration",
    description:
      "Outcome-driven digital acceleration designed to modernize your core and deliver real business impact—without disruption.",
    image: "/images/homeCarousel1.png",
    link: "/services/digital-acceleration",
  },
  {
    title: "Data Analytics",
    description:
      "From data engineering to advanced analytics, we deliver end-to-end solutions that empower your teams to make faster, smarter, and more confident decisions.",
    image: "/images/homeCarousel2.png",
    link: "/services/data-analytics",
  },
  {
    title: "Platforms",
    description:
      "We enable organizations to optimize and extend their platform investments — improving efficiency, enhancing user experience, and delivering consistent performance at scale.",
    image: "/images/homeCarousel3.png",
    link: "/services/enterprise-platforms",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const router = useRouter();
  const sectionRef = useRef(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    
    window.scrollTo({
      top: viewportHeight - 50,
      behavior: 'smooth'
    });
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative md:block h-[85vh] overflow-hidden text-left"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container m-10 md:m-20 px-6 md:px-12 text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg mb-6 text-white">
                {slide.description}
              </p>
              <button
                onClick={() => router.push(slide.link)}
                className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
                style={{cursor: "pointer"}}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-14 left-16 md:left-30 z-20 flex items-center mb-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[2px] transition-all duration-300 ${
            index === current
                ? "md:w-24 w-14 bg-white"
                : "md:w-26 w-16 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hidden absolute bottom-14 right-24 md:flex gap-3 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div 
        className="max-sm:block hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to next section"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToNextSection();
          }
        }}
      >
        <img
          src="/images/downArrow.svg"
          alt="Scroll down"
          className="w-6 h-6"
        />
      </div>
    </section>
  );
}