"use client";

import { useState } from "react";
import Link from "next/link"

const tabs = [
  {
    id: "engineering",
    title: "Digital Acceleration",
    subtitle: "AI & Digital Transformation for Business Advantage",
    description:
      `Build Beyond The Routine Accelerate Digital\n
      We build for the lifecycle not just the launch date. Stability, scalability, and handoff included.`,
    image: "/images/ourServices1.png",
    bg: "bg-[#F3ECF1]",
    iconUrl: "/images/digital-icon.svg",
    route: "/services/digital-acceleration",
    pillTexts: {
      topLeft: {
        text: "Digital Acceleration",
        link: "/blogs/digital-acceleration-blog"
      },
      topRight: {
        text: "5 best ways to use an intranet",
        link: "/blogs/intranet"
      },
      bottom: {
        text: "Strategies to future proof your internal communication plan",
        link: "/blogs/bicepBlog"
      }
    }
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle: " From Data Insight to Impact",
    description:
      `AI First Data Driven Future Ready\n
      Our data analytics services close the gap between data and the decisions it was supposed to support.`,
    image: "/images/ourServices2.png",
    bg: "bg-[#F3ECF1]",
    iconUrl: "/images/data-icon.svg",
    route: "/services/data-analytics",
    pillTexts: {
      topLeft: {
        text: "Data intelligence Chatbot",
        link: "/blogs/digital-acceleration-blog"
      },
      topRight: {
        text: "AI - Powered invoice processing",
        link: "/blogs/choose-ai"
      },
      bottom: {
        text: "Transforming Logistics Operations with Data-Driven Solutions",
        link: "/blogs/bicepBlog"
      }
    }
  },
  {
    id: "platforms",
    title: "Platforms",
    subtitle: "From Platforms to Business Transformation",
    description:
      `From Legacy to Leader Transform Everything\n
      From SharePoint migration services to Microsoft 365 migration services — we handle the move and what comes after. As a SharePoint consulting company and Office 365 solutions provider, we build for the team using it. Not the one that signed it off.`,
    image: "/images/ourServices3.png",
    bg: "bg-[#F3ECF1]",
    iconUrl: "/images/enterprise-icon.svg",
    route: "services/enterprise-platforms",
    pillTexts: {
      topLeft: {
        text: "Choosing Right AI Chatbot",
        link: "/blogs/digital-acceleration-blog"
      },
      topRight: {
        text: "Revamping IT service management",
        link: "/blogs/choose-ai"
      },
      bottom: {
        text: "Driving Innovation for a Global Data Centre",
        link: "/blogs/bicepBlog"
      }
    }
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="py-4 md:py-12 text-left">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-lg md:text-5xl font-semibold mb-4 md:mb-10">Our Services</h2>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tabs.map((tab) => {
            const isActive = active.id === tab.id;

            return (
              <div key={tab.id} className="relative">
                {/* Tab Button */}
                <button
                  onClick={() => setActive(tab)}
                  className={`${isActive ? "hidden" : "block"} cursor-pointer md:block w-full p-8 md:p-10 md:pt-6 lg:p-6 ${isActive ? "md:pb-16 lg:pb-10" : "md:mb-4"} text-center transition-all duration-300
                    ${isActive ? `${tab.bg}` : "bg-[#d2e4f1] hover:bg-gray-200"}
                    rounded-t-xl ${isActive ? "md:rounded-t-xl" : "rounded-xl md:rounded-xl"}
                  `}
                >
                  <div className="mb-5">
                    <img
                      src={tab.iconUrl}
                      alt={tab.title}
                      className="h-9 w-9 mx-auto"
                    />
                  </div>
                  <div className="mb-6">
                  <h3 className="font-medium text-lg md:text-2xl mb-2">
                    {tab.title}
                  </h3>
                  </div>
                  <p className="text-base lg:text-sm text-primaryText">
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
            <div>
              <h3 className="text-base md:text-3xl font-semibold md:font-bold text-primaryText">
                {tab.title}
              </h3>
              <p className="md:hidden mt-2 text-primaryText text-left">
                {tab.subtitle}
              </p>
            </div>
          </div>
        <p className="text-primaryText mb-6 text-left whitespace-pre-line">
          {tab.description}
        </p>
        <Link href={tab.route}>
          <button className="bg-[#0F72B1] text-white px-6 py-3 rounded-4xl md:rounded-lg transition cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>

      {/* Image + Overlay Pills */}
      <div className="hidden md:block relative overflow-hidden rounded-2xl animate-slideIn">
        {/* Background Image */}
        <div
          className="h-72 sm:h-80 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${tab.image})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Pills */}
        <div className="absolute inset-0 flex items-end justify-center px-4 pb-6">
          <div className="flex flex-col w-full max-w-md lg:max-w-none gap-2 sm:gap-4">
            <div className="flex flex-row justify-evenly gap-2 items-center w-full">
              <TextPill text={tab.pillTexts.topLeft.text} blogLink={tab.pillTexts.topLeft.link} />
              <TextPill text={tab.pillTexts.topRight.text} blogLink={tab.pillTexts.topRight.link}/>
            </div>
            <div className="flex flex-row justify-center w-full">
              <TextPill text={tab.pillTexts.bottom.text} blogLink={tab.pillTexts.bottom.link}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TEXT PILL ---------------- */

function TextPill({ text, blogLink }) {
  
  return (
    <div className="
      bg-blue-900/70 backdrop-blur-xs
      text-white text-center
      px-6 py-4
      rounded-xl
      text-sm sm:text-base
      font-medium
      w-full lg:w-auto
    ">
      <Link href={blogLink}>{text}</Link>
    </div>
  );
}
