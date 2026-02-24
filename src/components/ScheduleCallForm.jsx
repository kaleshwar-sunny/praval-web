"use client";

export default function ScheduleCallForm() {
  return (
    <section className="relative mt-12 md:mt-0 py-12 text-left">
      {/* FULL BACKGROUND IMAGE */}
      <div
    className="absolute bg-black top-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/scheduleCall.png')"}}
    />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black/40 pointer-events-none" />

      <div className="relative container mx-auto px-6">
            <h2 className="text-base md:text-4xl font-bold mb-4 md:mb-12 text-white text-center">
              Schedule a call with our team today
            </h2>
        <div className="bg-[#F6F6F6] rounded-lg border border-[#F6F6F6]
      max-w-8xl w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Name*" />
              <Field label="Email*" type="email" />
              <Field label="Phone" />
              <Field label="Organization*" />
              <SelectField label="I have a question about:*" />
              <SelectField label="Location*" />

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-primaryText mb-1">
                        Message*
                    </label>
                    <textarea
                        rows="2"
                        className="w-full h-12 bg-white border border-gray-400 rounded-sm px-3 py-2
                                text-primaryText placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                hover:border-gray-400 transition-colors duration-150"
                    />
                </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <button className="bg-[#0F72B1] text-white px-10 py-3 rounded-sm hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* WHAT HAPPENS NEXT — DESKTOP ONLY */}
          <div className="hidden lg:block pl-8 border-l border-gray-300">
            <h3 className="text-xl font-semibold mb-8">
              What Happens Next?
            </h3>

            <Step number="01" text="Our team reach out to you." />
            <Step
              number="02"
              text="Our experts get in touch with you to understand your requirements."
            />
            <Step
              number="03"
              text="We discuss and propose project estimates and timelines."
              isLast
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function Field({ label, type = "text" }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input className="w-full bg-white border border-gray-400 rounded-sm px-3 py-2" />
    </div>
  );
}

function SelectField({ label, options = [] }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primaryText mb-1">
        {label}
      </label>
      <select 
        className="w-full border border-gray-400 rounded-sm px-3 py-2 
                   text-primaryText bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="" className="text-primaryText">Please select</option>
        {options.map((option, index) => (
          <option key={index} value={option.value} className="text-primaryText">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Step({ number, text, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Step circle with number */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-sm bg-gray-600 text-white flex items-center justify-center font-semibold z-10 relative">
          {number}
        </div>
        
        {/* Vertical connecting line */}
        {!isLast && (
          <div className="w-px h-full bg-gray-300 absolute top-10 left-5 bottom-0" />
        )}
      </div>
      
      {/* Step content */}
      <div className="pb-8">
        <p className="text-primaryText">{text}</p>
      </div>
    </div>
  );
}
