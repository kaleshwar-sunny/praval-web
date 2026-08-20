"use client";

import Image from "next/image";
import AutomationArchitectureDiagrams from "./AutomationArchitectureDiagrams.jsx";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "p1", label: "Phase 1: Establishing UI Test Automation" },
  { id: "p2", label: "Phase 2: Expanding Automation with Modern Frameworks" },
  { id: "p3", label: "Phase 3: Mobile Application Automation" },
  { id: "p4", label: "Phase 4: API Automation Testing" },
  { id: "p5", label: "Phase 5: Performance and Scalability Testing" },
  { id: "p6", label: "Phase 6: Security Testing Integration" },
  { id: "p7", label: "Phase 7: Containerized Testing Infrastructure" },
  { id: "p8", label: "Phase 8: Database Validation Automation" },
  { id: "tools", label: "Tools Layer for Database Automation" },~
  { id: "result", label: "The Result" },
];

export default function BuildingQAEcosystemLicenseFree() {
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
        {/* NOTE: placeholder banner path — replace with your real asset */}
        <Image
          src="/images/blogs/scalable-qa.svg"
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
            Building a Complete QA Ecosystem with License-Free Automation Tools
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">
          {/* OVERVIEW */}
          <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Scalable QA Ecosystem with License-Free Automation Tools</h2>

            <p className="text-sm md:text-base text-primaryText">
              In the early days of a fast-growing technology startup, the engineering team faced a
              familiar challenge: delivering high-quality software quickly while keeping operational
              costs low. The company needed a robust testing strategy but could not afford expensive
              enterprise testing tools.
            </p>
            <p className="text-sm md:text-base text-primaryText">
              Instead of investing in costly licenses, the team decided to build a modern Quality
              Engineering ecosystem using{" "}
              open-source and license-free automation tools.
            </p>
          </div>

          {/* PHASE 1 */}
          <div id="p1" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Phase 1: Establishing UI Test Automation
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The first priority was automating web application testing. The team implemented{" "}
              Selenium with Java to create a reliable automation framework.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Using TestNG, they structured test cases into organized suites and
              implemented parallel execution to reduce test runtime.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              To improve reporting and visibility, the team integrated{" "}
              Extent Reports, which generated interactive dashboards showing test
              results, screenshots, and execution logs. This allowed developers and product teams to
              quickly identify failures and track test stability.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              As the product evolved, the startup introduced modern UI automation frameworks to improve reliability and speed.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
            They adopted Playwright with Python, enabling faster and more stable cross-browser testing. Playwright allowed the team to test complex user workflows with built-in support for modern web technologies.            
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
            This combination of Selenium and Playwright allowed the startup to maintain both legacy automation coverage and next-generation testing capabilities.            </p>
          </div>

          {/* PHASE 2 */}
          <div id="p2" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Phase 2: Expanding Automation with Modern Frameworks
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              As the product evolved, the startup introduced modern UI automation frameworks to
              improve reliability and speed.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              They adopted <strong>Playwright with Python</strong>, enabling faster and more stable
              cross-browser testing. Playwright allowed the team to test complex user workflows with
              built-in support for modern web technologies.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              This combination of Selenium and Playwright allowed the startup to maintain both{" "}
              <strong>legacy automation coverage and next-generation testing capabilities.</strong>
            </p>
          </div>

          {/* PHASE 3 */}
          <div id="p3" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Phase 3: Mobile Application Automation
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              With the release of the company&rsquo;s mobile application, testing needed to expand
              beyond web platforms.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The team implemented Appium to automate testing across Android and iOS
              devices. Appium enabled them to reuse automation logic across multiple devices and
              platforms, ensuring consistent functionality and performance for mobile users.
            </p>
          </div>

          {/* PHASE 4 */}
          <div id="p4" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Phase 4: API Automation Testing</h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The startup&rsquo;s backend architecture relied heavily on microservices and APIs.
              Manual testing of APIs quickly became inefficient.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              To address this, the QA team implemented Rest Assured, enabling
              automated validation of REST APIs.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The framework allowed them to verify:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>API responses</li>
              <li>data validation</li>
              <li>authentication flows</li>
              <li>integration stability</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This significantly improved the reliability of backend services.
            </p>
          </div>

          {/* PHASE 5 */}
          <div id="p5" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Phase 5: Performance and Scalability Testing
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              As user traffic grew, the startup needed to ensure that its platform could handle high
              demand.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The engineering team adopted k6 to simulate thousands of concurrent
              users interacting with the system.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Test results were integrated with Grafana, enabling real-time
              monitoring of system performance metrics such as:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>response times</li>
              <li>error rates</li>
              <li>system throughput</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This allowed the team to identify bottlenecks before they impacted customers.
            </p>
          </div>

          {/* PHASE 6 */}
          <div id="p6" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Phase 6: Security Testing Integration
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Security became a priority as the company expanded its user base. The QA team
              incorporated OWASP ZAP into their testing pipeline.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              ZAP automatically scanned applications for common vulnerabilities such as:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>cross-site scripting (XSS)</li>
              <li>SQL injection</li>
              <li>insecure API endpoints</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This ensured that security testing became part of the continuous delivery process.
            </p>
          </div>

          {/* PHASE 7 */}
          <div id="p7" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Phase 7: Containerized Testing Infrastructure
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              To support scalable and consistent test environments, the startup leveraged{" "}
              Docker.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Docker allowed the team to:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>run test environments on demand</li>
              <li>isolate dependencies</li>
              <li>execute automation tests consistently across development, staging, and CI pipelines</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This eliminated environment-related failures and improved test reliability.
            </p>
          </div>

          {/* PHASE 8 */}
          <div id="p8" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Phase 8: Database Validation Automation
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The platform relied on data pipelines that moved information between multiple systems,
              including operational databases and analytics platforms.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              To ensure data accuracy, the team built a database validation automation framework
              using Python.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The environment was developed using PyCharm, enabling developers to
              write scalable validation scripts.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The automation framework validated data flows between:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Oracle Database (source transactional system)</li>
              <li>Azure Synapse Analytics (analytics platform)</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              The validation scripts automatically compared:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>source and target tables</li>
              <li>record counts</li>
              <li>column values</li>
              <li>transformation logic</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This ensured accurate data movement across enterprise systems.
            </p>

            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">
              Database Validation Use Cases in This Architecture
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The Python automation scripts can validate:
            </p>

            <h4 className="text-sm md:text-base mt-4 mb-2">
              1. Source vs Target Data Validation
            </h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Oracle Source Table &rarr; Target Table comparison</li>
            </ul>

            <h4 className="text-sm md:text-base mt-4 mb-2">2. Data Migration Testing</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Validate data moved correctly during ETL</li>
            </ul>

            <h4 className="text-sm md:text-base mt-4 mb-2">3. Transformation Validation</h4>
            <p className="text-sm md:text-base text-primaryText mb-2">Example:</p>
            {/* NOTE: monospace is an addition — the source template has no code style,
                but SQL and column values set in body prose are hard to read. */}
            <p className="text-sm md:text-base text-primaryText font-mono mb-1">
              Source: CUSTOMER_NAME = &quot;VENKAT&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText font-mono mb-2">
              Target: CUSTOMER_NAME = &quot;Venkat&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Verify transformation logic.
            </p>

            <h4 className="text-sm md:text-base mt-4 mb-2">4. Record Count Validation</h4>
            <p className="text-sm md:text-base text-primaryText font-mono mb-1">
              SELECT COUNT(*) FROM SOURCE_TABLE
            </p>
            <p className="text-sm md:text-base text-primaryText font-mono mb-2">
              SELECT COUNT(*) FROM TARGET_TABLE
            </p>

            <h4 className="text-sm md:text-base mt-4 mb-2">5. Data Integrity Checks</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Null validations</li>
              <li>Duplicate detection</li>
              <li>Column data type validation</li>
            </ul>
          </div>

          {/* TOOLS LAYER */}
          <div id="tools" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tools Layer for Database Automation
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-semibold pb-4">Tool</th>
                    <th className="text-left text-lg font-semibold pb-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-2">Python</td>
                    <td>Data validation scripting</td>
                  </tr>
                  <tr>
                    <td className="py-2">PyCharm</td>
                    <td>Development IDE</td>
                  </tr>
                  <tr>
                    <td className="py-2">Oracle DB</td>
                    <td>Source database</td>
                  </tr>
                  <tr>
                    <td className="py-2">SQL Queries</td>
                    <td>Data comparison</td>
                  </tr>
                  <tr>
                    <td className="py-2">Docker</td>
                    <td>Test environment</td>
                  </tr>
                  <tr>
                    <td className="py-2">CI/CD</td>
                    <td>Automated execution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* THE RESULT */}
          <div id="result" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Result</h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              By combining these license-free tools, the startup successfully built a{" "}
              <strong>complete end-to-end automation testing ecosystem.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">The benefits included:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Significantly reduced testing costs</li>
              <li>Faster test execution and release cycles</li>
              <li>Improved application stability and security</li>
              <li>Scalable testing infrastructure</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-4 mb-2">
              Below are clear architecture diagrams for each automation area in this license-free
              automation testing ecosystem. These diagrams illustrate how each tool fits into a
              typical CI/CD-based QA architecture used by startups and modern engineering teams.
            </p>
            <AutomationArchitectureDiagrams></AutomationArchitectureDiagrams>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-2">Content Quick Links</h3>

            <ul className="space-y-2 text-[#0F72B1] text-sm">
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
