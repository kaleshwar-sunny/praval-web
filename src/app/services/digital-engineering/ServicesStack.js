export default function ServicesStack({ service = "DE" }) {
  const SERVICES_MAP = {
    DE: {
      items: [
        {
          title: "Digital Workplace Solutions",
          description:
            "Globally, with the emergence of new work patterns post COVID-19, it is essential for organizations to adopt and enable their workforce with the digital infrastructure.",
          link: "/services/digital-workplace",
        },
        {
          title: "Low Code No Code Services",
          description:
            "Demand for faster development and delivery of solutions is ever scaling. The typical traditional application development can be tedious and resource intensive with frequent bottle necks.",
          link: "/services/process-automation",
        },
        {
          title: "Azure Services",
          description:
            "Praval is your go to partner for Azure consulting services. Our Azure certified experts help businesses leverage the full potential of Microsoft Azure.",
          link: "/services/governance-security",
        },
        {
          title: "Cloud Migration Services",
          description:
            "Most businesses have come to realize that they are losing out by holding on to legacy systems that come with high costs and complicated compliance.",
          link: "/services/low-code",
        },
      ],
    },

    DA: {
      items: [
        {
          title: "Strategy Consulting",
          description:
            "Your business dreams deserve more than just plans; they need actionable strategies that drive results. With our strategy consulting, we analyze your data ambitions, align them with your organizational goals, and create a roadmap to success.",
          link: "/services/azure-consulting",
        },
        {
          title: "Implementation",
          description:
            "From design to deployment, we provide end-to-end implementation solutions customized to your unique requirements. Our expertise ensures a seamless transition from concept to execution.",
          link: "/services/azure-migration",
        },
        {
          title: "Managed Services",
          description:
            "Running a business means prioritizing growth, not grappling with technical challenges. With our managed services, we take care of your data environment so you can focus on scaling your operations.",
          link: "/services/azure-devops",
        },
      ],
    },

    EP: {
      items: [
        {
          title: "",
          description:
            "We offer a range of ERP services including system implementation, customization, integration, and ongoing support. Our expertise spans across various platforms, ensuring a tailored solution for your business needs.",
          link: "",
        },
      ],
    },
  };

  const currentService = SERVICES_MAP[service] || SERVICES_MAP.DE;
  const isEP = service === "EP";

  return (
    <section className={`${isEP ? '' : 'md:py-12 pt-4'} bg-white`}>
      <div className="container mx-auto p-6 pb-10 bg-[#F1F1F1] md:bg-transparent md:py-0">
        <div className={`${isEP ? '' : 'grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-20 items-start'}`}>

          <div className={`${isEP ? '' : 'lg:sticky lg:top-32 h-fit'}`}>
            <h2 className={`text-lg md:text-5xl font-semibold text-primaryText ${isEP ? '' : 'md:pt-10'}`}>
              Our Services
            </h2>
          </div>

          <div className="space-y-8">
            {currentService.items.map((item, index) => {

              if (isEP) {
                return (
                  <div key={index} className="text-primaryText">
                    <p className="leading-relaxed text-lg py-4">
                      {item.description}
                    </p>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="
                    bg-white rounded-xl
                    shadow-[0_0_15px_rgba(0,0,0,0.05)]
                    border border-gray-100
                    p-8
                    lg:sticky
                    transition-all
                    md:pb-20
                    md:pr-25
                  "
                  style={{
                    top: "120px",
                    zIndex: index + 1,
                  }}
                >
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-primaryText">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base lg:text-sm xl:text-base leading-relaxed mb-6 text-primaryText">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
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
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
