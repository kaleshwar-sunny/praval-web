"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-solution", label: "The Solution" },
  { id: "the-impact", label: "The Impact" },
];

export default function FinancialServicesCaseStudy() {
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
    link.href = "/pdfs/Financial-Services-Case-Study.pdf";
    link.download = "Financial-Services-Case-Study.pdf";
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
              Every incident had a ticket. 
            </h1>
            <h2 className="text-white text-xl md:text-5xl font-bold mb-6">
              The same ones kept <span className="text-[#0F72B1]">wrong.</span>
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              They asked us to roll out ServiceNow so IT incidents were finally logged and tracked. The scope: tracking was never the gap — the 
              same incidents kept recurring because nothing tied them to a root cause, and every major incident was still run by hand.
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
                      35%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Fewer repeat incidents
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
                      40%
                    </span>
                    <span className="text-primaryText text-lg font-medium">                   
                      Lower MTTR
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0F72B1] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                      30%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Routine tickets deflected
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
                “Give us ServiceNow so we can finally log and track our IT incidents properly.”
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="font-semibold text-lg mb-3">Scope</h3>
              <p className="text-md text-primaryText">
                Tracking wasn't the problem — recurrence was. Incidents were closed but never linked to a root cause, 
                so the same outages returned and majors ran on a manual bridge.
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              A financial-services firm — a retail bank with a busy, heavily regulated IT estate — ran a service desk that logged thousands of incidents a month. 
              Tickets were captured and closed on time and the metrics looked healthy. Yet the same outages kept returning and major incidents dragged. A diagnostic found three compounding causes.
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText"
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>Closed, never solved. </strong> 
                Incidents were resolved one by one; nothing linked recurring incidents to a common root cause, so problem management never happened.              </li>
              <li>
                <strong>Major incidents run by hand. </strong> 
                A P1 meant manually spinning up a bridge, paging people and chasing updates — coordination lived in chat and memory.
              </li>
              <li>
                <strong>Routine tickets swamped the desk. </strong>
                Password resets and how-do-I questions consumed analysts who should have been fixing the hard problems.
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
                <strong>Route it right : </strong> 
                ServiceNow ITSM with intelligent incident routing, so incidents reach the right team first time instead of bouncing between queues.              </li>
              <li>
                <strong>Find the root cause : </strong>
                Recurring incidents linked to ServiceNow problem management, so repeat issues are traced to a single root cause and fixed for good — not closed and forgotten.              </li>
              <li>
                <strong>Run majors, deflect the rest : </strong> 
                A major-incident workflow coordinates P1s automatically — bridge, roles, comms — while a virtual agent and knowledge base deflect routine requests to self-service.              </li>
            </ul>
          </div>

          {/* THE IMPACT */}
          <div id="the-impact" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Impact</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "35%",
                  label: "Fewer repeat incidents",
                  desc: "Recurring issues traced to root cause and closed for good.",
                },
                {
                  stat: "40%",
                  label: "Lower MTTR",
                  desc: "Mean time to resolution, from routing and clean knowledge.",
                },
                {
                  stat: "30%",
                  label: "Routine tickets deflected",
                  desc: "Handled by self-service and the virtual agent.",
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
              The win wasn't faster tickets.{" "}
              <em className="text-[#0F72B1] not-italic font-medium">
               It was incidents that finally stopped coming back.
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
                title="Every incident had a ticket. The same ones kept wrong."
                pdfUrl="/pdfs/Financial-Services-Case-Study.pdf"
                fileName="Financial-Services-Case-Study.pdf"
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}