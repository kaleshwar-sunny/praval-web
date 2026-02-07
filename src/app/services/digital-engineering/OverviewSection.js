export default function OverviewSection({service = ""}) {

  const contentMap = {
    "DE": `Digital Engineering goes beyond adopting new technologies; it requires a strategic approach. In order to succeed, businesses need to comprehend their long-term goals, adapt their digital strategies accordingly, and execute them in alignment with industry norms or even exceed them. By doing so, companies can establish themselves as leaders in their respective fields and exceed customer expectations.`,
    "DA": `Unlock the power of your data and turn your business goals into reality with our comprehensive suite of services and cutting-edge technology solutions. We combine strategy, implementation, and managed services to ensure you achieve unparalleled results. Whether you’re modernizing your cloud infrastructure, delving into AI and machine learning, or enhancing your data governance, we’ve got you covered.`,
    "EP": `Praval’s ERP solutions are designed to streamline business processes, enhance operational efficiency, and drive growth. Our comprehensive approach ensures seamless integration and optimization of your enterprise resources.`,
  };

  const serviceContent = contentMap[service];
  return (
    <section className="pt-8 md:pt-0 md:pb-12">
      <div className="container mx-auto px-6">
        <div>
          
          <h2 className="text-lg md:text-4xl md:text-5xl font-semibold text-primaryText">
            Overview
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-primaryText py-4">
            {serviceContent}
          </p>

        </div>
      </div>
    </section>
  );
}