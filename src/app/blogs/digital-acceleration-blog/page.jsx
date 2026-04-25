"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "microservices", label: "Monolithic to Microservices" },
  { id: "faqs", label: "FAQs to Application Experience Guides" },
  { id: "personalization", label: "Admin-Controlled to User Personalization" },
  { id: "apm", label: "IIS Logs to Application Performance Monitoring (APM)" },
  { id: "automation", label: "Cron Jobs to AI-Powered Automation" },
  { id: "identity", label: "Native User Management to Identity Providers" },
  { id: "final", label: "Final Thoughts" },
];

export default function DigitalEngineeringBlog() {
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
          src="/images/da-blogHero.png"
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
            Digital Acceleration
          </h1>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* OVERVIEW */}
          <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview:</h2>

            <p className="text-sm md:text-base text-primaryText mb-4">
              There was a time when I would see screens like the ones below on my seniors’ workstations, used for either maintenance or enhancement purposes. 
            </p>

            <p className="text-sm md:text-base text-primaryText mb-4">
              Back then, little did I know that those were the early days of Digital Transformation, a concept making waves across various industries. At its core, transformation means solving existing business problems in a more digitally optimized and future-ready way using the tools available at the time. While tools evolve over time, the fundamental concept of transformation remains the same.
            </p>

            {/* IMAGE CARDS */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 my-6">
              <Image
                src="/images/legacyUI.png"
                alt="Legacy UI"
                width={300}
                height={200}
                className="rounded-lg shadow"
              />

              <div className="bg-white shadow rounded-lg px-4 text-sm flex items-center">
                Classic ASP, where UI and backend logic existed together,
                requiring line-by-line interpretation.
              </div>

              <Image
                src="/images/codeUI.png"
                alt="Code UI"
                width={300}
                height={200}
                className="rounded-lg shadow"
              />
            </div>

            <p className="text-sm md:text-base text-primaryText mb-4">
              The shift from monolithic applications to microservices involves breaking down a large, tightly coupled system into smaller, independent services that communicate via APIs. This transition enhances scalability, flexibility, and deployment speed but also introduces challenges like distributed data management and inter-service communication.
            </p>

            <p className="text-sm md:text-base font-medium">
              To Summarize <br />
              Digital Transformation + Product Engineering ={" "}
              <span className="text-[#0F72B1] font-semibold">
                Digital Acceleration
              </span>
            </p>
          </div>

          {/* MICROSERVICES */}
          <div id="microservices" className="scroll-mt-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Monolithic to Microservices
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              As part of this transformation, software engineers have also embraced Product Engineering, where they fine-tune applications or products with detailed feature roadmaps, enhanced user experiences, and continuous improvements.
            </p>

            <p className="text-sm md:text-base mt-2">
              <b>Technologies include:</b> Pendo, WalkMe, Appcues, UserPilot, etc.
            </p>
          </div>

          {/* FAQS */}
          <div id="faqs" className="scroll-mt-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              FAQs to Application Experience Guides
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              While FAQs provide users with written answers to common questions, in-app experience guides proactively walk users through features, helping them solve problems in real time and offering contextual support within the app. This approach improves product adoption, reduces support dependencies, and enhances user experience. Additionally, these guides can be personalized based on user behavior and roles.
            </p>

            <p className="text-sm md:text-base mt-2">
              <b>Technologies include:</b> Pendo, WalkMe, Appcues, UserPilot, etc.
            </p>
          </div>

          {/* PERSONALIZATION */}
          <div id="personalization" className="scroll-mt-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Admin-Controlled to User Personalization
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              This evolution represents a shift from centralized, admin-controlled configurations to dynamic, personalized experiences tailored to each user’s preferences and behaviors. Examples include custom dashboards, targeted notifications, and adaptive user interfaces.
            </p>
          </div>

          {/* APM */}
          <div id="apm" className="scroll-mt-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              IIS Logs to Application Performance Monitoring (APM)
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              Traditionally, system monitoring relied on IIS logs, which involved manually analyzing log files. The shift to real-time application performance monitoring (APM) provides deeper insights into infrastructure health, application performance, user experience, and business metrics. These tools help detect performance issues, track dependencies, and optimize system performance proactively.
            </p>

            <p className="text-sm md:text-base mt-2">
              <b>Technologies include:</b> AppDynamics, Zabbix, Nagios, Prometheus,
              Grafana, Datadog, New Relic, etc.
            </p>
          </div>

          {/* AUTOMATION */}
          <div id="automation" className="scroll-mt-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Cron Jobs to AI-Powered Automation
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              The transition from simple time-based automation (Cron Jobs) to AI-driven intelligent agents allows for smarter decision-making systems that adapt to changing conditions, optimize workflows, and self-correct when needed.
            </p>

            <p className="text-sm md:text-base mt-2">
              <b>Technologies include:</b> TensorFlow, PyTorch, DialogFlow, OpenAI, Rasa, Azure AI.
            </p>
          </div>

          {/* IDENTITY */}
          <div id="identity" className="scroll-mt-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Native User Management to Identity Providers
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              It involves transitioning from managing user authentication, authorization, and data in-house, to using a specialized external service through built-in features and algorithms for improved security and threat detection to protect against cyber threats, reduce attack surfaces, and ensuring secure user access.
            </p>

            <p className="text-sm md:text-base mt-2">
              <b>Platforms include:</b> Auth0, Okta, ForgeRock, Entra ID, JumpCloud.
            </p>
          </div>

          {/* FINAL */}
          <div id="final" className="scroll-mt-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Final Thoughts
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              In all the above scenarios, it’s important to note that this isn’t just about transformation—it’s deeply coupled with feature engineering. The future looks even more exciting, with AI integration becoming a fundamental layer across software development. I believe AI is yet another layer seamlessly embedded into the classic architecture of UI, business logic, and data access layers.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">
              Content Quick Links
            </h3>

            <ul className="space-y-3 text-[#0F72B1] text-sm">
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