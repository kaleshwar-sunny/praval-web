"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-shift", label: "The Shift" },
  { id: "the-approach", label: "The Approach" },
  { id: "the-results", label: "The Results" },
];

export default function LastMileOperationsCopilotCaseStudy() {
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
    <div className="w-full bg-red-500b">
      
      {/* HERO SECTION */}
      <div className="relative w-full">
        {/* Hero Section with solid black background */}
        <div
          className="relative w-full bg-black flex flex-col items-start justify-center text-left px-4 overflow-visible"
          style={{ height: "600px" }}
        >
          <div className="max-w-7xl mx-auto">
            <h4 className="text-[#0F72B1] text-md md:text-2xl font-bold mb-4">
              CASE STUDY - LAST-MILE OPERATIONS COPILOT
            </h4>
            <h1 className="text-white text-xl md:text-5xl font-bold mb-4">
              We lifted first-attempt delivery<br></br> into best-in-class territory.
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A regional parcel carrier was losing margin at the doorstep. 
              <strong> Praval</strong> sealed the leak with an <strong>AI dispatch copilot — </strong>
              delivered as a service, on the systems they already ran.
            </p>
          </div>

          {/* Floating Cards - positioned absolutely over the hero */}
          <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 md:translate-y-1/2">
            <div className="mt-8 md:mt-32">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-[#0F72B1] rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                      ⬇62%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Fewer failed delivery attempts
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ backgroundColor: "#e2e7f0" }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-[#000] whitespace-nowrap flex-shrink-0">
                      ⬇40%
                    </span>
                    <span className="text-primaryText text-lg font-medium">
                      Less return-to-origin volume
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0F72B1] rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                      &lt;7 mo
                    </span>
                    <span className="text-white text-lg font-medium">
                      Payback on the engagement
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
      <section className="max-w-7xl mx-auto px-4 md:px-8 md:pt-48 pt-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">
          {/* Real Problem + Scope cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="text-primaryText text-lg mb-3">
                CLIENT
              </h3>
              <p className="text-md text-primaryText">
                <strong>Regional parcel carrier</strong>
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="text-lg mb-3">NETWORK</h3>
              <p className="text-md text-primaryText">
                <strong>280 vehicles · 6 depots</strong>             
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="text-lg mb-3">ENGAGEMENT</h3>
              <p className="text-md text-primaryText">
                <strong>Embedded build + managed service</strong>             
              </p>
            </div>
             <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="text-lg mb-3">REGION</h3>
              <p className="text-md text-primaryText">
                <strong>US Midwest</strong>
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
             <h3 className="text-2xl md:text-3xl mb-4">
              The leak was in the last mile — and invisible on the P&L.
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-5">
              The carrier’s first-attempt delivery rate (FADR) had slipped to <strong>81% </strong>— meaning
              nearly one in five first attempts was failing. That sits at the worst end of the
              range <em>Harvard Business Review reports </em>(up to 20% of online orders miss on the
              first try), while the industry average runs near 93% and top-performing fleets
              clear 95-98%. In last-mile economics, that gap is where the money goes.
            </p>
            <img
                src="/images/gen-ai-case-study/firstAttemptDeliveryRate.svg"
                alt="First Attempt Delivery Rate"
                className="mb-3 w-full"
              />
            <p className="text-sm md:text-base text-primaryText mb-5">
              Dispatch allocated carriers by availability and cost — never by who actually
              completes the drop. Drivers marked stops failed that a single call could have
              saved. Recipients learned a parcel was “out for delivery” only after they’d left
              the house. The failure modes were textbook — and almost all preventable:
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText"
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>~$17.20 per failed attempt</strong> once redelivery, customer-service inbound, and SLA penalties were tallied.
              </li>
              <li>
                <strong>Climbing return-to-origin (RTO)</strong> volumes, dragging on inventory turnaround and depot throughput.
              </li>
              <li>
                <strong>Invisible customer cost:</strong> nearly 7 in 10 recipients hit by a botched delivery never ordered again
              </li>
            </ol>
          </div>

          {/* THE SHIFT */}
          <div id="the-shift" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Shift
            </h2>
             <h3 className="text-2xl md:text-3xl mb-4">
              A copilot isn’t new. Pointing one at dispatch is.            
            </h3>
            <p className="text-base md:text-base text-primaryText mb-5">
              Pilots have copilots. So do developers now. The idea is simple: a system that
              watches the whole picture, anticipates what’s coming, and recommends the
              next best move — while the human stays in command. Aim that at last-mile
              operations and the everyday math of dispatch changes.
            </p>
            <p className="text-sm md:text-sm mb-5">
              Instead of reacting to failures after they land, the copilot reads every signal —
              address quality, carrier history by postcode, live ETAs, recipient behavior —
              and intervenes <em>before </em>the window is blown. The dispatcher still decides. They
              just decide with a co-pilot that never blinks.
            </p>
            <img
                src="/images/gen-ai-case-study/dispatchvsCopilot.svg"
                alt="First Attempt Delivery Rate"
                className="mb-3 w-full"
              />
          </div>

          {/* THE APPROACH */}
          <div id="the-approach" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Approach
            </h2>
            <h3 className="text-2xl md:text-3xl mb-4">
              One decision layer, on the stack they already ran.           
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-5">
              No platform to buy, no migration. <strong>Praval </strong>engineered the copilot as a layer
              <strong> over </strong>the carrier’s existing systems — reading their data, intervening at every
              decision point from intake to doorstep.
            </p>
            <img
                src="/images/gen-ai-case-study/oneDecisionLayer.svg"
                alt="First Attempt Delivery Rate"
                className="mb-3 w-full"
              />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "01",
                  label: "Validate at the source",
                  desc: "Address verification & auto-correct at capture.",
                },
                {
                  stat: "02",
                  label: "Close the comms gap",
                  desc: "Telematics-fed ETAs + two way messaging.",
                },
                {
                  stat: "03",
                  label: "Recommend the carrier",
                  desc: "Zone-level first-attempt scoring at dispatch.",
                },
                {
                  stat: "04",
                  label: "Prevent misses in flight",
                  desc: "Forecast & auto-reroute before the window’s blown.",
                },
                {
                  stat: "05",
                  label: "Empower the driver",
                  desc: "Next-best-action + recipient contact at the door.",
                }
              ].map((card) => (
                <div
                  key={card.stat}
                  className="rounded-xl p-6 bg-white"
                  style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
                >
                  <p className="text-[#0F72B1] text-lg md:text-4xl font-semibold mb-2">
                    {card.stat}
                  </p>
                  <p className="text-md font-medium text-gray-800 mb-2">
                    <strong>{card.label}</strong>
                  </p>
                  <p className="text-md text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DELIVERED AS A SERVICE */}
          <div id="delivered-as-a-service" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Delivered as a service
            </h2>
            <h3 className="text-2xl md:text-3xl mb-4">
              Not a product you buy. A copilot we build and run with you.        
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-5">
              <strong>Praval </strong>doesn’t drop a tool and leave. We engineer the copilot into your
              environment, run it against live results, and hand it to your team — not just
              launch it and walk away.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "01",
                  label: "Embed & discover",
                  desc: "We sit with your dispatch and ops teams, instrument the data, and quantify the FADR gap on your real volumes.",
                },
                {
                  stat: "02",
                  label: "Co-engineer the copilot",
                  desc: "We build the decision layer on your existing stack — TMS, Salesforce, ServiceNow, Azure — no rip-and-replace.",
                },
                {
                  stat: "03",
                  label: "Operate, tune & hand of",
                  desc: "We run and tune it against live results, then transfer ownership to your team.",
                }
              ].map((card) => (
                <div
                  key={card.stat}
                  className="rounded-xl p-6 bg-white"
                  style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
                >
                  <p className="text-[#0F72B1] text-lg md:text-4xl font-semibold mb-2">
                    {card.stat}
                  </p>
                  <p className="text-md font-medium text-gray-800 mb-2">
                    <strong>{card.label}</strong>
                  </p>
                  <p className="text-md text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* THE RESULTS */}
          <div id="the-results" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Results
            </h2>
            <h3 className="text-2xl md:text-3xl mb-4">
              The doorstep stopped being a cost center.       
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-5">
              Within two quarters of go-live across all six depots — on the carrier’s own 
              systems — first-attempt delivery cleared into best-in-class territory (95%+).
            </p>
            <img
                src="/images/gen-ai-case-study/doorStepBeing.svg"
                alt="First Attempt Delivery Rate"
                className="mb-3 w-full"
              />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "⭣30%",
                  label: "PRE-DELIVERY COMMS",
                  desc: "Fewer failed attempts from accurate ETA notifications alone",
                },
                {
                  stat: "⭣40%",
                  label: "RTO",
                  desc: "Less return-to-origin volume across the network",
                },
                {
                  stat: "⭡18",
                  label: "NPS",
                  desc: "Net Promoter Score uplift on delivery experience",
                },
                {
                  stat: "7×",
                  label: "ROI",
                  desc: "Return on the engagement in year one",
                },
                {
                  stat: "<7mo",
                  label: "PAYBACK",
                  desc: "Time to full payback on the engagement",
                },
                {
                  stat: "0",
                  label: "DISRUPTION",
                  desc: "Systems ripped out — built on their existing stack",
                }
              ].map((card) => (
                <div
                  key={card.stat}
                  className="rounded-xl p-6 bg-white"
                  style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
                >
                  <p className="text-[#0F72B1] text-lg md:text-4xl font-semibold mb-2">
                    {card.stat}
                  </p>
                  <p className="text-md font-medium text-gray-600 mb-3">{card.desc}</p>
                  <p className="text-sm font-medium text-gray-800">
                    <strong>{card.label}</strong>
                  </p>
                </div>
              ))}
            </div>
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

          {/* TESTIMONIAL */}
          <div id="let's-talk" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
               
            </h2>
             <h3 className="text-2xl md:text-3xl font-semibold mb-10">
              <span className="text-[#0F72B1]">“Praval</span> didn’t sell us software and walk away. They
              embedded, built our last-mile copilot on the stack we already
              had, and stayed to make it stick.<span className="text-[#0F72B1]">”</span>
            </h3>
            <div className="flex items-center gap-6">
              <div className="w-12 h-1 bg-[#0F72B1] flex-shrink-0"></div>
              <div>
                <p className="text-xl font-bold text-primaryText">VP of Operations</p>
                <p className="text-l text-gray-600">Regional parcel carrier · US Midwest22</p>
              </div>
            </div>
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