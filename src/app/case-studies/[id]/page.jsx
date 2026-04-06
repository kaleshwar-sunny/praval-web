"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

const caseStudies = {
  globalCommunity: {
    id: "globalCommunity",
    hero: {
      image: "/images/globalCommunityHero.jpg",
      title: "Running a Global Community with the help of Praval",
    },
    sections: [
      {
        id: "problem",
        title: "Problem Evaluation",
        content: `Our client needed a way to connect its directors, founding members, new members, and fans worldwide. They wanted to provide their membership base with an online destination to communicate, publicize, add in new members, collaborate on new initiatives, and connect like-minded individuals. They were using WordPress as their primary website and public facing blog to share industry news and happenings. Their founding members and directors were collaborating through email and Google Docs.`,
      },
      {
        id: "impact",
        title: "Industrial Impact",
        bullets: [
          "WordPress could be replaced with a proper intranet portal that was customizable by 2X",
          "Local Chapters are now more self-organizable with dedicated sub portals. Video widget could embed precautionary YouTube videos",
          "Each admin could add, amend, or update site content that holds importance",
          "Content management and file sharing became extrinsically simplified",
        ],
      },
      {
        id: "solution",
        title: "Our Solution",
        content: `Our client turned to Praval Digital Workplace for all their internal and external communications. While it started with the collaboration among its directors and founding members, later on, it was extended to all the members where they could signup, manage their own profiles, connect with each other, share news and new music, and network with each other. Praval's team of experts also set up an organization-wide dashboard where the common widgets such as industry news and happenings, events, initiatives, and company updates kept everyone on the same page. Our Client completely adopted Praval Digital Workplace as their usual go-to platform for communication and collaboration among its directors and members. New members signup as well as existing member engagement did experience swift growth due to a well-organized community presence.`,
      },
      {
        id: "tech",
        title: "Tech Stack",
        bullets: ["Saketa Intranet Suite", "Praval Digital Workplace"],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: `Our Client is a non-profit global membership alliance of dancers, music fans, artists, and industry idealists. They are looking up to be the community that promotes the "Sound of Change." They take up important issues related to the electronic dance music community, and giving back to their local communities through charitable works.They work to spread their ideas with fun & effective solutions. To realize it, they needed a community and collaboration software solution where members could login to communicate, share information and events, self-organize into local chapters and project teams, and where directors could collaborate on building new programs and reached out to Praval for the solution.`,
      },
    ],
  },

  erc: {
    id: "erc",
    hero: {
      image: "/images/ercHero.jpg",
      title:
        "ERC upgrades its Cloud Data Management and Employee Engagement with Praval",
    },
    sections: [
      {
        id: "problem",
        title: "Problem Evaluation",
        content: `The Eating Recovery Center(ERC) is an international behavioral health center for eating disorders' recovery, providing comprehensive treatment for anorexia, bulimia, binge eating disorder and other unspecified eating disorders. The organization has facilities in 9 cities across the United States of America. ERC consulted with Praval to create an intranet from scratch. After a couple of meetings to finalize the requirements, the Praval team started working and were able to bring up a world class intranet for ERC in under 6 weeks.`,
      },
      {
        id: "impact",
        title: "Industrial Impact",
        bullets: [
          "The organization's business and security needs were well met",
          "Efficient information architecture made the solution easy to maintain and govern",
          "Effective search and navigation functionalities enabled easy retrieval of information",
          "Transparency in the organization, visibility and collaboration improved with the deployment of the Saketa ad-ins",
        ],
      },
      {
        id: "solution",
        title: "Our Solution",
        content: `We provided a bundled solution to ERC comprising of Praval Modern Intranet Suite and 4 Praval SharePoint add-ins. After surveying the business stakeholders and studying the ERC Style Guide, we presented them with a range of designs best suited to their business needs. For collaboration and effective process management, we provided ERC with Org Chart, Employee Directory, Project Tracker and Employee Onboarding. We provided ERC with technical training and detailed user guides to help them become comfortable with the new environment.`,
      },
      {
        id: "tech",
        title: "Tech Stack",
        bullets: ["Saketa Intranet Suite", "Praval Digital Workplace Solution"],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: `Our Client is a non-profit global membership alliance of dancers, music fans, artists, and industry idealists. They are looking up to be the community that promotes the "Sound of Change." They take up important issues related to the electronic dance music community, and giving back to their local communities through charitable works.They work to spread their ideas with fun & effective solutions. To realize it, they needed a community and collaboration software solution where members could login to communicate, share information and events, self-organize into local chapters and project teams, and where directors could collaborate on building new programs and reached out to Praval for the solution.`,
      },
    ],
  },

  npca: {
    id: "npca",
    hero: {
        image: "/images/npcaHero.jpg",
        title:
        "NPCA improves Core Internal Leave and Activity Reporting through PowerApps, Microsoft Flow, and Praval Partnership",
    },
    sections: [
        {
        id: "problem",
        title: "Problem Evaluation",
        content: `In the protection and conservation of natural parks with a team of members & supporters, people, productivity and efficiency are the keys. But manual, often paper-based processes create a barrier for organizations to deliver on these terms. Such was the case for NPCA. NPCA engaged with Praval's team of SharePoint specialists to adopt and implement digital work management solutions, looking to implement more efficient processes for Leave & Activity Reporting as well as for Onboarding of New Workforce.`,
        },
        {
        id: "impact",
        title: "Industrial Impact",
        bullets: [
            "Employees of National Parks Conservation Association (NPCA) can now easily file their leave and activity reports and other internal claims, while reporting managers now have the ability to review and approve.",
            "The efficient information architecture made the solution easy to maintain and govern",
            "Effective search and navigation functionalities provided an easy retrieval of information",
            "Transparency in the organization, visibility and collaboration improved with the deployment of the Saketa ad-ins",
        ],
        },
        {
        id: "solution",
        title: "Our Solution",
        content: `NPCA engaged our team of Office 365 experts to review the key process and use cases w.r.t their existing leave & activity reporting process and improve the information that was tracked and captured in the process and its associated documents. Tracking, Approval and reporting was crucial for NPCA's Accounting team for processing of paychecks, utilization and manpower budget. Praval team found it ideal to utilize Microsoft PowerApps and Office 365 as the business application platform for the solution. Leave & Activity reporting made it possible to file leave, maintain work reports and assists employees with filing, tracking, and updating their valuable effort from any device or form factor. The app is built using Common Data Service (CDM) as the main data source along with connections to SharePoint Online and Microsoft Flow that enabled the reporting managers and finance team to review the submitted proofs from SharePoint, take actions and trigger workflows with Flow for updating. Thus, making the process efficient, error-free and secure.`,
        },
        {
        id: "tech",
        title: "Tech Stack",
        bullets: [
            "Saketa Intranet Suite",
            "Praval Digital Workplace",
            "Microsoft Flow",
        ],
        },
        {
        id: "about",
        title: "About United Educators",
        content: `Our Client is a non-profit global membership alliance of dancers, music fans, artists, and industry idealists. They are looking up to be the community that promotes the "Sound of Change." They take up important issues related to the electronic dance music community, and giving back to their local communities through charitable works. They work to spread their ideas with fun & effective solutions. To realize it, they needed a community and collaboration software solution where members could login to communicate, share information and events, self-organize into local chapters and project teams, and where directors could collaborate on building new programs and reached out to Praval for the solution. NPCA embarked on a digital transformation journey in adapting a cloud-first strategy with a rollout of Office 365, Microsoft Teams and Power Platform. Seeking to eliminate manual work bottlenecks. As NPCA began looking for modern solutions that could automate and streamline many of their processes, Saketa turned out to be the help they needed.`,
        },
    ],
  },
};

