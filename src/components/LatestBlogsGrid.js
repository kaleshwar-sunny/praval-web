"use client";

const blogs = [
  {
    title: "App Dev",
    description:
      "Transition to a digital enterprise with modern application development and transformation.",
    image: "/images/blog-app-dev.png",
  },
  {
    title: "Salesforce",
    description:
      "Future-proof your business with automation and smart decision-making",
    image: "/images/blog-salesforce.png",
    tall: true,
  },
  {
    title: "ServiceNow",
    description: "Enable trust and transparency",
    image: "/images/blog-servicenow.png",
  },
  {
    title: "Cloud",
    description:
      "Experience easy, secure, and faster migration to cloud",
    image: "/images/blog-cloud.png",
  },
  {
    title: "Data & Analytics",
    description: "Make informed and data-driven decisions",
    image: "/images/blog-data.png",
    tall: true,
  },
  {
    title: "General",
    description:
      "Data conversion, digitization and management",
    image: "/images/blog-general.png",
  },
];

export default function LatestBlogsGrid() {
  return (
    <section className="py-4 md:py-14 text-left">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Latest Blogs
        </h2>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`relative rounded-sm overflow-hidden shadow-lg
                ${blog.tall ? "h-[480px]" : "h-[380px]"}
              `}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
              />
              <div className="absolute inset-0" />

              {/* Content */}
              <div className={`relative z-10 h-full p-6 flex flex-col justify-end text-left ${index % 2 === 0 ? "text-white" : "text-black"}`}>
                <h3 className="text-xl font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm mb-4">
                  {blog.description}
                </p>
                <span className="inline-flex items-center gap-2" style={{cursor: "pointer"}}>
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE LIST */}
        <div className="md:hidden space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-primaryText mb-4">
                {blog.description}
              </p>
              <span className="text-blue-600 text-xl">
                →
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 rounded-sm bg-white shadow-md text-[#0F72B1] font-medium">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
