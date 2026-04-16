"use client";

import { useState } from "react";

const tabs = [
  {
    id: "workplace",
    title: "Digital Workplace Solutions",
    bg: "bg-[#F3ECF1]",
    items: [
      "Digital Workplace Adoption",
      "Intelligent Automations",
      "Mobilization Framework",
      "Employee Experience & Adoption",
    ],
  },
  {
    id: "automation",
    title: "Process Automation Solutions",
    bg: "bg-[#F3ECF1]",
    items: [
      "Business Process Automations",
      "Hyper Automation",
      "Mobilization Framework",
      "Intelligent Automations",
      "Workflow Transformations",
    ],
  },
  {
    id: "governance",
    title: "Governance & Security Solutions",
    bg: "bg-[#F3ECF1]",
    items: [
      "Governance Boost Library",
      "Saketa Governance Suit",
      "Governance Apps",
      "Governance Dashboards",
      "Customer Experience",
    ],
  },
  {
    id: "lowcode",
    title: "Low Code No Code Apps",
    bg: "bg-[#F3ECF1]",
    items: [
      "Digital Workplace Adoption",
      "Intelligent Automations",
      "Mobilization Framework​",
      "Customer 360° & CRM​​",
      "Employee Experience & Adoption",
    ],
  },
];

export default function CapabilitiesTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="py-4 md:py-12 text-left">
      <div className="container mx-auto px-6">
        {/* SECTION TITLE (NEW – matches image) */}
        <h2 className="text-lg md:text-4xl md:text-5xl font-semibold mb-4">
          Our Capabilities
        </h2>
        <p className="text-sm md:text-base text-primaryText mb-4 md:mb-10">
          Praval digital engineering services are tailored to meet unique customer
          requirements. Right from improving workplace efficiency to strengthening
          governance and security, our experts are ever ready to offer the following
          digital engineering services.
        </p>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tabs.map((tab) => {
            const isActive = active.id === tab.id;

            return (
              <div key={tab.id} className="relative">
                <button
                  onClick={() => setActive(tab)}
                  className={`${isActive ? "hidden" : "block"} md:block w-full p-8 md:p-4 ${isActive ? "md:pb-8" : "md:mb-4"} text-left transition-all duration-300
                    ${isActive ? `${tab.bg}` : "bg-[#d2e4f1] hover:bg-gray-200"}
                    rounded-t-xl ${isActive ? "md:rounded-t-xl" : "rounded-xl md:rounded-xl"}
                  `}
                >
                  <h3 className="font-semibold text-base lg:text-lg xl:text-base mb-2">
                    {tab.title}
                  </h3>
                </button>

                {/* MOBILE: Inline Content */}
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
/* SAME CSS AS ServicesTabs — IMAGE REMOVED */

function TabContent({ tab }) {
  return (
    <div
      className={`relative p-10 grid grid-cols-1 md:grid-cols-2 gap-8
        transition-all duration-500
        ${tab.bg}
        rounded-2xl md:rounded-t-none md:rounded-b-2xl
      `}
    >
      {/* LEFT CONTENT */}
      <div className="animate-fadeIn text-left">
        <h3 className="text-base md:text-2xl font-bold text-primaryText mb-6">
          {tab.title}
        </h3>

        <ul className="text-sm md:text-base list-disc pl-6 space-y-3 text-primaryText">
          {tab.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT COLUMN KEPT EMPTY TO PRESERVE GRID & SPACING */}
      <div />
    </div>
  );
}
