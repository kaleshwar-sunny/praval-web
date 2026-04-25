"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "key-transformation", label: "Key Transformation Initiatives" },
  { id: "collaborative-execution", label: "Collaborative Execution for Measurable Results" },
  { id: "conclusion", label: "Conclusion" },
];

export default function DataCenterBlogPage() {
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
                              src="/images/serviceSolution-blog.png"
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
                                      Driving Innovation for a Global Data Centre Industry Leader with ServiceNow Solutions
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
              A recent engagement with a prominent data center industry leader operating in the US
              and UK exemplifies our collaborative approach. Together with their internal teams and
              transitioning from two separate service providers, we streamlined IT operations,
              improved reporting, and enhanced user experiences through strategic ServiceNow
              initiatives.
            </p>
          </div>

          {/* KEY TRANSFORMATION INITIATIVES */}
          <div id="key-transformation" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Key Transformation Initiatives
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Businesses leverage AI chatbots for several key reasons:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-sm md:text-base text-primaryText">
              <li>
                <strong>ITSM Standardization</strong>: Through joint efforts, we consolidated
                ServiceNow instances and established standardized processes for Incident, Problem,
                Major Incident, and Request Management. This initiative reduced operational
                complexity by 30% and increased overall system efficiency by 25%.
              </li>
              <li>
                <strong>ITSM Standardization</strong>: We led phased rollouts across multiple
                geographies for legacy data migration, owning the complete process from initiation
                to handover to the delivery team.
              </li>
              <li>
                <strong>Knowledge Management Enhancement</strong>: Collaboratively, we developed
                comprehensive documentation standards and best practices, increasing knowledge
                sharing by 50% and enhancing operational transparency.
              </li>
              <li>
                <strong>Advanced Reporting Solutions</strong>: We implemented custom dashboards
                and reports, empowering the organization with actionable insights, improving
                visibility to leadership, and increasing engineering efficiency by 30%.
              </li>
            </ul>
          </div>

          {/* COLLABORATIVE EXECUTION */}
          <div id="collaborative-execution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Collaborative Execution for Measurable Results
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-6">
              To address these challenges, they implemented ServiceNow's IT Service Management
              (ITSM) platform. Key features utilized included:
            </p>

            {/* Key Business Outcomes */}
            <h3 className="text-xl md:text-2xl font-bold mb-5">Key Business Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Operational Excellence",
                  desc: "Streamlined ITSM processes with reduced complexity and higher efficiency",
                },
                {
                  title: "Improved Service Delivery",
                  desc: "Enhanced user experience through a customized Service Portal",
                },
                {
                  title: "Insightful Decision-Making",
                  desc: "Comprehensive dashboards and analytics for improved business operations",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-5 bg-white"
                  style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}
                >
                  <h4 className="font-semibold text-base mb-3">{card.title}</h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Conclusion</h2>
            <p className="text-sm md:text-base text-primaryText">
              Our collaborative partnership with global associates and a seamless transition from
              two service providers enabled the organization to achieve operational efficiency and
              technological innovation for continued growth.
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