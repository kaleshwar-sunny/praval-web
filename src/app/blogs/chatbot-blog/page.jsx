"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  {
    id: "problem",
    label: "The Problem: The Data Is There. The Access Isn't.",
  },
  {
    id: "solution",
    label: "The Solution: A Conversational Layer Over Your Database",
  },
  {
    id: "pipeline",
    label: "How It Works: The Pipeline, Step by Step",
  },
  {
    id: "design",
    label: "Key Design Decisions: Architecture That Stays Smart at Scale",
  },
  {
    id: "difference",
    label: "The Difference: Traditional Access vs. NL2SQL",
  },
  {
    id: "applies",
    label: "Where It Applies: Domain-Agnostic by Design",
  },
];

export default function ChatbotBlogPage() {
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
                src="/images/chatbot-blog.png"
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
                  A Data Intelligence Chatbot that lets every business user query enterprise databases in natural language — no SQL, no analysts, no waiting.
                </h1>
              </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">
          {/* OVERVIEW */}
          <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Overview:
            </h2>

            <p className="text-sm md:text-base text-primaryText">
              A Data Intelligence Chatbot that lets every business user query
              enterprise databases in natural language — no SQL, no analysts,
              no waiting.
            </p>
          </div>

          {/* PROBLEM */}
          <div id="problem" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Problem: The Data Is There. The Access Isn't
            </h2>

            <p className="text-sm md:text-base text-primaryText mb-2">
              Enterprise databases already hold the answers to most
              business-critical questions. The real barrier is access. Getting
              meaningful output requires SQL proficiency, schema knowledge, and
              an understanding of the business rules that govern how data should
              be interpreted.
            </p>

            <p className="text-sm md:text-base text-primaryText">
              For most business users, that barrier is insurmountable without
              help. Questions queue up, analysts get pulled into low-value query
              work, and decisions stall — waiting on data that already exists.
            </p>

            <p className="text-[#0F72B1] text-xl md:text-2xl font-bold mt-8">
              A question that should take 10 seconds ends up taking 2 days.
            </p>
          </div>

          {/* SOLUTION */}
          <div id="solution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Solution: A Conversational Layer Over Your Database
            </h2>

            <p className="text-sm md:text-base text-primaryText mb-3">
              The NL2SQL Data Intelligence Chatbot places a natural language
              interface directly in front of the database. A user types a
              question; the system works out what they're asking, identifies
              relevant data, generates and executes the correct query, and
              returns a clean, formatted result — with a chart if the data calls
              for one, and three suggested follow-up questions to guide further
              exploration.
            </p>

            <p className="text-sm md:text-base text-primaryText">
              Every query is governed by the organization's own business logic,
              applied consistently regardless of how the question is phrased or
              who is asking.
            </p>
          </div>

          {/* PIPELINE */}
          <div id="pipeline" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              How It Works: The Pipeline, Step by Step
            </h2>

            <ol className="list-decimal list-inside pl-6 space-y-3 text-sm md:text-base text-primaryText" style={{ listStyleType: 'decimal' }}>
              <li>
                <strong>Intent Classification :</strong> Is the user asking for
                a data lookup, a comparison, a trend, or a chart? The system
                classifies intent first to route the query correctly.
              </li>

              <li>
                <strong>Filter Grounding :</strong> Ambiguous terms and filter
                values are resolved against actual database values using
                semantic search before any SQL is generated.
              </li>

              <li>
                <strong>Table Identification :</strong> Relevant tables are
                identified using a lightweight catalogue of plain-English
                descriptions — only 1–3 tables are passed forward, not the full
                schema.
              </li>

              <li>
                <strong>SQL Generation :</strong> A query is generated using
                full schema detail of selected tables, with all business rules
                applied automatically from configuration.
              </li>

              <li>
                <strong>Secure Execution :</strong> The query runs in strict
                read-only mode. Write operations are blocked at multiple layers
                before anything reaches the database.
              </li>

              <li>
                <strong>Result & Follow-Up :</strong> Results are returned as
                formatted tables with CSV download and inline charts, plus three
                contextual follow-up suggestions.
              </li>
            </ol>
          </div>

          {/* DESIGN */}
          <div id="design" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-8">
              Key Design Decisions: Architecture That Stays Smart at Scale
            </h2>

            <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
              <li>
                <strong>Two-Layer Metadata:</strong> A lightweight catalogue
                routes questions to relevant tables. Rich metadata with column
                definitions, synonyms, and formulas is loaded only for selected
                tables — keeping every stage focused.
              </li>

              <li>
                <strong>Business Logic as Config:</strong> All data rules —
                unit conventions, hierarchies, metric formulas, null handling —
                are encoded in config files. Domain experts update them without
                code changes; effects are instant.
              </li>

              <li>
                <strong>Filter Grounding:</strong> Natural language terms are
                resolved to canonical database values via semantic search before
                any SQL is built. Queries run on verified values, not
                assumptions.
              </li>

              <li>
                <strong>Intent Classification:</strong> Factual lookups, YoY
                comparisons, trend analysis, and chart requests are each
                handled by different pipeline branches — invoked automatically.
              </li>

              <li>
                <strong>Triple-Layer Security:</strong> Data safety doesn't rely
                on a single control. The system enforces read-only access at the
                connection level, the instruction level, and independently
                verifies every generated query for restricted keywords before
                execution.
              </li>
            </ul>

            <ol className="list-decimal pl-12 mt-6 space-y-3 text-sm md:text-base text-primaryText">
              <li>
                <strong>Connection Level :</strong> Database access is
                permanently restricted to read-only mode
              </li>

              <li>
                <strong>Instruction Level :</strong> The model is explicitly
                instructed to generate only read-based SQL
              </li>

              <li>
                <strong>Execution Level :</strong> Every query is scanned for
                CREATE, INSERT, UPDATE, DELETE, TRUNCATE before running
              </li>
            </ol>
          </div>

          {/* DIFFERENCE */}
          <div id="difference" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              The Difference: Traditional Access vs. NL2SQL
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-sm md:text-base text-primaryText">
              <li>
                <strong>CRM Integration:</strong> Access real-time customer data
                for personalized conversations.
              </li>

              <li>
                <strong>Automated Case Deflection:</strong> Resolve common
                inquiries before escalating them to human agents.
              </li>

              <li>
                <strong>Lead Qualification:</strong> Engage prospects and route
                high priority leads effectively.
              </li>

              <li>
                <strong>Analytics & Insights:</strong> Track performance metrics
                for continuous optimization.
              </li>

              <li>
                <strong>Scalability:</strong> Maintain efficiency as interaction
                volumes grow.
              </li>
            </ul>

            {/* COMPARISON CARD */}
            <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left text-xl font-semibold pb-6"></th>
                    <th className="text-left text-xl font-semibold pb-6">
                      Traditional BI / SQL
                    </th>
                    <th className="text-left text-xl font-semibold pb-6 text-[#0F72B1]">
                      NL2SQL Chatbot
                    </th>
                  </tr>
                </thead>

                <tbody className="text-lg">
                  <tr>
                    <td className="py-4">User Requirement</td>
                    <td>SQL knowledge & schema familiarity</td>
                    <td className="text-[#0F72B1]">Plain English</td>
                  </tr>

                  <tr>
                    <td className="py-4">Time to Answer</td>
                    <td>Hours, subject to analyst availability</td>
                    <td className="text-[#0F72B1]">
                      Seconds, fully self-service
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4">Business Rules</td>
                    <td>SQL knowledge & schema familiarity</td>
                    <td className="text-[#0F72B1]">
                      Encoded once, applied to every query
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4">Visualisation</td>
                    <td>SQL knowledge & schema familiarity</td>
                    <td className="text-[#0F72B1]">
                      Automatic, rendered inline
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4">Follow-Up Discovery</td>
                    <td>SQL knowledge & schema familiarity</td>
                    <td className="text-[#0F72B1]">
                      Suggested as clickable cards
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4">Business Logic Updates</td>
                    <td>SQL knowledge & schema familiarity</td>
                    <td className="text-[#0F72B1]">
                      Config file edit, instant effect
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* APPLIES */}
          <div id="applies" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Where It Applies: Domain-Agnostic by Design
            </h2>

            <p className="text-sm md:text-base text-primaryText mb-4">
              The chatbot works with any well-structured relational database.
              The core system stays the same across deployments — only the
              metadata catalogue and business logic configuration are adapted to
              the target domain.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">
              Content Quick Links
            </h3>

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