"use client";

import { useState, useEffect } from "react";

const stats = [
  { value: "15+", label: "Industries Served" },
  { value: "98+", label: "Completed Projects" },
  { value: "100%", label: "Customers Satisfaction" },
  { value: "150+", label: "Customers Served" },
];

const testimonials = [
  {
    text: `Do you have any SharePoint migration need? Praval Migrator is exactly what your business has been searching for. Praval Migrator is great tool for everyone, who would like to get good results in reasonable time with report similar to the other products. Not only that – you can (similar to some other products) select PowerShell to be able to a) use templates with Praval commandlets and b) automate migration using PowerShell actions inside other workflows.`,
    author: "Roman Nedzelsky",
    role: "Microsoft MVP",
  },
  {
    text: `Praval Migrator is great tool for everyone, who would like to get good results in reasonable time with report similar to the other products.`,
    author: "Ramadji Domunande",
    role: "IT Operations & Security",
  },
  {
    text: `With the Intranet portal built by Praval, our employees, and members have access to the right information and file work reports on-time, boosting the overall productivity and accountability.`,
    author: "Ramadji Domunande",
    role: "IT Operations & Security",
  },
  {
    text: `Team Praval delivers! Our employees are more engaged and happier than ever with the Praval Intranet Suite.`,
    author: "Casey Ferrell",
    role: "Microsoft MVP",
  },
];

export default function CustomerSuccess() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-14 bg-white">
      <div className="container mx-auto px-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 md:mt-20">
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
                <span className="text-4xl font-bold text-primaryText">
                  {item.value}
                </span>
                <span className="text-primaryText">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT: Testimonial Carousel */}
          <div className="relative bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] p-10">
            {/* Quote */}
            <div className="relative min-h-[360px] md:min-h-[260px]">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-sm md:text-lg text-primaryText leading-relaxed mb-8">
                    <span className="text-4xl font-serif mr-2">“</span>
                    {item.text}
                    <span className="text-4xl font-serif ml-2">”</span>
                  </p>

                  <p className="italic text-primaryText">
                    {item.author}, {item.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-3 mt-10 justify-center">
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