"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-solution", label: "The Solution" },
  { id: "the-impact", label: "The Impact" },
];

export default function MicrosoftCopilotCaseStudy() {
  const [showModal, setShowModal] = useState(false);
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/Microsoft-Copilot-Case-Study.pdf";
    link.download = "Microsoft-Copilot-Case-Study.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full">
        {/* Hero Section with solid black background */}
        <div
          className="relative w-full bg-black flex flex-col items-start justify-center text-left px-4 overflow-visible"
          style={{ height: "600px" }}
        >
          <div className="max-w-7xl mx-auto">
            <h4 className="text-[#0F72B1] text-md md:text-2xl font-bold mb-4">
              CASE STUDY
            </h4>
            <h1 className="text-white text-xl md:text-5xl font-bold mb-4">
              They rolled it out to save time.
            </h1>
            <h2 className="text-white text-xl md:text-5xl font-bold mb-6">
              It kept guessing <span className="text-[#0F72B1]">wrong.</span>
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              They asked us to roll out Microsoft 365 Copilot so the team could save time on emails and documents. The scope: speed was never 
              the issue — the firm's knowledge was scattered and ungoverned, so Copilot grounded on the wrong sources and answered confidently from them.
            </p>
          </div>

          {/* Floating Cards - positioned absolutely over the hero */}
          <div className="absolute md:block bottom-0 md:top-80 left-0 right-0 transform translate-y-1/2">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#0F72B1] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                        5hrs
                    </span>
                    <span className="text-white text-lg font-medium">
                        Per person, per week
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ backgroundColor: "#e2e7f0" }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-[#000] whitespace-nowrap flex-shrink-0">
                        30%
                    </span>
                    <span className="text-primaryText text-lg font-medium">
                        Faster proposals & RFPs
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0F72B1] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                        50%
                    </span>
                    <span className="text-white text-lg font-medium">
                        Less time hunting for docs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for content below - accounts for cards overlapping */}
        {/* <div className="hidden md:block h-32 md:h-40" /> */}
      </div>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">
          {/* Real Problem + Scope cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="text-primaryText font-semibold text-lg mb-3">
                Real Problem
              </h3>
              <p className="text-md text-primaryText">
                “Roll out Microsoft 365 Copilot so the team saves time on emails and documents.”
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="font-semibold text-lg mb-3">Scope</h3>
              <p className="text-md text-primaryText">
               Typing speed wasn't the bottleneck. Knowledge was scattered across drives and sites 
               with messy permissions, so Copilot grounded on the wrong data — fast answers no one could trust.
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              A professional-services firm — a mid-sized legal and advisory practice — bought Microsoft 365 
              Copilot expecting an instant productivity lift. Instead, lawyers and consultants got plausible-
              sounding answers drawn from outdated templates, superseded matters and the wrong client folders. 
              A diagnostic found three compounding causes.
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText"
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>Knowledge scattered, not governed. </strong> 
                Current and obsolete versions sat side by side across SharePoint, OneDrive and email — Copilot couldn't tell which to trust.
              </li>
              <li>
                <strong>Permissions were a mess. </strong>
                Over-broad SharePoint permissions meant Copilot could surface — and pull from — things people shouldn't see.
              </li>
              <li>
                <strong>No grounding, no adoption. </strong>
                Without governed sources or trained prompts, people tried Copilot once, got a wrong answer, and quietly stopped.
              </li>
            </ol>
          </div>

          {/* THE SOLUTION */}
          <div id="the-solution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Solution
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-primaryText">
              <li>
                <strong>Govern the data first : </strong> 
                A SharePoint permissions cleanup and oversharing fix, then we defined the governed sources Copilot may ground on — so answers come from current, correct material.              
                </li>
              <li>
                <strong>Ground it, target the work : </strong>
                We grounded Microsoft 365 Copilot on those trustworthy sources and built the highest-value use-cases — proposals and RFPs, client and matter summaries — with a tested prompt library.
              </li>
              <li>
                <strong>Drive adoption : </strong> 
                A structured Copilot adoption program — training, prompt patterns and champions — turned a tool people had abandoned into one they rely on.
              </li>
            </ul>
          </div>

          {/* THE IMPACT */}
          <div id="the-impact" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Impact</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "5hrs",
                  label: "Per person, per week",
                  desc: "Reclaimed from drafting and searching.",
                },
                {
                  stat: "30%",
                  label:"Faster proposals & RFPs",
                  desc: "Grounded Copilot drafts from the firm's best material.",
                },
                {
                  stat: "50%",
                  label: "Less time hunting for docs",
                  desc: "Governed sources and search that actually works.",
                },
              ].map((card) => (
                <div
                  key={card.stat}
                  className="rounded-xl p-6 bg-white"
                  style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
                >
                  <p className="text-[#0F72B1] text-lg md:text-4xl font-semibold mb-1">
                    {card.stat}
                  </p>
                  <p className="text-md font-medium text-gray-800 mb-3">
                    {card.label}
                  </p>
                  <p className="text-md text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-primaryText">
                The win wasn't faster typing.{" "}
              <em className="text-[#0F72B1] not-italic font-medium">
                It was knowledge people could finally find — and trust.
              </em>
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">Content Quick Links</h3>
            <ul className="space-y-4 text-[#0F72B1] text-sm mb-8">
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
            <>
              <button onClick={() => setShowModal(true)} className="bg-[#0F72B1] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#0d62a0] transition-colors cursor-pointer">
                Download
              </button>
              <DownloadModal
                open={showModal}
                onClose={() => setShowModal(false)}
                title="They rolled it out to save time. It kept guessing wrong."
                pdfUrl="/pdfs/Microsoft-Copilot-Case-Study.pdf"
                fileName="Microsoft-Copilot-Case-Study.pdf"
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}