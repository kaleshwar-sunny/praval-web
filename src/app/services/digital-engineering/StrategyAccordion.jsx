"use client";

import { useState } from "react";


const SERVICES_MAP = {
    AD: {
        header: "Reshape the way work gets done",
        subject: `In today’s fast-paced business environment, having a vision is only the beginning. To achieve sustainable growth and measurable success, your aspirations need to be backed by actionable strategies. At Praval, we provide strategy consulting services that bridge the gap between where you are and where you want to be. Our expertise ensures your business goals are transformed into impactful outcomes through well-defined strategies tailored to your unique Objectives.`,
         sections: [
          {
            title: "Application/Product Development",
            content:
              "Build user-centric digital products using agile methodologies, prototyping, and cross-platform compatibility.",
            bullets: [
              "We use iterative cycles, embracing feedback and adapting to evolving requirements",
              "Validate ideas before development with prototypes and minimum viable products",
              "We create apps for web, mobile, and desktop, ensuring consistent user experience",
              "We prioritize intuitive and engaging designs, ensuring ease of use and a positive user experience",
            ],
            image: "/images/app-development.jpg",
          },
          {
            title: "API Development",
            content:
              "Create robust and secure APIs for seamless system integrations and enhanced interoperability.",
            bullets: [
              "We design scalable APIs tailored to your specific business needs and workflows",
              "Seamlessly connect with payment gateways, CRMs, ERPs, and applications",
              "We monitor, scale, and secure your API ecosystem for optimal performance and security",
              "Use OAuth, API keys, and encryption for data protection",
            ],
            image: "/images/api-development.jpg",
          },
          {
            title: "Single Page Applications",
            content:
              "Develop fast, dynamic, and interactive web applications using leading frameworks like React.js, Angular, and Vue.js.",
            bullets: [
              "We use frameworks like React.js, Angular, and Vue.js to build dynamic SPAs, enhancing user interaction",
              "Our designers craft intuitive, visually appealing interfaces that optimize user experience",
              "We use PWAs for offline functionality and ensuring a seamless experience without internet",
              "Techniques to improve visibility in search engines",
            ],
            image: "/images/spa.jpg",
          },
          {
            title: "Application Migration",
            content:
              "Upgrade legacy systems to modern platforms for improved performance, scalability, and cost-efficiency.",
            bullets: [
              "Transition your applications to secure cloud platforms like AWS, Azure, or Google Cloud",
              "Upgrade your stack to modern platforms with superior performance and security",
              "Enhance code quality and scalability to boost performance and reduce debt",
              "Seamlessly transfer data with integrity, minimal downtime & security",
            ],
            image: "/images/migration.jpg",
          },
          {
            title: "Integration Services",
            content:
              "Integrate various systems, applications, and data sources to create a cohesive and streamlined ecosystem that improves efficiency, enables seamless communication, and enhances overall business operations.",
            bullets: [
              "Unify ERP, CRM, and other enterprise systems for smooth data exchange",
              "Connect with payment gateways, marketing tools, and external platforms",
              "Ensure up-to-date information across all applications",
              "Bridge gaps between legacy systems and modern solutions",
            ],
            image: "/images/integration.jpg",
          },
        ]
    },
    LC: {
        header: "Expedite your application development process",
        subject: `Our experts leverage Microsoft technology stack to help you customize and build the low code or no code tools faster than ever. Following are our offerings.`,
         sections: [
          {
            title: "End User Effective Solutions",
            content:
              "Our End User Effective Solutions focus on creating a seamless and intuitive digital experience for your customers, clients, and employees.",
            bullets: [
              "Workforce productivity solutions",
              "Remote workforce enabler",
              "Collaboration automation processes",
              "Enterprise scalability software",
            ],
            image: "/images/app-development.jpg",
          },
          {
            title: "Intelligent Automation",
            content:
              "Our Intelligent Automation solutions harness the power of artificial intelligence and automation to optimize workflows, eliminate repetitive tasks, and drive cost savings.",
            bullets: [
              "Intelligent documents processing",
              "Business process automations/RPA",
              "Predictive analysis",
              "SharePoint workflow transformations",
            ],
            image: "/images/technologyService.png",
          },
          {
            title: "Business Apps",
            content:
              "Enhance efficiency, streamline processes, and boost productivity. Our custom business applications offering will align with your unique business needs, helping you stay competitive in a rapidly evolving market.",
            bullets: [
              "Innovation Apps(AI, IOT)",
              "Customer Engagement Apps",
              "Operational Efficiency Apps",
              "Enterprise Process Applications",
            ],
            image: "/images/businessApps.jpg",
          },
        ]
    },
    AZ: {
        header: "Integrated Solutions for Seamless Operations",
        subject: `Embrace comprehensive, intelligent Azure cloud services, providing you with a seamless end-to-end experience. Our Azure services help Improve your business operations, enhance scalability, strengthen security, and drive innovation.`,
         sections: [
          {
            title: "Azure Managed Services",
            content:
              "Azure Managed services provide ongoing support and maintenance, ensuring Azure environments remain secure, efficient, and cost-effective.",
            bullets: [
              "Monitoring, Maintenance & Support",
              "Azure DevOps Configuration Management & Governance",
              "Back-Up Management & Disaster Recovery",
              "Infrastructure Management",
            ],
            image: "/images/app-development.jpg",
          },
          {
            title: "Azure Application Development",
            content:
              "Azure Managed services guarantee that Azure environments are safe, effective, and economical by offering continuous support and maintenance.",
            bullets: [
              "Web Application Development​",
              "Mobile Application Development​",
              "Cloud Architecture Design & Development",
              "Application Modernization",
              "Azure Integration",
            ],
            image: "/images/api-development.jpg",
          },
          {
            title: "Azure Governance, Security And Compliance​",
            content:
              "Praval Azure Governance, Security and Compliance services safeguard data and applications by implementing best practices, monitoring threats, and ensuring adherence to industry standards, bolstering overall security and regulatory compliance.",
            bullets: [
              "Azure Management Groups​",
              "Platform security​",
              "Data and application security",
            ],
            image: "/images/azure-security.jpg",
          },
          {
            title: "Azure Consulting Services",
            content:
              "Praval Azure Governance, Security and Compliance services safeguard data and applications by implementing best practices, monitoring threats, and ensuring adherence to industry standards, bolstering overall security and regulatory compliance.",
            bullets: [
              "Advisory Services & Support",
              "Azure Cloud assessment​",
              "Azure Cost Optimization Services",
            ],
            image: "/images/azure-consulting.jpg",
          },
          {
            title: "Azure Migration Services​",
            content:
              "Seamlessly transition from on-premises or existing cloud environments to Azure, minimizing disruptions and optimizing resources.",
            bullets: [
              "Cloud Migration Strategy",
              "Workload Migration",
              "Lift & Shift Migration",
              "Application Refactoring & Re-Architecture",
            ],
            image: "/images/migration.jpg",
          },
        ]
    },
    SC: {
        header: "",
        subject: "",
         sections: [
          {
            title: "Data Strategy Development",
            content:
              "Your data is one of your most valuable assets, but are you leveraging it effectively? Our data strategy development services offer a comprehensive evaluation of your current data landscape. We analyze your data sources, infrastructure, and workflows to identify gaps and opportunities.",
            bullets: [
              "In-depth data assessment tailored to your business needs",
              "Strategies to simplify data management and optimize resources",
              "Solutions to integrate advanced tools for better data utilization",
            ],
            image: "/images/app-development.jpg",
          },
          {
            title: "Actionable Insights",
            content:
              "Data without insights is just numbers. We transform complex data into actionable insights that drive decision-making and maximize ROI. Through advanced analytics and innovative tools, we provide recommendations that fuel growth and efficiency.",
            bullets: [
              "Custom analytics models tailored for your business​",
              "Identifying high-impact opportunities for revenue growth​",
              "Simplifying complex data for better understanding and usability",
            ],
            image: "/images/technologyService.png",
          },
          {
            title: "Performance Tracking​",
            content:
              "Implementing a strategy is only the first step; monitoring its success is crucial. Our performance tracking services ensure that you’re always on the path to success. We establish clear metrics and KPIs to measure outcomes, providing you with real-time insights into the effectiveness of our strategies.",
            bullets: [
              "Continuous monitoring for optimal results​",
              "Dynamic adjustments to strategies based on performance data​",
              "Transparent reporting for full accountability",
            ],
            image: "/images/businessApps.jpg",
          },
        ]
    },
    IM: {
        header: "",
        subject: "",
         sections: [
          {
            title: "System Architecture",
            content:
              "A strong foundation is essential for any successful project. Our team of experts designs system architectures that prioritize:",
            bullets: [
              "Solutions that grow with your business",
              "Robust measures to protect your data and assets",
              "Streamlined processes for optimal performance",
            ],
            subContent: "With a focus on customized infrastructure, we ensure your system is not just a suitable fit for today, but also adaptable for future needs.",
            image: "/images/spa.jpg",
          },
          {
            title: "Custom Development: Tailored To Your Unique Needs",
            content:
              "No two businesses are alike, and neither are our solutions. We offer:",
            bullets: [
              "Applications to solve your business challenges​",
              "Adding capabilities to existing platforms for better functionality​",
              "Streamlining repetitive tasks for improved efficiency",
            ],
            subContent: "Our custom development services are built to integrate seamlessly with your operations, driving productivity and innovation.",
            image: "/images/applicationDevelopmentHero.png",
          },
          {
            title: "Development & Integration : Ensuring A Smooth Transition​",
            content:
              "Deploying a new system or solution can be complex, but not with us. We focus on:",
            bullets: [
              "Ensuring minimal disruption to your workflow​",
              "Making sure your new system integrates seamlessly with existing tools and platforms​",
              "Ongoing assistance to address any challenges",
            ],
            image: "/images/smoothTransition.jpg",
          },
        ]
    },
    MS: {
        header: "",
        subject: "",
         sections: [
          {
            title: "Proactive Monitoring : Staying One Step Ahead",
            content:
              "The best defense is a good offense. Our proactive monitoring solutions identify and resolve issues before they impact your business. Using advanced analytics and real-time monitoring tools, we keep an eye on your data environment 24/7.",
            bullets: [
              "Instant notifications ensure potential problems are addressed immediately",
              "By fixing issues proactively, we minimize downtime and protect your operations",
              "Gain actionable insights into your system’s health and performance",
            ],
            image: "/images/latestInsights1.png",
          },
          {
            title: "Scalable Solutions : Growing With You",
            content:
              "Your business growth shouldn’t be limited by your IT infrastructure. Our managed services are designed to scale with your organization, ensuring you have the right resources at every stage of growth.",
            bullets: [
              "Cloud storage to hybrid solutions infrastructure​",
              "Choose the services that fit your current needs, and expand them as your business grows​",
              "Avoid overpaying for unnecessary resources while ensuring you’re ready to scale when needed",
            ],
            image: "/images/ourServices2.png",
          },
          {
            title: "24/7 Support: Always Here For You​",
            content:
              "Deploying a new system or solution can be complex, but not with us. We focus on:",
            bullets: [
              "Ensuring minimal disruption to your workflow​",
              "Making sure your new system integrates seamlessly with existing tools and platforms​",
              "Ongoing assistance to address any challenges",
            ],
            image: "/images/customerSupport.jpg",
          },
        ]
    },
    CM: {
        header: "",
        subject: "",
         sections: [
          {
            title: "Cloud Migration: Seamless Transition to the Cloud",
            content:
              "Transitioning to the cloud is the foundation of modern business infrastructure. Our comprehensive cloud migration strategies ensure:",
            bullets: [
              "Reduced operational disruption during migration",
              "Migration plans designed for your business needs",
              "Scalable systems for long-term success",
            ],
            subContent: "We manage every aspect of your cloud migration, from assessing your current infrastructure to deploying scalable cloud-based solutions that align with your objectives.",
            image: "/images/migration.jpg",
          },
          {
            title: "Cost Optimization : Maximizing Efficiency While Reducing Overheads",
            content:
              "Cloud computing has revolutionized cost management for businesses. With our cost optimization strategies, we help you:",
            bullets: [
              "Identify and eliminate inefficiencies in your infrastructure​",
              "Leverage cloud-native tools to reduce unnecessary expenditures​",
              "Monitor usage patterns to maximize ROI on cloud investments",
            ],
            subContent: "Our experts ensure you gain the agility of the cloud without breaking the bank, making every dollar contribute toward enhancing your performance.",
            image: "/images/financeService.png",
          },
          {
            title: "Performance Boost : Enhanced Speed, Flexibility and Reliability​",
            content:
              "The cloud empowers businesses to operate at lightning speed, scale dynamically, and maintain robust reliability. We optimize your systems for:",
            bullets: [
              "Ensure near-perfect uptime for critical applications​",
              "Speed up service & app delivery to users​",
              "Ensure secure, accessible, safe during disruptions",
            ],
            subContent: "From cloud infrastructure design to real-time performance monitoring, we help you stay ahead of the curve with cutting-edge solutions.",
            image: "/images/latestInsights2.png",
          },
        ]
    },
    AI: {
        header: "",
        subject: "",
         sections: [
          {
            title: "Predictive Analytics : Anticipate trends and Drive Informed Decisions",
            content:
              "Predictive analytics is at the core of our offerings. By leveraging advanced machine learning models and statistical techniques, we analyze historical data to uncover patterns, identify risks, and forecast future outcomes.",
            bullets: [
              "Anticipate shifts in customer preferences, market conditions, and industry trends",
              "Detect potential pitfalls before they occur with accurate risk assessments",
              "Develop strategies based on concrete predictions rather than guesswork",
            ],
            subContent: "We manage every aspect of your cloud migration, from assessing your current infrastructure to deploying scalable cloud-based solutions that align with your objectives.",
            image: "/images/predictive.jpg",
          },
          {
            title: "Automated Processes : Revolutionizing Operational Efficiency",
            content:
              "Revolutionizing the way businesses operate. Our intelligent algorithms streamline repetitive tasks, allowing your team to focus on high-value activities. ",
            bullets: [
              "Eliminate time-consuming manual processes, reducing errors and costs​",
              "Boost productivity by automating routine workflows​",
              "Easily adapt automated systems to match your business growth",
            ],
            subContent: "From data entry to complex operations, our automation solutions ensure seamless performance, improved accuracy, and significant cost savings.",
            image: "/images/automated.jpg",
          },
          {
            title: "Intelligent Insights : Unlock the Full Potential of Your Data​",
            content:
              "Understanding data is the cornerstone of innovation. Our AI-powered insights provide a 360-degree view of your business, enabling smarter decisions.",
            bullets: [
              "Unlock a deep understanding of what drives your customers​",
              "Identify bottlenecks and implement effective process improvements​",
              "Discover new opportunities to innovate and stay ahead in your industry",
            ],
            subContent: "With actionable insights, you can tailor your strategies to align with your goals, enhancing efficiency and customer satisfaction.",
            image: "/images/intelligent.jpg",
          },
        ]
    },
    RT: {
        header: "",
        subject: "",
         sections: [
          {
            title: "Instant Insights for Immediate Action",
            content:
              "Time-sensitive decisions demand immediate access to accurate data. Our real-time analytics tools Deliver up-to-the-second insights that allow you to act swiftly and confidently. Whether you are tracking customer behaviors, monitoring operational efficiency, or managing inventory levels, instant insights ensure you’re always one step ahead.",
            bullets: [],
            subContent: "",
            image: "/images/predictive.jpg",
          },
          {
            title: "Boost Your Agility",
            content:
              "Adaptability is the hallmark of successful businesses. With Real-time analytics empowers you, you can pivot strategies quickly, respond to emerging trends, and mitigate risks before they escalate. This enhanced agility strengthens your decision-making process and helps maintain a competitive edge in dynamic markets.",
            bullets: [],
            subContent: "",
            image: "/images/automated.jpg",
          },
          {
            title: "Real-Time Trend Analysis​",
            content:
              "Staying ahead of industry trends is critical to long-term success. Our analytics solutions enable you to identify shifts and patterns as they occur. By analyzing real-time data streams, you can predict outcomes, understand market movements, and adjust your strategies to align with the latest developments.",
            bullets: [],
            subContent: "",
            image: "/images/intelligent.jpg",
          },
        ]
    },
    DV: {
        header: "Our Data Visualization Services",
        subject: "",
         sections: [
          {
            title: "Interactive Dashboards",
            content:
              "Empower decision-makers with dynamic dashboards that provide real-time insights at a glance. Our dashboards are: ",
            bullets: [
              "Usability ensure ease of use from analysts to executives",
              "Fits businesses, ensuring a seamless experience as you grow",
              "Suits businesses, ensuring seamless experience as you grow",
            ],
            subContent: "Imagine a single interface to track performance, monitor trends, and spot patterns. Interactive dashboards transform raw data into powerful insights.",
            image: "/images/predictive.jpg",
          },
          {
            title: "Scalable Solutions: Growing with You",
            content:
              "Your business is unique, and so are your reporting needs. We craft custom reports that provide:",
            bullets: [
              "Focused on your specific requirements and goals​",
              "Data is shown in a visually engaging format​",
              "Gain insights lead directly to business improvements",
            ],
            subContent: "Our reports eliminate guesswork out of decision-making by delivering information that matters most to you.",
            image: "/images/automated.jpg",
          },
          {
            title: "Engaging Storytelling​",
            content:
              "Data visualization isn’t just about numbers—it’s about storytelling. We turn your data into narratives that: ",
            bullets: [
              "Insights are framed to inspire strategic decisions",
              "Simplify complex concepts for easy understanding​",
              "Encourage teams to work towards common goals",
            ],
            subContent: "By presenting your data in a compelling story format, we help you connect with your audience on a deeper level. ",
            image: "/images/engaging.jpg",
          },
        ]
    },
    MDP: {
        header: "",
        subject: "",
         sections: [
          {
            title: "Scalable Architecture: Systems That Grow with Your Business",
            content:
              "Growth is at the heart of every successful business. But as you grow, so does your data. A scalable data platform ensures that you never run out of capacity, regardless of the size of your datasets. ",
            bullets: [
              "Expand storage capacity effortlessly to accommodate increasing data volumes",
              "Leverage the power of cloud computing for cost-effective scalability",
              "Handle complex queries and massive datasets without compromising speed",
            ],
            subContent: "By adopting a scalable architecture, you future-proof your operations and ensure seamless transitions as your business evolves.",
            image: "/images/predictive.jpg",
          },
          {
            title: "Centralized Data Access: Breaking Down Silos for Seamless Collaboration",
            content:
              "Data silos are one of the biggest roadblocks to innovation and efficiency. A centralized data platform eliminates these barriers by providing unified access to all your data, regardless of its source or format.",
            bullets: [
              "Consolidate structured, semi-structured, and unstructured data in one place​",
              "Enable teams to work with the same datasets, fostering transparency and alignment​",
              "Implement consistent security protocols and compliance measures across the organization",
            ],
            subContent: "Centralized access transforms how organizations interact with their data, enabling smarter, faster decisions.",
            image: "/images/centralized.jpg",
          },
          {
            title: "Advanced Analytics Integration: Preparing for Tomorrow’s Technologies​",
            content:
              "Understanding data is the cornerstone of innovation. Our AI-powered insights provide a 360-degree view of your business, enabling smarter decisions.",
            bullets: [
              "Enable machine learning algorithms with clean, structured data.",
              "Generate insights on-demand for agile decision-making​",
              "Tailor analytics to suit specific business needs, from customer behavior to operational efficiency",
            ],
            subContent: "Harness the power of modern analytics to uncover patterns, trends, and opportunities that drive success.",
            image: "/images/integration.jpg",
          },
        ]
    },
    DG: {
        header: "Our Data Governance Solutions",
        subject: "",
         sections: [
          {
            title: "Compliance Assurance",
            content:
              "Staying compliant with industry regulations is crucial for avoiding penalties and maintaining trust. Our data governance strategies ensure your organization adheres to key regulatory frameworks such as GDPR, HIPAA, and ISO standards. ",
            bullets: [
              "Simplify compliance monitoring with automated tools that identify and address potential gaps",
              "Tailored compliance strategies for sectors like healthcare, finance, and retail",
              "Reduce exposure to legal and reputational risks through proactive compliance management",
            ],
            subContent: "",
            image: "/images/predictive.jpg",
          },
          {
            title: "Data Quality Management",
            content:
              "Accurate and consistent data is the cornerstone of effective operations. Our data quality management practices eliminate inconsistencies, ensuring your datasets are always ready for use.",
            bullets: [
              "Define and enforce data standards across your organization",
              "Identify and correct errors before they impact decision-making",
              "Track data quality metrics to maintain accuracy over time",
            ],
            subContent: "",
            image: "/images/technologyService.png",
          },
          {
            title: "Access Control​",
            content:
              "In an era of increasing cyber threats, safeguarding sensitive information has never been more critical. Our robust access control mechanisms protect your data from unauthorized access while enabling seamless collaboration.",
            bullets: [
              "Grant access based on job responsibilities to minimize risks",
              "Enhance security with additional verification layers",
              "Detect and respond to unauthorized access attempts in real time",
            ],
            subContent: "",
            image: "/images/businessApps.jpg",
          },
        ]
    },
}

