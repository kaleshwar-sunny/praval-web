"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "15+", label: "Industries Served", subLabel: "Diverse sectors we’ve partnered" },
  { value: "98+", label: "Completed Projects", subLabel: "Delivered. Without exception" },
  { value: "100%", label: "Customers Satisfaction", subLabel: "Clients who stayed came back" },
  { value: "150+", label: "Customers Served", subLabel: "Relationships, not transactions" },
];

const testimonials = [
  {
    text: `Praval Migrator is exactly what your business has been searching for.`,
    author: "Roman Nedzelsky",
    role: "Microsoft MVP SharePoint consulting & M365 migration",
  },
  {
    text: `Our employees have access to the right information and file work reports on time.`,
    author: "Ramadji Domunande",
    role: "Sr. Director, IT Operations · Microsoft 365 migration",
  },
  {
    text: `Loved working with Team Praval. Our employees are happier than ever.`,
    author: "Stephanie Melilli",
    role: "Enterprise Communications",
  },
  {
    text: `Team Praval delivers! Our employees are more engaged and happier than ever with the Praval Intranet Suite.`,
    author: "Casey Ferrell",
    role: "Microsoft MVP",
  },
];

export default function CustomerSuccess() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  // Function to start the auto-scroll
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 2000);
  };

  // Function to stop the auto-scroll
  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Start auto-scroll on component mount
    startAutoScroll();

    // Cleanup on component unmount
    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <section className="hidden md:block py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl font-bold mb-4">
            Customer Success
          </h2>
          <p className="text-primaryText">
            Our superpower lies in our unwavering passion for technology and
            customer success. With approximately more than two years of
            experience in building digital engineering, data analytics and
            enterprise platforms solutions.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1.5fr] gap-12 items-start">
          {/* LEFT: Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  shadow-[0_0_15px_rgba(0,0,0,0.1)]
                  p-8
                  flex
                  items-center
                  gap-6
                "
              >
                <span className="text-4xl font-semibold text-primaryText">
                  {item.value}
                </span>
                <div className="text-left">
                  <span className="text-primaryText block">
                    {item.label}
                  </span>
                  {item.subLabel && (
                    <span className="text-xs text-primaryText block">
                      {item.subLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            {/* Testimonial Carousel */}
            <div 
              className="relative bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] px-10"
              onMouseEnter={stopAutoScroll}  // Stop on hover
              onMouseLeave={startAutoScroll}  // Restart when mouse leaves
            >
              <div className="relative min-h-[360px] md:min-h-[230px]">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-primaryText text-left relative top-5 -left-6">"</div>
                      <p className="text-sm md:text-base lg:text-sm text-primaryText leading-relaxed break-words text-left">
                        {item.text}
                      </p>
                    </div>
                      <div className="text-3xl md:text-4xl font-bold text-primaryText text-right relative bottom-5 -right-6">"</div>
                      <>
                      <p className="italic font-bold text-primaryText text-left">
                        {item.author}
                      </p>
                      <p className="italic text-sm text-primaryText text-left">
                        {item.role}
                      </p>
                      </>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots */}
            <div 
              className="flex gap-3 mt-4 justify-center"
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === active
                      ? "bg-[#0f72b1]"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}