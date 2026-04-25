"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "table-of-contents", label: "Table of Contents" },
  { id: "role-of-salesforce", label: "The Role of Salesforce in Manufacturing" },
  { id: "key-features", label: "Key Features" },
  { id: "benefits", label: "Benefits" },
  { id: "future", label: "The Future of Manufacturing with Salesforce" },
  { id: "conclusion", label: "Conclusion" },
];

export default function SalesforceBlogPage() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[350px] md:h-[450px]">
                  <Image
                  src="/images/salesforceBlog-hero.png"
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
                          Revolutionizing Manufacturing with Salesforce: The Future of Smart Factories
                      </h1>
                  </div>
              </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* OVERVIEW */}
          <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
            <p className="text-sm md:text-base text-primaryText">
              The manufacturing industry is evolving rapidly, with companies seeking smarter, more
              connected, and efficient solutions to meet the demands of Industry 4.0. Salesforce, a
              global leader in cloud-based CRM, has introduced powerful solutions tailored for
              manufacturers, helping them streamline operations, enhance customer relationships, and
              drive business growth.
            </p>
          </div>

          {/* TABLE OF CONTENTS */}
          <div id="table-of-contents" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "The Role of Salesforce in Manufacturing",
                "Key Features and Benefits of Salesforce for Manufacturing",
                "Result of Implementing Salesforce Manufacturing Cloud",
                "The Future of Manufacturing with Salesforce",
                "Conclusion",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ROLE OF SALESFORCE */}
          <div id="role-of-salesforce" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Role of Salesforce in Manufacturing
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-6">
              Manufacturers today face complex supply chains, fluctuating customer demands, and
              increasing competition. Salesforce provides an integrated platform that connects
              data, processes, and people, enabling manufacturers to make real-time decisions,
              automate workflows, and improve customer engagement.
            </p>

            {/* Sub-section 1 */}
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              1. Salesforce Manufacturing Cloud: A Game-Changer
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Manufacturing Cloud, a purpose-built solution for the industry, offers a centralized
              platform that integrates sales, operations, and customer service. Key benefits
              include:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText mb-6 list-disc pl-5">
              {[
                {
                  label: "Sales Agreements & Forecasting:",
                  desc: "Accurately predict demand by tracking sales agreements and historical data.",
                },
                {
                  label: "Sales Agreements & Forecasting:",
                  desc: "Enable better communication between sales, service, and operations teams.",
                },
                {
                  label: "Performance Insights:",
                  desc: "Use AI-driven analytics to make data-backed business decisions.",
                },
              ].map((item, i) => (
                <li key={i} className="pl-2">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>

            {/* Manufacturing Cloud diagram image */}
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src="/images/salesforce-manufacturing.png"
                alt="Salesforce Manufacturing Cloud Diagram"
                width={800}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Sub-section 2 */}
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3">
              2. AI and Automation with Salesforce Einstein
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Artificial Intelligence (AI) is transforming manufacturing by enabling predictive
              maintenance, automated workflows, and intelligent analytics. Salesforce Einstein AI
              enhances manufacturing operations by:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "Detecting production inefficiencies and predicting failures before they occur.",
                "Automating routine tasks, allowing employees to focus on high-value activities.",
                "Providing AI-driven insights to personalize customer interactions and improve engagement.",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Sub-section 3 */}
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3">
              3. Connected Supply Chains with IoT Integration
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-4">
              The Internet of Things (IoT) has revolutionized manufacturing by connecting machines,
              products, and systems to provide real-time data. Salesforce's IoT Cloud enables:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                { label: "Predictive Maintenance:", desc: "IoT sensors detect potential machine failures, reducing downtime." },
                { label: "Smart Inventory Management:", desc: "Real-time tracking of materials to optimize production." },
                { label: "Automated Alerts:", desc: "Instant notifications when there are disruptions in the supply chain." },
              ].map((item, i) => (
                <li key={i} className="pl-2">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>

            {/* Sub-section 4 */}
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3">
              4. Enhancing Customer Experience with Service Cloud and Customer 360
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-4">
              In today's competitive market, manufacturers must prioritize customer experience.
              Salesforce Service Cloud and Customer 360 offer:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                { label: "AI-Powered Chatbots:", desc: "Automate customer support for quick issue resolution." },
                { label: "Field Service Management:", desc: "Optimize scheduling, dispatching, and tracking of field technicians." },
                { label: "360-Degree Customer View:", desc: "Consolidate customer interactions across multiple channels, providing a complete picture of each customer." },
                { label: "Personalized Engagement:", desc: "Leverage data from multiple touchpoints to deliver customized experiences and proactive service." },
              ].map((item, i) => (
                <li key={i} className="pl-2">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>

            {/* Sub-section 5 */}
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3">
              5. Integration with Smart Manufacturing Systems
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Salesforce seamlessly integrates with leading ERP (Enterprise Resource Planning) and
              MES (Manufacturing Execution Systems), enabling manufacturers to:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "Synchronize production planning with real-time demand forecasting.",
                "Enhance shop floor visibility with real-time dashboards.",
                "Improve compliance tracking and quality assurance.",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Sub-section 6 */}
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3">
              6. Agentforce in Manufacturing
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Salesforce is continuously innovating to provide cutting-edge solutions for
              manufacturers. A recent addition to its suite of AI-powered tools is Agentforce,
              which enhances automation in customer service and operations. Key trends include:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                { label: "AI-Driven Virtual Agents:", desc: "Automate customer support for quick issue resolution." },
                { label: "Predictive Analytics for Sales and Inventory:", desc: "Leveraging machine learning to forecast demand and optimize stock levels." },
                { label: "Hyper-Personalization:", desc: "Using AI to deliver tailored recommendations and proactive service." },
                { label: "Advanced Workflow Automation:", desc: "Streamlining manufacturing operations by reducing manual interventions." },
              ].map((item, i) => (
                <li key={i} className="pl-2">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* KEY FEATURES */}
          <div id="key-features" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-4 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                {
                  label: "Sales Forecasting and Agreements:",
                  desc: "Manufacturing Cloud enables accurate demand forecasting by managing complex sales agreements and large orders. This visibility allows for better production planning and inventory management.",
                },
                {
                  label: "Account-Based Marketing:",
                  desc: "The platform facilitates targeted marketing campaigns by providing insights into customer behaviour, enabling personalized engagement strategies.",
                },
                {
                  label: "Configure, Price, Quote (CPQ):",
                  desc: "Salesforce streamlines the quoting process with guided selling and configurable products, ensuring accurate proposals and faster deal closures.",
                },
                {
                  label: "Field Service Management:",
                  desc: "The integration of Salesforce Field Service optimizes technician scheduling, dispatching, and asset tracking, leading to improved operational efficiency and customer satisfaction.",
                },
                {
                  label: "Field Service Management:",
                  desc: "The integration of Salesforce Field Service optimizes technician scheduling, dispatching, and asset tracking, leading to improved operational efficiency and customer satisfaction.",
                },
              ].map((item, i) => (
                <li key={i} className="pl-2">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* BENEFITS */}
          <div id="benefits" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Benefits</h2>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                { label: "Increased Operational Efficiency:", desc: "Streamline processes and reduce downtime." },
                { label: "Enhanced Customer Engagement:", desc: "Deliver personalized experiences with Customer 360." },
                { label: "Improved Demand Forecasting:", desc: "Use AI-driven insights for accurate sales and inventory planning." },
                { label: "Cost Reduction:", desc: "Minimize waste and optimize resource utilization." },
                { label: "Scalability:", desc: "Easily adapt to changing business needs and expand operations." },
              ].map((item, i) => (
                <li key={i} className="pl-2">
                    <strong>{item.label}</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* FUTURE */}
          <div id="future" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Future of Manufacturing with Salesforce
            </h2>
            <p className="text-sm md:text-base text-primaryText">
              As manufacturing continues to evolve, Salesforce is leading the way with innovations
              in AI, automation, and data analytics. By leveraging Manufacturing Cloud, IoT, and
              AI-driven insights, manufacturers can future-proof their operations and stay ahead in
              the digital era.
            </p>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Conclusion</h2>
            <p className="text-sm md:text-base text-primaryText">
              Salesforce is more than just a CRM; it is a strategic partner for manufacturers
              looking to embrace digital transformation. By implementing Salesforce solutions,
              manufacturers can enhance efficiency, improve customer relationships, and drive
              sustainable growth in an increasingly connected world.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">Content Quick Links</h3>
            <ul className="space-y-4 text-[#0F72B1] text-sm">
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