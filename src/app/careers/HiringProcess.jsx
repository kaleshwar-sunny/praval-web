"use client";

import Link from "next/link";

export default function HiringProcess() {
  const steps = [
    {
      number: "1",
      title: "Select the Position you want to Apply",
      desc: "Submit your application for the role that aligns with your skills and career aspirations. We’ll take a close look to see how you could be a great fit for our team.",
    },
    {
      number: "2",
      title: "Panel Interview by Hiring Team",
      desc: "Selected candidates will meet with senior team members to review their experience, skills, and potential contributions to the team.",
    },
    {
      number: "3",
      title: "Review & Finalization of Hired Candidates",
      desc: "After the interview, we’ll review your fit with our team and make the final hiring decision. We’ll keep you informed every step of the way.",
    },
  ];

  return (
    <div
      className="w-full py-12 px-6 text-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 38, 38, 0.17) 0%, rgba(15, 114, 177, 0) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Top Text */}
        <p className="text-base md:text-lg text-primaryText max-w-4xl mx-auto mb-16 leading-relaxed">
          Explore our easy three-step hiring process and see how we bring new talent on board.
          We’re excited to get to know your skills and what you’re aiming to achieve.
        </p>

        {/* Steps */}
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                    
                    {/* Connector Line (Desktop only) */}
                    {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-[110%] h-[1px] bg-[#F62626] z-0"></div>
                    )}

                    {/* Number Circle */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1072b1] text-white text-lg font-semibold z-10">
                    {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 md:mt-6 text-base md:text-lg font-semibold text-primaryText max-w-xs">
                    {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-primaryText text-sm md:text-base leading-relaxed max-w-xs">
                    {step.desc}
                    </p>
                </div>
                ))}
            </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-16 text-sm md:text-base text-primaryText italic">
          We are always on the lookout for talented people to join our team.{" "}
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F72B1] font-medium hover:underline"
            style={{color: "#0F72B1"}}
            >
            Follow us on LinkedIn!
          </Link>
        </p>

      </div>
    </div>
  );
}