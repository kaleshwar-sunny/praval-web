import Link from "next/link";

export default function ServicesStack({ service = "DE" }) {
  const SERVICES_MAP = {
    DE: {
      items: [
        {
          title: "Digital Workplace Solutions",
          description:
            "Globally, with the emergence of new work patterns post COVID-19, it is essential for organizations to adopt and enable their workforce with the digital infrastructure.",
          link: "/services/digital-engineering/application-development",
        },
        {
          title: "Low Code No Code Services",
          description:
            "Demand for faster development and delivery of solutions is ever scaling. The typical traditional application development can be tedious and resource intensive with frequent bottle necks.",
          link: "/services/digital-engineering/low-code",
        },
        {
          title: "Azure Services",
          description:
            "Praval is your go to partner for Azure consulting services. Our Azure certified experts help businesses leverage the full potential of Microsoft Azure.",
          link: "/services/digital-engineering/azure",
        },
        {
          title: "Cloud Migration Services",
          description:
            "Most businesses have come to realize that they are losing out by holding on to legacy systems that come with high costs and complicated compliance.",
          link: "/services/digital-engineering/low-code",
        },
      ],
    },
    DA: {
      items: [
        {
          title: "Strategy Consulting",
          description: `Before the data. Before the tools. The question.\n
          Every engagement starts with one question: what business intelligence is this data actually supposed to support? That question changes everything that follows.`,
          link: "/services/data-analytics/strategy-consulting",
        },
        {
          title: "Implementation",
          description:
            `Built around your team. Not around a template.\n
            A system your team doesn't use is infrastructure, not an asset. Our end-to-end implementation services are built so that doesn't happen.`,
          link: "/services/data-analytics/implementation",
        },
        {
          title: "Managed Services",
          description:
            `Your team's time is better spent elsewhere.\n
            Our managed data services handle the day-to-day. The people who should be thinking about strategy shouldn't be the ones maintaining the pipeline.`,
          link: "/services/data-analytics/managed-services",
        },
      ],
    },
    EP: {
      items: [
        {
          title: "",
          description:
            "We offer a range of ERP services including system implementation, customization, integration, and ongoing support. Our expertise spans across various platforms, ensuring a tailored solution for your business needs.",
          link: "",
        },
      ],
    },
    SF: {
      items: [
        {
          title: "Salesforce Sales Cloud",
          description:
            "Enhance sales productivity and revenue growth with Salesforce Sales Cloud. Utilize real-time insights and streamlined processes to accelerate deal closures and boost pipeline management.",
          link: "/services/enterprise-platforms/salesforce/salesforce-sales-cloud",
        },
        {
          title: "Salesforce Service Cloud",
          description:
            "Improve customer satisfaction with Salesforce Service Cloud. Optimize support operations with Praval’s expertise, delivering efficient case management and automated workflows.",
          link: "/services/enterprise-platforms/salesforce/salesforce-service-cloud",
        },
        {
          title: "Salesforce Marketing Cloud",
          description:
            "Boost marketing effectiveness with Salesforce Marketing Cloud. Leverage marketing automation, personalized journeys, and analytics to enhance customer engagement and conversions.",
          link: "/services/enterprise-platforms/salesforce/salesforce-marketing-cloud",
        },
        {
          title: "Salesforce Commerce Cloud",
          description:
            "Deliver seamless shopping experiences with Salesforce Commerce Cloud. Increase conversions & customer engagement through an optimized, omni channel e-commerce strategy.",
          link: "/services/enterprise-platforms/salesforce/salesforce-commerce-cloud",
        },
        {
          title: "Salesforce Data Cloud",
          description:
            "Unify customer data with Salesforce Data Cloud. Enhance decision-making and growth by aligning your organization around a comprehensive customer view.",
          link: "/services/enterprise-platforms/salesforce/salesforce-data-cloud",
        },
         {
          title: "Mulesoft",
          description:
            "With the power of MuleSoft’s Anypoint Platform, Praval’s MuleSoft Consulting Services enables organizations to enhance operational efficiency and accelerate digital transformation.",
          link: "/services/enterprise-platforms/salesforce/mulesoft",
        },
         {
          title: "Analytics & AI(Einstein)",
          description:
            "Empower your business with Salesforce Einstein. Utilize AI for lead scoring, predictive forecasting, and data-driven insights to enhance performance and drive results.",
          link: "/services/enterprise-platforms/salesforce/analytics-ai",
        },
      ],
    },
    SFSC: {
      items: [
        {
          title: "Service Cloud Consulting",
          description:
            `The brief described the platform. Did it describe the people using it?\nOur Salesforce Service Cloud consulting starts with your agents, your escalation paths, and your actual service model not a slide deck of platform features. We close the gap between what the platform can do and what your team will actually use.`,
          link: "",
        },
        {
          title: "Service Cloud Integration Solutions",
          description:
            "The platform is only as useful as the data it can see. A service agent working from incomplete data makes worse decisions regardless of the platform. Our Service Cloud integration practice connects CRM and ERP systems alongside broader back-office data via Salesforce MuleSoft integration and API-led connectivity consulting.",
          link: "",
        },
        {
          title: "Service Cloud Migration",
          description:
            "The problems your team didn't know to brief us on. Our Service Cloud maintenance and support keeps your instance current and your team capable bug resolution, feature updates, ongoing enhancements, handled by people who already know how your instance was built.",
          link: "",
        },
        {
          title: "Application Maintenance and Support",
          description:
            "AI your agents will actually use. Not a feature nobody asked for.\nOur Salesforce Einstein Copilot services configure Next Best Action, intelligent case routing, and AI-driven recommendations around your actual service workflows trained on your data, not the out-of-the-box defaults.",
          link: "",
        },
        {
          title: "Ongoing Service Cloud Maintenance and Support",
          description:
            "A dashboard nobody reads isn't a deliverable worth counting.\nOur Tableau AI implementation builds reporting that service managers act on metrics tied to the decisions your team makes daily, not the ones that looked good in the demo.",
          link: "",
        },
      ],
    },
    SMC: {
      items: [
        {
          title: "Implementation",
          description:
            "The setup is the easy part. The adoption question is harder.\n\nOur Salesforce Marketing Cloud implementation starts with your marketing team's actual workflows not a feature checklist. We configure for the journey your customers need, not the one the platform demo suggested.",
          link: "",
        },
        {
          title: "Migration",
          description:
            "What your last platform got right — and what it didn't — is the brief.\n\nOur Marketing Cloud migration process begins with an honest audit of what was built before campaign logic, data structure, audience definitions. We carry forward what worked. We don't migrate the mistakes.",
          link: "",
        },
        {
          title: "Consulting",
          description:
            "What do you want your customer to do differently after receiving this?\n\nOur Salesforce Marketing Cloud consulting starts with that question. The answer shapes segmentation, journey design, Marketing Cloud personalisation, and measurement. Strategy first. Platform second.",
          link: "",
        },
        {
          title: "Integration",
          description:
            "The customer who just complained shouldn't get your promotional email an hour later.\n\nOur Marketing Cloud integration connects Sales Cloud, Service Cloud, and Salesforce Data Cloud in real time so suppression logic, case status, and purchase history reach your journeys before they fire. Not after.",
          link: "",
        },
        {
          title: "Product Customization",
          description:
            "Off-the-shelf works until your business doesn't fit the shelf.\n\nCustom content blocks, preference centres, branded unsubscribe flows, and progressive profiling forms built for the specific customer experience your brand needs, not the default templates.",
          link: "",
        },
        {
          title: "Support & Maintenance",
          description:
            "The questions your team didn't know to ask at go-live.\n\nOur Marketing Cloud support and maintenance keeps your instance current, your data clean, and your team capable handled by people who already know how your instance was built and why every configuration decision was made.",
          link: "",
        },
        {
          title: "App Development & Maintenance",
          description:
            "The platform does a lot. Your business needs a few specific things.\n\nCustom apps, extensions, and integrations built within Marketing Cloud offer engines, real-time decisioning, bespoke journey triggers, progressive profiling forms, and branded unsubscribe flows. Built for the specific customer experience your brand needs, not the default templates the platform ships with.",
          link: "",
        },
      ],
    },
    SCC: {
      items: [
        {
          title: "Consulting",
          description:
            "Our Commerce Cloud consultants provide strategic guidance and expert solutions to help you fully leverage Salesforce Commerce Cloud’s features and capabilities, maximizing your e-commerce performance and business growth.",
          link: "",
        },
        {
          title: "Integration",
          description:
            "Our integration specialists expertly connect Salesforce Commerce Cloud with external systems like CRM, ERP, and marketing automation platforms, ensuring smooth data flow and enhancing operational efficiency.",
          link: "",
        },
        {
          title: "Implementation",
          description:
            "Our implementation specialists handle every technical detail from setup to launch, ensuring your Salesforce Commerce Cloud storefront is seamlessly built for a successful and smooth start.",
          link: "",
        },
        {
          title: "B2B Commerce Cloud",
          description:
            "Tailored specifically for B2B transactions, Salesforce Commerce Cloud provides wholesale and distribution businesses with scalable, customized solutions that drive efficiency and growth.",
          link: "",
        },
        {
          title: "B2C Commerce Cloud",
          description:
            "Salesforce B2C Commerce Cloud is designed to deliver tailored shopping experiences, personalizing every consumer interaction to boost engagement and drive conversions.",
          link: "",
        },
        {
          title: "Migration",
          description:
            "We manage the secure migration of your e-commerce data and systems to Salesforce Commerce Cloud, ensuring a smooth, efficient transition with minimal disruption to your business.",
          link: "",
        },
        {
          title: "Customization",
          description:
            "Our UI/UX specialists create intuitive interfaces and seamless navigation that align with your brand’s identity, delivering an engaging and optimized user experience for your customers.",
          link: "",
        },
        {
          title: "Customized UI/UX",
          description:
            "Our UI/UX specialists create intuitive interfaces and seamless navigation that align with your brand’s identity, delivering an engaging and optimized user experience for your customers.",
          link: "",
        },
        {
          title: "Annual Maintenance and Support",
          description:
            "Our maintenance and support teams deliver continuous technical assistance to ensure your Salesforce Commerce Cloud site runs smoothly and efficiently year-round.",
          link: "",
        },
        {
          title: "Application Development and Support",
          description:
            "Our expert developers create tailored features and functionalities to enhance your Salesforce Commerce Cloud storefront, ensuring it meets your specific business needs and goals for optimal performance.",
          link: "",
        },
      ],
    },
    SN: {
      items: [
        {
          title: "Implementation",
          description:
            "The purpose is to seamlessly deploy ServiceNow products tailored to meet your specific business needs. This includes both Greenfield and Brownfield implementations, carefully designed to align with the customer’s maturity level. The overall impact is an accelerated time-to-value, along with improved user adoption across the organization.",
          link: "",
        },
        {
          title: "Consultation",
          description:
            "The purpose is to provide strategic guidance that aligns ServiceNow solutions with your overall business goals. This includes process design, workflow optimization, and comprehensive maturity assessments to ensure continuous improvement. The impact is enhanced operational efficiency and sustainable scalability, enabling long-term business growth.",
          link: "",
        },
        {
          title: "Support",
          description:
            "The purpose is to ensure consistent platform performance and swift issue resolution. This includes comprehensive L1, L2, and L3 support, along with proactive monitoring and continuous enhancements. The impact is reduced downtime and improved user satisfaction, ensuring a reliable and efficient platform experience.",
          link: "",
        },
        {
          title: "Customization & Integration",
          description:
            "The purpose is to tailor the platform to meet unique business requirements and operational needs. This includes API integrations, custom application development, and legacy system migrations to ensure seamless connectivity and modernization. The impact is improved functionality and streamlined enterprise workflows, enabling greater efficiency and business agility.",
          link: "",
        },
        {
          title: "Roadmap Development & Advisory",
          description:
            "The purpose is to define a clear ServiceNow adoption strategy that supports your organization’s strategic direction. This includes roadmap creation, platform optimization plans, and the establishment of value realization metrics to measure success. The impact is long-term alignment with business growth objectives, ensuring sustained value and continuous improvement.",
          link: "",
        },
      ],
    },
    GS: {
      items: [
        {
          title: "Gainsight Implementation",
          description:
            "Our team creates and implements elegant product experiences through rapid ideation, prototyping and agile development at scale ensuring a successful lift-off.",
          link: "",
        },
        {
          title: "Gainsight Enablement",
          description:
            "Take your customer engagement to new heights with Gainsight’s-cutting edge Customer Success solution. Enable a unified customer experience across channels.",
          link: "",
        },
        {
          title: "Gainsight Administration",
          description:
            "Streamline tasks with smart alerts and guided workflows that embed Gainsight best practices.",
          link: "",
        },
        {
          title: "Gainsight Optimization",
          description:
            "We specialize in upgrading the processes involved in the customer data management keeping in mind the performance improvement of the system.",
          link: "",
        },
      ],
    },
  };

  const currentService = SERVICES_MAP[service] || SERVICES_MAP.DE;
  const isEP = service === "EP";

  return (
    <section className={`${isEP ? '' : 'md:py-12 pt-4'} bg-white`}>
      <div className="container mx-auto p-6 pb-10 bg-[#F1F1F1] md:bg-transparent md:py-0">
        <div className={`${isEP ? '' : 'grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-20 items-start'}`}>

          <div className={`${isEP ? '' : 'lg:sticky lg:top-32 h-fit'}`}>
            <h2 className={`text-lg md:text-5xl font-semibold text-primaryText ${isEP ? '' : 'md:pt-10'}`}>
              Our Services
            </h2>
          </div>

          <div className="space-y-8">
            {currentService.items.map((item, index) => {

              if (isEP) {
                return (
                  <div key={index} className="text-primaryText">
                    <p className="leading-relaxed text-lg py-4">
                      {item.description}
                    </p>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="
                    bg-white rounded-xl
                    border border-gray-100
                    p-8
                    lg:sticky
                    transition-all
                    md:pb-20
                    md:pr-25
                  "
                  style={{
                    top: "120px",
                    zIndex: index + 1,
                    boxShadow: "0px 0px 10px 0px #1E68B21A",
                  }}
                >
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-primaryText">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base lg:text-sm xl:text-base leading-relaxed mb-6 text-primaryText whitespace-pre-line">
                    {item.description}
                  </p>

                  {!["SFSC", "SMC", "SCC", "SN", "GS"].includes(service) && (
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 font-medium"
                      style={{ color: "#0F72B1" }}
                    >
                      Read More
                      <img
                        src="/images/rightArrowBlue.svg"
                        alt="Previous slide"
                        className="w-4 h-4"
                      />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
