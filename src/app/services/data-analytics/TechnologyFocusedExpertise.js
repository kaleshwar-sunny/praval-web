"use client";

const cards = [
  {
    title: "Cloud Modernization",
    description:
      "Migrating to the cloud is no longer an option; it’s a necessity for competitive businesses. We simplify the process, modernizing your infrastructure for optimal performance and agility.",
  },
  {
    title: "AI & ML",
    description:
      "Data is more than numbers; it’s the key to transformative decisions. Our expertise in data science and artificial intelligence enables us to turn your raw data into actionable insights.",
  },
  {
    title: "Real-Time Analytics",
    description:
      "In a fast-paced world, decisions can’t wait. Our real-time analytics solutions ensure you stay ahead of the curve by providing minute-by-minute insights.",
  },
  {
    title: "Data Visualization",
    description:
      "Complex data can be overwhelming, but it doesn’t have to be. We transform your raw data into compelling visuals that tell a story.",
  },
  {
    title: "Modern Data Platforms & Warehouses",
    description:
      "Your business deserves a data platform that evolves with your needs. Our modern data solutions are intelligent, scalable, and future-ready.",
  },
  {
    title: "Data Governance",
    description:
      "Data integrity isn’t optional—it’s essential. Our data governance solutions ensure your data is reliable, secure, and ready for decision-making.",
  },
];

export default function TechnologyFocusedExpertise() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-16 items-start">
          
          {/* LEFT: TITLE */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-lg md:text-5xl font-semibold text-primaryText leading-tight">
              Technology Focused Expertise:
              <br />
              Leading the way with Innovation
            </h2>
          </div>

          {/* RIGHT: CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
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

                <p className="text-sm leading-relaxed mb-4 text-primaryText">
                  {card.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium"
                  style={{ color: "#0F72B1" }}
                >
                  Read More 
                  <img
                    src="/images/rightArrowBlue.svg"
                    alt="Previous slide"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
