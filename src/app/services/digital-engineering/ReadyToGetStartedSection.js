"use client";

export default function ReadyToGetStartedSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative group h-[260px] md:h-[400px] cursor-pointer">
        {/* Background Image */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
          style={{
            backgroundImage: "url('/images/ready-to-start-bg.png')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-center gap-6">
              <h2 className="text-white text-3xl md:text-4xl font-light">
                Ready to get started
              </h2>

              {/* Arrow */}
              <span
                className="
                  text-white text-4xl
                  transition-transform duration-500 ease-out
                  group-hover:translate-x-3
                "
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
