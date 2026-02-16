export default function RealTimeAnalyticsSection() {
  const topCards = [
    {
      title: "Enhanced Customer Experiences",
      desc: "Leverage real-time data to deliver personalized experiences by understanding customer preferences, anticipating their needs, and offering tailored solutions.",
    },
    {
      title: "Improved Operational Efficiency",
      desc: "Real-time analytics eliminates bottlenecks by identifying inefficiencies and automating decision-making processes, resulting in smoother workflows.",
    },
    {
      title: "Proactive Risk Management",
      desc: "Detect anomalies and address potential issues in real time to reduce downtime and enhance overall reliability.",
    },
    {
      title: "Competitive Advantage",
      desc: "With instant insights, you can outpace competitors by seizing opportunities faster and making smarter, data-driven decisions.",
    },
  ];

  const bottomCards = [
    {
      title: "Comprehensive Data Integration",
      desc: "Seamlessly integrate data from multiple sources—web traffic, IoT devices, CRM systems, and more—for a unified view of your operations.",
    },
    {
      title: "Customizable Dashboards",
      desc: "Visualize key metrics with intuitive dashboards tailored to your business needs, enabling faster interpretation of complex data.",
    },
    {
      title: "Advanced Predictive Analytics",
      desc: "Leverage AI-driven insights to forecast trends and anticipate future business scenarios with confidence.",
    },
    {
      title: "Scalable Architecture",
      desc: "Our analytics solutions scale effortlessly with your business growth and evolving data requirements.",
    },
    {
      title: "Real-Time Alerts & Monitoring",
      desc: "Receive automated alerts and continuous monitoring to proactively manage performance and risks.",
    },
  ];

  return (
    <section className="hidden md:block py-12 bg-white">
      <div className="container mx-auto px-6">

        <div className="mb-24">
          <h2 className="text-lg md:text-4xl font-semibold text-primaryText mb-12">
            How Real-Time Analytics Drives Business Growth
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {topCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 pb-16"
                style={{
                  boxShadow: "0px 3px 14px 0px #51A9E133",
                }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primaryText">
                  {card.title}
                </h3>
                <p className="md:text-base text-primaryText leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 items-start">

          <div className="md:col-span-1">
            <h2 className="text-lg md:text-4xl font-semibold text-primaryText leading-snug">
              Features of Our <br /> Real-Time <br /> Analytics Solutions
            </h2>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
            {bottomCards.map((card, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-3 text-primaryText">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-primaryText">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}