export default function CaseStudyPage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const data = caseStudies[id];

  if (!data) notFound();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* HERO - Mobile responsive with better text spacing */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[450px]">
        <Image 
          src={data.hero.image} 
          alt="hero" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-6 md:px-16 bg-black/40">
          <p className="text-white font-medium text-sm sm:text-base">
            Case Study
            <span className="block w-10 h-[3px] bg-[#0F72B1] mt-1"></span>
          </p>
          <h1 className="text-white text-lg sm:text-xl md:text-4xl font-bold mt-3 sm:mt-4 max-w-4xl leading-tight sm:leading-tight md:leading-normal">
            {data.hero.title}
          </h1>
        </div>
      </section>

      {/* CONTENT - Mobile optimized with proper spacing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 grid md:grid-cols-3 gap-6 sm:gap-8">
        
        {/* LEFT - Main Content Area - Full width on mobile */}
        <div className="md:col-span-2 space-y-8 sm:space-y-10">
          {data.sections.map((sec) => (
            <div key={sec.id} id={sec.id} className="scroll-mt-20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                {sec.title}
              </h2>

              {sec.content && (
                <p className="text-sm sm:text-base text-primaryText leading-relaxed">
                  {sec.content}
                </p>
              )}

              {sec.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-primaryText">
                  {sec.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT - Quick Links - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-l-[#d8d8d8] pl-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Content Quick Links
            </h3>
            <ul className="space-y-3 text-[#0F72B1]">
              {data.sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => handleScroll(e, sec.id)}
                    className="hover:underline cursor-pointer transition-colors duration-200 text-sm"
                  >
                    {sec.title}
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