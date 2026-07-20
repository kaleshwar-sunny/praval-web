"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const blogsData = [
  {
    title: "Last-Mile Operations Copilot",
    image: "/images/blog6.png",
    link: "/case-studies/gen-ai"
  },
  {
    title: "Healthcare",
    image: "/images/Healthcare.svg",
    link: "/case-studies/healthcare"
  },
  {
    title: "Microsoft Copilot",
    image: "/images/Microsoft-copilot.svg",
    link: "/case-studies/microsoftCopilot"
  },
  {
    title: "Margin Leakage",
    image: "/images/blog1.png",
    link: "/case-studies/retail"
  },
  {
    title: "Demand Forecasting",
    image: "/images/latestInsights3.png",
    link: "/case-studies/fmcg"
  },
  {
    title: "Quality Control",
    image: "/images/blog3.png",
    link: "/case-studies/manufacturing"
  },
  {
    title: "Running a Global Community",
    image: "/images/blog4.png",
    link: "/case-study/globalCommunity"
  },
  {
    title: "ERC Upgrades",
    image: "/images/blog5.png",
    link: "/case-study/erc"
  },
  {
    title: "NPCA",
    image: "/images/blog6.png",
    link: "/case-study/npca"
  },
  // {
  //   title: "Financial Services",
  //   image: "/images/blog6.png",
  //   link: "/case-studies/financialServices"
  // },
  // {
  //   title: "Insurance",
  //   image: "/images/blog6.png",
  //   link: "/case-studies/insurance"
  // },
];

export default function CaseStudiesLayout() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full h-[350px] md:h-[450px]">
        <Image
            src="/images/blogHero.png"
            alt="Blog Banner"
            fill
            className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
            <div>
            <p className="text-white text-base md:text-6xl font-semibold relative inline-block">
                Case Studies
                <span className="block h-[3px] w-1/2 bg-[#0F72B1] mt-1"></span>
            </p>
            </div>
        </div>
        </section>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* RIGHT: BLOGS */}
        <div className="md:col-span-3 border border-[#E4E4E7] rounded-lg p-5">
          <h2 className="text-lg font-semibold textPrimaryText mb-4">
            Latest Case Studies
          </h2>

          {/* Scrollable Area */}
          <div className="max-h-[600px] overflow-y-auto no-scrollbar pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogsData.map((blog, index) => (
                <div key={index} className="space-y-3 mb-6">
                  
                  <div className="relative w-full h-[180px]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  <Link href={blog.link} className="block">
                    <h3 className="text-[#0F72B1] font-medium hover:underline">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-sm textPrimaryText">
                    {blog.desc}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}