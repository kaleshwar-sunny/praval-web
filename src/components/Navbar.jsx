"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [serviceTab, setServiceTab] = useState("digital");
  const [contactTab, setContactTab] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  const toggleMobileMenu = (menu) => {
    if (mobileActiveMenu === menu) {
      setMobileActiveMenu(null);
    } else {
      setMobileActiveMenu(menu);
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white relative shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-0">
        <Link href="/">
          <Image
            src="/images/praval-logo-text.svg"
            alt="Praval"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-primaryText font-medium">
          <div
            onMouseEnter={() => setActiveMenu("platforms")}
            onMouseLeave={() => setActiveMenu("platforms")}
            className="py-4 hover:text-[#0F72B1] cursor-pointer transition-colors duration-200"
          >
            Platforms
          </div>

          <div
            onMouseEnter={() => setActiveMenu("services")}
            onMouseLeave={() => setActiveMenu("services")}
            className="py-4 hover:text-[#0F72B1] cursor-pointer transition-colors duration-200"
          >
            Services
          </div>

          <Link 
            href="/contact" 
            className="py-4 hover:text-[#0F72B1] transition-colors duration-200"
            style={{ hover: { color: '#0F72B1' } }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0F72B1';
              setActiveMenu(null);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000';
            }}
          >
            Contact
          </Link>

          <div
            onMouseEnter={() => setActiveMenu("contact")}
            onMouseLeave={() => setActiveMenu("contact")}
            className="py-4 hover:text-[#0F72B1] cursor-pointer transition-colors duration-200"
          >
              About
          </div>

          {/* <Link 
            href="/careers" 
            className="py-4 hover:text-[#0F72B1] transition-colors duration-200"
            style={{ hover: { color: '#0F72B1' } }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0F72B1';
              setActiveMenu(null);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000';
            }}
          >
            Careers
          </Link>

          <Link 
            href="/blogs" 
            className="py-4 hover:text-[#0F72B1] transition-colors duration-200"
            style={{ hover: { color: '#0F72B1' } }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0F72B1';
              setActiveMenu(null);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000';
            }}
          >
            Blogs
          </Link> */}

        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
        >
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-5 px-6 pb-6 h-full overflow-y-auto">
          {/* Mobile Menu Items */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="border-b border-gray-100 pb-3">
              <div className="py-2">
                <Link href="/" onClick={(e) => {setMobileMenuOpen(false)}}>
                  <img 
                    src="/images/praval-logo-text.svg" 
                    alt="Praval" 
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
            </div>
            
            {/* Platforms */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileMenu("platforms")}
                className="flex justify-between items-center w-full py-2 text-left text-primaryText font-medium hover:text-[#0F72B1] transition-colors duration-200"
              >
                <span>Platforms</span>
                <span className="text-2xl transition-transform duration-200">
                  {mobileActiveMenu === "platforms" ? "−" : "+"}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileActiveMenu === "platforms" ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <MobilePlatforms setMobileMenuOpen={setMobileMenuOpen} />
              </div>
            </div>

            {/* Services */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileMenu("services")}
                className="flex justify-between items-center w-full py-2 text-left text-primaryText font-medium hover:text-[#0F72B1] transition-colors duration-200"
              >
                <span>Services</span>
                <span className="text-2xl transition-transform duration-200">
                  {mobileActiveMenu === "services" ? "−" : "+"}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileActiveMenu === "services" ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <MobileServices setMobileMenuOpen={setMobileMenuOpen} />
              </div>
            </div>

            {/* Contact */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileMenu("contact")}
                className="flex justify-between items-center w-full py-2 text-left text-primaryText font-medium hover:text-[#0F72B1] transition-colors duration-200"
              >
                <span>Contact</span>
                <span className="text-2xl transition-transform duration-200">
                  {mobileActiveMenu === "contact" ? "−" : "+"}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileActiveMenu === "contact" ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <MobileContact />
              </div>
            </div>

            {/* Careers */}
            <Link 
              href="/careers" 
              className="block py-2 text-primaryText font-medium hover:text-[#0F72B1] transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>

            {/* Blogs */}
            <Link 
              href="/blogs" 
              className="block py-2 text-primaryText font-medium hover:text-[#0F72B1] transition-colors duration-200 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>

            {/* Case Studies */}
            <Link 
              href="/case-studies" 
              className="block py-2 text-primaryText font-medium hover:text-[#0F72B1] transition-colors duration-200 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menus - No animations */}
      {activeMenu === "platforms" && (
        <MegaPlatforms setActiveMenu={setActiveMenu} />
      )}

      {activeMenu === "services" && (
        <MegaServices
          setActiveMenu={setActiveMenu}
          serviceTab={serviceTab}
          setServiceTab={setServiceTab}
        />
      )}

      {activeMenu === "contact" && (
        <MegaContact
          setActiveMenu={setActiveMenu}
          contactTab={contactTab}
          setContactTab={setContactTab}
        />
      )}
    </nav>
  );
}

