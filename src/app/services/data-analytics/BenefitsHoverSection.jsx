"use client";

import { useState } from "react";

export default function BenefitsHoverSection({ service = "default" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const SERVICES_MAP = {
    SSC: {
      benefits: [
        {
          icon: "/images/icons/customized.svg",
          iconBlue: "/images/icons/customizedBlue.svg",
          title: "Increased Sales Productivity",
          description:
            "Automate repetitive tasks, allowing your team to focus on building relationships and closing deals.",
        },
        {
          icon: "/images/icons/expert.svg",
          iconBlue: "/images/icons/expertBlue.svg",
          title: "Scalable Growth",
          description:
            "Easily scale your operations as your business grows, with flexible solutions that cater to your specific needs.",
        },
        {
          icon: "/images/icons/scalable.svg",
          iconBlue: "/images/icons/scalableBlue.svg",
          title: "Enhanced Customer Insights",
          description:
            "Utilize data-driven insights to understand customer needs and preferences, enabling personalized interactions.",
        },
        {
          icon: "/images/icons/roi.svg",
          iconBlue: "/images/icons/roiBlue.svg",
          title: "Improved Collaboration",
          description:
            "Foster a collaborative environment with integrated tools, ensuring seamless team alignment.",
        },
      ],
    },
    SDC: {
      benefits: [
        {
          icon: "/images/icons/customized.svg",
          iconBlue: "/images/icons/customizedBlue.svg",
          title: "Unified Customer Data",
          description:
            "Integrate data from multiple sources to build a complete, 360-degree view of your customers.",
        },
        {
          icon: "/images/icons/expert.svg",
          iconBlue: "/images/icons/expertBlue.svg",
          title: "Actionable Insights",
          description:
            "Leverage comprehensive customer data for informed decision-making.",
        },
        {
          icon: "/images/icons/scalable.svg",
          iconBlue: "/images/icons/scalableBlue.svg",
          title: "Improved Efficiency",
          description:
            "Leverage predictive analytics to foresee potential issues before they escalate, enabling your team to deliver proactive support and prevent service disruptions.",
        },
        {
          icon: "/images/icons/roi.svg",
          iconBlue: "/images/icons/roiBlue.svg",
          title: "Customer Satisfaction",
          description:
            "Deliver faster resolutions and personalized services to enhance customer loyalty and satisfaction.",
        },
      ],
    },
    default: {
      benefits: [
        {
          icon: "/images/icons/customized.svg",
          iconBlue: "/images/icons/customizedBlue.svg",
          title: "Customized Strategies",
          description:
            "No cookie-cutter solutions — just tailored strategies to fit your unique goals.",
        },
        {
          icon: "/images/icons/expert.svg",
          iconBlue: "/images/icons/expertBlue.svg",
          title: "Expert Guidance",
          description:
            "Leverage the experience of seasoned consultants to accelerate success.",
        },
        {
          icon: "/images/icons/scalable.svg",
          iconBlue: "/images/icons/scalableBlue.svg",
          title: "Scalable Solutions",
          description:
            "Our strategies grow with your business, ensuring long-term success.",
        },
        {
          icon: "/images/icons/roi.svg",
          iconBlue: "/images/icons/roiBlue.svg",
          title: "ROI-Focused Results",
          description:
            "Drive revenue, improve efficiency, and achieve measurable outcomes.",
        },
      ],
    },
  };

  const currentService = SERVICES_MAP[service] || SERVICES_MAP.default;

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      <section
        className="relative hidden md:block py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/benefits-bg.png')",
        }}
      >
        <div className="relative container mx-auto px-6 text-white">
          <h2 className="text-4xl font-medium mb-20">
            The Benefits of Partnering with Us
          </h2>

          <div className="grid grid-cols-4 gap-10 relative">
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/20"></div>
            <div className="absolute top-0 bottom-0 left-2/4 w-px bg-white/20"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/20"></div>

            {currentService.benefits.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                  className="relative px-6 py-14 cursor-pointer"
                >
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
                          rounded-full bg-white/10 flex items-center justify-center
                          transition-all duration-500
                          ${isActive ? "w-20 h-20" : "w-32 h-32"}
                        `}
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          className={`transition-all duration-500 ${
                            isActive ? "w-8 h-8" : "w-12 h-12"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="text-center transition-all duration-500">
                    <h3
                      className={`text-xl font-semibold transition-all duration-500 ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div>
                      <h3
                        className={`text-xl font-semibold text-left transition-all duration-500 ${
                          isActive
                            ? "-translate-y-20 opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`mt-4 text-sm leading-relaxed text-left transition-all duration-500 ${
                          isActive
                            ? "-translate-y-20 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MOBILE VERSION ================= */}
      <section className="md:hidden bg-white py-4 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-primaryText mb-10">
            The Benefits of Partnering with Us
          </h2>

          <div className="space-y-12">
            {currentService.benefits.map((item, index) => (
              <div key={index}>
                <div className="w-14 h-14 rounded-full bg-[#fde9e9] flex items-center justify-center mb-6">
                  <img
                    src={item.iconBlue}
                    alt={item.title}
                    className="w-6 h-6"
                  />
                </div>

                <h3 className="text-xl font-medium text-primaryText mb-4">
                  {item.title}
                </h3>

                <p className="text-base leading-relaxed text-primaryText">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}