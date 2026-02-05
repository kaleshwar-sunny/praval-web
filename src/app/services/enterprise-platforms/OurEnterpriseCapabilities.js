"use client";

export default function OurEnterpriseCapabilities() {
  const capabilities = [
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
  ];

  return (
    <section className="py-8 pb-18 md:py-20  bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-primaryText">
          Our Capabilities
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-8
                shadow-[0px_8px_10px_0px_#51A9E124]
                transition-transform
                hover:-translate-y-1
                md:pb-16
              "
            >
              <h3 className="text-xl font-semibold mb-4 text-primaryText">
                {item.title}
              </h3>

              <p className="leading-relaxed text-primaryText">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
