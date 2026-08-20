"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "what-is-sqe", label: "What Is Sustainable Quality Engineering?" },
  { id: "why-not-sustainable", label: "Why Traditional QA Models Are Not Sustainable" },
  { id: "limitations", label: "Limitations of UI Automation" },
  { id: "core-principles", label: "Core Principles of Sustainable Quality Engineering" },
  { id: "in-action", label: "Sustainable Quality Engineering in Action (Examples)" },
  { id: "metrics", label: "Metrics That Support Sustainability" },
  { id: "skills", label: "Skills for Sustainable Quality Engineers" },
  { id: "coe", label: "The Role of a QA CoE in Sustainability" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

export default function SustainableQualityEngineering() {
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
        {/* NOTE: placeholder banner path — replace with your real asset */}
        <Image
          src="/images/blogs/sqe.svg"
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
            Sustainable Quality Engineering (SQE)
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">
          {/* OVERVIEW */}
          <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview:</h2>

            <p className="text-sm md:text-base text-primaryText mb-2">
              For years, software quality was measured by how many defects were found before
              release. Later, success was defined by how much automation was achieved. Today,
              neither metric alone is sufficient.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Modern digital products are always evolving, released continuously, and expected to
              perform flawlessly across platforms and geographies. In this environment, quality
              must be designed to last, not patched at the end.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              This is where Sustainable Quality Engineering (SQE) comes in.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              SQE is not a tool, framework, or process. It is a mindset and operating model that
              ensures quality practices remain effective, scalable, and resilient over time.
            </p>
          </div>

          {/* WHAT IS SQE */}
          <div id="what-is-sqe" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              What Is Sustainable Quality Engineering?
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Sustainable Quality Engineering is the practice of embedding quality into every stage
              of the software lifecycle in a way that:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Scales with business growth</li>
              <li>Adapts to change</li>
              <li>Minimizes long-term cost and effort</li>
              <li>Reduces human dependency</li>
              <li>Improves continuously through feedback</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              Sustainability in quality means you are not constantly &quot;fixing the process&quot;
              just to keep up.
            </p>
          </div>

          {/* WHY NOT SUSTAINABLE */}
          <div id="why-not-sustainable" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Why Traditional QA Models Are Not Sustainable
            </h2>

            <h4 className="text-sm md:text-lg font-bold mb-4">Common Symptoms</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Automation suites that break every sprint</li>
              <li>Heavy manual regression cycles</li>
              <li>Quality dependent on a few key individuals</li>
              <li>Late defect discovery</li>
              <li>Rising maintenance costs</li>
            </ul>

            <h4 className="text-sm md:text-lg font-bold mt-4 mb-2">Root Cause</h4>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Traditional QA often focuses on short-term coverage, not long-term viability.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">Example</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A team achieves 80% automation coverage in one year—but spends year two fixing broken
              scripts instead of adding value.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">This is not sustainable.</p>
          </div>

          {/* LIMITATIONS OF UI AUTOMATION */}
          {/* WHY NOT SUSTAINABLE */}
          <div id="limitations" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Limitations of UI Automation</h2>

            <h4 className="text-sm md:text-lg font-bold mb-4">Common Symptoms</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Automation suites that break every sprint</li>
              <li>Heavy manual regression cycles</li>
              <li>Quality dependent on a few key individuals</li>
              <li>Late defect discovery</li>
              <li>Rising maintenance costs</li>
            </ul>

            <h4 className="text-sm md:text-lg font-bold mt-4 mb-2">Root Cause</h4>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Traditional QA often focuses on short-term coverage, not long-term viability.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">Example</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A team achieves 80% automation coverage in one year—but spends year two fixing broken
              scripts instead of adding value.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">This is not sustainable.</p>
          </div>

          {/* CORE PRINCIPLES */}
          <div id="core-principles" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Core Principles of Sustainable Quality Engineering
            </h2>

            {/* 1 */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">
              1. Shift Quality Left and Right
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Quality must start early and continue after release.
            </p>
            <div className="flex p-5">
              <div>
                <h4 className="text-sm md:text-lg font-bold mb-4">Shift-Left Examples</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Testability reviews during design</li>
                  <li>Acceptance criteria written as test scenarios</li>
                  <li>API contracts validated before UI exists</li>
                </ul>
              </div>
              <div className="ml-4">
                <h4 className="text-sm md:text-lg font-bold mb-4">Shift-Right Examples</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Production monitoring</li>
                  <li>Synthetic transactions</li>
                  <li>User behaviour feedback loops</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Sustainable teams prevent defects early and learn from production continuously.
            </p>

            {/* 2 */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">
              2. Risk-Based Testing Over Blanket Coverage
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Testing everything equally is expensive and ineffective.
            </p>
            <h4 className="text-sm md:text-lg font-bold mb-4">Sustainable approach:</h4>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Focus effort where <strong>business impact and technical risk intersect.</strong>
            </p>
            <h4 className="text-sm md:text-lg font-bold mt-6 mb-4">Example</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Payment flow → deep functional, security, and performance testing</li>
              <li>Static UI content → minimal automated coverage</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This ensures testing effort delivers maximum value per test.
            </p>

            {/* 3 */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">
              3. Automation That Is Maintainable, Not Just Automated
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Automation is only sustainable when:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>It is modular</li>
              <li>It is readable</li>
              <li>It is resilient to change</li>
            </ul>
            <div>
              <div>
                <h4 className="text-sm md:text-lg font-bold mt-4 mb-4">Unsustainable Automation</h4>
                <p className="text-sm md:text-base text-primaryText mb-2">
                Focus effort where <strong>business impact and technical risk intersect.</strong>
                </p>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Hard-coded locators</li>
                  <li>Long end-to-end scripts</li>
                  <li>No ownership or review</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm md:text-lg font-bold mt-4 mb-4">Sustainable Automation</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Page Object / Screenplay patterns</li>
                  <li>API-first testing</li>
                  <li>Parallel execution</li>
                  <li>Self-healing where appropriate</li>
                </ul>
              </div>
            </div>
            <h4 className="text-sm md:text-lg font-bold mt-2 mb-4">Example</h4>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Moving 70% of regression from UI to API reduced execution time by 60% and maintenance
              effort by 40%.
            </p>

            {/* 4 */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">
              4. AI as an Enabler, Not a Crutch
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI strengthens sustainability when used responsibly.
            </p>
            <div className="flex p-5">
              <div>
                <h4 className="text-sm md:text-lg font-bold mb-4">Sustainable AI Use Cases</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>AI-generated test scenarios from requirements</li>
                  <li>Self-healing locators</li>
                  <li>Intelligent test prioritization</li>
                  <li>Defect clustering and prediction</li>
                </ul>
              </div>
              <div className="ml-4">
                <h4 className="text-sm md:text-lg font-bold mb-4">Unsustainable AI Use</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Blind trust in AI-generated tests</li>
                  <li>No human validation</li>
                  <li>No governance or feedback loop</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI should reduce effort—not eliminate accountability.
            </p>

            {/* 5 */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">
              5. Built-In Quality Ownership
            </h3>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Sustainability requires shared responsibility.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-semibold pb-4">Role</th>
                    <th className="text-left text-lg font-semibold pb-4">Quality Responsibility</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-2">Product Owner</td>
                    <td>Clear acceptance criteria</td>
                  </tr>
                  <tr>
                    <td className="py-2">Developer</td>
                    <td>Unit &amp; integration quality</td>
                  </tr>
                  <tr>
                    <td className="py-2">Tester</td>
                    <td>Risk analysis &amp; validation</td>
                  </tr>
                  <tr>
                    <td className="py-2">DevOps</td>
                    <td>Quality gates &amp; monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-primaryText mt-4 mb-2">
              Quality owned by everyone is quality that lasts.
            </p>
          </div>

          {/* IN ACTION */}
          <div id="in-action" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Sustainable Quality Engineering in Action (Examples)
            </h2>

            {/* Example 1 */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">
              Example 1: API-First Testing Strategy
            </h3>
            <h4 className="text-sm md:text-lg font-bold mb-2">Problem:</h4>
            <p className="text-sm md:text-base text-primaryText mb-4">
              UI automation was fragile and slow.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-semibold pb-4">Solution</th>
                    <th className="text-left text-lg font-semibold pb-4">Outcome</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-2">Shifted core business validations to API tests</td>
                    <td>Faster feedback</td>
                  </tr>
                  <tr>
                    <td className="py-2">Used UI tests only for critical journeys</td>
                    <td>Lower maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Example 2 */}
            <h3 className="text-lg md:text-2xl font-bold mt-8 mb-3">
              Example 2: Self-Healing Automation
            </h3>
            <h4 className="text-sm md:text-lg font-bold mb-2">Problem:</h4>
            <p className="text-sm md:text-base text-primaryText mb-4">
              UI changes caused frequent automation failures.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-semibold pb-4">Solution</th>
                    <th className="text-left text-lg font-semibold pb-4">Outcome</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-2">Introduced self-healing locators</td>
                    <td>50% reduction in false failures</td>
                  </tr>
                  <tr>
                    <td className="py-2">Added AI-assisted failure analysis</td>
                    <td>Testers focused on analysis, not script fixes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Example 3 */}
            <h3 className="text-lg md:text-2xl font-bold mt-8 mb-3">
              Example 3: Production Feedback Loop
            </h3>
            <h4 className="text-sm md:text-lg font-bold mb-2">Problem:</h4>
            <p className="text-sm md:text-base text-primaryText mb-4">
              Defects were discovered only after release.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-semibold pb-4">Solution</th>
                    <th className="text-left text-lg font-semibold pb-4">Outcome</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-2">Monitored production errors</td>
                    <td>Fewer escaped defects</td>
                  </tr>
                  <tr>
                    <td className="py-2">Mapped incidents back to missing test coverage</td>
                    <td>Continuous test suite improvement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* METRICS */}
          <div id="metrics" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Metrics That Support Sustainability
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-semibold pb-4">Metric</th>
                    <th className="text-left text-lg font-semibold pb-4">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-2">Defect leakage</td>
                    <td>Measures residual risk</td>
                  </tr>
                  <tr>
                    <td className="py-2">Automation stability</td>
                    <td>Measures sustainability</td>
                  </tr>
                  <tr>
                    <td className="py-2">Mean time to detect defects</td>
                    <td>Measures feedback speed</td>
                  </tr>
                  <tr>
                    <td className="py-2">Test maintenance effort</td>
                    <td>Measures long-term cost</td>
                  </tr>
                  <tr>
                    <td className="py-2">Release predictability</td>
                    <td>Measures trust</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SKILLS */}
          <div id="skills" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Skills for Sustainable Quality Engineers
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The role of a tester evolves from executor to <strong>quality strategist.</strong>
            </p>
            <h4 className="text-sm md:text-lg font-bold mb-2">Key Skills</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Risk analysis</li>
              <li>Automation architecture</li>
              <li>Data interpretation</li>
              <li>AI validation</li>
              <li>Business domain understanding</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              Sustainable quality comes from thinking, not just testing.
            </p>
          </div>

          {/* COE */}
          <div id="coe" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Role of a QA CoE in Sustainability
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A mature QA CoE enables sustainability by:
            </p>
            <h4 className="text-sm md:text-lg font-bold mb-2">Key Skills</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Defining standards</li>
              <li>Rationalizing tools</li>
              <li>Governing AI usage</li>
              <li>Driving continuous improvement</li>
              <li>Measuring long-term effectiveness</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              Without a CoE, sustainability remains accidental.
            </p>
          </div>

          {/* FINAL THOUGHTS */}
          <div id="final-thoughts" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Final Thoughts</h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Sustainable Quality Engineering is not about:
            </p>
            <h4 className="text-sm md:text-lg font-bold mb-2">Key Skills</h4>
            <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
              <li className="mb-2">More test cases</li>
              <li className="mb-2">More tools</li>
              <li className="mb-2">More automation</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              It is about making quality easier to maintain tomorrow than it is today.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              If your quality process collapses when people change, tools change, or requirements
              change—it is not sustainable.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Organizations that invest in sustainable quality build software that is:
            </p>
            <ul className="list-disc pl-6 space-y-5 text-sm md:text-base text-primaryText">
              <li className="mb-2">Resilient</li>
              <li className="mb-2">Adaptable</li>
              <li className="mb-2">Trustworthy</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              And ultimately, successful.
            </p>
          </div>

          {/* NOTE: placeholder diagram path — replace with your real asset */}
          <img
            src="/images/blogs/sqe-info-flow-legend.svg"
            alt="Sustainable Quality Engineering operating model"
          />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">Content Quick Links</h3>

            <ul className="space-y-4 text-[#0F72B1] text-sm">
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
