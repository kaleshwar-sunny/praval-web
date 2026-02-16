"use client";

export default function CloudInfrastructureSection() {
  const steps = [
    {
      title: "Streamline Operations",
      description:
        "Simplify workflows with integrated cloud platforms.",
    },
    {
      title: "Enhanced Collaboration",
    },
    {
      title: "Business Continuity",
    },
  ];

  return (
    <section className="hidden lg:block py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-24 items-start">

          {/* LEFT COLUMN */}
          <div>

            {/* ===== MAIN TITLE (Above Step Indicator) ===== */}
            <h2 className="text-4xl leading-tight font-medium text-[#1D2833] mb-8">
              Empower Your <br/>
              Organization With Future - <br/>
              Ready Cloud Infrastructure
            </h2>

            {/* ===== STEP INDICATOR WRAPPER ===== */}
            <div className="relative">

              {/* Vertical Dotted Line */}
              <div className="absolute left-[3px] top-[22px] -bottom-10 border-l-2 border-dashed border-gray-300"></div>

              <div className="space-y-20">

                {steps.map((step, index) => {
                  return (
                    <div key={index} className="relative flex items-center gap-10 -left-1">

                      {/* Circle */}
                      <div
                        className={`
                          flex-shrink-0 rounded-full
                          ${index === 0 
                            ? "w-5 h-5 bg-[#0F72B1] -ml-0.5 mb-5"
                            : "w-2 h-2 bg-gray-300 mt-2 ml-1"}
                        `}
                      />

                      {/* Text */}
                      <div>
                        <h3
                          className={`
                            text-lg font-normal
                            ${index === 0
                              ? "text-[#1D2833]"
                              : "text-[#747372]"}
                          `}
                        >
                          {step.title}
                        </h3>

                        {step.description && (
                          <p className="text-[#4D4C4B] leading-relaxed max-w-xl">
                            {step.description}
                          </p>
                        )}
                      </div>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="h-full">
            <img
              src="/images/cloudInfra.jpg"
              alt="Cloud Infrastructure"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}