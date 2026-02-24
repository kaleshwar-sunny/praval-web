export default function PartnerWithPraval() {
  return (
    <section className="relative hidden md:block h-[950px] bg-white overflow-hidden">
      <div className="relative h-full container mx-auto px-10">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/praval-partner-bg.png')",
        }}
      />

        <h2 className="absolute top-10 left-10 text-5xl font-semibold text-primaryText">
          Partner With Praval
        </h2>

        <div className="absolute top-80 left-0 max-w-md">
          <h3 className="text-2xl text-primaryText mb-4">
            Customized Solutions
          </h3>
          <p className="text-base text-primaryText leading-relaxed">
            We understand that every business is different. Our tailored
            solutions are designed to meet your specific sales goals.
          </p>
        </div>

        <div className="absolute top-28 right-30 2xl:right-60 max-w-lg text-left">
          <h3 className="text-2xl text-primaryText mb-4">
            Proven Expertise
          </h3>
          <p className="text-base text-primaryText leading-relaxed">
            With years of experience in Salesforce implementations, Praval
            ensures a smooth & efficient transition to Sales Cloud.
          </p>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-left max-w-xl">
          <h3 className="text-2xl text-primaryText mb-4">
            Ongoing Support & Training
          </h3>
          <p className="text-base text-primaryText leading-relaxed">
            Beyond implementation, we provide continuous support and training
            to ensure your team is fully equipped to leverage Sales Cloud
            effectively.
          </p>
        </div>

      </div>
    </section>
  );
}