"use client";

import Image from "next/image";

const sections = [
  {
    image: "/images/services1.jpg",
    align: "left",
    cards: [
      {
        title: "Agile / DevOps Testing",
        description:
          "Optimize testing costs with scalable licensing and flexible engagement models tailored to your quality\nContinuous testing with fast feedback loops to support rapid releases\nShift-left approach to identify issues early and reduce rework",
      },
      {
        title: "Conversion / Migration Testing",
        description:
          "Data migration testing involves evaluating data before moving it from a source to a target system, ensuring accuracy, completeness, and consistency",
      },
      {
        title: "ERP Package Testing",
        description:
          "End-to-end functional and integration testing for ERP systems\nExpertise in Salesforce, Oracle, Microsoft Dynamics, etc.\nValidate business workflows, configurations, and customizations",
      },
      {
        title: "AI or GenAI-based Testing",
        description:
          "Leverage AI and ML for test-case generation, defect prediction, and impact analysis\nSmarter test coverage through predictive analytics and self-healing scripts",
      },
      {
        title: "Customer Experience Validation",
        description:
          "Test users' journeys across web, mobile, and omnichannel platforms\nMeasure usability, accessibility, and visual consistency\nEnsure an optimal experience under real-world conditions",
      },
    ],
  },
  // {
  //   image: "/images/services2.jpg",
  //   align: "right",
  //   cards: [
  //     {
  //       title: "Quality Engineering & Process Consulting",
  //       description:
  //         "Assess and optimize quality engineering strategy, tools, and processes\nImplement best practices and frameworks\nDrive continuous quality improvement across the organization",
  //     },
  //     {
  //       title: "API / Service / Microservice Testing",
  //       description:
  //         "End-to-end validation of APIs, services, and microservices\nEnsure seamless integration, reliability, and performance\nTools used include Postman, REST Assured, Swagger, among others",
  //     },
  //     {
  //       title: "Data and Analytics Testing",
  //       description:
  //         "We validate ETL processes, ensure data integrity, and verify dashboard accuracy\nEnsure consistency of business insights across platforms\nTest large datasets efficiently using automation",
  //     },
  //     {
  //       title: "Test Management Services",
  //       description:
  //         "Secure and efficient test data provisioning, masking, and cloning\nAgile Testing\nTest data management",
  //     },
  //     {
  //       title: "Legacy Modernization Testing",
  //       description:
  //         "Guarantee robust performance and smooth integration. Confirm operational stability and dependability\nValidate data integrity, functionality, and performance post-migration\nIdentify hidden defects and regressions in critical processes",
  //     },
  //   ],
  // },
  // {
  //   image: "/images/services3.jpg",
  //   align: "left",
  //   cards: [
  //     {
  //       title: "Testing as a Service (TaaS)",
  //       description:
  //         "Scalable, on-demand quality engineering services tailored to your project needs\nEnd-to-end or modular testing support across platforms and industries\nReduce infrastructure cost and boost quality engineering productivity",
  //     },
  //     {
  //       title: "Low-Code / No-Code Application Testing",
  //       description:
  //         "Specialized strategies for platforms like PowerApps\nTest business logic, UI flows, and integrations\nMaintain test coverage with minimal disruption to development",
  //     },
  //     {
  //       title: "Share Point Testing",
  //       description:
  //         "SharePoint metadata & permissions\nSharePoint Site collection/site, subsites, list, library, Files, items, columns and content types\nSharePoint file/item Version/Version History",
  //     },
  //   ],
  // },
];

function StickySection({ data }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 py-4 md:py-8">
      {data.align === "left" && (
        <div className="hidden md:block sticky top-28 h-fit">
          <Image src={data.image} alt="" width={600} height={400} className="rounded-xl" />
        </div>
      )}

      <div className="space-y-4 md:space-y-10">
        {data.cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 p-8 lg:sticky"
            style={{
              top: "120px",
              zIndex: index + 1,
              boxShadow: "0px 0px 10px 0px #1E68B21A",
            }}
          >
            <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
            <>
            {card.description && (
              <ul className="list-disc pl-5 space-y-2">
                {card.description.split('\n').map((point, idx) => (
                  point.trim() && (
                    <li key={idx} className="text-sm leading-relaxed text-primaryText">
                      {point}
                    </li>
                  )
                ))}
              </ul>
            )}
            </>
          </div>
        ))}
      </div>

      {data.align === "right" && (
        <div className="hidden md:block sticky top-28 h-fit">
          <Image src={data.image} alt="" width={600} height={400} className="rounded-xl" />
        </div>
      )}
    </div>
  );
}

export default function QualityEngineeringServices() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {sections.map((sec, i) => (
        <StickySection key={i} data={sec} />
      ))}

      {/* Section 4 FIXED */}
      <div className="py-8">
        <h2 className="text-lg md:text-4xl font-semibold mb-8 md:mb-16">
          Our Three Pillars of Quality Engineering
        </h2>

        <div className="space-y-10 md:space-y-20">
          {[
            {
              title: "Stable & Reliable Systems",
              desc: "We ensure end-to-end test ecosystem stability — from planning through execution and defect management. With our combination of functional testing, regression testing, system testing, end-to-end testing, API validation, performance testing, security testing, and automated testing suites, we help detect issues early, prevent critical failures, and deliver software that performs flawlessly in production environments.",
            },
            {
              title: "Faster Digital Delivery",
              desc: "To help accelerate digital transformation, we leverage automated testing frameworks that integrate seamlessly into your DevOps pipelines. Our solutions help reduce test cycle times, validate frequent builds, and support rapid releases especially critical in Agile and CI/CD environments.",
            },
            {
              title: "Systems Integration and Optimization",
              desc: "Using modern automation tools and smart testing strategies, our team streamlines repetitive testing tasks and increases coverage across devices, browsers, and platforms. From UI to backend APIs, we automate what matters, ensuring higher test accuracy and faster go-to-market for every release.",
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-[0.5fr_2fr] gap-4 md:gap-10 items-start">
              <div className="text-lg md:text-2xl font-semibold">
                {item.title}
              </div>

              <div className="flex gap-6">
                <div className="w-[3px] bg-[#1072b1]" />
                <p className="text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#0F72B10D] py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-10">
        <h2 className="text-lg md:text-4xl font-semibold">Strategic Alliances at Praval</h2>
        <div>
          <h3 className="text-base md:text-2xl mb-3">
            Driving Quality through Collaboration
          </h3>
          <p className="text-sm md:text-base mb-6">
            We work hand-in-hand with industry-leading technology providers to amplify our quality engineering capabilities and deliver comprehensive, scalable, and intelligent solutions across the entire software testing lifecycle.
          </p>

          <h3 className="text-base md:text-2xl mb-3">Partnering for Excellence</h3>
          <p className="text-sm md:text-base">
            Whether it’s enhancing test automation, accelerating agile delivery, or introducing AI in quality engineering, our collaborations help drive measurable value and operational efficiency.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
