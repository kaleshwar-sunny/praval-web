"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-solution", label: "The Solution" },
  { id: "the-impact", label: "The Impact" },
];

export default function QualityControlCaseStudy() {
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
    link.href = "/pdfs/Manufacturing-Case-Study.pdf";
    link.download = "Manufacturing-Case-Study.pdf";
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
              The parts passed inspection.
            </h1>
            <h2 className="text-white text-xl md:text-5xl font-bold mb-6">
              The defects shipped <span className="text-[#0F72B1]">anyway.</span>
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              They asked us to turn their paper inspection sheets into an app.
              The real problem: the data those sheets captured reached the
              quality team a shift late — so by the time a process drifted,
              suspect parts had already left the dock for the OEM.
            </p>
          </div>

          {/* Floating Cards - positioned absolutely over the hero */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 transform translate-y-1/2">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#0F72B1] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                      85%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Less manual data entry
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
                      40 min
                    </span>
                    <span className="text-primaryText text-lg font-medium">
                      Faster quality containment
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0F72B1] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                      25%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Lower customer PPM
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
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 grid grid-cols-1 md:grid-cols-3 gap-10">
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
                "Build us an app to replace our paper inspection sheets. The
                clipboards are slowing the line."
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="font-semibold text-lg mb-3">Scope</h3>
              <p className="text-md text-primaryText">
                The clipboards weren't the cost — the latency was. Quality data
                reached engineers a shift late, after suspect parts had already
                shipped to the OEM.
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              A tier-2 automotive-components supplier in South Africa's Eastern
              Cape — feeding just-in-time into the OEM assembly plants under
              IATF 16949 — ran hundreds of line-side quality and machine checks
              per shift on paper, keyed into the ERP and the customer scorecard
              a shift later. In automotive, a defect that reaches the OEM isn't
              a return; it's a PPM hit and a risk of stopping the customer's
              line. A diagnostic found three compounding causes.
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText"
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>Captured on paper, entered a shift later.</strong>{" "}
                Quality data trailed the line by hours — drift was always found
                after the fact.
              </li>
              <li>
                <strong>Containment stalled in email.</strong> A quality hold
                could sit half a day while suspect stock moved toward dispatch.
              </li>
              <li>
                <strong>The same reading keyed into two systems.</strong> ERP
                and the OEM scorecard — transcription errors, no live PPM trend.
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
                <strong>Capture at the line:</strong> We rebuilt the checks as a
                Power Apps form on a tablet at the station — validated against
                the control plan, with photos.
              </li>
              <li>
                <strong>Contain in real time:</strong> A failed check auto-raises
                a quality hold in Power Automate, pages the engineer, and
                quarantines the batch — with the audit trail IATF demands.
              </li>
              <li>
                <strong>Connect + Copilot:</strong> Readings flow into the ERP
                and scorecard with no re-keying, and Copilot answers "what's our
                PPM trend on Line 3?" in plain language.
              </li>
            </ul>
          </div>

          {/* THE IMPACT */}
          <div id="the-impact" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Impact</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "85%",
                  label: "Less manual data entry",
                  desc: "Re-keying into the ERP and scorecard eliminated.",
                },
                {
                  stat: "40 min",
                  label: "Faster quality containment",
                  desc: "Down from ~6 hours — quarantined before dispatch.",
                },
                {
                  stat: "25%",
                  label: "Lower customer PPM",
                  desc: "Fewer defective parts reaching the OEM.",
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
                  <p className="text-sm font-medium text-gray-800 mb-3">
                    {card.label}
                  </p>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-primaryText">
              The answer wasn't the app.{" "}
              <em className="text-[#0F72B1] not-italic font-medium">
                Catching the defect before the truck left was.
              </em>
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
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
                title="Sales were up. Margin was leaking."
                pdfUrl="/pdfs/Manufacturing-Case-Study.pdf"
                fileName="Manufacturing-Case-Study.pdf"
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}