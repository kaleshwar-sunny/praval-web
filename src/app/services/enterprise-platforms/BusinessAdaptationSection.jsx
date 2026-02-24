export default function BusinessAdaptationSection() {
  const cards = [
    {
      title: "Automate Sales Process",
      description:
        "Maintain a single source of truth for all customer interactions, ensuring consistent and informed engagement.",
    },
    {
      title: "Centralize Customer Information",
      description:
        "Maintain a single source of truth for all customer interactions, ensuring consistent and informed engagement.",
    },
    {
      title: "Leverage AI-Powered Insights",
      description:
        "Use Salesforce Einstein to predict sales trends, uncover new opportunities, and proactively address customer needs.",
    },
  ];

  return (
    <section className="py-12 md:pt-0 bg-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-lg md:text-4xl font-semibold text-primaryText mb-14">
          How a Business Can Adapt to Changes and Enhance Success
        </h2>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 transition-all duration-300 md:pb-12"
              style={{
                boxShadow: "0px 4px 5px 0px #51A9E133",
              }}
            >
              <h3 className="text-lg font-medium text-primaryText mb-4">
                {card.title}
              </h3>

              <p className="text-sm md:text-base text-primaryText leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}