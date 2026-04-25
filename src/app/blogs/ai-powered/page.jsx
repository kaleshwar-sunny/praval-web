"use client";

import Image from "next/image";

const quickLinks = [
  { id: "challenge", label: "The Challenge" },
  { id: "core-problem", label: "The Core Problem: Traditional Methods Hit a Wall" },
  { id: "solution", label: "The Solution: A Conversational Layer Over Your Database" },
  { id: "architecture", label: "Architecture Overview" },
  { id: "key-entities", label: "Key Entities Extracted" },
  { id: "context-engineering", label: "Context Engineering — The Secret Sauce" },
  { id: "validation", label: "Validation & Reconciliation" },
  { id: "reporting", label: "Reporting & Stakeholder Visibility" },
];

export default function AiPoweredBlogPage() {
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
                      src="/images/ai-poweredHero.png"
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
                        AI-Powered Invoice Processing & Reconciliation
                      </h1>
                    </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* CHALLENGE */}
          <div id="challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Challenge: Why Invoice Processing Is Harder Than It Looks
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Invoices arrive in an enormous variety of formats, structures, and layouts. They're
              multi-page, table-heavy, and littered with image-based logos that defeat simple text
              extraction. Page breaks split line items mid-row. A single field like "Invoice Number"
              might appear as "Inv," "Inv #," or "Inv No." — and in a completely different location
              from one vendor to the next.
            </p>

            {/* Three cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                {
                  title: "Format Chaos",
                  desc: "Maintain a single source of truth for all customer interactions, ensuring consistent and informed engagement.",
                },
                {
                  title: "Split Line Items",
                  desc: "Page breaks slice through table rows, scattering related data across pages in unpredictable ways.",
                },
                {
                  title: "Inconsistent Labels",
                  desc: "Key fields use different names and appear in different locations, breaking rigid rule-based parsers.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-5 bg-white"
                  style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}
                >
                  <h3 className="font-semibold text-base mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CORE PROBLEM */}
          <div id="core-problem" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Core Problem: Traditional Methods Hit a Wall
            </h2>
            <p className="text-sm md:text-base text-primaryText">
              Traditional approaches force a choice between accuracy and scale. Manual review is
              accurate but slow; automation is fast but breaks on format variation. Organizations
              need both.
            </p>
          </div>

          {/* SOLUTION */}
          <div id="solution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Solution: An AI Pipeline Built for Real-World Invoices
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-6">
              Praval's AI-powered extraction system combines OCR, regex-based pattern matching, a
              centralized regex database, and context-aware LLM processing to handle invoice
              variability at scale — achieving over 98% accuracy across diverse formats.
            </p>

            {/* 4-step blue grid */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 bg-[#0F72B1] overflow-hidden">
              {[
                { num: "01", title: "Upload", desc: "Invoices land in a document repository" },
                { num: "02", title: "Extract", desc: "AI-powered data extraction" },
                { num: "03", title: "Validate", desc: "Reconciliation & cross-checking" },
                { num: "04", title: "Report", desc: "Stakeholder visibility & audit trail" },
              ].map((step, i) => (
                <div
                    key={step.num}
                    style={{
                        padding: "1.5rem",
                        color: "white",
                        borderRight: i < 3 ? "1px solid #a5a5a5" : "none"
                    }}
                >
                  <p className="text-3xl font-light mb-3">{step.num}</p>
                  <p className="font-semibold text-base mb-2">{step.title}</p>
                  <p className="text-sm text-blue-100">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ARCHITECTURE OVERVIEW */}
          <div id="architecture" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-8">
              Architecture Overview
            </h2>

            <div className="relative pl-8">
              {[
                { num: "01", title: "INGEST", desc: "Document repository pickup & preprocessing" },
                { num: "02", title: "OCR", desc: "Text extraction with layout awareness" },
                { num: "03", title: "PATTERN MATCH", desc: "Regex database identifies candidate values" },
                { num: "04", title: "LLM", desc: "Context-engineered AI resolves ambiguity" },
                { num: "05", title: "VALIDATE", desc: "Cross-check with system records" },
              ].map((step, index, array) => (
                <div key={step.num} className="relative" style={{ position: 'relative' }}>
                  <div className="flex items-start gap-6 mb-10 relative">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center z-10 relative" style={{ position: 'relative', zIndex: 10 }}>
                      <span className="text-[#0F72B1] text-xl font-bold">{step.num}</span>
                    </div>
                    <div className="pt-3">
                      <p className="font-bold text-base tracking-wide">{step.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Vertical line between numbers */}
                  {index < array.length - 1 && (
                    <div 
                      style={{
                        position: 'absolute',
                        left: '28px',
                        top: '56px',
                        bottom: '-40px',
                        width: '1px',
                        borderLeft: '2px dashed #d1d5db',
                        zIndex: 1
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* KEY ENTITIES */}
          <div id="key-entities" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Key Entities Extracted
            </h2>
            <ul className="list-disc pl-6 text-sm md:text-base text-primaryText space-y-1 mb-2">
              <li>
                The system identifies and extracts these critical fields from every invoice,
                regardless of format or layout:
              </li>
            </ul>
            <ul className="text-sm md:text-base text-primaryText space-y-1 mt-3" style={{paddingLeft: 25}}>
              {["Account Number", "Invoice Number", "Total Amount", "MRC", "Vendor Name", "Circuit ID"].map(
                (item) => (
                  <li className="mb-2" key={item}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* CONTEXT ENGINEERING */}
          <div id="context-engineering" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Context Engineering — The Secret Sauce
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              For straightforward fields like account number and total amount, instruction-based
              prompts guide the LLM to the right values. But complex identifiers — those appearing
              in multiple alphanumeric formats across line items — need a smarter approach.
            </p>

            {/* Code block */}
            <div className="bg-gray-50 md:py-8 mb-4 rounded-xl p-6 font-mono text-sm text-gray-800 space-y-3" style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}>
              <p className="text-gray-500 mb-8">// Hybrid extraction pipeline</p>
              <p>step_1: Scan document text for regex pattern matches</p>
              <p>step_2: Collect all candidate values</p>
              <p>step_3: Feed candidates + text + layout → LLM</p>
              <p>step_4: LLM resolves correct value using full context</p>
              <p className="text-gray-500 mt-8">// Result: Pattern precision + contextual intelligence</p>
            </div>

            <p className="text-sm md:text-base text-primaryText mt-5">
              This hybrid approach — combining pattern-based detection with contextual AI analysis
              — dramatically improves accuracy, even when identifier formats vary wildly across
              vendors.
            </p>
          </div>

          {/* VALIDATION */}
          <div id="validation" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Validation & Reconciliation
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Once the LLM returns structured JSON output, the data goes through cleaning,
              validation, and cross-referencing against existing system records. The result is a
              two-track workflow:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-primaryText">
              <li>
                <strong>Auto-Approved:</strong> Invoices where extracted values fall within the
                acceptable threshold are approved automatically — no human touch required.
              </li>
              <li>
                <strong>Flagged for Review:</strong> When discrepancies are detected, the invoice
                is routed to a human reviewer with the specific mismatch highlighted for quick
                resolution.
              </li>
            </ul>
          </div>

          {/* REPORTING */}
          <div id="reporting" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Reporting & Stakeholder Visibility
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-6">
              Processed data and reconciliation outcomes are automatically distributed to
              stakeholders through centralized repositories and scheduled reports — ensuring timely
              visibility, full transparency, and a complete audit trail across the invoice lifecycle.
            </p>

            {/* Stat card */}
            <div className="rounded-xl p-6 bg-white" style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}>
              <p className="text-xl md:text-2xl font-semibold">
                <span className="text-[#0F72B1] font-bold">98 %</span> + Field Extraction Accuracy
                Across Diverse Invoice Formats
              </p>
            </div>
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