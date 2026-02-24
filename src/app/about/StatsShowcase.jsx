export default function StatsShowcase() {
  const stats = [
    {
      value: ">15",
      title: "Industries Served",
      desc: "Diverse sectors we've partnered",
    },
    {
      value: "100%",
      title: "Client Satisfaction",
      desc: "Clients who stayed came back",
    },
    {
      value: ">98",
      title: "Completed Projects",
      desc: "Delivered. Without exception",
    },
    {
      value: ">150",
      title: "Clients Served",
      desc: "Relationships, not transactions",
    },
  ];

  return (
    <div
      className="w-full text-white"
      style={{
        background:
          "linear-gradient(102.86deg, #0F72B1 -71%, #F62626 222.29%)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-12 bg-white md:bg-transparent">
        
        {/* Top Stats (Desktop) */}
        <div className="hidden md:grid grid-cols-4 gap-10 mb-16">
            {stats.map((item, index) => (
            <div key={index} className="flex gap-4 min-w-0">
                {/* Number */}
                <h2 className="text-5xl font-semibold">
                {item.value}
                </h2>

                {/* Text */}
                <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold whitespace-nowrap">
                    {item.title}
                </h3>
                <p className="text-xs text-white mt-1 whitespace-nowrap">
                    {item.desc}
                </p>
                </div>
            </div>
            ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/value-image.png"
              alt="value"
              className="max-w-[300px] md:max-w-[400px]"
            />
          </div>

          {/* Title */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl md:font-medium md:text-white text-[#1D2833]">
              We deliver value at scale
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 pb-12 space-y-10 py-8 md:py-0">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl font-medium">{item.value}</h2>
            <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-white/80 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}