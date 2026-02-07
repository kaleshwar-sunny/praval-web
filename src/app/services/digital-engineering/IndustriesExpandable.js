"use client";
import { useState } from "react";

export default function IndustriesExpandable() {
  const [activeMobile, setActiveMobile] = useState(0);
  const [hovered, setHovered] = useState(null);

  const industries = [
    { title: "Technology", image: "/images/technologyService.png" },
    { title: "IT Services", image: "/images/itService.png" },
    { title: "Finance", image: "/images/financeService.png" },
    { title: "Retail", image: "/images/retailService.png" },
  ];

  const next = () => {
    if (activeMobile < industries.length - 1) {
      setActiveMobile(activeMobile + 1);
    }
  };

  const prev = () => {
    if (activeMobile > 0) {
      setActiveMobile(activeMobile - 1);
    }
  };

  return (
    <section className="pt-8 pb-10 md:py-12 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <h2 className="text-lg md:text-4xl font-semibold text-primaryText mb-6 md:mb-12">
          Industries We Serve
        </h2>

        {/* ================= DESKTOP ================= */}
        <div
          className="hidden md:flex justify-center gap-14 h-[520px]"
          onMouseLeave={() => setHovered(null)}
        >
          {industries.map((item, index) => {
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                className={`
                  relative rounded-xl overflow-hidden
                  transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
                  cursor-pointer
                  ${hovered === null
                    ? "w-[240px]"               
                    : isHovered
                    ? "w-[420px]"             
                    : "w-[240px]"}               
                `}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Gradient */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${isHovered
                      ? "bg-[linear-gradient(180deg,#0F72B1_-6.31%,rgba(0,0,0,0.7)_100%)]"
                      : "bg-[linear-gradient(180deg,#0F72B1_-6.31%,rgba(246,38,38,0.5)_100%)]"}
                  `}
                />

                {/* Title */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

       {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {/* Mobile Carousel */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                transform: `translateX(-${activeMobile * 100}%)`,
              }}
            >
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="w-full min-w-[100%] h-[220px] relative"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,#0F72B1_-6.31%,rgba(0,0,0,0.7)_100%)] opacity-90" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    <h3 className="absolute left-5 bottom-0 text-white text-base md:text-lg font-medium mb-4 animate-fadeIn">
                      {item.title}
                    </h3>
                    {/* <div className="w-16 h-1 bg-white/80 rounded-full animate-slideIn" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
              <div className="flex flex-col mt-6">
                <div className="flex justify-end gap-3">
                <button
                    onClick={prev}
                    disabled={activeMobile === 0}
                    className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${activeMobile === 0
                        ? "bg-blue-200 cursor-not-allowed opacity-50"
                        : "bg-[#0F72B1] hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-110"
                    }
                    `}
                >
                    <img src="/images/arrow-left.png" className="w-5 h-5" />
                </button>

                <button
                    onClick={next}
                    disabled={activeMobile === industries.length - 1}
                    className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${activeMobile === industries.length - 1
                        ? "bg-blue-200 cursor-not-allowed opacity-50"
                        : "bg-[#0F72B1] hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-110"
                    }
                    `}
                >
                    <img src="/images/arrow-right.png" className="w-5 h-5" />
                </button>
                </div>

            </div>
        </div>


      </div>
    </section>
  );
}