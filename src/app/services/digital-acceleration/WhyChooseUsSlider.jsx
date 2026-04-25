"use client";

import { useState } from "react";

const slides = [
  {
    title: "Industry Expertise",
    text:
      "Our team consists of seasoned professionals with deep industry knowledge and hands-on experience in driving successful digital acceleration across various sectors.",
    icon: "/images/icons/expertise.svg",
  },
  {
    title: "Client-Centric Approach",
    text:
      "We prioritize understanding your unique challenges, goals, and culture to deliver tailored solutions that address your specific needs and drive measurable results.",
    icon: "/images/icons/client.svg",
  },
  {
    title: "Proven Methodologies",
    text:
      "We follow industry-leading frameworks and best practices in digital acceleration, ensuring a structured and effective approach to achieving your desired outcomes.",
    icon: "/images/icons/methodology.svg",
  },
  {
    title: "Collaborative Partnership",
    text:
      "Our team works closely with you as an extension of your organization to ensure transparency, agility, and long-term success.",
    icon: "/images/icons/collaboration.svg",
  },
];

export default function WhyChooseUsSlider() {
  const [active, setActive] = useState(0);

  const next = () => {
    if (active < slides.length - 1) setActive(active + 1);
  };

  const prev = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-lg md:text-4xl font-semibold text-primaryText mb-6 md:mb-12">
          Why Choose Us?
        </h2>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-[45%_55%] gap-10 items-center relative">
          {/* LEFT IMAGE */}
          <div className="relative h-[460px] overflow-hidden">
            <img
              src="/images/why-choose-us.png"
              alt="Why choose us"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* SLIDES */}
          <div className="relative h-[380px] overflow-hidden -ml-84">

            {slides.map((slide, index) => {

              const offset = index - active;

              return (
                <div
                  key={index}
                  className="absolute min-h-[350px] top-0 w-[400px] bg-white rounded-xl shadow-[0px_0px_10px_0px_#1E68B21A] p-8 md:mt-6
                             transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${offset * 420}px) scale(${
                      index === active ? 1 : 1
                    })`,
                    zIndex: slides.length - index,
                    opacity: offset < -1 ? 0 : 1,
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: "#0F72B11A"}}>
                    <img src={slide.icon} alt="" className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-primaryText mb-4">
                    {slide.title}
                  </h3>

                  <p className="text-primaryText leading-relaxed">
                    {slide.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* CONTROLS BELOW SLIDER */}
          <div className="hidden md:flex justify-end mt-4 gap-4">
            <button
              onClick={prev}
              disabled={active === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                ${
                  active === 0
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-[#0F72B1] text-white"
                }`}
            >
             <img
                src="/images/arrow-left.png"
                alt="Previous slide"
                className="w-5 h-5"
              />
            </button>

            <button
              onClick={next}
              disabled={active === slides.length - 2}
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                ${
                  active === slides.length - 2
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-[#0F72B1] text-white"
                }`}
            >
              <img
                src="/images/arrow-right.png"
                alt="Next slide"
                className="w-5 h-5"
              />
            </button>
          </div>


        {/* MOBILE */}
        <div className="md:hidden space-y-10">
          {slides.map((slide, index) => (
            <div key={index}>
              <h3 className="text-base font-semibold text-primaryText mb-2">
                {slide.title}
              </h3>
              <p className="text-sm text-primaryText leading-relaxed">
                {slide.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
