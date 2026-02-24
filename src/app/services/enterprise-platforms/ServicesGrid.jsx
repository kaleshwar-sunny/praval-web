"use client";

export default function ServicesGridStack({ service = "SFSC", title = "Our Services" }) {
  const SERVICES_MAP = {
    SFSC: {
      items: [
        {
          title: "Social Customer Service",
          description:
            "Engage with customers directly on popular social media platforms such as Facebook, Twitter, and LinkedIn. Convert social interactions into actionable support cases for seamless tracking and efficient resolution, enhancing your brand’s social presence and customer satisfaction.",
        },
        {
          title: "Custom Reports and Dashboards",
          description:
            "Develop custom reports and interactive dashboards to gain real-time insights into critical service metrics, including case volume, resolution times, and customer satisfaction scores. Leverage this data to drive informed decision-making and foster continuous improvement in your support processes.",
        },
        {
          title: "Omni-Channel Routing",
          description:
            "Guarantee that every customer inquiry reaches the most suitable agent, no matter the channel—be it email, web forms, chat, or others. Omni-channel routing enhances resource allocation and improves first-contact resolution rates, leading to higher customer satisfaction.",
        },
        {
          title: "Lightning Service Console",
          description:
            "Empower your agents with the Lightning Service Console, an intuitive and streamlined interface for managing customer cases and interactions. Centralizing all relevant customer data and tools into a single workspace boosts agent productivity and operational efficiency.",
        },
        {
          title: "Account and Contact Management",
          description:
            "Maintain comprehensive customer profiles within Service Cloud, including contact details, interaction history, and related cases. This 360-degree view enables personalized service delivery and facilitates effective trend analysis of customer issues.",
        },
        {
          title: "Automation",
          description:
            "Streamline repetitive tasks such as case assignment, ticket escalation, and customer notifications using robust automation tools like workflow rules and processes. Automating these processes frees up your agents to handle more complex issues, reduces manual errors, and enhances overall efficiency.",
        },
      ],
    },
    SCC: {
      items: [
        {
          title: "Order Management",
          description:
            "Salesforce Commerce Cloud provides a robust order management system to track orders, manage inventory, and process shipments and returns. This ensures streamlined operations and accurate order fulfillment for both B2B and B2C scenarios.",
        },
        {
          title: "Einstein AI Commerce",
          description:
            "Monitor and engage with customers across multiple social media platforms from a single, central dashboard, powered by Einstein AI.",
        },
        {
          title: "Content Management",
          description:
            "Create visually engaging email campaigns with ease using a library of templates and a user-friendly drag-and-drop editor.",
        },
        {
          title: "Headless Commerce",
          description:
            "Collect and unify data from various sources within the Salesforce Ecosystem into a centralized location for a seamless, data-driven experience.",
        },
        {
          title: "Developer Tools and APIs",
          description:
            "Target, manage, and optimize digital advertising campaigns across search engines, social media, and display networks for maximum reach and performance.",
        },
        {
          title: "Marketing & Campaign Management",
          description:
            "Integrate Marketing Cloud with Google Analytics 360 for enhanced insights, advanced audience segmentation, and more effective marketing campaigns.",
        },
      ],
    },
    SN: {
      items: [
        {
          title: "Social Customer Service",
          description:
            `Key Applications:
              IT Service Management (ITSM), IT Operations Management (ITOM), Security Operations (SecOps) & Strategic Portfolio Management (SPM).

              Purpose:
              Optimize IT operations, enable strategic decision-making, and improve service delivery.

              Impact:
              Enhanced IT performance, cost efficiency, and reduced incidents.`,
        },
        {
          title: "Customer Service Management",
          description: `Key Applications:
            Customer Service Management (CSM), Field Service Management (FSM).

            Purpose:
            Deliver exceptional customer experiences through streamlined issue resolution and proactive support.

            Impact:
            Increased customer satisfaction and retention.`,
        },
        {
          title: "HR Service Delivery",
          description: `Key Applications:
            HR Service Delivery (HRSD), Workplace Service Delivery (WSD).

            Purpose:
            Foster employee engagement through optimized service delivery.

            Impact:
            Improved productivity and reduced service request bottlenecks.`,
        },
        {
          title: "Custom App Development",
          description: `Key Applications:
            App Engine, Integration Hub.

            Purpose:
            Empower your organization to create custom applications and automate workflows.

            Impact:
            Accelerated innovation and improved process efficiency.`,
        },
        {
          title: "Industry Solutions",
          description: `Key Applications:
            Retail, Financial Services, Healthcare, Telecommunications.

            Purpose:
            Address industry-specific challenges with tailored ServiceNow solutions.

            Impact:
            Increased compliance, efficiency, and customer satisfaction.`,
        },
        {
          bgImage: "/images/ourOfferings.jpg",
        },
      ],
    },
  };

  const currentService = SERVICES_MAP[service] || SERVICES_MAP.SFSC;

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-lg md:text-5xl font-semibold text-primaryText mb-12">
          {title}
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {currentService.items.map((item, index) => (
            <div
              key={index}
              className={`
                rounded-xl
                border border-gray-100
                transition-all duration-500
                lg:sticky
                ${item.bgImage 
                  ? 'bg-cover bg-center bg-no-repeat md:h-[400px] hidden md:block' 
                  : 'bg-white p-8 md:pb-12'
                }
              `}
              style={{
                top: "10px",
                zIndex: currentService.items.length + index,
                boxShadow: "0px 0px 10px 0px #1E68B21A",
                ...(item.bgImage && {
                  backgroundImage: `url(${item.bgImage})`,
                }),
              }}
            >
              {!item.bgImage && (
                <>
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-primaryText">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed mb-6 text-primaryText whitespace-pre-line">
                    {item.description}
                  </p>
                </>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}