"use client";


export default function CareerSection() {
  const contentItems = [
    {
      title: "Our Commitment",
      description: "Exceptional customer experience, quality and trust are the key commitments that Praval Tech shines on. Our customers believe in us that we stood up everytime and delivered the best results and so, the continued loyalty."
    },
    {
      title: "A Talent Powerhouse",
      description: "We house a team of talented individuals with diverse backgrounds and broader skill sets. Our people are unique in themselves and their contributions to the overall journey makes our customers empowered everyday."
    },
    {
      title: "Deep Expertise",
      description: "Our employees have a deep rooted expertise in all major technologies and tools that help us deliver world class solutions to our customers. With an average experience of 5+ years, each of them are always eager to learn, contribute and scale while all adhering to the best practices and industry standards."
    },
    {
      title: "Innovation Incorporated",
      description: "Our people are ever curious and ready to explore and deliver unique and innovative elements that surprise the users and win the customer's empathy. Our culture is such that we encourage such talents to unleash their full power of creativity by providing the right environment and encouragement."
    }
  ];

  return (
    <div className="w-full">
      {/* Top Hero Section */}
      <div
        className="w-full h-[300px] md:h-[585px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/career-bg.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-8xl">
          Choose extraordinary.
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            
            {/* Left - Button */}
            <div className="hidden md:flex md:items-start justify-center md:justify-start md:mt-4">
                <a href="/opportunities" className="inline-block md:mt-0 mt-auto">
                    <button className="flex items-center gap-3 bg-[#0F72B1] text-white px-4 py-3 rounded-full shadow-md hover:bg-[#3a91c6] transition cursor-pointer whitespace-nowrap">
                    Explore Opportunities
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                        <img
                        src="/images/arrow-right.svg"
                        alt="arrow"
                        className="w-10 h-10"
                        />
                    </span>
                    </button>
                </a>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              {contentItems.map((item, index) => (
                <div key={index}>
                  <h3 className="text-base md:text-xl font-semibold text-primaryText">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primaryText md:text-base md:text-base mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

                        {/* Bottom - Button */}
            <div className="md:hidden flex md:items-start justify-center md:justify-start md:mt-4">
                <a href="/opportunities" className="inline-block md:mt-0 mt-auto">
                    <button className="flex items-center gap-3 bg-[#0F72B1] text-white px-4 py-3 rounded-full shadow-md hover:bg-[#3a91c6] transition cursor-pointer whitespace-nowrap">
                    Explore Opportunities
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                        <img
                        src="/images/arrow-right.svg"
                        alt="arrow"
                        className="w-10 h-10"
                        />
                    </span>
                    </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}