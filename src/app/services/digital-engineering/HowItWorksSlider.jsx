"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We evaluate your current systems and identify areas for improvement.",
    iconBlue: "/images/icons/step1-blue.svg",
    iconGrey: "/images/icons/step1-grey.svg",
  },
  {
    title: "Design & Development",
    description:
      "Our team ensures a smooth transition with minimal disruption.",
    iconBlue: "/images/icons/step2-blue.svg",
    iconGrey: "/images/icons/step2-grey.svg",
  },
  {
    title: "Customized Plan Development",
    description:
      "We design a solution tailored to your business needs.",
    iconBlue: "/images/icons/step3-blue.svg",
    iconGrey: "/images/icons/step3-grey.svg",
  },
  {
    title: "Ongoing Monitoring & Support",
    description:
      "With continuous oversight and 24/7 support, we keep your systems optimized.",
    iconBlue: "/images/icons/step4-blue.svg",
    iconGrey: "/images/icons/step4-grey.svg",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => {
    if (active < steps.length - 1) setActive((prev) => prev + 1);
  };

  const prev = () => {
    if (active > 0) setActive((prev) => prev - 1);
  };

  const translateValue = isMobile ? active * 100 : active * 25;

  const getOpacity = (index) => {
    const distance = Math.abs(index - active);
    if (distance === 0) return 1;
    if (distance === 1) return 0.4;
    if (distance === 2) return 0.2;
    return 0;
  };

  return (
    <section className="bg-[#f6f6f6] py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-lg md:text-5xl font-semibold text-primaryText mb-10 md:mb-16">
          How It Works
        </h2>

        {/* Fixed Base line - Does NOT move */}
        <div className="relative mb-8 md:mb-12">
          {/* Step Header - Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${translateValue}%)`,
              }}
            >
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`${
                    isMobile ? 'w-full min-w-[100%]' : 'w-1/4 min-w-[25%]'
                  } uppercase text-xs md:text-sm tracking-wide`}
                >
                  <div
                    className={`transition-all duration-300 ${
                      index === active
                        ? "text-primaryText font-semibold"
                        : "text-gray-400"
                    }`}
                    style={{
                      opacity: getOpacity(index)
                    }}
                  >
                    STEP {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Base line */}
          <div className="h-[2px] bg-gray-300 mt-4 relative">
            <div
              className="absolute top-0 h-[2px] bg-[#0F72B1] transition-all duration-500 ease-in-out"
              style={{
                width: isMobile ? `${100}%` : `${100 / steps.length}%`,
                left: 0,
              }}
            />
          </div>
        </div>

        {/* Sliding Body */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateValue}%)`,
            }}
          >
            {steps.map((step, index) => {
              const isActive = index === active;
              const opacity = getOpacity(index);

              return (
                <div
                  key={index}
                  className={`${
                    isMobile ? 'w-full min-w-[100%]' : 'w-1/4 min-w-[25%]'
                  } transition-opacity duration-500`}
                  style={{
                    opacity: opacity
                  }}
                >
                  <img
                    src={isActive ? step.iconBlue : step.iconGrey}
                    alt={step.title}
                    className="w-12 h-12 mb-4 md:mb-6"
                  />

                  <h3
                    className={`text-base md:text-lg font-semibold mb-3 md:mb-2 text-primaryText`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-sm md:text-base leading-relaxed md:pr-14 text-primaryText`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-3 md:gap-4 mt-8 md:mt-14">
          <button
            onClick={prev}
            disabled={active === 0}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition cursor-pointer ${
              active === 0
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-[#0F72B1]"
            }`}
          >
            <img src="/images/arrow-left.png" className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={next}
            disabled={active === steps.length - 1}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition cursor-pointer ${
              active === steps.length - 1
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-[#0F72B1]"
            }`}
          >
            <img src="/images/arrow-right.png" className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}