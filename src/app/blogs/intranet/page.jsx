"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "intranet", label: "What is an Intranet?" },
  { id: "usage", label: "Best ways to use an intranet for internal communication" },
  { id: "benefits", label: "Benefits of using an intranet for internal communication" },
  { id: "conclusion", label: "Conclusion" },
];

export default function IntranetBlogPage() {
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
            src="/images/internetBlog.png"
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
            5 best ways to use an intranet for internal communication
            </h1>
        </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-10">

            {/* OVERVIEW */}
            <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>

            <p className="text-sm md:text-base text-primaryText mb-4">
                Most businesses and organizations place more emphasis on external communications than on internal communications. The latter, Most businesses and organizations place more emphasis on external communications than on internal communications. The latter, however, needs to be better accounted for, and can prove costly if not paid heed to in the long run. With smooth and efficient internal communications, production processes and quality of work tend to improve, driving higher costs.
            </p>

            <p className="text-sm md:text-base text-primaryText">
                That is probably why improving internal communication should be one the top corporate intranet priorities. Initially, intranets were nothing more than message boards with document-sharing capabilities. But modern intranets, especially those built with SharePoint, provide a plethora of internal communication options. These tools and technologies can help businesses make the most of their intranets.
            </p>
            </div>

            {/* WHAT IS INTRANET */}
            <div id="intranet" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What is an Intranet?
            </h2>

            <p className="text-sm md:text-base text-primaryText mb-4">
                An intranet is a private computer network used within an organization to share information and resources among its employees, departments, and other authorized users. Unlike the internet which is a public network accessible to anyone — an intranet is only accessible within the organization or company that owns it.” Intranets facilitate communication, collaboration, and information sharing.
            </p>

            <p className="text-sm md:text-base text-primaryText mb-4">
                They typically include tools for email, instant messaging, document sharing, and other types of collaboration software. Intranets can also be used for internal business processes such as HR management, finance, and project management. Intranets are often secured with firewalls and other security measures to ensure only authorized users can access the network. They are typically hosted on internal servers and can be accessed by employees from their computers or mobile devices within the organization’s network.
            </p>

            <p className="text-sm md:text-base text-primaryText mb-4">
                Here are some of the <span className="text-[#0F72B1]">key benefits of intranet for internal communication</span>.
            </p>

            <p className="text-sm md:text-base text-primaryText">
                That is probably why improving internal communication should be one the top corporate intranet priorities. Initially, intranets were nothing more than message boards with document-sharing capabilities. But modern intranets, especially those built with SharePoint, provide a plethora of internal communication options. These tools and technologies can help businesses make the most of their intranets.
            </p>
            </div>

            {/* BEST WAYS */}
            <div id="usage" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Best ways to use an intranet for internal communication
            </h2>

            <ul className="list-disc pl-5 space-y-4 text-sm md:text-base text-primaryText">
                <li>
                <b>Centralized communication hub:</b> An intranet centralized communication hub is a system that enables the efficient and effective exchange of information and communication within an organization via an internal network. This hub is typically hosted on a company’s private network and accessible only to its employees and other authorized personnel.
                </li>

                <li>
                <b>Collaboration:</b> In today’s workplace, colleagues are rarely in the same room at the same time and are frequently separated by large distances. Teamwork and face-to-face interaction could be complex if there isn’t an intranet with the newest collaboration and communication tools.
                </li>

                <li>
                <b>Knowledge sharing:</b> Knowledge management has drawn much attention to the value of people and processes. Although it is undeniable true that knowledge management is not a technology issue, efforts must still be made to create an environment that will support knowledge capture and sharing.
                </li>

                <li>
                <b>Establish a recognition program:</b> Boosting team morale is another way to put AI and a corporate intranet to work for you. A great way to maintain open lines of communication at all times, it gives employees the option to provide their colleagues with digital ‘props,’ ‘cheers,’ ‘kudos,’ or even virtual rewards.
                </li>

                <li>
                <b>Training and development:</b> Training and development through an intranet are becoming increasingly popular as companies look for ways to provide effective and efficient training to their employees. This can include online courses, webinars, and other learning resources that employees can access from anywhere.
                </li>
            </ul>
            </div>

            {/* BENEFITS */}
            <div id="benefits" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Benefits of using an intranet for internal communication
            </h2>

            <ul className="list-disc pl-5 space-y-4 text-sm md:text-base text-primaryText">
                <li>
                <b>Improved communication:</b> An intranet provides a platform for employees to communicate with each other, share ideas, and collaborate on projects, which can improve communication and productivity.
                </li>

                <li>
                <b>Increased productivity:</b> An intranet can help employees save time by providing quick access to the information they need to do their jobs, such as company documents, contact information, and calendars.
                </li>

                <li>
                <b>Enhanced security:</b> Because intranets are private networks, they offer enhanced security features, such as password protection and encryption, to keep the company information safe.
                </li>

                <li>
                <b>Better knowledge sharing:</b> Intranet can help improve knowledge sharing within an organization. Employees can share their expertise and experiences with others through articles, blog posts, and discussion forums. This can lead to a more knowledgeable and informed workforce.
                </li>

                <li>
                <b>Improved employee engagement:</b> The intranet can help improve employee engagement by providing a platform for employees to interact with each other and the organization. This can help foster a sense of community and open and transparent culture within the organization.
                </li>
            </ul>
            </div>

            {/* CONCLUSION */}
            <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Conclusion
            </h2>

            <p className="text-sm md:text-base text-primaryText mb-4">
                In summary, an intranet can be a powerful tool for improving internal communication within your organization. A centralized communication and collaboration platform can help improve productivity, knowledge sharing, and employee engagement while reducing costs. By centralizing communication, fostering collaboration, and providing easy access to critical information, you can help your employees stay informed, engaged, and connected.
            </p>

            <p className="text-sm md:text-base text-primaryText">
                Any corporate leader today must be aware of how corporate intranets function in all spheres of society. By implementing an intranet for internal communication, your business will be able to communicate, conduct business, and generate more effective revenue on a regular basis.
            </p>
            </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden md:block">
            <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">
                Content Quick Links
            </h3>

            <ul className="space-y-3 text-[#0F72B1] text-sm">
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