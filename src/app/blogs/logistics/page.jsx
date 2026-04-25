"use client";

import Image from "next/image";

const quickLinks = [
  { id: "business-challenge", label: "Business Challenge" },
  { id: "key-challenges", label: "Key Challenges Faced" },
  { id: "implemented-solution", label: "Implemented Solution" },
  { id: "achieved-outcomes", label: "Achieved Outcomes" },
  { id: "data-collection", label: "Data Collection & Integration Tools" },
  { id: "technology-stack", label: "Technology Stack" },
  { id: "conclusion", label: "Conclusion" },
];

export default function LogisticsBlogPage() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[350px] md:h-[450px]">
            <Image
            src="/images/logistics-blogHero.png"
            alt="Blog Banner"
            fill
            className="object-cover"
            />
    
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
                <div>
                    <p className="text-white text-base md:text-lg relative inline-block">
                    Blogs
                    <span className="block h-[3px] w-1/2 bg-[#0F72B1] mt-1"></span>
                    </p>
                </div>
        
                <h1 className="text-white text-xl md:text-4xl font-bold mt-4 max-w-4xl">
                    Transforming Logistics Operations with Data-Driven Solutions
                </h1>
            </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* BUSINESS CHALLENGE */}
          <div id="business-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Business Challenge
            </h2>
            <p className="text-sm md:text-base text-primaryText">
              A logistics company was struggling with inefficiencies that impacted warehouse space
              utilization, operational flow, and cost control. Some warehouses were either
              overburdened or underutilized, leading to storage imbalances. Delays at docking
              stations disrupted delivery schedules, while unexpected equipment failures caused
              frequent downtime. These challenges led to higher costs and reduced operational
              efficiency. To remain competitive, the company needed a data-driven approach to
              streamline processes, anticipate maintenance needs, and improve resource allocation.
            </p>
          </div>

          {/* KEY CHALLENGES */}
          <div id="key-challenges" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Key Challenges Faced
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "1. Warehouse Utilization",
                  points: [
                    "How effectively is storage space being used across different facilities?",
                    "Is there an opportunity to optimize or consolidate warehouse space?",
                    "What impact do seasonal trends have on storage and inventory planning?",
                  ],
                },
                {
                  title: "2. Docking and Transport Bottlenecks",
                  points: [
                    "What factors contribute to docking station delays?",
                    "Are inefficiencies in cargo handling or route planning slowing down operations?",
                    "Is a shortage of drivers or mechanical failures affecting overall productivity?",
                  ],
                },
                {
                  title: "3. Equipment Reliability and Maintenance",
                  points: [
                    "How frequently do critical assets require servicing or repairs?",
                    "Which pieces of equipment have the highest maintenance costs?",
                    "Can predictive maintenance reduce unexpected failures and improve uptime?",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-5 bg-white"
                  style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}
                >
                  <h3 className="font-semibold text-base mb-4">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* IMPLEMENTED SOLUTION */}
          <div id="implemented-solution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Benefits of Using Bicep for Azure Resource Deployment
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-6">
              To tackle these inefficiencies, the company introduced a data intelligence platform
              powered by Azure. By consolidating insights from transportation management systems
              (TMS), enterprise resource planning (ERP) platforms, and IoT-enabled tracking
              devices, the company gained end-to-end visibility into operations. This allowed for
              better decision-making and proactive issue resolution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Optimized Warehouse Management",
                  desc: "Space utilization was enhanced by analyzing real-time and historical data.",
                },
                {
                  title: "Real-Time Alerts for Bottlenecks",
                  desc: "Instant notifications reduced delays at docking stations and improved overall workflow.",
                },
                {
                  title: "Predictive Maintenance",
                  desc: "AI-driven insights forecasted equipment failures, allowing proactive servicing to prevent unexpected downtime.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-5 bg-white shadow-sm"
                  style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}
                >
                  <h3 className="font-semibold text-base mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVED OUTCOMES */}
          <div id="achieved-outcomes" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Achieved Outcomes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#0F72B1] rounded-xl overflow-hidden">
              {[
                {
                  stat: "30% Faster Turnaround Times",
                  desc: "Improved docking operations and predictive maintenance reduced service delays.",
                },
                {
                  stat: "20% Cost Reduction",
                  desc: "Enhanced operational efficiency lowered unnecessary expenses.",
                },
                {
                  stat: "30% Increase in Revenue",
                  desc: "Optimized storage and reduced idle time created capacity for additional business.",
                },
              ].map((item, i) => (
                <div
                  key={item.stat}
                  className={`p-6 text-white`}
                  style={{
                        padding: "1.5rem",
                        color: "white",
                        borderRight: i < 3 ? "1px solid #a5a5a5" : "none"
                    }}
                >
                  <p className="font-semibold text-base md:text-lg mb-4 leading-snug">{item.stat}</p>
                  <p className="text-sm text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DATA COLLECTION */}
          <div id="data-collection" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Data Collection &amp; Integration Tools
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              Once the LLM returns structured JSON output, the data goes through cleaning,
              validation, and cross-referencing against existing system records. The result is a
              two-track workflow:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                { label: "TMS Systems:", desc: "Collect operational and transport data." },
                { label: "ERP Platforms:", desc: "Manage financial transactions and cost analysis." },
                { label: "IoT Sensors & GPS:", desc: "Monitor real-time fleet movement and equipment performance." },
                { label: "Maintenance Logs & Spreadsheets:", desc: "Store historical service records and asset performance data." },
              ].map((item) => (
                <li key={item.label} className="pl-1">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* TECHNOLOGY STACK */}
          <div id="technology-stack" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Technology Stack
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                { label: "Fabric – OneLake:", desc: "Functions as a virtual data repository, streamlining data processing." },
                { label: "GitHub:", desc: "Enables team collaboration and version control for system updates." },
                { label: "Azure:", desc: "Provides cloud-based security, identity management, and monitoring capabilities." },
                { label: "AI & Machine Learning Models:", desc: "Delivers interactive dashboards and analytics for real-time decision-making." },
                { label: "Automated Notification Systems:", desc: "Generate real-time alerts for potential disruptions." },
              ].map((item) => (
                <li key={item.label} className="pl-1">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-primaryText">
              By adopting a data-first approach, this logistics company transformed its operations,
              minimized inefficiencies, and strengthened its market position with a more reliable
              and scalable system.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">Content Quick Links</h3>
            <ul className="space-y-4 text-[#0F72B1] text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:underline cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}