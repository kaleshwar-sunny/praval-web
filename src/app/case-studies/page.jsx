"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StatCards from "./StatCards";

const industries = [
    { id: "retail", label: "Retail", icon: "🛒" },
    { id: "financial", label: "Financial", icon: "🏦" },
    { id: "manufacturing", label: "Manufacturing", icon: "🏭" },
    { id: "healthcare", label: "Healthcare", icon: "🏥" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "lawfirms", label: "Law firms", icon: "⚖️" },
];

const caseStudyCards = [
    {
        tag: "GenAI",
        industry: "retail",
        category: "Microsoft",
        title: "Last-Mile Operations Copilot",
        image: "/images/imagesCaseStudyHomePage/Retail.png",
        link: "/case-studies/gen-ai",
        headline: "We lifted first-attempt delivery into best-in-class territory.",
        body: "A regional parcel carrier was losing margin at the doorstep.",
    },
    {
        tag: "Healthcare",
        industry: "healthcare",
        category: "Healthcare",
        title: "Healthcare",
        image: "/images/imagesCaseStudyHomePage/Healthcare.svg",
        link: "/case-studies/healthcare",
        headline: "They asked for paperless. The patients were still waiting.",
        body: "They asked us to digitise patient intake and get rid of the paper.",
    },
    {
        tag: "Microsoft Copilot",
        industry: "financial",
        category: "Microsoft",
        title: "Microsoft Copilot",
        image: "/images/imagesCaseStudyHomePage/Microsoft Copilot.svg",
        link: "/case-studies/microsoftCopilot",
        headline: "They rolled it out to save time. It kept guessing wrong.",
        body: "They asked us to roll out Microsoft 365 Copilot so the team could save time on emails and documents.",
    },
    {
        tag: "Financial Services",
        industry: "financial",
        category: "Financial Services",
        title: "Financial Services",
        image: "/images/imagesCaseStudyHomePage/Financial Services.svg",
        link: "/case-studies/financialServices",
        headline: "Every incident had a ticket. The same ones kept wrong.",
        body: "They asked us to roll out ServiceNow so IT incidents were finally logged and tracked.",
    },
    {
        tag: "Insurance",
        industry: "healthcare",
        category: "Insurance",
        title: "Insurance",
        image: "/images/imagesCaseStudyHomePage/Insurance.svg",
        link: "/case-studies/insurance",
        headline: "Every claim moved at the speed of the wrong.",
        body: "They asked us to build a faster claims system to speed up processing.",
    },
];

const topics = ["Microsoft", "Salesforce", "Oracle"];

const topicArticles = [
    { title: "Last -Mile Operations Copilot", body: "We lifted first-attempt delivery into best-in-class territory." },
    { title: "Roll out Microsoft 365 Copilot", body: "They rolled it out to save time. It kept guessing wrong." },
    // { title: "Lorem ipsum", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt." },
    // { title: "Lorem ipsum", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt." },
    // { title: "Lorem ipsum", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt." },
];

function Tag({ label }) {
    return (
        <span style={{
            fontSize: 12,
            fontWeight: 700,
            background: "#E8F0FE",
            color: "#0F72B1",
            padding: "6.5px 12px",
            // borderRadius: 4,
            letterSpacing: "0.02em",
        }}>{label}</span>
    );
}

