"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Digital Engineering",
    description:
      "Digital is not the new, but the transformation is still. Digital capabilities accelerate business growth & allow organizations to build beyond.",
    image: "/images/homeCarousel1.png",
    link: "/services/digital-engineering",
  },
  {
    title: "Data Analytics",
    description:
      "Decision making backed by sound insights is the crucial differentiator for any business success. Praval offers broader expertise on end-to-end data analytic solutions.",
    image: "/images/homeCarousel2.png",
    link: "/services/data-analytics",
  },
  {
    title: "Enterprise Platforms",
    description:
      "Globally with the emergence of new work patterns post Covid-19, it is essential for organizations to adopt and enable their workforce with the digital infrastructure.",
    image: "/images/homeCarousel3.png",
    link: "/services/enterprise-platforms",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

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

  return (
    <section className="relative md:block h-[85vh] overflow-hidden text-left">
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
              <p className="text-base md:text-lg mb-6 .text-primaryText">
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
                : "md:w-26  w-16 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hidden absolute bottom-14 right-24 md:flex gap-3 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          ›
        </button>
      </div>

      <div className="max-sm:block hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <img
          src="/images/downArrow.svg"
          alt="Scroll down"
          className="w-6 h-6"
        />
      </div>
    </section>
  );
}
