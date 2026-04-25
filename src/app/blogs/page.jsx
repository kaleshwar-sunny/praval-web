"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ✅ Static data (API-ready structure)
const categoriesData = [
  {
    title: "Digital Acceleration",
    items: [
      { subCat: "Digital Acceleration", link: "/blogs/digital-acceleration-blog" },
      { subCat: "Strategies to futureproof your internal communication plan", link: "/blogs/bicepBlog" },
      { subCat: "5 best ways to use an intranet for internal communication", link: "/blogs/intranet" },
    ],
  },
  {
    title: "Data Analytics",
    items: [
      { subCat: "A Data Intelligence Chatbot that lets every business user query enterprise databases in natural language - no SQL, no analysts, no waiting", link: "/blogs/chatbot-blog" },
      { subCat: "AI-Powered Invoice Processing & Reconciliation", link: "/blogs/ai-powered" },
      { subCat: "Transforming Logistics Operations with Data-Driven Solutions", link: "/blogs/logistics" },
      { subCat: "Repointing Power BI Reports Using REST API", link: "/blogs/power-bi" },
    ],
  },
  {
    title: "Platforms",
    items: [
      { subCat: "Revolutionizing Manufacturing with Salesforce", link: "/blogs/salesforce-blog" },
      { subCat: "Choosing the Right AI Chatbot for Your Business", link: "/blogs/choose-ai" },
      { subCat: "Revamping IT Service Management", link: "/blogs/servicenow-blog" },
      { subCat: "Driving Innovation for a Global Data Centre Industry Leader with ServiceNow Solutions", link: "/blogs/service-solution" },
    ],
  },
];

const blogsData = [
  {
    title: "Revamping IT Service Management",
    desc: "A global energy management company faced significant challenges with their IT service management processes.",
    image: "/images/blog1.png",
    link: "/blogs/servicenow-blog"
  },
  {
    title: "A Data Intelligence Chatbot",
    desc: "A Data Intelligence Chatbot that lets every business user query enterprise databases in natural language — no SQL, no analysts, no waiting.",
    image: "/images/blog2.png",
    link: "/blogs/chatbot-blog"
  },
  {
    title: "5 best ways to use an intranet",
    desc: "Most businesses and organizations place more emphasis on external communications than on internal communications. ",
    image: "/images/blog3.png",
    link: "/blogs/intranet"
  },
  {
    title: "AI-Powered Invoice Processing & Reconciliation",
    desc: "A logistics company was struggling with inefficiencies that impacted warehouse space utilization, operational flow, and cost control.",
    image: "/images/blog4.png",
    link: "/blogs/ai-powered"
  },
  {
    title: "Digital Engineering",
    desc: "There was a time when I would see screens like the ones below on my seniors’ workstations, used for either maintenance or enhancement purposes. ",
    image: "/images/blog5.png",
    link: "/blogs/digital-acceleration-blog"
  },
  {
    title: "Driving Innovation for a Global Data Centre",
    desc: "At Praval, we work alongside global associates and enterprise teams to tackle complex operational challenges.",
    image: "/images/blog6.png",
    link: "/blogs/service-solution"
  },
];

export default function BlogLayout() {
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
                Blogs
                <span className="block h-[3px] w-1/2 bg-[#0F72B1] mt-1"></span>
            </p>
            </div>
        </div>
        </section>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* LEFT: CATEGORIES */}
        <div className="border border-[#E4E4E7] rounded-lg p-5 h-fit md:h-full">
          <h2 className="text-lg font-semibold textPrimaryText mb-4">
            CATEGORIES
          </h2>

          {categoriesData.map((category, index) => (
            <div key={index} className="mb-3">
              
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(index)}
                className="flex justify-between w-full textPrimaryText"
              >
                {category.title}
                <span className="text-2xl">{openIndex === index ? "⌄" : "›"}</span>
              </button>

              {/* Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <ul className="pl-4 space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className="text-sm textPrimaryText"
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0F72B1'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                      >
                        {item.subCat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: BLOGS */}
        <div className="md:col-span-3 border border-[#E4E4E7] rounded-lg p-5">
          <h2 className="text-lg font-semibold textPrimaryText mb-4">
            Latest Blogs
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