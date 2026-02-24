export default function ConnectWithUs() {
  const contacts = [
    {
      title: "Business",
      email: "info@pravaltech.com",
    },
    {
      title: "Sales",
      email: "sales@pravaltech.com",
    },
    {
      title: "Marketing",
      email: "partners@pravaltech.com",
    },
    {
      title: "Careers",
      email: "hiring@pravaltech.com",
    },
  ];

  return (
    <div className="w-full py-8 md:py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primaryText">
            Connect With Us
          </h2>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {contacts.map((item, index) => (
            <div key={index}>
              <h3 className="text-base md:text-lg font-semibold text-[#0F72B1]">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-primaryText mt-1">
                {item.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}