function CaseCard({ tag, link, image, headline, body }) {
    return (
        <Link href={link} style={{
            border: "0.5px solid #e5e7eb",
            fontSize: 12,
            fontWeight: 600,
            borderRadius: 10,
            overflow: "hidden",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{ position: "relative" }}>
                <img src={image} alt="" style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", top: 15, left: 15, }}>
                    <Tag label={tag} />
                </div>
            </div>
            <div style={{ padding: "clamp(12px, 3vw, 32px)" }}>
                <p style={{ fontWeight: 600, fontSize: 24, lineHeight: 1.4, margin: "0 0 8px", color: "#1D2833" }}>{headline}</p>
                <p style={{ fontWeight: 400, fontSize: 16, color: "#1D2833", lineHeight: 1.6, margin: "0 0 14px" }}>{body}</p>
                <p style={{ fontSize: 14, color: "#0F72B1", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                    Read More →
                </p>
            </div>
        </Link>
    );
}

export default function PravalHome() {
    const [activeIndustry, setActiveIndustry] = useState("retail");
    const [activeTopic, setActiveTopic] = useState("Microsoft");
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const filteredCards = caseStudyCards.filter(card => card.industry === activeIndustry);

    const filteredTopics = caseStudyCards.filter(card => card.category === activeTopic);

    const visibleCards = isMobile ? 1 : 3;

    const nextSlide = () => {
        if (currentIndex < caseStudyCards.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div
            style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#111827",
                background: "#fff",
                minHeight: "100vh",
            }}
        >
            {/* Hero */}
            <section style={{ padding: "clamp(24px, 5vw, 96px)", background: "rgba(246, 38, 38, 0.05)", borderBottom: "0.5px solid #e5e7eb" }}>
                <h1 style={{ fontSize: "clamp(36px, 8vw, 64px)", fontWeight: 600, lineHeight: 1.2, margin: "0 0 28px", letterSpacing: "-0.03em", color: "#111827" }}>
                    Explore the scope of possibilities with Praval and see how organisations are achieving more.
                </h1>
                <a href="#" style={{
                    display: "inline-block", background: "#0f72b1", color: "#fff",
                    padding: "10px 22px", borderRadius: 6, fontSize: 14, fontWeight: 500,
                    textDecoration: "none",
                }}>Read More</a>
            </section>

            {/* Latest */}
            <section style={{ padding: isMobile ? "24px 24px" : "34px 64px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                    <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F72B1", textTransform: "uppercase", letterSpacing: "1.4px", margin: "0 0 4px" }}>LATEST</p>
                        <h2 style={{ fontSize: "clamp(30px, 8vw, 48px)", fontWeight: 700, margin: 0, letterSpacing: "-0.48px" }}>Putting innovation into practice</h2>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            style={{
                                width: 36,
                                height: 36,
                                border: "0.5px solid #d1d5db",
                                borderRadius: 20,
                                background: "#fff",
                                cursor: "pointer",
                                opacity: currentIndex === 0 ? 0.5 : 1,
                            }}
                        >
                            ←
                        </button>

                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= caseStudyCards.length - visibleCards}
                            style={{
                                width: 36,
                                height: 36,
                                border: "0.5px solid #d1d5db",
                                borderRadius: 20,
                                background: "#fff",
                                cursor: "pointer",
                                opacity:
                                    currentIndex >= caseStudyCards.length - visibleCards
                                        ? 0.5
                                        : 1,
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            overflow: "hidden",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: isMobile ? 0 : 20,
                                transition: "transform 0.4s ease-in-out",
                                transform: `translateX(-${currentIndex * (isMobile ? 100 : 34)}%)`,
                            }}
                        >
                            {caseStudyCards.map((card, i) => (
                                <div
                                    key={i}
                                    style={{
                                        flex: isMobile
                                            ? "0 0 100%"
                                            : "0 0 calc((100% - 40px) / 3)",
                                    }}
                                >
                                    <CaseCard {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore by industry */}
            <section style={{ padding: isMobile ? "24px 24px" : "12px 64px", backgroundColor: "#fafafa", }}>
                <div style={{ marginBottom: 8 }}>
                    <h2 style={{ fontSize: "clamp(30px, 8vw, 48px)", fontWeight: 600, color: "#1d2833", margin: "0 0 4px", letterSpacing: "-0.02em" }}>Explore case studies by industry</h2>
                    <p style={{ fontSize: 16, color: "#1d2833", margin: 0 }}>See how we're solving specific challenges in your field.</p>
                </div>

                {/* Industry tabs */}
                <div style={{ display: "flex", gap: 8, margin: "24px 0 28px", flexWrap: "wrap" }}>
                    {industries.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveIndustry(ind.id)}
                            style={{
                                padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                                border: activeIndustry === ind.id ? "1.5px solid #0F72B1" : "0.5px solid #e5e7eb",
                                background: activeIndustry === ind.id ? "#EEF2FF" : "#fff",
                                color: activeIndustry === ind.id ? "#0F72B1" : "#374151",
                                cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
                            }}
                        >
                            <span>{ind.icon}</span> {ind.label}
                        </button>
                    ))}
                </div>

                <div
                    style={{
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            overflow: "hidden",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                gap: isMobile ? "24px" : "20px",
                                transition: "transform 0.4s ease-in-out",
                                transform: isMobile
                                    ? "none"
                                    : `translateX(-${currentIndex * 34}%)`,
                            }}
                        >
                            {filteredCards.map((card, i) => (
                                <div
                                    key={i}
                                    style={{
                                        flex: isMobile
                                            ? "0 0 100%"
                                            : "0 0 calc((100% - 40px) / 3)",
                                    }}
                                >
                                    <CaseCard {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured stats */}
            <section style={{ padding: isMobile ? "24px 24px" : "24px 48px", background: "#fafafa", }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#0f72b1", textTransform: "uppercase", letterSpacing: "0.08em", }}>FEATURED</p>
                <h2 style={{ fontSize: "clamp(30px, 8vw, 48px)", fontWeight: 600, color: "#1D2833", margin: "0 0 28px", letterSpacing: "-0.02em" }}>Powered by intelligence, built on trust</h2>
                <div style={{ width: "100%" }}>
                    <StatCards isMobile={isMobile} />
                </div>
            </section>

            {/* Explore by topic */}
            <section style={{ padding: isMobile ? "24px 24px 24px 24px" : "12px 48px 24px 48px", background: "rgba(15, 114, 177, 0.075)" }}>
                <h2 style={{ fontSize: 48, fontWeight: 600, margin: "0 0 4px", letterSpacing: "-0.02em" }}>Explore by topic</h2>
                <p style={{ fontSize: 16, margin: "0 0 24px" }}>See how we're solving specific challenges in your field.</p>

                <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
                    {topics.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTopic(t)}
                            style={{
                                padding: "6px 14px",
                                borderRadius: 20,
                                fontSize: 13,
                                fontWeight: 500,
                                border: "none",
                                background: activeTopic === t ? "#0F72B1" : "#f3f4f6",
                                color: activeTopic === t ? "#fff" : "#374151",
                                cursor: "pointer",
                            }}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                    gap: 16,
                }}>
                    {filteredTopics.map((a, i) => (
                        <Link href={a.link} key={i} style={{ background: "#fff", border: "0.5px solid #e5e7eb", borderRadius: 10, padding: "16px 16px 18px" }}>
                            <p style={{ fontWeight: 600, fontSize: 14, color: "#0F72B1", display: "block", marginBottom: 8 }}>{a.title}</p>
                            <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{a.body}</p>
                        </Link>
                    ))}
                </div>
            </section >

        </div >
    );
}
