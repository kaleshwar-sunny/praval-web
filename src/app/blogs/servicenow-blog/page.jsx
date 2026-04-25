"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-solution", label: "The Solution" },
  { id: "conclusion", label: "Conclusion" },
];

export default function ServiceNowBlogPage() {
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
                        src="/images/servicenow-blogHero.png"
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
                                Revamping IT Service Management: How ServiceNow Transformed a Global Leader in Energy Management’s IT Operations
                            </h1>
                        </div>
                    </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* OVERVIEW */}
          <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
            <p className="text-sm md:text-base text-primaryText">
              A global energy management company faced significant challenges with their IT service
              management processes. Fragmented IT systems, manual workflows, and slow incident
              resolution times were impacting productivity and employee satisfaction.
            </p>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">The Challenge</h2>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Businesses leverage AI chatbots for several key reasons:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-primaryText">
              <li>
                <strong>Fragmented Systems</strong>: Multiple tools were used for incident
                management, asset tracking, and problem resolution, causing inefficiencies and
                complicating reporting.
              </li>
              <li>
                <strong>Manual Workflows</strong>: Processes like ticket routing, escalations, and
                service request approvals were manual, leading to slow response times and errors.
              </li>
              <li>
                <strong>Limited Transparency</strong>: Employees and customers had limited
                visibility into request statuses, leading to frustration and poor service
                experiences.
              </li>
            </ul>
          </div>

          {/* THE SOLUTION */}
          <div id="the-solution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">The Solution</h2>
            <p className="text-sm md:text-base text-primaryText mb-4">
              To address these challenges, they implemented ServiceNow's IT Service Management
              (ITSM) platform. Key features utilized included:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-primaryText">
              <li>
                <strong>Unified Platform</strong>: Centralized all ITSM processes.
              </li>
              <li>
                <strong>Integrated Systems</strong>: Connected CRM, inventory, and asset
                management.
              </li>
              <li>
                <strong>Automated Workflows</strong>: Reduced response times by 30%.
              </li>
              <li>
                <strong>Self-Service Portal</strong>: Empowered employees to resolve issues
                independently.
              </li>
              <li>
                <strong>Real-Time Analytics</strong>: Provided actionable insights through custom
                dashboards.
              </li>
            </ul>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Conclusion</h2>
            <p className="text-sm md:text-base text-primaryText">
              The implementation of ServiceNow's ITSM platform transformed the IT operations of
              the organization, leading to improved efficiency, reduced response times, and higher
              employee satisfaction. This case study highlights the importance of adopting modern
              ITSM solutions to address organizational challenges.
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