/* -------------------- Mobile Components -------------------- */

function MobilePlatforms({ setMobileMenuOpen }) {
  const items = ["Oracle", "Salesforce", "ServiceNow", "Gainsight", "Microsoft", "Azure"];

  return (
    <div className="space-y-3 pl-4">
      <p className="text-sm text-primaryText mb-3">
        Praval's ERP solutions are designed to streamline business processes, enhance operational efficiency, and drive growth.
      </p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
          <Link
            key={i}
            href={item.toLowerCase() === 'azure' 
              ? `/services/digital-acceleration/${item.toLowerCase()}`
              : item.toLowerCase() === 'microsoft' ? `/services/digital-acceleration`
              : `/services/enterprise-platforms/${item.toLowerCase()}`
            }
            onClick={(e) => {
              setMobileMenuOpen(false);
            }}
            className="text-sm block py-2 text-primaryText hover:text-[#0F72B1] transition-colors duration-200"
          >
            {item}
          </Link>
          <Image
            src="/images/rightArrowBlue.svg"
            alt="platforms"
            width={12}
            height={12}
          />
          </div>
        ))}
      </div>
      <Link href="/services/enterprise-platforms" onClick={(e) => {setMobileMenuOpen(false)}}>
        <button className="text-sm bg-[#0F72B1] text-white px-4 py-2 rounded mt-2 w-full cursor-pointer transition-all duration-200 hover:bg-[#0e5a8b]">
          Read More
        </button>
      </Link>
    </div>
  );
}

