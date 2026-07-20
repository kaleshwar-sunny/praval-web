"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-solution", label: "The Solution" },
  { id: "the-impact", label: "The Impact" },
];

export default function InsuranceCaseStudy() {
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
    link.href = "/pdfs/Insurance-Case-Study.pdf";
    link.download = "Insurance-Case-Study.pdf";
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
              Every claim moved at the
            </h1>
            <h2 className="text-white text-xl md:text-5xl font-bold mb-6">
              speed of the <span className="text-[#0F72B1]">wrong.</span>
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              They asked us to build a faster claims system to speed up processing. The scope: data entry was never the delay — simple, 
              low-risk claims sat in the same queue as complex ones, waiting on manual triage, so the easy claims moved at the pace of the hard ones.
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
                      25%
                    </span>
                    <span className="text-white text-lg font-medium">
                        Claims straight through
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
                      45%
                    </span>
                    <span className="text-primaryText text-lg font-medium">
                      Faster claim turnaround
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
                      Lower cost per claim
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
                “Give us a faster claims system — our processing is too slow.”
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="font-semibold text-lg mb-3">Scope</h3>
              <p className="text-md text-primaryText">
               Speed wasn't a typing problem, it was a decision problem. A cracked windscreen 
               queued behind a total loss. Nothing cleared itself.
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              A short-term insurer writing personal auto and household cover ran a claims operation where every claim followed one path: 
              intake, manual triage, adjuster review, approval. The adjusters were competent and busy; the queue was the constraint. 
              The work was being done properly — it was simply being done in the wrong order. A diagnostic found three compounding causes.
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText"
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>One queue for every claim. </strong> 
                No segmentation by risk or complexity, so a simple claim inherited the wait of the hardest claim ahead of it.
              </li>
              <li>
                <strong>Triage and fraud checks done by hand. </strong>
                Eligibility, policy and fraud checks ran sequentially, by a person, even where the answer was never in doubt. 
              </li>
              <li>
                <strong>Customers chased the process. </strong>
                With no automated status updates, “where is my claim?” calls consumed the very adjusters causing the backlog.
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
                <strong>Segment at intake : </strong> 
                Claims land in Salesforce and are scored on risk and complexity the moment they arrive — before anyone touches them.
              </li>
              <li>
                <strong>Let the simple ones clear themselves : </strong>
                Low-risk claims passing every policy, eligibility and fraud gate auto-approve end to end. Anything flagged routes to an adjuster with the evidence attached.
              </li>
              <li>
                <strong>Keep the customer informed : </strong> 
                Automated status updates at every stage, so adjusters work claims instead of answering calls about them.
              </li>
            </ul>
          </div>

          {/* THE IMPACT */}
          <div id="the-impact" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Impact</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "25%",
                  label: "Claims straight through",
                  desc: "Up from under 10%, with no human touch.",
                },
                {
                  stat: "45%",
                  label:"Faster claim turnaround",
                  desc: "Simple claims stopped queueing behind hard ones.",
                },
                {
                  stat: "30%",
                  label: "Lower cost per claim",
                  desc: "Manual effort concentrated where judgment is needed.",
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
              The win wasn't a faster form. {" "}
              <em className="text-[#0F72B1] not-italic font-medium">
              It was the simple claims clearing themselves — so people could work the hard ones.
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
                title="Every claim moved at the speed of the wrong."
                pdfUrl="/pdfs/Insurance-Case-Study.pdf"
                fileName="Insurance-Case-Study.pdf"
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}