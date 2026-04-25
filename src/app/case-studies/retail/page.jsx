"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challange" },
  { id: "the-solution", label: "The Solution" },
  { id: "the-impact", label: "The Impact" },
];

export default function MarginLeakageCaseStudy() {
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
    link.href = "/pdfs/Retail-Case-Study.pdf";
    link.download = "Retail-Case-Study.pdf";
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
            Sales were up.
          </h1>
          <h2 className="text-white text-xl md:text-5xl font-bold mb-6">
            Margin was <span className="text-[#0F72B1]">leaking.</span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            They asked us to roll out Salesforce for one view of the customer.
            The scope: a 360° view doesn't stop margin walking out the door —
            and the money was leaking through discounts and promotions no one
            could see across stores, online, and the trade desk.
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
                    2.4 pts
                  </span>
                  <span className="text-white text-lg font-medium">
                    Gross Margin Recovered
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out" style={{backgroundColor: "#e2e7f0"}}>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm md:text-2xl font-bold text-[#000] whitespace-nowrap flex-shrink-0">
                    65%
                  </span>
                  <span className="text-primaryText text-lg font-medium">
                    Fewer off-policy discounts
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
                    Less Trade-Account Leakage
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
            <div className="rounded-xl p-6 bg-white" style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}>
              <h3 className="text-primaryText font-semibold text-lg mb-3">Real Problem</h3>
              <p className="text-md text-primaryText">
                "Roll out Salesforce so we finally have one view of the customer."
              </p>
            </div>
            <div className="rounded-xl p-6 bg-white" style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}>
              <h3 className="font-semibold text-lg mb-3">Scope</h3>
              <p className="text-md text-primaryText">
                They weren't losing customers — they were losing margin. Discounts and promos were
                given away across channels with no guardrails and no visibility.
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">The Challange</h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              A mid-market omnichannel retailer in South Africa — around 140 stores, an online
              channel, and a wholesale desk — was growing revenue while gross margin slid for
              several quarters, and no one could say exactly why. Pricing was managed per channel,
              mostly by hand. A diagnostic found three compounding causes.
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText" 
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>Discounting with no guardrails.</strong> Reps and store managers discounted
                at will; off-policy discounts were invisible until month-end.
              </li>
              <li>
                <strong>Promotions that stacked.</strong> Online codes combined with markdowns;
                nobody governed promo-on-promo margin.
              </li>
              <li>
                <strong>Trade-desk deals in spreadsheets.</strong> Terms drifted and accounts were
                under-billed against agreed pricing.
              </li>
            </ol>
          </div>

          {/* THE SOLUTION */}
          <div id="the-solution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">The Solution</h2>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-primaryText">
              <li>
                <strong>One view of margin :</strong> We unified customers, orders and pricing in
                Salesforce, so every transaction carries its true margin — visible in real time.
              </li>
              <li>
                <strong>Guardrails, not dashboards :</strong> Discount thresholds and promotion
                governance (CPQ) built into quote-to-order. Off-policy discounts need sign-off;
                promo stacking is blocked or flagged.
              </li>
              <li>
                <strong>Leakage analytics :</strong> We surfaced where margin escapes — by channel,
                rep, product, promo — and alerted leaders as it happened, not at month-end.
              </li>
            </ul>
          </div>

          {/* THE IMPACT */}
          <div id="the-impact" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Impact</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "2.4 pts",
                  label: "Gross Margin Recovered",
                  desc: "Pricing visible and governed across every channel.",
                },
                {
                  stat: "65%",
                  label: "Fewer Off-Policy Discounts",
                  desc: "Approval thresholds built into quote-to-order",
                },
                {
                  stat: "30%",
                  label: "Less Trade-Account Leakage",
                  desc: "Under-billing against agreed terms recovered.",
                },
              ].map((card) => (
                <div
                  key={card.stat}
                  className="rounded-xl p-6 bg-white"
                  style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}
                >
                  <p className="text-[#0F72B1] text-lg md:text-4xl font-semibold mb-1">{card.stat}</p>
                  <p className="text-md font-medium text-gray-800 mb-3">{card.label}</p>
                  <p className="text-md text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-primaryText">
              The answer wasn't a better view of the customer.{" "}
              <em className="text-[#0F72B1] not-italic font-medium">
                It was margin no one could quietly give away.
              </em>
            </p>

            {/* <div className="text-center" style={{marginTop: 30}}>
              <button onClick={() => setShowModal(true)} className="md:hidden justify-center bg-[#0F72B1] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#0d62a0] transition-colors cursor-pointer">
                  Download
              </button>
            </div> */}
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
                pdfUrl="/pdfs/Retail-Case-Study.pdf"
                fileName="Retail-Case-Study.pdf"
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}