function MobileServices({ setMobileMenuOpen }) {
  const [serviceTab, setServiceTab] = useState("digital");

  const digitalItems = ["Digital Acceleration", "Data Analytics", "Gen AI"];
  const dataItems = ["Strategy Consulting", "Implementation", "Managed Services", "Cloud Modernization", "AI & ML", "Real-Time Analytics", "Data Visualization", "Modern Data Platforms & Warehouses", "Data Governance"];

  return (
    <div className="pl-4 space-y-4">
      {/* <div className="flex gap-4 border-b border-gray-200">
        {["Digital Acceleration", "Data Analytics", "Gen AI"].map((item, i) => (
          <button
            key={i}
            onClick={() => setServiceTab(i === 0 ? "digital" : i === 1 ? "data" : "genai")}
            className={`pb-2 transition-all duration-200 text-left text-xs ${
              (i === 0 && serviceTab === "digital") ||
              (i === 1 && serviceTab === "data") ||
              (i === 2 && serviceTab === "genai")
                ? "text-[#0F72B1] border-b-2 border-[#0F72B1]"
                : "text-primaryText"
            }`}
          >
            {item}
          </button>
        ))}
      </div> */}

      <div className="space-y-3">
        {digitalItems.map((item, i) => {
          const getHref = (itemName) => {
            if (itemName === 'Digital Acceleration') {
              return '/services/digital-acceleration';
            }
            if (itemName === 'Data Analytics') {
              return '/services/data-analytics';
            }
            if (itemName === 'Gen AI') {
              return '/genai';
            }
            return `/services/${itemName.toLowerCase().replace(/\s+/g, '-')}`;
          };

          return (
            <div key={i} className="flex items-center justify-between">
              <Link 
                href={getHref(item)} 
                className="block py-2 text-sm text-primaryText hover:text-[#0F72B1] transition-colors duration-200"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                }}
              >
                {item}
              </Link>
              <Image
                src="/images/rightArrowBlue.svg"
                alt="platforms"
                width={12}
                height={12}
              />
            </div>
          );
        })}
        {/* {serviceTab === "digital" && (
          <>
            <p className="text-sm text-primaryText">
              Digital Acceleration goes beyond adopting new technologies; it requires a strategic approach.
            </p>
            <div className="space-y-2">
              
            </div>
            <Link href="/services/digital-acceleration" onClick={(e) => {setMobileMenuOpen(false)}}>
              <button className="text-sm bg-[#0F72B1] text-white px-4 py-2 rounded w-full cursor-pointer transition-all duration-200 hover:bg-[#0e5a8b]">
                Read More
              </button>
            </Link>
          </>
        )}

        {serviceTab === "data" && (
          <>
            <p className="text-sm text-primaryText mb-6">
              We combine strategy, implementation, and managed services to ensure you achieve unparalleled results.
            </p>
            <div className="space-y-2">
              {dataItems.map((item, i) => {
                const getHref = (itemName) => {
                  if (itemName === 'AI & ML') {
                    return '/services/data-analytics/ai-ml';
                  }
                  if (itemName === 'Real-Time Analytics') {
                    return '/services/data-analytics/realtime-analytics';
                  }
                  if (itemName === 'Modern Data Platforms & Warehouses') {
                    return '/services/data-analytics/mdp-warehouses';
                  }
                  
                  // Default: replace spaces with hyphens and convert to lowercase
                  const formattedPath = itemName.toLowerCase().replace(/\s+/g, '-');
                  return `/services/data-analytics/${formattedPath}`;
                };
                
                return (
                  <div key={i} className="flex items-center justify-between">
                    <Link 
                      href={getHref(item)} 
                      className="block py-2 text-sm text-primaryText hover:text-[#0F72B1] transition-colors duration-200"
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                    <Image
                      src="/images/rightArrowBlue.svg"
                      alt="platforms"
                      width={12}
                      height={12}
                    />
                  </div>
                );
              })}
              <Link href="/services/data-analytics" onClick={(e) => {setMobileMenuOpen(false)}}>
                <button className="text-sm bg-[#0F72B1] text-white px-4 py-2 rounded w-full cursor-pointer transition-all duration-200 hover:bg-[#0e5a8b]">
                  Read More
                </button>
              </Link>
            </div>
          </>
        )}

        <>
          {serviceTab === "genai" && (
            <>
              <p className="text-sm text-primaryText">
                Tap into the true power of generative AI and transform your business into a cutting-edge innovator.
              </p>
              <Image
                src="/images/genai.png"
                alt="Gen AI"
                width={300}
                height={150}
                className="hidden rounded-lg mt-2"
              />
              <Link href="/" onClick={(e) => {setMobileMenuOpen(false)}}>
                <button className="text-sm bg-[#0F72B1] text-white px-4 py-2 rounded w-full cursor-pointer transition-all duration-200 hover:bg-[#0e5a8b]">
                  Read More
                </button>
              </Link>
            </>
          )}
        </> */}
      </div>

      {/* <Link href="/services">
        <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded w-full cursor-pointer transition-all duration-200 hover:bg-[#0e5a8b]">
          Read More
        </button>
      </Link> */}
    </div>
  );
}

