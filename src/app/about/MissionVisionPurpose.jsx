"use client";


export default function MissionVisionPurpose() {
  const data = [
    {
      title: "Our Mission",
      description:
        "To empower businesses by providing world-class technology services.",
      image: "/images/mission.png",
    },
    {
      title: "Our Vision",
      description:
        "To enable success through technology excellence.",
      image: "/images/vision.png",
    },
    {
      title: "Our Purpose",
      description:
        "Innovation, Quality, Unity, Equality, Integrity, Sustainability.",
      image: "/images/purpose.png",
    },
  ];

  return (
    <div className="w-full py-12 px-6 bg-[#1D2833] md:bg-[#FFFFFF]">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#212121] text-white rounded-md overflow-hidden shadow-md px-4 py-6"
          >
            {/* Image */}
            <div className="w-full h-58 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="py-6">
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Timeline Layout */}
     <div className="md:hidden max-w-md mx-auto relative text-white">
        {/* Vertical line */}
        <div className="absolute right-4 top-0 h-full w-[1px] bg-[#979797]"></div>

        <div className="space-y-10">
            {data.map((item, index) => (
            <div key={index} className="relative">
                
                {/* Text */}
                <div className="pr-12">
                <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                </h3>
                <p>
                    {item.description}
                </p>
                </div>

                {/* Step Indicator (centered on line) */}
                <div className="absolute right-4 top-2 translate-y-1/2 translate-x-1/2">
                <img
                    src="/images/shuriken.svg"
                    alt="step indicator"
                    className="w-7 h-7"
                />
                </div>

            </div>
            ))}
        </div>
     </div>
    </div>
  );
}