export default function StrategyAccordion({ service = "AD" }) {
  const [activeIndex, setActiveIndex] = useState(0);

    const toggleSection = (index) => {
    if (activeIndex === index) {
        setActiveIndex(0);
    } else {
        setActiveIndex(index);
    }
    };

  const currentService = SERVICES_MAP[service] || SERVICES_MAP.DE;

  return (
    <section
      className="py-8 md:py-12"
      style={{
        background:
          "linear-gradient(114.18deg, #1D2833 0%, #0F72B1 100%)",
      }}
    >
      <div className="container mx-auto px-6">

        <div className="mb-12 max-w-4xl">
          <h2 className="text-lg md:text-4xl font-semibold mb-6 text-white">
            {currentService.header}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/80">
            {currentService.subject}
          </p>
        </div>

        <div className="space-y-6">

          {currentService.sections.map((section, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="pb-6">

                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center text-left text-base md:text-2xl font-medium text-white"
                >
                  {section.title}
                    <img
                        src="/images/accordionArrow.png"
                        alt="Arrodion Arrow"
                        className={`transition-transform duration-300 w-5 h-3 ${
                        isActive ? "rotate-180" : ""
                        }`}
                    />
                </button>

                <div
                  className={`text-gray-300 transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-[800px] mt-6" : "max-h-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    <div className="md:justify-self-start md:ml-0 text-white/80">
                      <p className="mb-6 text-sm md:text-base">
                        {section.content}
                      </p>

                      <ul className="space-y-3 text-sm md:text-base">
                        {section.bullets.map((point, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-2 w-1 h-1 bg-white rounded-full" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                        {section?.subContent && (
                            <p className="mt-6 text-sm md:text-base">
                                {section.subContent}
                            </p>
                        )}
                    </div>

                    <div className="hidden md:block md:justify-self-end md:mr-0">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="rounded-lg shadow-lg w-full h-auto object-cover max-w-[438px] max-h-[250px]"
                      />
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}