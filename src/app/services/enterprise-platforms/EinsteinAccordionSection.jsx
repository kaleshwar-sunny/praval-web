"use client";

import { useState } from "react";
import Image from "next/image";



export default function EinsteinAccordionSection({ service = "default", category = ""}) {

  const SERVICES_MAP = {
    faq: {
      accordionData : [
        {
          title: `What is  ${category ? category : "strategy consulting"} ?`,
          content:
            `${category ? category : "Strategy consulting"} involves working with experts to create actionable plans that align your business vision with achievable goals.`,
        },
        {
          title: "How does data strategy development help my business?",
          content:
            "Data strategy development ensures your data is organized, accessible, and optimized to drive decision-making and growth.",
        },
        {
          title: "What industries do you specialise in?",
          content:
            "We work with diverse industries, including healthcare, IT, retail, and financial services, tailoring strategies to each sector’s unique needs.",
        },
        {
          title: "Can you help with implementing the strategies?",
          content:
            "Absolutely. We not only design strategies but also assist with implementation and performance tracking to ensure success.",
        },
        {
          title: "What makes your consulting services different?",
          content:
            "Our services are data-driven, customizable, and focused on delivering measurable results.",
        },
      ]
    },
    default: {
      accordionData : [
        {
          title: "Next Best Action",
          content:
            "Provides real-time, data-driven recommendations for agents, suggesting the most effective next steps based on customer history, issue specifics, and proven resolution strategies.",
        },
        {
          title: "AI-Powered Chatbots",
          content:
            "Facilitate customer engagement through natural-language conversations, efficiently automating routine tasks like answering FAQs and gathering preliminary information.",
        },
        {
          title: "Intelligent Case Routing",
          content:
            "Utilizes AI to analyze case data and automatically direct cases to the most skilled agents, ensuring prompt and effective resolution.",
        },
        {
          title: "Automated Article Recommendations",
          content:
            "Delivers relevant knowledge base articles to agents in real-time while they work on cases, accelerating access to information and enhancing case resolution efficiency.",
        },
        {
          title: "AI/ML Strategy & Consulting",
          content:
            "Employs AI to assess the tone and sentiment of customer communications, enabling agents to understand customer emotions and tailor their responses with empathy, thereby improving customer relationships.",
        },
      ]
    },
  }
  
  const currentService = SERVICES_MAP[service] || SERVICES_MAP.default;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hidden md:block py-14 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-20 items-start">
          
          {/* LEFT HEADER */}
          <div>
            <h2 className="text-5xl font-semibold text-primaryText leading-tight">
              {service === "faq" 
                ? "Frequently Asked Questions"
                : "Einstein 1: The AI-Driven Solution for Enhanced Customer Service"
              }
            </h2>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-6 mt-10">
            {currentService.accordionData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="border-b-2 pb-6 px-4"
                  style={{
                    borderColor: isActive ? "#0F72B1" : "transparent",
                    borderBottomLeftRadius: isActive ? "28px" : "0px",
                    borderBottomRightRadius: isActive ? "28px" : "0px",
                  }}
                >
                  {/* TITLE WITH ARROW */}
                  <button
                    onClick={() =>
                      setActiveIndex(isActive ? null : index)
                    }
                    className="w-full text-left flex justify-between items-center group"
                  >
                    <h3 className="text-lg font-semibold text-primaryText">
                      {item.title}
                    </h3>
                    
                    {/* Arrow Image */}
                    <div className="flex-shrink-0 ml-4 transition-transform duration-300">
                      <Image
                        src="/images/icons/faqArrow.svg"
                        alt={isActive ? "Close" : "Open"}
                        width={20}
                        height={20}
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`
                      grid transition-all duration-500 ease-in-out
                      ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}
                    `}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base leading-relaxed text-primaryText">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}