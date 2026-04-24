"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ✅ Static data (API-ready structure)
const categoriesData = [
  {
    title: "Digital Acceleration",
    items: [
      "A Guide to Social Intranets for boosting productivity",
      "Strategies to futureproof your internal communication plan",
      "5 Best migration tools for 2023 from Praval",
      "Easy Way to Automate Azure Resource Deployment",
      "Top 7 Features for Your Organization",
      "10 Essentials Your Content Management System Needs",
      "Fix Broken Links in Excel in SharePoint Migrations",
      "Role of Intranet in business for enhanced productivity",
      "5 best ways to use an intranet for internal communication",
    ],
  },
  {
    title: "Data Analytics",
    items: [
      "KQL Chronicles – Mastering Azure Log Analytics for Peak Performance",
      "Beyond Basic RAG: Modular, Multi-Source Querying with LangChain and Zero-Shot Agents",
      "Repointing Power BI Reports Using REST API",
      "Effortless Data Flow – PBI Paginated Reports to SharePoint",
      "Self-Healing Data Integration Pipelines with AI-Driven Anomaly Detection",
      "Transforming Logistics Operations with Data-Driven Solutions",
    ],
  },
  {
    title: "Platforms",
    items: [
      "Revolutionizing Manufacturing with Salesforce",
      "Salesforce Digital Labor: Empowering Workforces with Agentforce",
      "Choosing the Right AI Chatbot for Your Business",
      "Revamping IT Service Management",
      "Driving Innovation for a Global Data Centre Industry Leader with ServiceNow Solutions",
    ],
  },
];

const blogsData = [
  {
    title: "Revamping IT Service Management",
    desc: "A global energy management company faced significant challenges with their IT service management processes.",
    image: "/images/blog1.png",
  },
  {
    title: "Choosing the right AI Chatbot for your business",
    desc: "As businesses increasingly embrace digital solutions to improve customer engagement and streamline operations, AI chatbots have become an essential tool in their toolkit.",
    image: "/images/blog2.png",
  },
  {
    title: "Top 7 Features for Your Organization",
    desc: "For an organization to achieve successful growth it needs to communicate and engage with its employees on a regular basis.",
    image: "/images/blog3.png",
  },
  {
    title: "A Guide to Social Intranets for Boosting Productivity",
    desc: "For an organization to achieve successful growth it needs to communicate and engage with its employees on a regular basis.",
    image: "/images/blog4.png",
  },
  {
    title: "Revolutionizing Manufacturing with Salesforce: The Future of Smart Factories",
    desc: "The manufacturing industry is evolving rapidly, with companies seeking smarter, more connected, and efficient solutions to meet the demands of Industry 4.0.",
    image: "/images/blog5.png",
  },
  {
    title: "Select KQL Chronicles",
    desc: "Monitoring and analyzing logs is essential for understanding the health, performance, and security of cloud-based systems.",
    image: "/images/blog6.png",
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
                        href="/blogs/bicepBlog"
                        className="text-sm textPrimaryText"
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0F72B1'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                      >
                        {item}
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

                  <Link href="/blogs/blog-post" className="block">
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