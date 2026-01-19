export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a1a1a] to-[#121212] .text-primaryText">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/praval-logo.svg"
                alt="Praval"
                className="h-8"
              />
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed mb-6 font-light" style={{color: "#FFFFFF"}}>
              Our love for technology and its potential to make a positive impact
              on the world is all-consuming. We thrive on tackling the toughest
              challenges our clients bring us, and it drives us to go above and
              beyond. We find joy in pursuing these challenges and continuously
              strive to exceed expectations.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {[
                "/images/instagram.svg",
                "/images/linkedin.svg",
                "/images/youtube.svg",
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                >
                  <img src={icon} alt="" className="h-5 w-5" />
                </div>
              ))}
            </div>

            {/* Badge + Subscribe (SIDE BY SIDE) */}
            <div className="flex items-center gap-6">
              <img
                src="/images/great-place-to-work.png"
                alt="Great Place To Work"
                className="h-24"
              />

              <div>
                <p className="text-white mb-2">
                  Subscribe to our news letter
                </p>
                <button className=".text-primaryText bg-white px-8 py-3 rounded-md text-base font-medium" style={{cursor: "pointer", color: "#1D2833"}}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            {/* Services */}
            <h4 className="text-white text-lg mb-4">Services</h4>
            <div className="grid grid-cols-2 gap-y-4 text-base font-light" style={{color: "#FFFFFF"}}>
              <p>Digital Engineering</p>
              <p>Data Analytics</p>
              <p>Enterprise Platforms</p>
            </div>

            <div className="border-t border-gray-700 my-8" />

            {/* Resources */}
            <h4 className="text-white text-lg mb-4">Resources</h4>
            <div className="grid grid-cols-3 gap-y-4 text-base font-light" style={{color: "#FFFFFF"}}>
              <p>About us</p>
              <p>Careers</p>
              <p>Blogs</p>
            </div>

            {/* Get in touch (MOVED HERE) */}
            <div className="border-t border-gray-700 my-8" />

            <h4 className="text-white text-lg mb-4">Get in touch</h4>
            <div className="flex flex-row gap-6 text-base font-light" style={{color: "#FFFFFF"}}>
              <p>US : +1 302 220 5686</p>
              <p>INDIA : +91 950 200 2999</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between text-base gap-4 font-light" style={{color: "#FFFFFF"}}>
          <p className="font-medium">Copyright © 2025 Praval</p>
          <div className="flex items-center gap-6">
            <p>Privacy Policy</p>
            <div className="h-4 w-px bg-gray-300"></div>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
