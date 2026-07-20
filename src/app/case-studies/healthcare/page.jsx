"use client";

import { useState } from "react";
import DownloadModal from "../download-popup";

const quickLinks = [
  { id: "the-challenge", label: "The Challenge" },
  { id: "the-solution", label: "The Solution" },
  { id: "the-impact", label: "The Impact" },
];

export default function HealthCareCaseStudy() {
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
    link.href = "/pdfs/Healthcare-Case-Study.pdf";
    link.download = "Healthcare-Case-Study.pdf";
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
              They asked for paperless.
            </h1>
            <h2 className="text-white text-xl md:text-5xl font-bold mb-6">
              The patients were still <span className="text-[#0F72B1]">waiting.</span>
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              They asked us to digitise patient intake and get rid of the paper. The scope: paperwork was never the bottleneck — patients waited 
              because nobody could see bed and clinician capacity in real time, so beds sat empty while the queue grew.
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
                      40%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Less time waiting for a bed
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
                      0.5d
                    </span>
                    <span className="text-primaryText text-lg font-medium">
                      Lower average length of stay
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0F72B1] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm md:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
                      70%
                    </span>
                    <span className="text-white text-lg font-medium">
                      Less admin time on admissions
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
                "Digitise our patient intake and admissions forms - get rid of the paper."
              </p>
            </div>
            <div
              className="rounded-xl p-6 bg-white"
              style={{ boxShadow: "0px 8px 10px 0px #51A9E133" }}
            >
              <h3 className="font-semibold text-lg mb-3">Scope</h3>
              <p className="text-md text-primaryText">
                Paper wasn't slowing patients down; invisible capacity was. Beds cleared without anyone knowing, 
                and admitted patients waited in the ED for rooms that were already empty.
              </p>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div id="the-challenge" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-5">
              A private hospital group ran admissions on paper and coordinated capacity through a morning huddle and a spreadsheet. Admitted patients boarded in the emergency department while, 
              two floors up, beds sat clean and unclaimed. Nobody was doing anything wrong — the information simply arrived hours after it was useful. A diagnostic found three compounding causes.
            </p>
            <ol 
            className="pl-6 space-y-3 text-sm md:text-base text-primaryText"
            style={{
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
            }}>
              <li>
                <strong>No live view of capacity. </strong> 
                Bed status lived in people's heads and on a whiteboard, updated at shift change rather than as it changed.
              </li>
              <li>
                <strong>Discharges surfaced too late. </strong> 
                Ward teams knew who was going home; bed managers found out hours later, so the next patient waited.
              </li>
              <li>
                <strong>Assignment ran on phone calls. </strong>
                Matching a patient to a bed and a clinician meant chasing people, and every hop added delay.
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
                <strong>Capture at the door : </strong> 
                Intake and admissions rebuilt as a Power Apps form — the paperless ask, delivered on day one, and the source of clean, instant data.
              </li>
              <li>
                <strong>Make capacity visible : </strong>
                A live flow board shows every bed, its status and expected discharges — pulled from the patient-admin system, updated as it happens rather than at handover.
              </li>
              <li>
                <strong>Automate the assignment : </strong> 
                Power Automate matches patients to beds and clinicians, triggers cleaning and discharge workflows, and escalates the moment flow breaks.
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
                  label: "Less time waiting for a bed",
                  desc: "Admitted patients moved out of the ED faster.",
                },
                {
                  stat: "0.5d",
                  label: "Lower average length of stay",
                  desc: "Discharges planned ahead, not discovered late.",
                },
                {
                  stat: "70%",
                  label: "Less admin time on admissions",
                  desc: "No paper, no re-keying, no phone chase.",
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
              The win wasn't a paperless form.{" "}
              <em className="text-[#0F72B1] not-italic font-medium">
                It was patients moving, because someone could finally see the whole floor.
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
                title="They asked for paperless. The patients were still waiting."
                pdfUrl="/pdfs/Healthcare-Case-Study.pdf"
                fileName="Healthcare-Case-Study.pdf"
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}