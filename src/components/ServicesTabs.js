"use client";

import { useState } from "react";

const tabs = [
  {
    id: "engineering",
    title: "Digital Engineering",
    subtitle: "Think bigger with tech-forward strategies",
    description:
      "Digital is not the new, but the transformation is still. Digital capabilities accelerate business growth & allow organizations to skip the routines & build beyond.",
    image: "/images/ourServices1.png",
    bg: "bg-[#F3ECF1]",
    iconUrl: "/images/digital-icon.svg"
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle: "Move faster with data analytics",
    description:
      "Decision making backed by sound insights is the crucial differentiator for any business success. Praval offers broader expertise on end-to-end data analytic solutions.",
    image: "/images/ourServices2.png",
    bg: "bg-[#F3ECF1]",
    iconUrl: "/images/data-icon.svg"
  },
  {
    id: "platforms",
    title: "Enterprise Platforms",
    subtitle: "Go further with Enterprise Platforms",
    description:
      "Globally with the emergence of new work patterns post Covid-19, it is essential for organizations to adopt and enable their workforce with the digital infrastructure.",
    image: "/images/ourServices3.png",
    bg: "bg-[#F3ECF1]",
    iconUrl: "/images/enterprise-icon.svg"
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="py-4 md:py-20 text-left">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-4 md:mb-10">Our Services</h2>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tabs.map((tab) => {
            const isActive = active.id === tab.id;

            return (
              <div key={tab.id} className="relative">
                {/* Tab Button */}
                <button
                  onClick={() => setActive(tab)}
                  className={`${isActive ? "hidden" : "block"} md:block w-full p-8 md:p-20 ${isActive ? "md:pb-25" : "md:mb-4"} text-left transition-all duration-300
                    ${isActive ? `${tab.bg}` : "bg-[#d2e4f1] hover:bg-gray-200"}
                    rounded-t-xl ${isActive ? "md:rounded-t-xl" : "rounded-xl md:rounded-xl"}
                  `}
                >
                  <div className="flex items-center gap-4 mb-6">
            <img
              src={tab.iconUrl}
              alt={tab.title}
              className="h-8 w-8"
            />
                  <h3 className="font-semibold text-2xl mb-2">
                    {tab.title}
                  </h3>
                  </div>
                  <p className="text-base text-black-600">
                    {tab.subtitle}
                  </p>
                </button>

                {/* MOBILE & SMALL SCREENS: Inline Content */}
                {isActive && (
                  <div className="md:hidden mt-4">
                    <TabContent tab={tab} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP: Shared Content */}
        <div className="hidden md:block">
          <TabContent tab={active} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- TAB CONTENT ---------------- */

function TabContent({ tab }) {
  return (
    <div
      className={`relative p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center
        transition-all duration-500
        ${tab.bg}
        rounded-2xl md:rounded-t-none md:rounded-b-2xl
      `}
    >
      {/* Text Content */}
      <div className="animate-fadeIn text-left">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={tab.iconUrl}
              alt={tab.title}
              className="h-8 w-8 md:hidden"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-primaryText">
              {tab.title}
            </h3>
          </div>
        <p className="text-primaryText mb-6 text-left">
          {tab.description}
        </p>
        <button className="bg-[#0F72B1] text-white px-6 py-3 rounded-4xl md:rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Image + Overlay Pills */}
      <div className="relative overflow-hidden rounded-2xl animate-slideIn">
        {/* Background Image */}
        <div
          className="h-72 sm:h-80 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${tab.image})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Pills */}
        <div className="absolute inset-0 flex items-end justify-center px-4 pb-6">
          <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 w-full max-w-md lg:max-w-none">
            <TextPill text="Migration Tools 2023" />
            <TextPill text="Guide To Social Intranets" />
            <TextPill text="Top 7 Features For Your Organization" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TEXT PILL ---------------- */

function TextPill({ text }) {
  return (
    <div className="
      bg-blue-900/70 backdrop-blur-md
      text-white text-center
      px-6 py-4
      rounded-xl
      text-sm sm:text-base
      font-light
      w-full lg:w-auto
    ">
      {text}
    </div>
  );
}
