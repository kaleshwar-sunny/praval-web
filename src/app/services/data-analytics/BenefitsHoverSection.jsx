"use client";

import { useState } from "react";

const benefits = [
  {
    icon: "/images/icons/customized.svg",
    title: "Customized Strategies",
    description:
      "No cookie-cutter solutions — just tailored strategies to fit your unique goals.",
  },
  {
    icon: "/images/icons/expert.svg",
    title: "Expert Guidance",
    description:
      "Leverage the experience of seasoned consultants to accelerate success.",
  },
  {
    icon: "/images/icons/scalable.svg",
    title: "Scalable Solutions",
    description:
      "Our strategies grow with your business, ensuring long-term success.",
  },
  {
    icon: "/images/icons/roi.svg",
    title: "ROI-Focused Results",
    description:
      "Drive revenue, improve efficiency, and achieve measurable outcomes.",
  },
];

export default function BenefitsHoverSection() {
  const [activeIndex, setActiveIndex] = useState(0); // default to first

  return (
    <section
      className="relative hidden md:block py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/homeCarousel2.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#1D2833]/85"></div>

      <div className="relative container mx-auto px-6 text-white">
        <h2 className="text-4xl font-medium mb-20">
          The Benefits of Partnering with Us
        </h2>

        <div className="grid grid-cols-4 gap-10 relative">
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/20"></div>
          <div className="absolute top-0 bottom-0 left-2/4 w-px bg-white/20"></div>
          <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/20"></div>

          {benefits.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)} // fallback to first
                className="relative px-6 py-14 cursor-pointer"
              >
                <div className="relative">
                  {/* ICON */}
                <div className="relative h-32 mb-8">
                <div
                    className={`
                    absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isActive ? "left-0 translate-x-0" : "left-1/2 -translate-x-1/2"}
                    `}
                >
                    <div
                    className={`
                        rounded-full bg-white/10
                        flex items-center justify-center
                        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isActive ? "w-20 h-20" : "w-32 h-32"}
                    `}
                    >
                    <img
                        src={item.icon}
                        alt={item.title}
                        className={`
                        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isActive ? "w-8 h-8" : "w-12 h-12"}
                        `}
                    />
                    </div>
                </div>
                </div>


                  {/* TEXT */}
                  <div className="text-center transition-all duration-500">
                    {/* Default Title */}
                    <h3
                      className={`
                        text-xl font-semibold transition-all duration-500
                        ${isActive ? "opacity-0" : "opacity-100"}
                      `}
                    >
                      {item.title}
                    </h3>

                    {/* Expanded Content */}
                    <div>
                      <h3
                        className={`
                          text-xl font-semibold text-left
                          transition-all duration-500
                          ${
                            isActive
                              ? "-translate-y-20 opacity-100"
                              : "opacity-0"
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                          mt-4 text-sm leading-relaxed text-left
                          transition-all duration-500
                          ${
                            isActive
                              ? "-translate-y-20 opacity-100"
                              : "translate-y-4 opacity-0"
                          }
                        `}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}