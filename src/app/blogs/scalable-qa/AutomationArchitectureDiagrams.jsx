"use client";

/**
 * Architecture diagrams for the license-free automation blog.
 *
 * The source material is ASCII art. Rather than drop it into <pre> blocks —
 * which read as terminal output and force horizontal scrolling on phones —
 * each diagram is described as data and rendered as real boxes and connectors.
 * That makes the text selectable, translatable, indexable, and responsive.
 *
 * Node shapes:
 *   { label, sub }            simple box, optional second line
 *   { label, items: [] }      box containing a list of parts
 *   { label, pairs: [[a,b]] } box containing left → right rows
 *   { branch: [node, node] }  two boxes side by side (one flow splitting)
 */

export const architectureDiagrams = [
  {
    id: "arch-web-ui",
    title: "1. Web UI Automation Architecture",
    subtitle: "Selenium + Java + TestNG + Extent Reports",
    nodes: [
      { label: "Source Code Repository", sub: "GitHub / GitLab" },
      { label: "CI/CD Pipeline", sub: "Jenkins / GitHub Actions" },
      {
        label: "Test Automation Framework",
        items: ["Selenium WebDriver", "Java", "TestNG Framework"],
      },
      { label: "Browser Drivers", sub: "ChromeDriver / GeckoDriver / Edge" },
      { label: "Web Application" },
      { label: "Test Result Generation", sub: "Extent Reports" },
      { label: "QA Dashboard / Reports" },
    ],
    purpose: [
      "Automated UI regression testing",
      "Cross-browser validation",
      "Detailed reporting with screenshots",
    ],
  },
  {
    id: "arch-modern-ui",
    title: "2. Modern UI Automation Architecture",
    subtitle: "Playwright + Python",
    nodes: [
      { label: "Source Code Repository", sub: "GitHub / GitLab" },
      { label: "CI/CD Pipeline" },
      { label: "Playwright Test Framework", sub: "Python" },
      { label: "Browser Engines", items: ["Chromium", "WebKit", "Firefox"] },
      { label: "Web Application" },
      { label: "Test Results / Logs" },
      { label: "CI Dashboard / Reports" },
    ],
    purpose: [
      "Fast and reliable UI automation",
      "Native support for multiple browsers",
      "Improved handling of modern web apps",
    ],
  },
  {
    id: "arch-mobile",
    title: "3. Mobile Automation Architecture",
    subtitle: "Appium Mobile UI Automation",
    nodes: [
      { label: "Source Code Repository", sub: "GitHub" },
      { label: "CI/CD Pipeline" },
      { label: "Appium Automation Layer", items: ["Appium Server", "Test Scripts"] },
      {
        label: "Devices",
        items: ["Android Emulator", "iOS Simulator", "Real Mobile Devices"],
      },
      { label: "Mobile Application" },
      { label: "Test Results / Logs" },
    ],
    purpose: [
      "Cross-platform mobile testing",
      "Android and iOS automation",
      "Real device and emulator testing",
    ],
  },
  {
    id: "arch-api",
    title: "4. API Automation Architecture",
    subtitle: "Rest Assured",
    nodes: [
      { label: "Source Code Repository", sub: "GitHub" },
      { label: "CI/CD Pipeline" },
      { label: "API Automation Framework", sub: "Java + Rest Assured" },
      { label: "HTTP Requests" },
      { label: "API Gateway" },
      { label: "Backend Services", sub: "Microservices" },
      { label: "API Response Validation" },
      { label: "Test Reports" },
    ],
    purpose: [
      "API functional validation",
      "Data validation",
      "Microservice integration testing",
    ],
  },
  {
    id: "arch-performance",
    title: "5. Performance Testing Architecture",
    subtitle: "k6 + Grafana",
    nodes: [
      { label: "Performance Test Scripts", sub: "k6" },
      { label: "Load Generation Engine" },
      { label: "System Under Test (SUT)", sub: "Web / API Services" },
      { label: "Metrics Collection", sub: "InfluxDB / Prometheus" },
      { label: "Grafana Dashboard" },
      { label: "Real-Time Performance Monitoring" },
    ],
    purpose: ["Load testing", "Stress testing", "Performance benchmarking"],
  },
  {
    id: "arch-security",
    title: "6. Security Testing Architecture",
    subtitle: "OWASP ZAP",
    nodes: [
      { label: "Security Test Pipeline" },
      { label: "OWASP ZAP Proxy Tool", items: ["Passive Scan", "Active Scan"] },
      { label: "Web Application" },
      { label: "Vulnerability Scan" },
      { label: "Security Report Dashboard" },
    ],
    purpose: [
      "Vulnerability detection",
      "API security testing",
      "Automated security scans",
    ],
  },
  {
    id: "arch-database",
    title: "7. Database Automation Validation Architecture",
    subtitle: "Python + PyCharm",
    nodes: [
      { label: "Python Validation Scripts", sub: "PyCharm" },
      { label: "Data Validation Engine" },
      {
        branch: [
          { label: "Source Database", sub: "Oracle DB", items: ["Source Tables"] },
          { label: "Target Database", sub: "Data Warehouse / ETL", items: ["Target Tables"] },
        ],
      },
      {
        label: "Data Comparison Logic",
        sub: "Row Count, Column Match, Data Integrity Checks",
      },
      { label: "Validation Reports" },
      { label: "CI/CD Pipeline" },
    ],
  },
  {
    id: "arch-docker",
    title: "8. Containerized Automation Environment",
    subtitle: "Docker",
    nodes: [
      { label: "Source Code Repository", sub: "GitHub" },
      { label: "CI/CD Pipeline" },
      {
        label: "Docker Images",
        items: [
          "Selenium Container",
          "Playwright Container",
          "API Test Container",
          "Performance Test Container",
        ],
      },
      { label: "Container Runtime", sub: "Docker" },
      { label: "Test Execution Environment" },
      { label: "Test Results Storage" },
    ],
    purpose: [
      "Consistent test environments",
      "Scalable test execution",
      "Faster CI/CD pipelines",
    ],
  },
  {
    id: "arch-ecosystem",
    title: "9. Complete Automation Ecosystem Architecture",
    subtitle: "How all the tools work together",
    nodes: [
      { label: "Developers" },
      { label: "Source Control", sub: "GitHub / GitLab" },
      { label: "CI/CD Pipeline", sub: "Jenkins / GitHub Actions" },
      {
        label: "Automation Layers",
        pairs: [
          ["UI Automation", "Selenium / Playwright"],
          ["Mobile Automation", "Appium"],
          ["API Automation", "Rest Assured"],
          ["Performance Tests", "k6"],
          ["Security Testing", "OWASP ZAP"],
        ],
      },
      { label: "Docker Containers" },
      { label: "Test Execution Environment" },
      { label: "Monitoring & Visualization", sub: "Grafana Dashboards" },
      { label: "Test Reports & Insights" },
      
    ],
  },
  {
    id: "",
    title: "10.Benefits of this Automation Ecosystem",
    nodes: [
    ],
    purpose: [
      "100% license-free testing stack",
      "full test pyramid coverage",
      "scalable CI/CD integration",
      "containerized test environments",
      "real-time performance monitoring"
    ],
  },
];

