"use client";

import { useEffect, useRef } from "react";

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

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.25;
    let animationFrameId;
    let isPaused = false;

    const scrollLogos = () => {
      if (!container || isPaused) return;

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }

      animationFrameId = requestAnimationFrame(scrollLogos);
    };

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleMouseEnter);
    container.addEventListener("touchend", handleMouseLeave);

    animationFrameId = requestAnimationFrame(scrollLogos);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleMouseEnter);
      container.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-[#f6f6f8] md:p-12 p-10 px-0">
      <div className="container mx-auto px-6">
        <h2 className="text-lg md:text-3xl font-bold mb-10 text-left">Our Clients</h2>

        {/* Desktop Grid View - With white background */}
        <div
          className="
            hidden
            md:grid
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

        {/* Mobile Auto-scrolling View - Smaller images, less gap */}
        <div
          ref={scrollContainerRef}
          className="
            md:hidden
            flex
            overflow-x-hidden
            space-x-4
            py-2
            cursor-pointer
          "
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                justify-center
                py-4 px-2
                flex-shrink-0
                min-w-[120px]
              "
            >
              <img
                src={logo}
                alt={`Client logo ${(index % logos.length) + 1}`}
                className="max-h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}