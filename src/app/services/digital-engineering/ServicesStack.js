export default function ServicesStack() {
  const services = [
    {
      title: "Digital Workplace Solutions",
      description:
        "Globally, with the emergence of new work patterns post COVID-19, it is essential for organizations to adopt and enable their workforce with the digital infrastructure.",
    },
    {
      title: "Low Code No Code Services",
      description:
        "Demand for faster development and delivery of solutions is ever scaling. The typical traditional application development can be tedious and resource intensive with frequent bottle necks.",
    },
    {
      title: "Azure Services",
      description:
        "Praval is your go to partner for Azure consulting services. Our Azure certified experts help businesses leverage the full potential of Microsoft Azure.",
    },
    {
      title: "Cloud Migration Services",
      description:
        "Most businesses have come to realize that they are losing out by holding on to legacy systems that come with high costs and complicated compliance.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div className="lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-semibold .text-primaryText md:pt-10">
              Our Services
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 p-8
                  lg:sticky transition-all md:pb-20 md:pr-50
                "
                style={{
                  top: "120px",
                  zIndex: index + 1,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 .text-primaryText">
                  {service.title}
                </h3>

                <p className="leading-relaxed mb-6" style={{color: "#1D2833"}}>
                  {service.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium"
                  style={{color: "#0F72B1"}}
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