function MobileContact() {
  const [contactTab, setContactTab] = useState("about");

  return (
    <div className="space-y-4">
      <div className="flex gap-6">
        {["About", "Connect"].map((item, i) => (
          <button
            key={i}
            onClick={() => setContactTab(i === 0 ? "about" : "connect")}
            className={`transition-all duration-200 text-sm ${
              (i === 0 && contactTab === "about") || (i === 1 && contactTab === "connect")
                ? "text-[#0F72B1] font-semibold"
                : "text-primaryText"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {contactTab === "about" && (
        <>
          <p className="text-sm text-primaryText">
            Praval embarked on a journey to make this vision a reality. Since our inception, we've been dedicated to helping businesses transform their operations.
          </p>
          <Link href="/about" onClick={(e) => {setMobileMenuOpen(false)}}>
            <button className="text-sm bg-[#0F72B1] text-white px-4 py-2 rounded w-full cursor-pointer transition-all duration-200 hover:bg-[#0e5a8b]">
              Read More
            </button>
          </Link>
        </>
      )}

      {contactTab === "connect" && (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-[#0F72B1]">Business</h4>
            <p className="text-primaryText">info@pravaltech.com</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0F72B1]">Sales</h4>
            <p className="text-primaryText">sales@pravaltech.com</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0F72B1]">U.S</h4>
            <p className="text-primaryText">+1 302 220 5686</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0F72B1]">INDIA</h4>
            <p className="text-primaryText">+91 950 200 2999</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------- Desktop Mega Menus -------------------- */

function MegaPlatforms({ setActiveMenu }) {
  const itemsCol1 = ["Oracle", "Salesforce", "ServiceNow"];
  const itemsCol2 = ["Gainsight", "Microsoft", "Azure"];
  const [hovered, setHovered] = useState(null);

  return (
    <div
      onMouseEnter={() => setActiveMenu("platforms")}
      onMouseLeave={() => setActiveMenu(null)}
      className="absolute top-full left-0 w-screen bg-white shadow-lg border-t border-[#fef7f7] py-8"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-16" style={{gridTemplateColumns: "3fr 1fr 1fr"}}>
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-medium text-primaryText mb-3">Platforms</h3>
          <p className="text-primaryText mb-4">
            Praval's ERP solutions are designed to streamline business processes, enhance operational efficiency, and drive growth. Our comprehensive approach ensures seamless integration and optimization of your enterprise resources.
          </p>
          <Link href="/services/enterprise-platforms" onClick={(e) => {setActiveMenu(null)}}>
            <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded mt-1 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          {itemsCol1.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex justify-between cursor-pointer hover:text-[#0F72B1]"
            >
              <Link
                key={i}
                href={item.toLowerCase() === 'azure' 
                  ? `/services/digital-acceleration/${item.toLowerCase()}`
                  : item.toLowerCase() === 'microsoft' ? `/services/digital-acceleration`
                  : `/services/enterprise-platforms/${item.toLowerCase()}`
                }
                onClick={(e) => {setActiveMenu(null)}}
                className="block py-1 text-[#1D2833] hover:text-[#0F72B1] transition-colors duration-200 flex justify-between items-center w-full"
              >
                    <span className="flex items-center gap-3">
                      <span className="text-[#1D2833] hover:text-[#0F72B1]">•</span>
                      <span>{item}</span>
                    </span>

                {/* {hovered === i && 
                  <div>
                    <Image
                      src="/images/rightArrowBlue.svg"
                      alt="platforms"
                      width={12}
                      height={12}
                    />
                  </div>
                } */}
              </Link>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          {itemsCol2.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex justify-between cursor-pointer hover:text-[#0F72B1]"
            >
              <Link
                key={i}
                href={item.toLowerCase() === 'azure' 
                  ? `/services/digital-acceleration/${item.toLowerCase()}`
                  : item.toLowerCase() === 'microsoft' ? `/services/digital-acceleration`
                  : `/services/enterprise-platforms/${item.toLowerCase()}`
                }
                onClick={(e) => {setActiveMenu(null)}}
                className="block py-1 text-[#1D2833] hover:text-[#0F72B1] transition-colors duration-200 flex justify-between items-center w-full"
              >
                    <span className="flex items-center gap-3">
                      <span className="text-[#1D2833] hover:text-[#0F72B1]">•</span>
                      <span>{item}</span>
                    </span>
                {/* {hovered === i && 
                  <div>
                    <Image
                      src="/images/rightArrowBlue.svg"
                      alt="platforms"
                      width={12}
                      height={12}
                    />
                  </div>
                } */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MegaServices({ setActiveMenu, serviceTab, setServiceTab }) {
  const items = ["Digital Acceleration", "Data Analytics", "Gen AI"];
  const [hovered, setHovered] = useState(null);
  const [hoveredDigital, setHoveredDigital] = useState(null);
  const [hoveredData, setHoveredData] = useState(null);

  const digitalItems = ["Application Development", "Low Code No Code", "Quality Engineering"];
  const dataItems = ["Strategy Consulting", "Implementation", "Managed Services", "Cloud Modernization", "AI & ML", "Real-Time Analytics", "Data Visualization", "Modern Data Platforms & Warehouses", "Data Governance"];
  
  return (
    <div
      onMouseEnter={() => setActiveMenu("services")}
      onMouseLeave={() => {
        setServiceTab("digital");
        setActiveMenu(null);
      }}
      className="absolute top-full left-0 w-screen bg-white shadow-lg border-t border-[#fef7f7] py-8"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-[1fr_2fr_1fr] gap-16">
        {/* Column 1 */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => {
                setHovered(i);
                if (i === 0) setServiceTab("digital");
                if (i === 1) setServiceTab("data");
                if (i === 2) setServiceTab("genai");
              }}
              onMouseLeave={() => setHovered(null)}
              className="flex justify-between cursor-pointer hover:text-[#0F72B1]"
            >
              {item}
              {hovered === i && 
              <div className="inline relative top-2">
                <Image
                  src="/images/rightBlue.svg"
                  alt="arrow"
                  width={8}
                  height={8}
                />
              </div>
              }
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div>
          {serviceTab === "digital" && (
            <>
              <h3 className="text-base md:text-lg font-medium text-primaryText mb-2">Digital Acceleration</h3>
              <p className="text-primaryText mb-4">
                Digital Acceleration goes beyond adopting new technologies; it requires a strategic approach. In order to succeed, businesses need to comprehend their long-term goals, adapt their digital strategies accordingly, and execute them in alignment with industry norms or even exceed them.
              </p>
              <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded cursor-pointer">
                <Link href="/services/digital-acceleration" onClick={(e) => {setActiveMenu(null)}}>
                  Read More
                </Link>
              </button>
            </>
          )}

          {serviceTab === "data" && (
            <>
              <h3 className="text-base md:text-lg font-medium text-primaryText mb-2">Data Analytics</h3>
              <p className="text-primaryText mb-4">
                We combine strategy, implementation, and managed services to ensure you achieve unparalleled results. Whether you're modernizing your cloud infrastructure, delving into AI and machine learning, or enhancing your data governance, we've got you covered.
              </p>
              <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded cursor-pointer">
                <Link href="/services/data-analytics" onClick={(e) => {setActiveMenu(null)}}>
                  Read More
                </Link>
              </button>
            </>
          )}

          {serviceTab === "genai" && (
            <>
              <h3 className="text-base md:text-lg font-medium text-primaryText mb-2">Gen AI</h3>
              <p className="text-primaryText mb-4">
                Tap into the true power of generative AI and transform your business into a cutting-edge innovator driven by highly skilled, tech-savvy professionals. In this Praval insight, industry experts share how you can shape a future of work that is seamless, intelligent, and human-centered.
              </p>
              <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded cursor-pointer">
                <Link href="/genai" onClick={(e) => {setActiveMenu(null)}}>
                  Read More
                </Link>
              </button>
            </>
          )}
        </div>

        {/* Column 3 */}
        <div>
          {serviceTab === "digital" && (
            <ul className="space-y-2 text-primaryText">
              {digitalItems.map((item, i) => {
                const getHref = (itemName) => {
                  if (itemName === 'Application development') {
                    return '/services/digital-acceleration/application-development';
                  }
                  if (itemName === 'Low Code No Code') {
                    return '/services/digital-acceleration/low-code';
                  }
                  return `/services/digital-acceleration/${itemName.toLowerCase().replace(/\s+/g, '-')}`;
                };

                return (
                  <li 
                    key={i} 
                    className="hover:text-[#0F72B1] cursor-pointer"
                    onMouseEnter={() => setHoveredDigital(i)}
                    onMouseLeave={() => setHoveredDigital(null)}
                  >
                    <Link
                      href={getHref(item)}
                      onClick={(e) => {setActiveMenu(null)}}
                      className="block py-2 text-[#1D2833] hover:text-[#0F72B1] transition-colors duration-200 flex justify-between items-center w-full"
                    >
                    <span className="flex items-center gap-3">
                      <span className="text-[#1D2833]">•</span>
                      <span>{item}</span>
                    </span>
                      {/* {hoveredDigital === i && (
                        <Image
                          src="/images/rightArrowBlue.svg"
                          alt="arrow"
                          width={12}
                          height={12}
                        />
                      )} */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {serviceTab === "data" && (
            <ul className="space-y-2 text-primaryText">
              {dataItems.map((item, i) => {
                // Function to generate the correct href based on item
                const getHref = (itemName) => {
                  // Custom mappings
                  if (itemName === 'AI & ML') {
                    return '/services/data-analytics/ai-ml';
                  }
                  if (itemName === 'Real-Time Analytics') {
                    return '/services/data-analytics/realtime-analytics';
                  }
                  if (itemName === 'Modern Data Platforms & Warehouses') {
                    return '/services/data-analytics/mdp-warehouses';
                  }
                  
                  // Default: replace spaces with hyphens and convert to lowercase
                  const formattedPath = itemName.toLowerCase().replace(/\s+/g, '-');
                  return `/services/data-analytics/${formattedPath}`;
                };

                return (
                  <li 
                    key={i} 
                    className="hover:text-[#0F72B1] cursor-pointer"
                    onMouseEnter={() => setHoveredData(i)}
                    onMouseLeave={() => setHoveredData(null)}
                  >
                    <Link
                      href={getHref(item)}
                      onClick={(e) => {setActiveMenu(null)}}
                      className="block py-1 text-[#1D2833] hover:text-[#0F72B1] transition-colors duration-200 flex justify-between items-center w-full"
                    >
                    <span className="flex items-center gap-3">
                      <span className="text-[#1D2833]">•</span>
                      <span>{item}</span>
                    </span>
                      {/* {hoveredData === i && (
                        <Image
                          src="/images/rightArrowBlue.svg"
                          alt="arrow"
                          width={12}
                          height={12}
                        />
                      )} */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {/* {serviceTab === "genai" && (
            <Image
              src="/images/genai.png"
              alt="Gen AI"
              width={800}
              height={200}
            />
          )} */}
        </div>
      </div>
    </div>
  );
}

function MegaContact({ setActiveMenu, contactTab, setContactTab }) {
  const items = ["About", "Careers", "Blogs", "Case Studies"];
  const [hovered, setHovered] = useState(null);
  
  return (
    <div
      onMouseEnter={() => setActiveMenu("contact")}
      onMouseLeave={() => {
        setActiveMenu(null);
        setContactTab("about");
      }}
      className="absolute top-full left-0 w-screen bg-white shadow-lg border-t border-[#fef7f7] py-8"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-[1fr_2fr_1fr] gap-12">
        {/* Column 1 */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => {
                setHovered(i);
                if (i === 0) setContactTab("about");
                if (i === 1) setContactTab("careers");
                if (i === 2) setContactTab("blogs");
                if (i === 3) setContactTab("cases");
              }}
              onMouseLeave={() => setHovered(null)}
              className="flex justify-between cursor-pointer hover:text-[#0F72B1]"
            >
              {item}
              {hovered === i && 
              <div className="inline relative top-2">
                <Image
                  src="/images/rightBlue.svg"
                  alt="arrow"
                  width={8}
                  height={8}
                />
              </div>
              }
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div>
          {contactTab === "about" && (
            <>
              <h3 className="text-lg font-medium text-primaryText mb-2">About Praval</h3>
              <p className="text-primaryText mb-4">
                Praval embarked on a journey to make this vision a reality. Since our inception, we've been dedicated to helping businesses transform their operations, make data-driven decisions, and thrive in a world defined by constant change.
              </p>
              <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded cursor-pointer">
                <Link href="/about" onClick={(e) => {setActiveMenu(null)}}>
                  Read More
                </Link>
              </button>
            </>
          )}

          {contactTab === "careers" && (
            <>
              <h3 className="text-lg font-medium text-primaryText mb-2"> <span className="text-[#0F72B1]">Join</span> us and make an impact</h3>
              <p className="text-primaryText mb-4">
                We're always on the lookout for bright, innovative minds to join our family. We believe in fostering a work environment that's not only challenging and rewarding, but also fun and inclusive. If you have a passion for digital solutions and a drive to constantly learn, grow, and innovate, you might just be the perfect fit for our team.
              </p>
              <button className="text-sm md:text-base bg-[#0F72B1] text-white px-6 py-2 rounded cursor-pointer">
                <Link href="/careers" onClick={(e) => {setActiveMenu(null)}}>
                  View Open Postions
                </Link>
              </button>
            </>
          )}

          {contactTab === "blogs" && (
            <>
              <h3 className="text-lg font-medium text-primaryText mb-2">Blogs</h3>
              <p className="text-primaryText mb-4">
                Quarterly accounts of the engagements we reframed, notes from the methodologies that worked, and the occasional postmortem we'd rather not have written. We publish here because the conversations that matter in IT services — what surfaces during discovery, what gets renegotiated past the SOW, what a deployment actually looks like ninety days after go-live — almost never make it onto a partner's case studies page.
              </p>
              <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded cursor-pointer">
                <Link href="/blogs" onClick={(e) => {setActiveMenu(null)}}>
                  Read More
                </Link>
              </button>
            </>
          )}

          {contactTab === "cases" && (
            <>
              <h3 className="text-lg font-medium text-primaryText mb-2">Case Studies</h3>
              <p className="text-primaryText mb-4">
                Read what shifted, not what was delivered. Each case follows the same four sections: the ask, the real problem we surfaced in discovery, the platform stack we built on, and the operational outcome that confirmed the work landed.
              </p>
              <button className="text-sm md:text-base bg-[#0F72B1] text-white px-4 py-2 rounded cursor-pointer">
                <Link href="/case-studies" onClick={(e) => {setActiveMenu(null)}}>
                  Read More
                </Link>
              </button>
            </>
          )}

          {/* {contactTab === "connect" && (
            <>
              <h4 className="font-semibold text-[#0F72B1]">Business</h4>
              <p className="text-primaryText mb-2">info@pravaltech.com</p>

              <h4 className="font-semibold text-[#0F72B1]">U.S</h4>
              <p className="text-primaryText">+1 302 220 5686</p>
            </>
          )} */}
        </div>

        {/* Column 3 */}
        <div>
          {contactTab === "about" && (
            <Image
              src="/images/pentagon-grid.png"
              alt="About"
              width={250}
              height={200}
            />
          )}

          {contactTab === "connect" && (
            <>
              <h4 className="font-semibold text-[#0F72B1]">Sales</h4>
              <p className="text-primaryText mb-2">sales@pravaltech.com</p>

              <h4 className="font-semibold text-[#0F72B1]">INDIA</h4>
              <p className="text-primaryText">+91 950 200 2999</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}