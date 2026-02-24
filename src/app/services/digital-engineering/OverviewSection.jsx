export default function OverviewSection({service = ""}) {

  const titles = {
    AD: 'Transforming Data into Actionable Insights',
    SC: 'Transform Your Vision Into Reality With Our Strategy Consulting Services',
    IM: 'Reliable, High-Impact Solutions from Start to Finish',
    MS: 'Focus on What You Do Best, Let Us Handle the Data',
    CM: 'Leading the Way with Innovation: Technology-Focused Expertise',
    AI: 'Transforming Data into Actionable Insights',
    RT: 'Stay Agile with Every Moment’s Insight',
    DV: 'Data Visualization - Bringing Your Data to Life',
    MDP: 'Modern Data Platforms & Warehouses – Built for Tomorrow',
    DG: 'Modern Data Platforms & Warehouses – Built for Tomorrow',
    ML: 'Praval’s MuleSoft Consulting: Leading Integration Experts',
    AA: 'Empower Your Business with Next-Generation AI-Driven Analytics',
    SN: 'Empowering Business Transformation with ServiceNow',
    default: 'Overview'
  };

  const contentMap = {
    "DE": `Digital Engineering goes beyond adopting new technologies; it requires a strategic approach. In order to succeed, businesses need to comprehend their long-term goals, adapt their digital strategies accordingly, and execute them in alignment with industry norms or even exceed them. By doing so, companies can establish themselves as leaders in their respective fields and exceed customer expectations.`,
    "DA": `Unlock the power of your data and turn your business goals into reality with our comprehensive suite of services and cutting-edge technology solutions. We combine strategy, implementation, and managed services to ensure you achieve unparalleled results. Whether you’re modernizing your cloud infrastructure, delving into AI and machine learning, or enhancing your data governance, we’ve got you covered.`,
    "EP": `Praval’s ERP solutions are designed to streamline business processes, enhance operational efficiency, and drive growth. Our comprehensive approach ensures seamless integration and optimization of your enterprise resources.`,
    "AD": `At Praval, we specialise in delivering end-to-end implementation solutions designed to meet your specific business needs. From the initial stages of design to seamless deployment, we ensure every phase of the process is handled with precision and care. Our commitment to tailored, scalable systems ensures your business operations remain robust and future-proof. Our solutions empower businesses to gain a deeper understanding of their operations, customers, and market dynamics, enabling them to stay ahead of the competition. Here’s how our expertise can revolutionize your approach to data-driven decision-making.`,
    "LC": `Demand for faster development and delivery of solutions is ever scaling. The typical traditional application development can be tedious and resource intensive with frequent bottle necks. Such a process can impact the overall delivery and customer satisfaction levels. The Low code No code development style enables project teams to rapidly create, deploy, and iterate on applications without the need for extensive coding skills thus improving agility. Our learned specialists in Low code No code solutions can help your organization implement with the right approach.`,
    "AZ": `Praval is your go to partner for Azure consulting services. Our Azure certified experts help businesses leverage the full potential of Microsoft Azure, one of the most powerful and versatile cloud platforms available today. Whether you’re new to Azure or looking to optimize your existing Azure infrastructure, we assist you every step of the way.`,
    "SC": `In today’s fast-paced business environment, having a vision is only the beginning. To achieve sustainable growth and measurable success, your aspirations need to be backed by actionable strategies. At Praval, we provide strategy consulting services that bridge the gap between where you are and where you want to be. Our expertise ensures your business goals are transformed into impactful outcomes through well-defined strategies tailored to your unique Objectives.`,
    "IM": `In today’s fast-paced business environment, having a vision is only the beginning. To achieve sustainable growth and measurable success, your aspirations need to be backed by actionable strategies. At Praval, we provide strategy consulting services that bridge the gap between where you are and where you want to be. Our expertise ensures your business goals are transformed into impactful outcomes through well-defined strategies tailored to your unique Objectives.`,
    "MS": `Running a business should mean channeling your energy into growth, strategy, and innovation—not juggling technical complexities. With our managed services, you can offload the heavy lifting of managing your data environment, allowing you to focus on scaling your operations seamlessly. From proactive monitoring to scalable solutions, we ensure your business runs smoothly, efficiently, and without interruptions. Our managed services are designed to provide a comprehensive, tailored approach to managing your data operations. We understand that every business is unique, and which is why our solutions are flexible and scalable to meet your evolving needs.`,
    "CM": `In today’s fast-paced digital landscape, staying ahead of the curve means embracing innovation at its core. Businesses leveraging modern technologies like cloud computing not only remain competitive but also unlock unparalleled efficiency and agility. At Praval, we specialize in driving transformative solutions through cloud modernization, empowering organizations to achieve their strategic goals seamlessly.`,
    "AI": `In today’s fast-paced digital landscape, staying ahead of the curve means embracing innovation at its core. Businesses leveraging modern technologies like cloud computing not only remain competitive but also unlock unparalleled efficiency and agility. At Praval, we specialize in driving transformative solutions through cloud modernization, empowering organizations to achieve their strategic goals seamlessly.`,
    "RT": `In today’s fast-paced, data-driven world, staying ahead isn’t optional—it’s essential. Decisions can’t afford to wait, and neither can your business. Our cutting-edge real-time analytics solutions provide the tools you need to respond proactively to emerging trends, challenges, and opportunities. Every moment matters, and our solutions ensure that you capitalize on each one with precision and agility. Businesses today operate in a landscape where information flows at lightning speed. Traditional analytics tools relying on static data and delayed reporting often leave you playing catch-up.`,
    "DV": `Complex data often feels like a tangled web of numbers, but it doesn’t have to be. At Praval, we specialize in transforming your raw data into visually stunning, actionable insights that tell a compelling story. Our expertise in data visualization empowers your organization to make informed decisions, engage stakeholders, and uncover hidden opportunities with ease. Whether you need interactive dashboards, custom reports, or captivating data storytelling, we’ve got you covered. `,
    "MDP": `Your business operates in a rapidly evolving digital landscape, where data drives every decision and innovation shapes the future. To thrive, you need a robust, intelligent, and scalable data platform designed to meet your current demands while adapting seamlessly to tomorrow’s challenges. Our modern data platforms and warehouses are built with this vision, providing the foundation for businesses to succeed in an era defined by data.`,
    "DG": `In today’s data-driven world, ensuring the integrity, security, and reliability of your data isn’t just a best practice—it’s a necessity. Data governance serves as the backbone of effective decision-making, enabling businesses to build trust in every byte of data they collect, manage, and analyze. Our comprehensive data governance solutions are designed to make your data dependable, secure, and compliant with industry standards, empowering you to make confident, informed decisions.`,
    "OR": `At Praval, we specialize in helping businesses harness the power of Oracle Analytics Cloud (OAC) and Oracle Enterprise Performance Management (EPM) Cloud solutions. Our expertise spans a wide range of Oracle products, designed to transform and optimize your business operations, from data analytics to human capital management, and supply chain management.`,
    "SF": `At Praval, our Salesforce Professional Services offer a comprehensive, strategic, and customized approach to every Salesforce project. We blend deep platform knowledge with extensive industry-specific experience to help you harness Salesforce to achieve your business goals efficiently and cost-effectively. `,
    "SSC": `Businesses can dramatically improve their success with Salesforce Sales Cloud by optimizing their sales funnel and enhancing customer relationships. With tools like lead and opportunity management, sales forecasting, and performance analytics, your team is empowered to make data-driven decisions.`,
    "SCC": `Salesforce Commerce Cloud is a powerful cloud-based e-commerce platform tailored to assist businesses in providing seamless and personalized shopping experiences across various digital channels. It includes an extensive suite of tools for managing merchandising, marketing, content, promotions, customer service, and order fulfillment. Thanks to its scalable and flexible architecture, Salesforce Commerce Cloud allows brands to swiftly respond to shifting market trends and evolving customer needs, helping them maintain a competitive edge in the digital commerce arena.`,
    "SDC": `Salesforce Data Cloud is an advanced data platform that integrates customer data from a variety of sources, both within and outside the Salesforce ecosystem. It seamlessly connects with systems such as AWS, Snowflake, and Google BigQuery, creating a unified and accurate customer profile. This single source of truth empowers businesses to deliver personalized experiences, gain actionable insights, and automate processes across multiple customer touchpoints.`,
    "ML": `MuleSoft, a key component of Salesforce, is an industry-leading integration platform that connects various applications, data sources, and APIs, whether on-premises or in the cloud. By simplifying system integration, businesses can break down data silos, automate workflows, and create a unified view of their operations. With the power of MuleSoft’s Anypoint Platform, Praval’s MuleSoft Consulting enables organizations to enhance operational efficiency and accelerate digital transformation, all while delivering exceptional customer experiences.`,
    "AA": `Tableau AI + Analytics, powered by Salesforce, transforms how businesses analyze and visualize their data. By integrating advanced AI tools, even users with minimal technical skills can dive deep into complex datasets, uncover patterns, and make data-driven decisions. With features like natural language processing (NLP) and automated data preparation, businesses accelerate their time to insights, fostering a culture of data-driven collaboration and decision-making.`,
    "SN": `Praval is your trusted ServiceNow Consulting and Implementation Partner, delivering end-to-end solutions that drive innovation and operational efficiency. With deep expertise in ServiceNow’s robust ecosystem, we guide organizations through their transformation journey. Our approach ensures seamless adoption and maximizes ROI.`,
    "GS": `Gainsight enables/aids you to manage customer relationships all at one place. It helps businesses to analyze data, uncover insights and develop strategies to deliver better experiences and outcomes for their customers. Praval is here to help you leverage the Gainsight services by offering advisory, customization and implementation that enable your product growth and efficiency.`,
  };

  const serviceContent = contentMap[service];
  return (
    <section className="pt-8 md:pt-0 md:pb-12">
      <div className="container mx-auto px-6">
        <div>
          
          <h2 className="text-lg md:text-5xl font-semibold text-primaryText">
            {titles[service] || titles.default}
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-primaryText py-4 md:py-6">
            {serviceContent}
          </p>

        </div>
      </div>
    </section>
  );
}