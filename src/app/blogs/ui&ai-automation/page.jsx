"use client";

import Image from "next/image";

const quickLinks = [
    { id: "overview", label: "Overview" },
    {
        id: "ui-automation", label: "What Is Traditional UI Automation?",
    },
    {
        id: "strengths", label: "Strengths of UI Automation",
    },
    {
        id: "limitations", label: "Limitations of UI Automation",
    },
    {
        id: "ai-automation", label: "What is AI Automation ?",
    },
    {
        id: "popular-tools", label: "Popular AI testing tools",
    },
    {
        id: "comparison", label: "UI Automation vs AI Automation: A Comparison",
    },
    {
        id: "uses", label: "Key Use Cases Comparison",
    },
    {
        id: "example", label: "Example Scenario",
    },
    {
        id: "replace", label: "Does AI Automation Replace UI Automation?",
    },
    {
        id: "future", label: "The Hybrid Future of Testing",
    },
    {
        id: "challenges", label: "Challenges with AI Automation (Reality Check)",
    },
    {
        id: "skills", label: "Skills Shift for Testers",
    },
    {
        id: "conclusion", label: "Conclusion",
    },
    {
        id: "final", label: "Final Takeaway",
    },
];

export default function ChatbotBlogPage() {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();

        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="relative w-full h-[350px] md:h-[450px]">
                <Image
                    src="/images/blogs/ui&ai-automation.svg"
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
                        <div className="mb-10">UI Automation vs AI Automation</div>
                        The Evolution of Software Testing in the Age of Intelligence
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* LEFT CONTENT */}
                <div className="md:col-span-2 space-y-10">
                    {/* OVERVIEW */}
                    <div id="overview" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Overview:
                        </h2>

                        <p className="text-sm md:text-base text-primaryText">
                            For over a decade, <strong>UI automation</strong> has been the backbone of modern software testing. Tools like Selenium, Cypress, and Playwright enabled teams to accelerate regression cycles and improve release confidence.
                            However, as applications became more dynamic, distributed, and fast-changing, traditional automation began to show its limitations.
                            <br></br>
                            Enter <strong>AI-powered automation</strong>—a paradigm shift that augments classical automation with intelligence, learning, and adaptability.
                            <br></br>
                            This blog explores <strong>UI Automation vs AI Automation</strong>, clarifying differences, benefits, limitations, and when each approach makes sense.
                        </p>
                    </div>

                    {/* UI AUTOMATION */}
                    <div id="ui-automation" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            What Is Traditional UI Automation?
                        </h2>

                        <p className="text-sm md:text-base text-primaryText mb-2">
                            UI automation refers to script-based testing where predefined steps validate application behavior through the user interface.
                        </p>
                        <div className="p-5">
                            <div className="flex">
                                <div>
                                    <h4 className="text-sm md:text-lg font-bold mb-4">Core Characteristics</h4>
                                    <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                                        <li>Rule-based and deterministic</li>
                                        <li>Depends on stable locators and flows</li>
                                        <li>Requires human-designed test cases</li>
                                        <li>Predictable and repeatable</li>
                                    </ul>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm md:text-lg font-bold mb-4">Common Tools</h4>
                                    <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                                        <li>Selenium</li>
                                        <li>Playwright</li>
                                        <li>Cypress</li>
                                        <li>WebdriverIO</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-sm md:text-lg font-bold mb-4">Typical Workflow</h4>
                                <ol className="text-xs font-normal md:ml-4 ml-4 mb-0 list-decimal pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                                    <li>Tester writes test cases</li>
                                    <li>Automation engineer scripts them</li>
                                    <li>Scripts run in CI/CD</li>
                                    <li>Failures require manual analysis and fixes</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* STRENGHTHS */}
                    <div id="strengths" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Strengths of UI Automation</h2>
                        <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                            <li>Proven and mature</li>
                            <li>Fully controllable and transparent</li>
                            <li>Strong ecosystem and community</li>
                            <li>Ideal for stable regression scenarios</li>
                            <li>Low tool licensing cost (many are open source)</li>
                        </ul>
                    </div>

                    {/* LIMITATIONS */}
                    <div id="limitations" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-4">Limitations of UI Automation</h2>
                        <p className="text-xs md:text-base text-primaryText mb-2">Despite its success, UI automation struggles with:</p>
                        <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                            <li><strong>Fragile locators</strong> (DOM/UI changes break tests)</li>
                            <li>High <strong>maintenance effort</strong></li>
                            <li>Limited coverage due to scripting cost</li>
                            <li>Manual test design dependency</li>
                            <li>Reactive defect detection</li>
                        </ul>
                        <p className="text-xs md:text-base text-primaryText mt-2 mb-2">As delivery velocity increases, these limitations become bottlenecks.</p>
                    </div>

                    {/* AI AUTOMATION */}
                    <div id="ai-automation" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-4">What Is AI Automation?</h2>
                        <p className="text-xs md:text-base text-primaryText mb-2">AI automation enhances traditional automation using <strong>machine learning, NLP, and analytics</strong> to make testing <strong>adaptive, predictive, and self-improving.</strong></p>
                        <p className="text-xs md:text-base text-primaryText mb-2">AI does not replace automation—it augments it.</p>
                        <div className="flex p-5">
                            <div>
                                <h4 className="text-sm md:text-lg font-bold mb-4">Core Characteristics</h4>
                                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                                    <li>Learns from application behavior</li>
                                    <li>Generates tests from requirements</li>
                                    <li>Heals itself when UI changes</li>
                                    <li>Prioritizes tests based on risk</li>
                                    <li>Analyzes failures intelligently</li>
                                </ul>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-sm md:text-lg font-bold mb-4">Common AI Testing Capabilities</h4>
                                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                                    <li>AI-generated test cases</li>
                                    <li>Self-healing locators</li>
                                    <li>Visual AI validation</li>
                                    <li>Intelligent test prioritization</li>
                                    <li>Defect clustering and prediction</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* POPULAR TOOLS */}
                    <div id="popular-tools" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-4">Popular AI Testing Tools</h2>
                        <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                            <li>Testim</li>
                            <li>Mabl</li>
                            <li>Functionize</li>
                            <li>Applitools (Visual AI)</li>
                            <li>Healenium</li>
                            <li>GenAI-based test agents (custom)</li>
                        </ul>
                    </div>

                    {/* COMPARISON CARD */}
                    <div id="comparison" className="scroll-mt-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">UI Automation vs AI Automation: A Comparison</h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
                        <table className="w-full min-w-[700px]">
                            <thead>
                                <tr>
                                    <th className="text-left text-lg font-semibold pb-4">Dimension |</th>
                                    <th className="text-left text-lg font-semibold pb-4">UI Automation |</th>
                                    <th className="text-left text-lg font-semibold pb-4 text-[#0F72B1]">AI Automation</th>
                                </tr>
                            </thead>

                            <tbody className="text-base">
                                <tr>
                                    <td className="py-2">Test creation</td>
                                    <td>Manual scripting</td>
                                    <td className="text-[#0F72B1]">AI-generated from requirements</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Maintenance</td>
                                    <td>High</td>
                                    <td className="text-[#0F72B1]">Low (self-healing)</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Adaptability</td>
                                    <td>Low</td>
                                    <td className="text-[#0F72B1]">High</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Failure analysis</td>
                                    <td>Manual</td>
                                    <td className="text-[#0F72B1]">AI-assisted</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Coverage scalability</td>
                                    <td>None</td>
                                    <td className="text-[#0F72B1]">Continuous</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Learning capability</td>
                                    <td>Coding</td>
                                    <td className="text-[#0F72B1]">Quality strategy & validation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 

                {/* USES */}
                <div id="uses" className="scroll-mt-20">
                    <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-4">Key Use Cases Comparison</h2>
                    <p className="text-xs md:text-base text-primaryText mb-2">AI automation enhances traditional automation using <strong>machine learning, NLP, and analytics</strong> to make testing <strong>adaptive, predictive, and self-improving.</strong></p>
                    <p className="text-xs md:text-base text-primaryText mb-2">AI does not replace automation—it augments it.</p>
                    <div className="flex p-5">
                        <div>
                            <h4 className="text-sm md:text-lg font-bold mb-4">Where UI Automation Excels</h4>
                            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                                <li>Stable legacy applications</li>
                                <li>Compliance-driven testing</li>
                                <li>Highly controlled environments</li>
                                <li>Teams with strong coding expertise</li>
                                <li>Cost-sensitive programs</li>
                            </ul>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-sm md:text-lg font-bold mb-4">Where AI Automation Excels</h4>
                            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                                <li>Rapidly changing UI</li>
                                <li>Agile / DevOps environments</li>
                                <li>Large regression suites</li>
                                <li>Limited test design bandwidth</li>
                                <li>Enterprise-scale products</li>
                            </ul>
                        </div>
                    </div>
                </div>

                    {/* EXAMPLE SCENARIO */}
                    <div id="example" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Example Scenario
                        </h2>
                        <p className="text-xs md:text-base text-primaryText mb-2"><strong>Scenario:</strong> A login page UI changes its layout.</p>
                        <p className="text-xs md:text-base text-primaryText mb-2">AI does not replace automation—it augments it.</p>
                        <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
                            <li className="mb-2"><strong>UI Automation:</strong></li>
                        </ul>
                        <p className="text-xs md:text-base text-primaryText mb-2">Test fails → Engineer investigates → Locator updated → Test re-run</p>
                        <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
                            <li className="mb-2"><strong>AI Automation:</strong></li>
                        </ul>
                        <p className="text-xs md:text-base text-primaryText mb-2">Test fails → AI identifies alternate locator → Test heals itself → Execution continues</p>
                        <p className="text-xs md:text-base text-primaryText mb-2">The difference is <strong>reactive vs adaptive testing.</strong></p>
                    </div>

                    {/* DOES AI AUTOMATIONREPLACE UI AUTOMATION*/}
                    <div id="replace" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Does AI Automation Replace UI Automation?
                        </h2>
                        <p className="text-xs md:text-base text-primaryText mb-2"><strong>No</strong></p>
                        <p className="text-xs md:text-base text-primaryText mb-2">AI does not replace automation—it is an evolution</p>
                        <p className="text-xs md:text-base text-primaryText mb-2">The most successful organizations adopt a <strong>hybrid model:</strong></p>
                        <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
                            <li className="mb-2">Use <strong>traditional automation frameworks</strong> as the foundation</li>
                            <li className="mb-2">Layer <strong>AI intelligence</strong> on top for resilience and efficiency</li>
                        </ul>
                    </div>

                    {/* FUTURE OF TESTING */}
                    <div id="future" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            The Hybrid Future of Testing
                        </h2>
                        <p className="text-sm md:text-base text-primaryText mb-2">A modern QA stack looks like this:</p>
                        <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
                            <li className="mb-2">Selenium / Playwright for core automation</li>
                            <li className="mb-2">AI test generation for faster coverage</li>
                            <li className="mb-2">Self-healing for stability</li>
                            <li className="mb-2">Visual AI for UI correctness</li>
                            <li className="mb-2">Predictive analytics for release risk</li>
                        </ul>
                        <p className="text-sm md:text-base text-primaryText mb-2">This approach delivers <strong>speed, stability, and confidence.</strong></p>
                    </div>

                    {/* CHALLENGES */}
                    <div id="challenges" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Challenges with AI Automation (Reality Check)
                        </h2>
                        <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
                            <li className="mb-2">Tool maturity varies</li>
                            <li className="mb-2">Explainability can be limited</li>
                            <li className="mb-2">Over-reliance without governance is risky</li>
                            <li className="mb-2">Requires strong QA fundamentals</li>
                            <li className="mb-2">Licensing costs may apply</li>
                        </ul>
                        <p className="text-xs md:text-base text-primaryText mb-2">AI amplifies quality practices—it does not fix poor ones.</p>
                    </div>

                    {/* SKILLS */}
                    <div id="skills" className="scroll-mt-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">Skills Shift for Testers</h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
                        <table className="w-full min-w-[700px]">
                            <thead>
                                <tr>
                                    <th className="text-left text-lg font-semibold pb-4">
                                        Traditional Focus |
                                    </th>
                                    <th className="text-left text-lg font-semibold pb-4">
                                        Future Focus
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-base">
                                <tr>
                                    <td className="py-2">Writing scripts</td>
                                    <td>Designing quality strategies</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Fixing locators</td>
                                    <td>Validating AI decisions</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Executing tests</td>
                                    <td>Interpreting risk & analytics</td>
                                </tr>

                                <tr>
                                    <td className="py-2">Manual analysis</td>
                                    <td>AI-assisted insights</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>

                    {/* CONCLUSION */}
                    <div id="conclusion" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Conclusion
                        </h2>
                        <p className="text-xs md:text-base text-primaryText mb-2"><strong>UI automation laid the foundation. AI automation defines the future.</strong></p>
                        <p className="text-xs md:text-base text-primaryText mb-2">Organizations that succeed will not choose one over the other—they will <strong>blend both intelligently.</strong></p>
                        <p className="text-xs md:text-base text-primaryText mb-2">The goal of testing is not automation.</p>
                        <p className="text-xs md:text-base text-primaryText mb-2">The goal is <strong>risk reduction and release confidence.</strong></p>
                        <p className="text-xs md:text-base text-primaryText mb-2">AI simply helps us achieve that goal faster and smarter.</p>
                    </div>

                    {/* FINAL TAKEAWAY */}
                    <div id="final" className="scroll-mt-20">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Final Takeaway
                        </h2>
                        <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
                            <li className="mb-2">UI Automation = Control & Predictability</li>
                            <li className="mb-2">AI Automation = Adaptability & Intelligence</li>
                            <li className="mb-2">Hybrid Model = Sustainable Quality Engineering</li>
                        </ul>
                    </div>
                    <img src="/images/blogs/ui-vs-ai-automation.svg"></img>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="hidden md:block">
                    <div className="sticky top-20 border-l border-gray-300 pl-6">
                        <h3 className="text-xl font-semibold mb-4">
                            Content Quick Links
                        </h3>

                        <ul className="space-y-2 text-[#0F72B1] text-sm">
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