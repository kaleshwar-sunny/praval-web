"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "s1", label: "1. AI Can Generate Tests—but It May Not Understand What Matters" },
  { id: "s2", label: "2. AI Struggles with Ambiguous Requirements" },
  { id: "s3", label: "3. AI Can Detect Patterns—but Context Still Matters" },
  { id: "s4", label: "4. AI Testing Tools Can Miss Real User Behavior" },
  { id: "s5", label: "5. Self-Healing Automation Can Hide Real Problems" },
  { id: "s6", label: "6. AI Can Produce False Confidence" },
  { id: "s7", label: "7. AI Struggles with Business and Domain Context" },
  { id: "s8", label: "8. AI Does Not Truly Understand Risk the Way Humans Do" },
  { id: "s9", label: "9. AI Can Struggle with Non-Functional Quality" },
  { id: "s10", label: "10. AI Can Miss the Difference Between Working and Useful" },
  { id: "s11", label: "11. AI Needs Human Oversight to Avoid Hallucinations" },
  { id: "s12", label: "12. Human Judgment Is Most Valuable at Quality Decision Points" },
  { id: "s13", label: "13. The Future: Human-Led, AI-Augmented Quality Engineering" },
  { id: "s14", label: "14. What QA Engineers Should Do Next" },
  { id: "conclusion", label: "Conclusion" },
];

