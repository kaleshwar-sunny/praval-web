"use client";

import { useEffect, useRef } from "react";

export default function ClientLogosGrid() {
  const logos = [
    "/images/logos/adp.png",
    "/images/logos/digital-realty.png",
    "/images/logos/forgent.png",
    "/images/logos/usAgency.png",
    "/images/logos/cso.png",
    "/images/logos/indorama.png",
    "/images/logos/northtek.png",
    "/images/logos/hubner.png",
    "/images/logos/sportfive.png",
    "/images/logos/puma.png",
    "/images/logos/trumark.png",
    "/images/logos/mann-hummel.png",
    "/images/logos/astrazeneca.png",
    "/images/logos/national-parks.png",
    "/images/logos/parsons-behle.png",
    "/images/logos/qatarAuthority.png",
    "/images/logos/microsoft.png",
    "/images/logos/philadelphia-airport.png",
  ];

  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Duplicate logos for seamless infinite scroll
    const scrollContent = container.querySelector('.scroll-content');
    
    // Reset scroll position
    scrollPositionRef.current = 0;
    container.scrollLeft = 0;

    const scroll = () => {
      if (!container) return;
      
      scrollPositionRef.current += 0.8; // Scroll speed
      
      // Reset position when reaching the end of first set
      const singleSetWidth = container.scrollWidth / 2;
      if (scrollPositionRef.current >= singleSetWidth) {
        scrollPositionRef.current = 0;
      }
      
      container.scrollLeft = scrollPositionRef.current;
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(scroll);

    // Pause on hover/touch
    const pauseAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const resumeAnimation = () => {
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    container.addEventListener("mouseenter", pauseAnimation);
    container.addEventListener("mouseleave", resumeAnimation);
    container.addEventListener("touchstart", pauseAnimation, { passive: true });
    container.addEventListener("touchend", resumeAnimation);
    container.addEventListener("touchcancel", resumeAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener("mouseenter", pauseAnimation);
      container.removeEventListener("mouseleave", resumeAnimation);
      container.removeEventListener("touchstart", pauseAnimation);
      container.removeEventListener("touchend", resumeAnimation);
      container.removeEventListener("touchcancel", resumeAnimation);
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

        {/* Mobile Auto-scrolling View */}
        <div className="md:hidden relative w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="scroll-content flex">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[140px] flex items-center justify-center py-4 px-3"
                >
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-h-12 w-30 object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[140px] flex items-center justify-center py-4 px-3"
                >
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}