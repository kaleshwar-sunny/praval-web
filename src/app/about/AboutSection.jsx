"use client";

export default function AboutSection() {
  return (
    <section>
      
      {/* ================= FIRST SECTION ================= */}
      <div className="bg-[#F6F9FB] py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT TEXT */}
            <div className="text-primaryText space-y-6">
              <p className="text-sm md:text-base leading-relaxed">
                We started a new what? Regardless of size or industry, every
                business has the potential to flourish in the digital era.
                Praval embarked on a journey to make this vision a reality.
                Since our inception, we’ve been dedicated to helping businesses
                transform their operations, make data-driven decisions, and
                thrive in a world defined by constant change.
              </p>

              <p className="text-sm md:text-base leading-relaxed">
                Our team of seasoned professionals, data scientists, and
                technology enthusiasts brings a wealth of knowledge and
                experience to the table. We aim to break the ordinary and set
                new standards to lead.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/pentagon-grid.png"
                alt="About Praval"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECOND SECTION ================= */}
      <div className="py-8 md:py-4">
        <div className="container mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT TEXT */}
            <div className="space-y-6 text-primaryText">
              <h2 className="text-xl md:text-2xl font-medium md:mb-20">
                Let's turn your{" "}
                <span className="text-4xl md:text-5xl text-[#1072b1] font-bold">
                  vision
                </span>{" "}
                into a masterpiece.
              </h2>

              <p className="text-sm md:text-base leading-relaxed max-w-xl text-primaryText">
                We understand how crucial it is to stay ahead of the curve in
                the digital industry. To offer our clients innovative solutions
                that give them a competitive edge, we conduct ongoing research
                into new technologies, techniques, and strategies. Not only
                will you receive a service, but also a partner committed to
                your company's growth.
              </p>
            </div>

            {/* RIGHT IMAGE (HIDDEN ON MOBILE) */}
            <div className="hidden lg:flex justify-end">
              <img
                src="/images/vr-person.png"
                alt="Innovation"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}