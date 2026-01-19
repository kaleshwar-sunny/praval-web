export default function ClientLogosGrid() {
  const logos = [
    "/images/logos/ca-technologies.png",
    "/images/logos/digital-realty.png",
    "/images/logos/university-montana.png",
    "/images/logos/ntt-docomo.png",
    "/images/logos/adp.png",
    "/images/logos/american-integrity.png",

    "/images/logos/grant-thornton.png",
    "/images/logos/mercedes-benz.png",
    "/images/logos/burger-king.png",
    "/images/logos/puma.png",
    "/images/logos/trumark.png",
    "/images/logos/mann-hummel.png",

    "/images/logos/astrazeneca.png",
    "/images/logos/national-parks.png",
    "/images/logos/parsons-behle.png",
    "/images/logos/eating-recovery.png",
    "/images/logos/microsoft.png",
    "/images/logos/philadelphia-airport.png",
  ];

  return (
    <section className="bg-[#f6f6f8] lg:p-20 md:p-10 p-10">
      <div className="container mx-auto px-4">
        {/* Optional Heading */}
        <h2 className="text-3xl font-bold mb-10 text-left">
          Our Clients
        </h2>

        {/* Logo Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-6
          "
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                bg-white
                shadow-md
                transition
                flex
                items-center
                justify-center
                py-10 px-5
              "
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="max-h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
