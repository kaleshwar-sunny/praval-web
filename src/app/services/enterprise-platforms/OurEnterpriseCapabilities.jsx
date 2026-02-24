"use client";

export default function OurEnterpriseCapabilities({service}) {

  const titles = {
    ML: 'Key Features Of MuleSoft Consulting',
    SDC: 'Salesforce Data Cloud Consulting',
    AA: 'Tableau AI + Analytics Consulting',
    SMC: 'Salesforce Marketing Cloud and Einstein 1 Platform',
    default: 'Our Capabilities'
  };

  const SERVICES_MAP = {
    AA: {
        capabilities : [
            {
              title: "Data Strategy Assessment",
              description:
                "Assess your current data landscape and develop a roadmap to harness AI and analytics for the greatest impact.",
            },
            {
              title: "AI-Powered Analytics Integration",
              description:
                "Implement Tableau AI within your existing systems, creating custom dashboards and visualizations that reveal actionable insights.",
            },
            {
              title: "Comprehensive Training",
              description:
                "Equip your team with the skills to maximize Tableau AI’s advanced analytics features.",
            },
            {
              title: "NLP Integration",
              description:
                "Enable conversational analytics for easier data access and collaboration.",
            },
            {
              title: "Custom AI Model Development",
              description:
                "Build tailored AI models that solve your specific business challenges using machine learning algorithms.",
            },
            {
              title: "Ongoing Support & Optimization",
              description:
                "Continually monitor, adjust, and enhance your AI-driven solutions to maximize ROI.",
            },
        ]
    },
    SMC: {
        capabilities : [
            {
              title: "Send-Time Optimisation",
              description: "AI analysis of individual customer engagement patterns to determine the optimal send time per recipient not a single blast time for the whole list. Configured around your audience's actual behaviour, not Salesforce's default send-time assumptions."
            },
            {
              title: "Einstein Content Selection",
              description:
                "Automatically surface the most relevant content images, offers, subject lines for each recipient. Configured for your content library and your segments, not a generic relevance model that doesn't know your product or your audience.",
            },
            {
              title: "Einstein Engagement Scoring",
              description:
                "Predict which customers are likely to engage, which are at risk of disengaging, and which need a different approach entirely. Scores configured for your product category and purchase cycle not a model that misclassifies your best customers as cold.",
            },
            {
              title: "Einstein Segmentation",
              description:
                "AI-driven segmentation that identifies patterns in customer behaviour your rule-based segments can't see. The segments that produce your best results are rarely the ones you'd have defined manually.",
            },
            {
              title: "Predictive Audiences",
              description:
                "Identify customers at risk of churn or ready to purchase before they signal it explicitly so your campaign reaches them at the right moment, not three weeks after the decision was already made.",
            },
            {
              title: "Einstein Journey Insights",
              description:
                "AI-powered recommendations that identify where customers drop off, which channels underperform, and where personalisation opportunities exist applied to your actual journey data, not industry benchmarks.",
            },
        ]
    },
    SDC: {
        capabilities : [
            {
              title: "Data Strategy & Roadmap",
              description:
                "We assess your current data infrastructure and develop a roadmap to fully leverage Salesforce Data Cloud.",
            },
            {
              title: "Data Strategy & Roadmap",
              description:
                "Our experts ensure smooth integration with existing systems, configuring Data Cloud to suit your unique needs.",
            },
            {
              title: "Customer 360 Solutions",
              description:
                "Build a comprehensive customer profile by unifying data across all touchpoints for a deeper understanding of customer behavior.",
            },
            {
              title: "Personalized Customer Engagement at Scale",
              description:
                "Establish a framework for data security, quality, and regulatory compliance.",
            },
            {
              title: "Insightful, Data-Driven Decision Making",
              description:
                "Gain valuable insights from your data through advanced analytics and reporting tools.",
            },
        ]
    },
    default: {
        capabilities : [
            {
              title: "Digital Strategy Development",
              description:
                "We create digital strategies aligned with your goals and industry trends.",
            },
            {
              title: "Technology Assessment & Roadmap",
              description:
                "We evaluate your tech, find opportunities, and map transformation strategy.",
            },
            {
              title: "Migration & Updates",
              description:
                "Seamless migration and updates services to keep system current.",
            },
            {
              title: "Integration Services",
              description:
                "Integration services to ensure seamless connectivity between systems.",
            },
            {
              title: "Implementation",
              description:
                "Efficient implementation of digital solutions to transform business operations.",
            },
            {
              title: "Managed Services",
              description:
                "Comprehensive managed services for ongoing support and optimization.",
            },
            {
              title: "Data Analytics",
              description:
                "Advanced data analytics services to drive informed decision-making.",
            },
        ]
    },
  };

  const currentService = SERVICES_MAP[service] || SERVICES_MAP.default;

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-lg md:text-5xl font-semibold mb-4 md:mb-12 text-primaryText">
          {titles[service] || titles.default}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentService.capabilities.map((item, index) => {
          const isLastItem = index === currentService.capabilities.length - 1;
          const itemsInLastRow = currentService.capabilities.length % 3;
          const isSingleInLastRow = isLastItem && itemsInLastRow === 1;
          
          return (
            <div
              key={index}
              className={`
                bg-white
                rounded-2xl
                p-8
                shadow-[0px_8px_10px_0px_#51A9E133]
                transition-transform
                hover:-translate-y-1
                md:pb-16
                ${isSingleInLastRow ? 'lg:col-start-2' : ''}
              `}
            >
              <h3 className="text-base md:text-xl font-semibold mb-4 text-primaryText">
                {item.title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-primaryText">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
