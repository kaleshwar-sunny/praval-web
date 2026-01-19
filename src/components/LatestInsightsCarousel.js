"use client";

import { useState } from "react";

const slides = [
  {
    title: "Running a Global Community with the help of Praval",
    description:
      "Our client needed a way to connect its directors, founding members, new members, and fans worldwide.",
    image: "/images/homeCarousel1.png",
    stats: [
      { value: "75%", label: "Lorem Ipsum Lorem Ipsum" },
      { value: "75%", label: "Lorem Ipsum Lorem Ipsum" },
      { value: "100%", label: "Lorem Ipsum Lorem Ipsum" },
    ],
  },
  {
    title:
      "ERC upgrades its Cloud Data Management and Employee Engagement with Praval",
    description:
      "All of client’s data used to be previously maintained in shared folders on servers, which was not quite efficient.",
    image: "/images/homeCarousel2.png",
    stats: [
      { value: "6x", label: "Lorem Ipsum Lorem Ipsum" },
      { value: "1.6x", label: "Lorem Ipsum Lorem Ipsum" },
      { value: "2x Revenue", label: "Lorem Ipsum Lorem Ipsum" },
    ],
  },
  {
    title:
      "NPCA improves Core Internal Leave and Activity Reporting through PowerApps, Microsoft Flow, and Praval Partnership",
    description:
      "In the protection and conversation of natural parks with a team of members & supporters, people, productivity and efficiency are the keys.",
    image: "/images/homeCarousel3.png",
    stats: [
      { value: "6x", label: "Lorem Ipsum Lorem Ipsum" },
      { value: "1.6x", label: "Lorem Ipsum Lorem Ipsum" },
      { value: "2x Revenue", label: "Lorem Ipsum Lorem Ipsum" },
    ],
  },
];

export default function LatestInsightsCarousel() {
  const [active, setActive] = useState(0);

  const prevIndex = (active - 1 + slides.length) % slides.length;
  const nextIndex = (active + 1) % slides.length;

  return (
    <section className="py-14 overflow-hidden container mx-auto text-left">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Latest Insights</h2>

        {/* Carousel */}
        <div className="relative h-[460px] text-left">
          {slides.map((slide, index) => {
            let position =
              "opacity-0 pointer-events-none md:opacity-0";

            /* MOBILE — only active slide */
            if (index === active) {
              position =
                "left-0 w-full z-30 opacity-100 pointer-events-auto " +
                "md:left-0 md:w-[60%]";
            }

            /* DESKTOP ONLY */
            if (index === nextIndex) {
              position +=
                " md:left-[62%] md:w-[38%] md:z-20 md:opacity-100 md:pointer-events-auto";
            }

            if (index === prevIndex) {
              position +=
                " md:-left-[8%] md:w-[60%] md:z-10 md:opacity-100 md:pointer-events-auto";
            }

            return (
              <div
                key={index}
                className={`absolute top-0 h-full transition-all duration-700 ease-in-out ${position}`}
              >
                <SlideCard slide={slide} active={index === active} />
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex gap-4">
            <button
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1
                )
              }
              disabled={active === 0}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
              style={{backgroundColor: active === 0 ? '#E5E7EB' : '#0F72B1'}}
            >
              <img
                src="/images/arrow-left.png"
                alt="Previous slide"
                className="w-5 h-5"
              />
            </button>

            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % slides.length)
              }
              disabled={active === slides.length - 1}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              style={{backgroundColor: active === slides.length - 1 ? '#E5E7EB' : '#0F72B1'}}
            >
              <img
                src="/images/arrow-right.png"
                alt="Next slide"
                className="w-5 h-5"
              />
            </button>
          </div>

          <a
            href="#"
            className="font-medium flex items-center gap-2"
            style={{ color: "#0F72B1" }}
          >
            Browse all case studies →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SLIDE CARD ---------------- */

function SlideCard({ slide, active }) {
  return (
    <div
      className={`relative h-full rounded-2xl overflow-hidden shadow-xl border transition-all duration-700 ${
        active ? "border-red-500" : "border-transparent"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full p-6 md:p-10 flex flex-col md:flex-row">
        {/* Left Text */}
        <div className="md:w-2/3 text-white md:pr-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
            {slide.title}
          </h3>
          <p className=".text-primaryText mb-6 leading-relaxed text-sm md:text-base">
            {slide.description}
          </p>
          <span className="inline-flex items-center gap-2 text-white">
            Read More →
          </span>
        </div>

        {/* Right Stats */}
        <div className="md:w-1/3 flex flex-col gap-4 justify-center mt-6 md:mt-0">
          {slide.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow"
            >
              <p className="text-2xl font-bold" style={{color: "#0F72B1"}}>
                {stat.value}
              </p>
              <p className="text-sm .text-primaryText">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