/** Vertical connector between two stacked nodes. */
function Connector() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <svg width="16" height="28" viewBox="0 0 16 28" className="text-gray-400">
        <line x1="8" y1="0" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 19 L8 26 L13 19" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function Box({ node }) {
  return (
    <div className="rounded-xl border border-gray-300 bg-white px-5 py-4 text-center shadow-sm">
      <div className="text-sm md:text-base font-semibold text-gray-900">{node.label}</div>

      {node.sub && <div className="mt-1 text-xs md:text-sm text-gray-500">{node.sub}</div>}

      {node.items && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {node.items.map((item) => (
            <span
              key={item}
              className="rounded-md bg-gray-100 px-3 py-1.5 text-xs md:text-sm text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {node.pairs && (
        <div className="mt-3 divide-y divide-gray-200 text-left">
          {node.pairs.map(([left, right]) => (
            <div
              key={left}
              className="flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <span className="text-xs md:text-sm font-medium text-gray-800">{left}</span>
              <span className="text-xs md:text-sm text-[#0F72B1]">{right}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ArchitectureDiagram({ diagram }) {
  return (
    <div id={diagram.id} className="scroll-mt-20">
      <h3 className="text-lg md:text-xl font-bold mb-1">{diagram.title}</h3>
      {diagram.subtitle && (
        <p className="text-sm md:text-base text-gray-500 mb-5">{diagram.subtitle}</p>
      )}

      {diagram?.nodes?.length > 0 && (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-8">
        <div className="mx-auto max-w-[560px]">
          {diagram.nodes.map((node, i) => (
            <div key={node.label ?? `branch-${i}`}>
              {i > 0 && <Connector />}

              {node.branch ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {node.branch.map((col) => (
                    <Box key={col.label} node={col} />
                  ))}
                </div>
              ) : (
                <Box node={node} />
              )}
            </div>
          ))}
        </div>
      </div>)}

      {diagram.purpose && (
        <>
          <h4 className="text-sm md:text-lg font-bold mt-5 mb-2">Purpose</h4>
          <ul className="text-xs font-normal md:ml-4 ml-4 mb-0 list-disc pl-4 space-y-2 md:text-base text-primaryText marker:text-xs">
            {diagram.purpose.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

/** Renders every diagram in order. Drop this into the blog page. */
export default function AutomationArchitectureDiagrams() {
  return (
    <div className="space-y-4">
      {architectureDiagrams.map((diagram) => (
        <ArchitectureDiagram key={diagram.id} diagram={diagram} />
      ))}
    </div>
  );
}
