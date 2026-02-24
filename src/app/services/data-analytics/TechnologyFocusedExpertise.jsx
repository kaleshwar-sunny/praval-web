"use client";

import Link from "next/link";



export default function TechnologyFocusedExpertise({service}) {

  const SERVICES_MAP = {
    ML: {
        cards : [
            {
              title: "Explain Data",
              description: "Design and test integrations with a visual, drag-and-drop interface.",
              link: "",
            },
            {
              title: "Pre-Built Connectors",
              description: "Simplify connectivity with ready-made connectors for numerous applications and technologies.",
              link: "",
            },
            {
              title: "API Manager",
              description: "Secure and monitor APIs from a centralized platform.",
              link: "",
            },
            {
              title: "CloudHub",
              description: "Deploy Mule applications on a fully managed, cloud-based integration platform (iPaaS).",
              link: "",
            },
            {
              title: "DataWeave",
              description: "Transform and map data efficiently between different formats.",
              link: "",
            },
        ]
    },
    AA: {
        cards : [
          {
            title: "Explain Data",
            description:
              "Automatically uncover the “why” behind your data points with actionable explanations.",
            link: "", 
          },
          {
            title: "Ask Data",
            description:
              "Query data using natural language and get instant, accurate insights.",
            link: "",
          },
          {
            title: "Data Stories",
            description:
              "Create narratives from data visualizations, highlighting trends and key insights.",
            link: "",
          },
          {
            title: "Einstein Discovery",
            description:
              "Empower users to build custom machine learning models without coding.",
            link: "",
          },
          {
            title: "Model Builder",
            description:
              "Empower users to build custom machine learning models without coding.",
            link: "",
          },
          {
            title: "Automated Data Preparation",
            description:
              "Simplify the data preparation process for faster, more efficient analysis.",
            link: "",
          },
      ]
    },
    SMC: {
        cards : [
          {
            title: "Step 1 · Before the build, a customer data model conversation.",
            description:
              "Journeys are only as good as the data beneath them.\n\nEvery Salesforce Marketing Cloud implementation we run begins with a data audit what exists, where it lives, how clean it is, and what's missing. Journey Builder can't personalise from incomplete data. We find the gaps before the build starts, not after the first campaign goes out.",
            link: "", 
          },
          {
            title: "Step 2 · Journey design before platform configuration.",
            description:
              "Map the customer journey first. Then open the platform.\n\nAs your Salesforce Marketing Cloud partner, we map customer journeys from the customer's perspective first what they receive, when, through which channel, and what behaviour we're trying to change. Journey Builder implementation follows from that map. Not from a platform template.",
            link: "",
          },
          {
            title: "Step 3 · Testing that reflects real audience behaviour.",
            description:
              "A journey that works in the sandbox isn't a journey that works.\n\nAs a Salesforce Marketing Cloud partner in India and the USA, we test with real data segments, real send volumes, and real edge cases. Email Studio deliverability, personalisation logic, suppression lists, preference centres — all verified before a single message reaches a live audience.",
            link: "",
          },
          {
            title: "Step 4 · Adoption is part of the scope.",
            description:
              "A platform your marketing team works around is a platform that failed.\n\nCampaign playbooks, reporting dashboards built for the decisions your team makes daily, and a hypercare period where the people who built the system are available when the real questions arrive. Done means your team uses it confidently.",
            link: "",
          },
      ]
    },
    default: {
        cards : [
          {
            title: "Cloud Modernization",
            description:
              `Outdated Infrastructure Holds You Back. \n
               Enterprise cloud transformation isn't a milestone. It's a decision. Whether that's AWS data migration, Azure cloud migration, or a full cloud modernization, the conversation starts with what the business needs to be capable of, not which platform wins the pitch.`,
            link: "/services/data-analytics/cloud-modernization", 
          },
          {
            title: "AI & ML",
            description:
              `The insight is already in your data. \n
              Most firms are sitting on answers they haven't thought to look for. Our AI consulting services and machine learning solutions surface those answers, and turn them into predictive analytics the team can actually act on.`,
            link: "/services/data-analytics/ai-ml",
          },
          {
            title: "Real-Time Analytics",
            description:
              `Delayed Decisions Rely on Old Data. \n
              Our real-time analytics solutions are built for the moment a decision needs to be made, not the morning after. The businesses moving fastest aren't the ones with the most data. They're the ones acting on it sooner.`,
            link: "/services/data-analytics/realtime-analytics",
          },
          {
            title: "Data Visualization",
            description:
              `A dashboard nobody reads is a report nobody asked for. \n
              Good data visualization services don't make data look attractive. They make the right thing impossible to miss.`,
            link: "/services/data-analytics/data-visualization",
          },
          {
            title: "Modern Data Platforms & Warehouses",
            description:
              `The platform should grow with the business. Not the other way around. \n
              Scalable modern data platform solutions built for where the business is going. With data warehouse consulting that still makes sense two years after go-live, not just at sign-off.`,
            link: "/services/data-analytics/mdp-warehouses",
          },
          {
            title: "Data Governance",
            description:
              `Decisions are only as good as the data behind them. \n
              Solid enterprise data governance solutions don't assume trust in data. They build it, through the right architecture, the right access controls, and the right habits.`,
            link: "/services/data-analytics/data-governance",
          },
      ]
    },
  };
  
  const currentService = SERVICES_MAP[service] || SERVICES_MAP.default;

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-16 items-start">
          
          <div className="lg:sticky lg:top-32">
            <h2 className="text-lg md:text-5xl font-semibold text-primaryText leading-tight">
              {{
                SMC: "Four moments where Marketing Cloud implementations succeed or fail",
                ML: "Key Features Of MuleSoft Consulting",
                AA: "Top Features of Tableau AI + Analytics",
              }[service] || "Technology Focused Expertise: Leading the way with Innovation"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentService.cards.map((card, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-xl
                  shadow-[0_0_15px_rgba(0,0,0,0.05)]
                  border border-gray-100
                  p-8 md:pb-12
                "
              >
                <h3 className="text-base md:text-lg font-semibold mb-3 text-primaryText">
                  {card.title}
                </h3>

                <p className="text-s md:text-base leading-relaxed mb-4 text-primaryText whitespace-pre-line">
                  {card.description}
                </p>

              {!["SMC", "ML", "AA"].includes(service) && (
                <Link
                  href={card.link}
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
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
