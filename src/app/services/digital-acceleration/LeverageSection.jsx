export default function LeverageSection() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-16">
          
          <div className="md:col-span-2">
            <h2 className="text-lg md:text-4xl font-semibold text-primaryText mb-6">
              Our leverage: Microsoft Power Platform
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-primaryText opacity-90">
              Praval experts will help minimize the need for extensive coding expertise 
              with the power platform tools in place. The complete stack of Microsoft 
              Power Platform enables businesses to transform their processes, enhance 
              productivity, and gain valuable insights. The Power Platform Ecosystem 
              puts the power of digital transformation directly into the hands of both 
              developers and non-technical users, making innovation more accessible 
              and rapid than ever before.
            </p>
          </div>

          <div className="md:col-span-1 flex justify-center md:justify-end">
            <img
              src="/images/power-platform-diagram.png"
              alt="Microsoft Power Platform"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}