export default function WhereAITestingToolsStillFail() {
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
          src="/images/blogs/where-ai-testing-fail.svg"
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
            Where AI Testing Tools Still Fail—and Why Human Judgment Still Matters
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
              Artificial intelligence is changing software testing faster than many organizations
              expected.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI-powered testing tools can now generate test cases, analyze requirements, identify
              potential defects, create automation scripts, heal broken locators, generate test
              data, and even recommend which tests should be executed after a code change.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The promise is compelling: faster testing, broader coverage, lower maintenance, and
              reduced manual effort.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              But there is a critical question that every Quality Engineering leader should ask:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>
                Can AI testing tools truly understand software quality the way an experienced human
                tester does?
              </strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The answer, at least today, is <strong>no.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI can dramatically accelerate testing activities, but it still struggles with business
              context, ambiguity, risk judgment, user behavior, ethical decisions, and the subtle
              differences between a technically correct system and a product that actually delivers
              value.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The future of testing is therefore not <strong>AI versus humans.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>It is AI plus human expertise.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The strongest Quality Engineering organizations will use AI to automate what machines
              do well while allowing experienced QA professionals to focus on what requires
              judgment, context, creativity, and accountability.
            </p>
          </div>

          {/* SECTION 1 */}
          <div id="s1" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              1. AI Can Generate Tests—but It May Not Understand What Matters
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              One of the most powerful capabilities of modern AI testing tools is automated test
              generation.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Given a user story, requirement, API specification, or application workflow, AI can
              generate:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Functional test cases</li>
              <li>Positive and negative scenarios</li>
              <li>Boundary-value scenarios</li>
              <li>API test cases</li>
              <li>UI automation scripts</li>
              <li>Regression scenarios</li>
              <li>Test data</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              Sustainability in quality means you are not constantly "fixing the process" just to keep up.
            </p>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This can significantly reduce the time required to create initial test coverage.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              However, generating many tests is not the same as generating the right tests.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">Consider a banking application.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">An AI tool may generate tests for:</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Transfer $100 from Account A to Account B.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              But an experienced tester may ask:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>What happens if the transfer is initiated twice?</li>
              <li>What happens if the network disconnects after the transaction is submitted?</li>
              <li>Can the customer accidentally transfer money twice?</li>
              <li>What happens when the account balance changes during processing?</li>
              <li>What happens if the transaction succeeds but the confirmation message fails?</li>
              <li>What happens if the receiving account is closed?</li>
              <li>Is the transaction compliant with regulatory requirements?</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              These questions require more than pattern recognition.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              They require <strong>domain knowledge, risk awareness, and experience.</strong>
            </p>

            <h4 className="text-sm md:text-lg font-bold mt-4 mb-2">The Human Advantage</h4>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A human QA professional can distinguish between:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>&quot;What can we test?&quot;</strong> and{" "}
              <strong>&quot;What is most important to test?&quot;</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              That distinction is fundamental to effective Quality Engineering.
            </p>
          </div>

          {/* SECTION 2 */}
          <div id="s2" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              2. AI Struggles with Ambiguous Requirements
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Real-world requirements are rarely perfect.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">They often contain:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Missing acceptance criteria</li>
              <li>Conflicting requirements</li>
              <li>Ambiguous business rules</li>
              <li>Incomplete workflows</li>
              <li>Assumptions that exist only in stakeholder discussions</li>
              <li>Legacy behavior that is not documented</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              AI systems can interpret requirements, but interpretation is not the same as
              understanding intent.
            </p>

            <h4 className="text-sm md:text-lg font-bold mt-4 mb-2">For example:</h4>
            <p className="text-sm md:text-base text-primaryText mb-2">
              &quot;The application should allow users to cancel an order.&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              An AI system may generate a straightforward cancellation test.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A human tester may immediately ask:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Can the order be canceled after shipment?</li>
              <li>What if payment has already been captured?</li>
              <li>Is a refund automatic?</li>
              <li>Can only one item be canceled?</li>
              <li>What happens to loyalty points?</li>
              <li>What happens to inventory?</li>
              <li>What notification does the customer receive?</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              The AI can generate scenarios based on available information.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The human identifies <strong>the information that is missing.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              This is one of the most important differences between AI-assisted testing and
              human-led Quality Engineering.
            </p>
          </div>

          {/* SECTION 3 */}
          <div id="s3" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              3. AI Can Detect Patterns—but Context Still Matters
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI is excellent at identifying patterns.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">It can analyze:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Historical defects</li>
              <li>Test execution results</li>
              <li>Application logs</li>
              <li>Code changes</li>
              <li>Production incidents</li>
              <li>Failure patterns</li>
              <li>Test coverage data</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              It can then identify potential areas of risk.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              However, context can change the meaning of a signal.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Imagine an AI tool identifies a high failure rate in a particular API.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The AI may classify it as a high-risk component.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              An experienced QA engineer may know that the API is intentionally designed to reject
              certain requests and that the failures are expected business behavior.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">The opposite can also happen.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              An API may show very few failures in testing but still represent a major production
              risk because the test data does not represent real-world usage.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">AI sees patterns.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Humans interpret those patterns within the context of the business.
            </p>
          </div>

          {/* SECTION 4 */}
          <div id="s4" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              4. AI Testing Tools Can Miss Real User Behavior
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI-generated tests are often based on known workflows.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Real users rarely behave exactly as designed.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">Users:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Click buttons multiple times</li>
              <li>Navigate backward</li>
              <li>Refresh pages unexpectedly</li>
              <li>Enter unusual data</li>
              <li>Switch devices</li>
              <li>Lose network connectivity</li>
              <li>Use unsupported combinations of actions</li>
              <li>Misinterpret UI elements</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              Human testers are naturally good at exploring unexpected behavior.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              This is where <strong>exploratory testing</strong> remains extremely valuable.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A skilled tester may deliberately ask:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              &quot;What happens if I do something the developer never expected me to do?&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI can assist exploratory testing, but human creativity remains difficult to replicate
              consistently.
            </p>
          </div>

          {/* SECTION 5 */}
          <div id="s5" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              5. Self-Healing Automation Can Hide Real Problems
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Self-healing test automation is one of the most exciting AI capabilities.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              When a UI locator changes, AI can identify a new locator and automatically update the
              test.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">This reduces test maintenance.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">But there is a potential danger.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">Suppose a button changes from:</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>&quot;Submit Payment&quot;</strong> to:{" "}
              <strong>&quot;Cancel Payment&quot;</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The AI may successfully locate the new element and allow the automation script to
              continue.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Technically, the test is &quot;healed.&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              But functionally, the application may have changed in a way that requires
              investigation.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              This creates an important principle:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>A healed test is not necessarily a correct test.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI can fix the automation mechanism.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A human must determine whether the underlying application behavior is still correct.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Self-healing should therefore be treated as a <strong>quality signal</strong>, not
              simply a maintenance success.
            </p>
          </div>

          {/* SECTION 6 */}
          <div id="s6" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">6. AI Can Produce False Confidence</h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              One of the biggest risks of AI-driven testing is the illusion of comprehensive
              coverage.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              An AI system may generate thousands of test cases.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">The test dashboard may show:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>95% automation coverage</li>
              <li>98% test pass rate</li>
              <li>90% requirement coverage</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              The organization may conclude that the product is highly reliable.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              But these metrics do not necessarily answer the most important question:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>Are we testing the right things?</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              High test volume does not guarantee high risk coverage.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A large number of automated tests can still miss:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Critical business scenarios</li>
              <li>Security vulnerabilities</li>
              <li>Compliance requirements</li>
              <li>Usability problems</li>
              <li>Accessibility issues</li>
              <li>Complex integration failures</li>
              <li>Real-world user behavior</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              AI can help increase coverage.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Human judgment determines whether that coverage is meaningful.
            </p>
          </div>

          {/* SECTION 7 */}
          <div id="s7" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              7. AI Struggles with Business and Domain Context
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Domain expertise remains one of the strongest advantages of experienced QA
              professionals.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">Consider:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Healthcare applications</li>
              <li>Banking systems</li>
              <li>Insurance platforms</li>
              <li>Aviation software</li>
              <li>Government systems</li>
              <li>Financial trading systems</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              In these domains, testing is not simply about verifying whether a button works.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">It involves understanding:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Regulations</li>
              <li>Business rules</li>
              <li>Risk</li>
              <li>Compliance</li>
              <li>Security</li>
              <li>Customer impact</li>
              <li>Operational consequences</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              AI can assist with testing these systems.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              But human domain experts are still required to determine what failure means and how
              much risk is acceptable.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              In high-risk domains, the question is not:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">&quot;Did the test pass?&quot;</p>
            <p className="text-sm md:text-base text-primaryText mb-2">The question is:</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              &quot;Can we safely release this system?&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              That decision requires human accountability.
            </p>
          </div>

          {/* SECTION 8 */}
          <div id="s8" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              8. AI Does Not Truly Understand Risk the Way Humans Do
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Risk-based testing is fundamentally about prioritization.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Suppose there are 10,000 possible test scenarios.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI can rank them based on historical data, code changes, defect patterns, and other
              signals.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              But a human QA leader may prioritize a scenario differently because:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>The feature impacts revenue</li>
              <li>A failure could damage customer trust</li>
              <li>The feature is legally regulated</li>
              <li>The feature affects a critical business process</li>
              <li>The feature is used by millions of users</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              Risk is not always measurable from historical data.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Sometimes, the most important risk is the one that has{" "}
              <strong>never happened before.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              This is where human judgment remains critical.
            </p>
          </div>

          {/* SECTION 9 */}
          <div id="s9" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              9. AI Can Struggle with Non-Functional Quality
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">Functional testing asks:</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              &quot;Does the system work?&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Quality Engineering asks a broader question:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              &quot;Does the system work well under real-world conditions?&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI testing tools can help generate performance, security, and reliability tests.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              However, humans still need to define:
            </p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>What performance level is acceptable?</li>
              <li>What is the business impact of latency?</li>
              <li>What is the acceptable failure rate?</li>
              <li>Which security risks are critical?</li>
              <li>What compliance requirements apply?</li>
              <li>What happens during peak traffic?</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              For example, an AI tool may identify that an API response time increased from 200 ms to
              800 ms.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">Is that a defect?</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The answer depends on the business context.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              For one system, 800 ms may be unacceptable.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              For another, it may be perfectly reasonable.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The technology provides the measurement.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">The human provides the judgment.</p>
          </div>

          {/* SECTION 10 */}
          <div id="s10" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              10. AI Can Miss the Difference Between &quot;Working&quot; and &quot;Useful&quot;
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              A system can technically meet every requirement and still deliver a poor user
              experience.
            </p>
            <h4 className="text-sm md:text-lg mt-4 mb-2">For example:</h4>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>A workflow works but is confusing.</li>
              <li>A page loads but is difficult to navigate.</li>
              <li>An error message is technically correct but not understandable.</li>
              <li>A feature works but requires unnecessary steps.</li>
              <li>An application is functional but inaccessible to users with disabilities.</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              These are areas where human observation and empathy remain important.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Quality is ultimately about the experience of real users.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI can analyze user behavior and detect patterns.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              But human testers are still valuable because they can ask:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              &quot;Would I actually want to use this product?&quot;
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              That is a different kind of testing.
            </p>
          </div>

          {/* SECTION 11 */}
          <div id="s11" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              11. AI Needs Human Oversight to Avoid Hallucinations
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Generative AI systems can produce incorrect outputs with high confidence.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">In testing, this may result in:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Incorrect test cases</li>
              <li>Invalid assumptions</li>
              <li>Wrong expected results</li>
              <li>Inaccurate automation scripts</li>
              <li>Misinterpreted requirements</li>
              <li>False defect reports</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-2 mb-2">
              This creates a new QA responsibility:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>AI output validation.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The QA engineer must review AI-generated artifacts before they become part of the
              testing lifecycle.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              This means the role of the tester is evolving from:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>Test Creator</strong> to:{" "}
              <strong>Test Strategist + AI Supervisor + Quality Validator</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The tester is no longer simply writing every test manually.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">Instead, they are deciding:</p>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>What should AI generate?</li>
              <li>What should AI execute?</li>
              <li>What should AI analyze?</li>
              <li>What requires human review?</li>
              <li>What evidence is sufficient for release?</li>
            </ul>
          </div>

          {/* SECTION 12 */}
          <div id="s12" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              12. Human Judgment Is Most Valuable at Quality Decision Points
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI is particularly effective at repetitive and data-intensive activities.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Humans are most valuable at decision points.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-4">
              A modern Quality Engineering model might look like this:
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-semibold pb-4">Activity</th>
                    <th className="text-left text-lg font-semibold pb-4">AI Strength</th>
                    <th className="text-left text-lg font-semibold pb-4 text-[#0F72B1]">Human Role</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-2">Test Case Generation</td>
                    <td>High</td>
                    <td className="text-[#0F72B1]">Review and prioritize</td>
                  </tr>
                  <tr>
                    <td className="py-2">Test Data Generation</td>
                    <td>High</td>
                    <td className="text-[#0F72B1]">Validate realism and compliance</td>
                  </tr>
                  <tr>
                    <td className="py-2">Test Execution</td>
                    <td>High</td>
                    <td className="text-[#0F72B1]">Define strategy</td>
                  </tr>
                  <tr>
                    <td className="py-2">Locator Healing</td>
                    <td>High</td>
                    <td className="text-[#0F72B1]">Validate application changes</td>
                  </tr>
                  <tr>
                    <td className="py-2">Regression Selection</td>
                    <td>High</td>
                    <td className="text-[#0F72B1]">Apply business risk judgment</td>
                  </tr>
                  <tr>
                    <td className="py-2">Defect Detection</td>
                    <td>High</td>
                    <td className="text-[#0F72B1]">Validate severity and impact</td>
                  </tr>
                  <tr>
                    <td className="py-2">Requirement Analysis</td>
                    <td>High</td>
                    <td className="text-[#0F72B1]">Resolve ambiguity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 13 */}
          <div id="s13" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              13. The Future: Human-Led, AI-Augmented Quality Engineering
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The future of testing will not be fully manual.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              It will not be fully autonomous either.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Instead, we are moving toward AI-augmented Quality Engineering.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">In this model:</p>
            <div className="flex p-5">
              <div>
                <h4 className="text-sm md:text-lg font-bold mb-4">AI Handles</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Repetitive test generation</li>
                  <li>Test execution</li>
                  <li>Test data creation</li>
                  <li>Regression optimization</li>
                  <li>Failure analysis</li>
                  <li>Locator maintenance</li>
                  <li>Log analysis</li>
                  <li>Defect clustering</li>
                  <li>Test impact analysis</li>
                </ul>
              </div>
              <div className="ml-4">
                <h4 className="text-sm md:text-lg font-bold mb-4">Humans Handle</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Quality strategy</li>
                  <li>Business risk assessment</li>
                  <li>Requirement ambiguity</li>
                  <li>Exploratory testing</li>
                  <li>Domain-specific decisions</li>
                  <li>Ethical considerations</li>
                  <li>User experience evaluation</li>
                  <li>Release risk acceptance</li>
                  <li>Final quality accountability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 14 */}
          <div id="s14" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              14. What QA Engineers Should Do Next
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              As AI becomes more capable, QA professionals should not focus only on learning another
              automation framework.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The more valuable skills will include:
            </p>
            <div className="flex p-5">
              <div>
                <h4 className="text-sm md:text-lg font-bold mb-4">Technical Skills</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>AI-assisted test automation</li>
                  <li>API testing</li>
                  <li>Test automation architecture</li>
                  <li>AI Testing Agents</li>
                  <li>Prompt engineering</li>
                  <li>LLM fundamentals</li>
                  <li>Test data engineering</li>
                  <li>Observability</li>
                  <li>Security testing</li>
                  <li>Performance engineering</li>
                </ul>
              </div>
              <div className="ml-4">
                <h4 className="text-sm md:text-lg font-bold mb-4">Quality Skills</h4>
                <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
                  <li>Risk-based testing</li>
                  <li>Exploratory testing</li>
                  <li>Test strategy</li>
                  <li>Domain expertise</li>
                  <li>Quality governance</li>
                  <li>Defect analysis</li>
                  <li>Test observability</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">Human Skills</h3>
            <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
              <li>Critical thinking</li>
              <li>Problem solving</li>
              <li>Communication</li>
              <li>Stakeholder management</li>
              <li>Business understanding</li>
              <li>Decision-making</li>
              <li>Leadership</li>
            </ul>
            <p className="text-sm md:text-base text-primaryText mt-4 mb-2">
              The QA engineer of the future will not compete with AI.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">They will orchestrate AI.</p>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Conclusion</h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              AI testing tools are becoming more powerful every year.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              They can generate tests faster, execute them at scale, analyze enormous amounts of
              data, and reduce the maintenance burden of automation.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">But AI still has limitations.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              It can misunderstand requirements.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">It can miss business context.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              It can generate irrelevant tests.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">It can create false confidence.</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              It can heal an automation script without recognizing that the application itself has
              changed incorrectly.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Most importantly, AI does not carry the same level of human accountability for quality
              decisions.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The future of software testing is therefore not about choosing between{" "}
              <strong>AI and human testers.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              It is about creating the right partnership.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>AI provides speed, scale, pattern recognition, and automation.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>
                Humans provide context, creativity, critical thinking, risk judgment, and
                accountability.
              </strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The organizations that succeed will be those that understand this distinction.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The goal should not be to build testing systems that eliminate human judgment.
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              The goal should be to build{" "}
              <strong>AI-powered Quality Engineering systems that amplify human judgment.</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Because the ultimate question in software quality is not:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>&quot;Did all the tests pass?&quot;</strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">It is:</p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              <strong>
                &quot;Do we have enough evidence and understanding to confidently say this product is
                ready for real users?&quot;
              </strong>
            </p>
            <p className="text-sm md:text-base text-primaryText mb-2">
              And today, that answer still requires a human.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-2">Content Quick Links</h3>

            <ul className="space-y-0.5 text-[#0F72B1] text-sm">
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