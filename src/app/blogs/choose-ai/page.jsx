"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "toc", label: "Table of Contents" },
  { id: "whyDoBusi", label: "Why Do Businesses Use AI Chatbots?" },
  { id: "tips", label: "Essential Tips to Choose the Best Chatbot" },
  { id: "types", label: "Types of AI Chatbots" },
  { id: "benefits", label: "Key Benefits of Salesforce Einstein Bots" },
  { id: "conclusion", label: "Conclusion" },
];

export default function BlogPostPage() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
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
            <p className="text-white text-base md:text-lg relative inline-block">
              Blogs
              <span className="block h-[3px] w-1/2 bg-[#0F72B1] mt-1"></span>
            </p>
          </div>

          <h1 className="text-white text-xl md:text-4xl font-bold mt-4 max-w-4xl">
            Choosing the Right AI Chatbot for Your Business
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="md:col-span-2 space-y-10">

          {/* DESCRIPTION */}
          <div id="overview">
            <p className="text-primaryText text-sm md:text-base">
                As businesses increasingly embrace digital solutions to improve customer engagement and streamline operations, AI chatbots have become an essential tool in their toolkit. These smart bots can perform a wide array of tasks, from answering customer queries to automating repetitive processes, enabling businesses to operate more efficiently. However, with so many AI chatbot options available in the market, choosing the right one can be overwhelming. This guide will simplify the decision-making process by discussing key features, considerations, and tips to help you make the best choice for your business.
            </p>
          </div>

          {/* TABLE OF CONTENTS */}
          <div id="toc">
            <h2 className="text-lg md:text-3xl font-bold mb-4">Table of Contents:</h2>
            <ul className="text-sm md:text-base list-disc pl-5 space-y-2">
              <li>Why Do Businesses Use AI Chatbots?</li>
              <li>Essential Tips to Choose the Best Chatbot for Your Business</li>
              <li>How Salesforce Enhances AI Chatbot Capabilities</li>
              <li>Key Benefits of Salesforce Einstein Bots</li>
              <li>Future Trends in AI Chatbots</li>
              <li>Conclusion</li>
            </ul>
          </div>

          {/* WHAT YOU NEED */}
          <div id="whyDoBusi" className="mb-8 md:mb-18">
            <h2 className="text-lg md:text-3xl font-bold mb-4">
              Why Do Businesses Use AI Chatbots?
            </h2>
            <p className="text-sm md:text-base mb-4">Businesses leverage AI chatbots for several key reasons:</p>
            <ul className="text-sm md:text-base list-disc pl-5 space-y-2">
              <li><b>Customer Service: </b> Lead generation, personalized recommendations, and transactions. They assist customers by suggesting relevant products and guiding them through the purchase process.</li>
              <li><b>Sales & Marketing: </b> Lead generation, personalized recommendations, and transactions. They assist customers by suggesting relevant products and guiding them through the purchase process. </li>
              <li><b>Internal Operations: </b> Streamlining HR and IT support. Chatbots help automate employee queries, simplifying workflows and reducing administrative burden. </li>
              <li><b>Cost Efficiency: </b> Automating repetitive tasks to optimize resource allocation. Businesses save on staffing costs while maintaining high service quality. </li>
            </ul>
          </div>

          {/* ESSENTIAL TIPS */}
          <div id="tips" className="mb-8 md:mb-18">
            <h2 className="text-lg md:text-3xl font-bold mb-4">
              Essential Tips to Choose the Best Chatbot for Your Business:
            </h2>

            <Image
              src="/images/essentialTips.png"
              alt="Tips"
              width={800}
              height={400}
              className="rounded-lg mb-4"
            />

            <ul className="text-sm md:text-base list-disc pl-5 space-y-2">
                <li><b>Define Purpose:</b> Identify whether it’s for customer support, sales, or internal use</li>
                <li><b>Understand Your Audience:</b> Tailor responses to user preferences to enhance engagement. </li>
                <li><b>Evaluate Features:</b>  Look for conversational flow, CRM integration, and multi-channel support to ensure versatility.  </li>
                <li><b>NLP Capabilities:</b> Ensure the chatbot understands diverse queries, including slang and regional dialects. </li>
                <li><b>Response Speed:</b> Prioritize instant replies for better engagement and user retention. </li>
                <li><b>Security & Compliance:</b> Verify adherence to industry security standards such as GDPR and ISO certifications to protect sensitive information. </li>
                <li><b>Seamless Integration:</b> Ensure compatibility with CRM, e-commerce platforms, and social media channels for a unified experience. </li>
                <li><b>Scalability & Customization:</b> Choose a chatbot that grows with your business and can be customized to reflect your brand identity. </li>
                <li><b>Value Proposition:</b> Align the chatbot with your brand’s goals and customer expectations to drive meaningful interactions. </li>
            </ul>
          </div>

          {/* TYPES */}
          <div id="types" className="mb-14 md:mb-18">
            <h2 className="text-lg md:text-3xl font-bold mb-4">Types of AI Chatbots:</h2>

            <ul className="text-sm md:text-base list-disc pl-5 space-y-3">
                <li>
                <b>Define Purpose:</b> Provides predefined options for structured interactions, guiding users through specific processes.
                </li>
                <li>
                <b>Linguistic Based:</b> Uses NLP to analyse and interpret complex user inputs for more dynamic conversations.
                </li>
                <li>
                <b>Evaluate Features:</b> Recognizes keywords to generate responses but may struggle with context-heavy queries.
                </li>
                <li>
                <b>Keyword-Based:</b> Ensure the chatbot understands diverse queries, including slang and regional dialects.
                </li>
                <li>
                <b>Response Speed:</b> Continuously learn and improve through interactions, making them ideal for evolving business needs.
                </li>
                <li>
                <b>Machine Learning Bots:</b> Ensure the chatbot understands diverse queries, including slang and regional dialects.
                </li>
                <li>
                <b>Security & Compliance:</b> Verify adherence to industry security standards such as GDPR and ISO certifications to protect sensitive information.
                </li>
                <li>
                <b>Hybrid Bots:</b> Combine rule-based and AI-driven capabilities to offer flexibility in handling diverse queries.
                </li>
                <li>
                <b>Voice Bots:</b> Utilize speech recognition for hands-free communication, ideal for customer service applications.
                </li>
            </ul>

            <Image
              src="/images/typesOfAI.png"
              alt="Types"
              width={800}
              height={400}
              className="rounded-lg mt-4"
            />
          </div>

          {/* BENEFITS */}
          <div id="benefits" className="mb-14 md:mb-18">
            <h2 className="text-lg md:text-3xl font-bold mb-4">
              Key Benefits of Salesforce Einstein Bots:
            </h2>

            <ul className="text-sm md:text-base list-disc pl-5 space-y-3">
                <li>
                <b>CRM Integration:</b> Access real-time customer data for personalized conversations.
                </li>
                <li>
                <b>Automated Case Deflection:</b> Resolve common inquiries before escalating them to human agents.
                </li>
                <li>
                <b>Lead Qualification:</b> Engage prospects and route high priority leads effectively.
                </li>
                <li>
                <b>Analytics & Insights:</b> Track performance metrics for continuous optimization.
                </li>
                <li>
                <b>Scalability:</b> Maintain efficiency as interaction volumes grow.
                </li>
            </ul>

            <Image
              src="/images/salesforceBots.png"
              alt="Benefits"
              width={800}
              height={400}
              className="rounded-lg mt-4"
            />
          </div>

          {/* CONCLUSION */}
          <div id="conclusion">
            <h2 className="text-lg md:text-3xl font-bold mb-4">Conclusion:</h2>
            <p className="text-sm md:text-base text-primaryText">
              As businesses increasingly embrace digital solutions to improve customer engagement and streamline operations, AI chatbots have become an essential tool in their toolkit. These smart bots can perform a wide array of tasks, from answering customer queries to automating repetitive processes, enabling businesses to operate more efficiently. However, with so many AI chatbot options available in the market, choosing the right one can be overwhelming. This guide will simplify the decision-making process by discussing key features, considerations, and tips to help you make the best choice for your business.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-l-[#d8d8d8] pl-6">
            <h3 className="text-xl font-semibold mb-4">
              Content Quick Links
            </h3>

            <ul className="space-y-3 text-[#0F72B1]">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:underline cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
    </div>
  );
}