"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-solution", label: "The Solution" },
  { id: "the-impact", label: "The Impact" },
];

export default function DemandForecastingCaseStudy() {
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
    link.href = "/pdfs/FMCG-Case-Study.pdf";
    link.download = "FMCG-Case-Study.pdf";
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
              The shelves were empty.
            </h1>
            <h2 className="text-white text-xl md:text-5xl font-bold mb-6">
              The warehouse was <span className="text-[#0F72B1]">full.</span>
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              They asked us to build a better demand-forecasting model. The real
              problem: a smarter forecast still died in a two-day manual gap.
              Nobody owned the decision — and the system had quietly outgrown
              its design.
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
                      40%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Fewer stockouts
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
                      28%
                    </span>
                    <span className="text-primaryText text-lg font-medium">
                      Less working capital tied up
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
                      Faster order fulfilment
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
                "Build us a better demand-forecasting model. Ours keeps getting
                it wrong."
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="font-semibold text-lg mb-3">Scope</h3>
              <p className="text-md text-primaryText">
                A better forecast still died in a two day manual gap. The issue
                wasn't prediction — it was that nobody owned the decision.
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              A distributor moving 2,400+ SKUs daily across 340 retail accounts
              in Gauteng and the Western Cape faced a paradox: stockouts and
              overstock at once — slow stock had frozen [R_m] in working capital
              while hero SKUs bled repeat sales. A diagnostic found three
              compounding causes.
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText"
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>Forecasting on four-week averages.</strong> Missed
                seasonal spikes, promo lifts, and Gauteng-vs-Cape demand gaps.
              </li>
              <li>
                <strong>Manual replenishment, two-day lag.</strong> In a
                fast-moving category, two days is expensive.
              </li>
              <li>
                <strong>Slotting by arrival date, not turnover.</strong> Fast
                movers sat in the least accessible locations.
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
                <strong>Predictive forecasting:</strong> We fused sales,
                promotions, weather, and regional signals into daily
                replenishment calls — per SKU, per region.
              </li>
              <li>
                <strong>A conversational interface:</strong> We gave buying
                managers a plain-language way to ask, and get ranked,
                confidence-scored answers. The AI surfaces; they decide.
              </li>
              <li>
                <strong>AI-led slotting:</strong> We moved the top 20% of SKUs
                by turnover into primary pick locations — fulfillment speed up
                immediately.
              </li>
            </ul>
          </div>

          {/* THE IMPACT */}
          <div id="the-impact" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Impact</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "40%",
                  label: "Fewer stockouts",
                  desc: "Real-time signals replaced rolling averages.",
                },
                {
                  stat: "28%",
                  label: "Less working capital tied up",
                  desc: "Slow-moving overstock freed from warehouse.",
                },
                {
                  stat: "30%",
                  label: "Faster order fulfilment",
                  desc: "Tighter replenishment cycles plus AI-led slotting.",
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
              The win wasn't a better forecast.{" "}
              <em className="text-[#0F72B1] not-italic font-medium">
                It was a decision that finally had an owner.
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
                pdfUrl="/pdfs/FMCG-Case-Study.pdf"
                fileName="FMCG-Case-Study.pdf"
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}