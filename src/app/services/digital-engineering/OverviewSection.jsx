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
    "DG": `In today’s data-driven world, ensuring the integrity, security, and reliability of your data isn’t just a best practice—it’s a necessity. Data governance serves as the backbone of effective decision-making, enabling businesses to build trust in every byte of data they collect, manage, and analyze. Our comprehensive data governance solutions are designed to make your data dependable, secure, and compliant with industry standards, empowering you to make confident, informed decisions.

`,
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