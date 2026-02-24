"use client";

const features = [
  {
    title: "Next Best Action",
    description:
      "Out-of-the-box Next Best Action surfaces recommendations built on Salesforce's default model. Most service organisations need it trained on their own case history, escalation patterns, and resolution data. Our Salesforce Einstein Copilot services configure NBA for the decisions your agents are actually making not a generic playbook.",
  },
  {
    title: "Intelligent Case Routing",
    description:
      "Routing rules that look clean in a slide fail when they meet actual queue behaviour. We build routing logic based on observed agent capacity, skill distribution, and escalation frequency not assumptions from the brief. Cases reach the right agent. Not after two reassignments.",
  },
  {
    title: "AI-Powered Chatbots",
    description:
      "Chatbots handle the right queries and reduce agent load when they're designed around actual query volume and complexity. Deployed without that understanding, they redirect the same calls with an extra step. We deploy chatbots after mapping where automation genuinely helps — and where it doesn't.",
  },
  {
    title: "Automated Article Recommendations",
    description:
      `Article recommendations that surface outdated content slow agents down. We configure knowledge base integration so what's recommended is current, relevant, and trusted by the team that has to use it.`,
  },
];

export default function EinsteinFeatures({
  title = "Einstein 1: The AI-Driven Solution for Enhanced Customer Service",
}) {
  return (
    <section className="bg-white py-4 md:py-12">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-lg md:text-4xl font-semibold text-primaryText mb-8 md:mb-16">
          {title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-14">

          {features.map((item, index) => (
            <div key={index} className="space-y-4">

              <h3 className="text-lg md:text-xl font-semibold text-primaryText">
                {item.title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-primaryText">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}