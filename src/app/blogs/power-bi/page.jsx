"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "traditional-method", label: "Traditional PBIX Re-upload Method" },
  { id: "rest-api-solution", label: "The REST API Solution: Rebind Report Endpoint" },
  { id: "roi-comparison", label: "Real-World ROI: Manual vs API at Scale" },
  { id: "rebind-api-call", label: "Rebind Report API Call" },
  { id: "technical-behaviour", label: "Technical Behaviour" },
  { id: "permissions", label: "Permissions and Authentication" },
  { id: "comparison", label: "Comparison: REST API vs. Traditional PBIX Re-upload" },
  { id: "limitations", label: "Limitations of Report Rebinding Using REST API" },
  { id: "conclusion", label: "Conclusion" },
];

export default function PowerBIBlogPage() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
        <section className="relative w-full h-[350px] md:h-[450px]">
            <Image
            src="/images/powerbi_blogHero.png"
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
                    Repointing Power BI Reports Using REST API
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
            <p className="text-sm md:text-base text-primaryText">
              In enterprise business intelligence (BI) environments, repointing Power BI reports to
              various datasets is a recurring requirement. This often arises when consolidating
              shared datasets or implementing structural changes to data models.
            </p>
          </div>

          {/* TRADITIONAL METHOD */}
          <div id="traditional-method" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Traditional PBIX Re-upload Method
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-2">
              Repointing a report via Power BI Desktop involves downloading the .pbix file,
              updating the data source, and publishing it to the Power BI Service. This manual
              process:
            </p>
            <p className="text-sm md:text-base text-primaryText mb-4">
              However, this process is treated as the creation of a new report object, leading to
              several challenges:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "A new report ID is generated",
                "The existing report URL becomes invalid",
                "References to the report in dashboards, applications, and shared communications are broken",
                "Manual reconfiguration of permissions, row-level security (RLS), subscriptions, and bookmarks may be necessary",
                "For a single report, this may take 15–20 minutes. Now imagine performing this for 50 reports — that's 12–16 hours of effort, not including revalidation and end-user communications.",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* REST API SOLUTION */}
          <div id="rest-api-solution" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The REST API Solution: Rebind Report Endpoint
            </h2>
            <p className="text-sm md:text-base text-primaryText mb-4">
              To overcome these challenges, Power BI offers the Rebind Report API. With a simple
              API call:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "The report is rebound to a new dataset",
                "Its ID and URL are preserved",
                "All bookmarks, dashboard tiles, and subscriptions remain intact",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ROI COMPARISON TABLE */}
          <div id="roi-comparison" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Real-World ROI: Manual vs API at Scale
            </h2>

            <div className="rounded-xl overflow-hidden bg-white" style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}>
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-[#0F72B1] font-semibold">Activity</th>
                    <th className="text-left px-6 py-4 text-[#0F72B1] font-semibold">Manual (PBIX Re-upload)</th>
                    <th className="text-left px-6 py-4 text-[#0F72B1] font-semibold">API (Rebind Report)</th>
                  </tr>
                </thead>
                <tbody className="text-primaryText">
                  {[
                    ["Time per report", "15–20 minutes", "~30 seconds"],
                    ["Total time for 50 reports", "12–16 hours", "<30 minutes"],
                    ["Risk of disruption", "High", "Minimal"],
                    ["Human effort", "Intensive", "Scriptable, hands-off"],
                    ["URL continuity", "Broken", "Maintained"],
                  ].map(([activity, manual, api], i) => (
                    <tr key={i} className={i < 4 ? "border-b border-gray-100" : ""}>
                      <td className="px-6 py-4">{activity}</td>
                      <td className="px-6 py-4">{manual}</td>
                      <td className="px-6 py-4">{api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* REBIND API CALL */}
          <div id="rebind-api-call" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Rebind Report API Call
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 font-mono text-sm text-gray-800 space-y-2 break-words md:break-normal">
              <p>To perform the rebind operation, a simple API call can be made as shown below:</p>
              <p>Endpoint : POST https://api.powerbi.com/v1.0/myorg/groups/{"{groupId}"}/reports/{"{reportId}"}/Rebind</p>
              <p>Request Body :</p>
              <p>POST</p>
              <p>{"{"}</p>
              <p className="pl-4">"datasetId": "new-dataset-guid"</p>
              <p>{"}"}</p>
            </div>
          </div>

          {/* TECHNICAL BEHAVIOUR */}
          <div id="technical-behaviour" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Technical Behaviour</h2>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "Redirects the specified report to a new dataset.",
                'If the new dataset resides in a different workspace (or "My Workspace"), a shared dataset is automatically created within the report\'s workspace.',
                "If the report originally used a live connection, it is replaced with a direct binding to the new dataset.",
                "The report ID remains unchanged, preserving the original report URL.",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PERMISSIONS */}
          <div id="permissions" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Permissions and Authentication
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "Write permission on the target report.",
                "Build permission on the new dataset.",
                "The API caller must possess the Report.ReadWrite.All permission scope.",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPARISON TABLE */}
          <div id="comparison" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Comparison: REST API vs. Traditional PBIX Re-upload
            </h2>

            <div className="rounded-xl overflow-hidden bg-white" style={{boxShadow: "0px 8px 10px 0px #51A9E133"}}>
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-[#0F72B1] font-semibold">Criterion</th>
                    <th className="text-left px-6 py-4 text-[#0F72B1] font-semibold">Traditional PBIX Re-upload</th>
                    <th className="text-left px-6 py-4 text-[#0F72B1] font-semibold">REST API Rebind</th>
                  </tr>
                </thead>
                <tbody className="text-primaryText">
                  {[
                    ["Report ID", "Re-Generated", "Preserved"],
                    ["Report URL", "Changes", "Unchanged"],
                    ["Shared Link Continuity", "Broken", "Maintained"],
                    ["Configuration Rework", "Required", "Not Required"],
                    ["Automation Potential", "Limited", "High"],
                    ["User Disruption Risk", "High", "Minimal"],
                  ].map(([criterion, traditional, api], i) => (
                    <tr key={i} className={i < 5 ? "border-b border-gray-100" : ""}>
                      <td className="px-6 py-4">{criterion}</td>
                      <td className="px-6 py-4">{traditional}</td>
                      <td className="px-6 py-4">{api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* LIMITATIONS */}
          <div id="limitations" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Limitations of Report Rebinding Using REST API
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-primaryText list-disc pl-5">
              {[
                "The API does not validate schema compatibility automatically.",
                "The new dataset must have a compatible schema; otherwise, report visuals may break.",
                "Rebinding is only supported for standard Power BI reports, not paginated (.rdl) reports.",
                "Reports connected live to external sources like SSAS or AAS cannot be rebound.",
                "Proper permissions are required (Write access on the report and Build access on the dataset).",
                "Rebinding does not trigger a dataset refresh; it must be managed separately.",
              ].map((item, i) => (
                <li key={i} className="pl-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Conclusion</h2>
            <p className="text-sm md:text-base text-primaryText">
              The Power BI REST API's Rebind Report capability addresses a critical operational
              challenge: maintaining continuity when redirecting report data sources. Unlike the
              traditional PBIX re-upload method, the REST API preserves a report's unique identity
              and URL, ensuring seamless functionality across dashboards, applications, bookmarks,
              and scheduled reports.
            </p>
          </div>
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