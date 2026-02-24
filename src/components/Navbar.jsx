"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showSalesforceSub, setShowSalesforceSub] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowSalesforceSub(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowSalesforceSub(false);
    }, 200);
  };

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-6 md:py-0 flex items-center md:justify-evenly justify-between py-3">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img src="/images/praval-logo-text.svg" alt="Praval" className="h-10" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10 font-medium text-gray-800">
          
          {/* Digital Engineering */}
          <div className="group/menu py-5">
            <Link
              href="/services/digital-engineering"
              className="hover:text-[#0F72B1] cursor-pointer block"
            >
              Digital Engineering
            </Link>

            <MegaMenu>
              <div className="grid grid-cols-[0.8fr_2fr] gap-16">
                <div className="space-y-4">
                    <MenuLink href="/services/digital-engineering/application-development">
                      Application Development
                    </MenuLink>
                    <MenuLink href="/services/digital-engineering/low-code">
                      Low Code No Code
                    </MenuLink>
                    <MenuLink href="/services/digital-engineering/azure">
                      Azure
                    </MenuLink>
                    <MenuLink href="/services/digital-engineering/quality-engineering">
                      Quality Engineering
                    </MenuLink>
                  </div>
                <MenuImage />
              </div>
            </MegaMenu>
          </div>

          {/* Data Analytics */}
          <div className="group/menu py-5">
            <Link
              href="/services/data-analytics"
              className="hover:text-[#0F72B1] cursor-pointer block"
            >
              Data Analytics
            </Link>

            <MegaMenu>
              <div className="grid grid-cols-[2fr_1.6fr] gap-8">
                 <div className="grid grid-cols-[1.4fr_2fr] gap-8">
                    <div className="space-y-4">
                      <MenuLink href="/services/data-analytics/strategy-consulting">
                        Strategy Consulting
                      </MenuLink>
                      <MenuLink href="/services/data-analytics/implementation">
                        Implementation
                      </MenuLink>
                      <MenuLink href="/services/data-analytics/managed-services">
                        Managed Services
                      </MenuLink>
                      <MenuLink href="/cloud-modernization">
                        Cloud Modernization
                      </MenuLink>
                      <MenuLink href="/data-governance">
                        Data Governance
                      </MenuLink>
                    </div>

                    <div className="space-y-4">
                      <MenuLink href="/cloud-modernization">
                        AI & ML
                      </MenuLink>
                      <MenuLink href="/data-governance">
                        Real-Time Analytics
                      </MenuLink>
                      <MenuLink href="/cloud-modernization">
                        Data Visualisation
                      </MenuLink>
                      <MenuLink href="/data-governance">
                        {`Modern Data Analytics 
                        Platforms
                        & Warehouses`}
                      </MenuLink>
                    </div>
                  </div>
                <MenuImage />
              </div>
            </MegaMenu>
          </div>

          {/* Enterprise Platforms */}
          <div className="group/menu py-5">
            <Link
              href="/services/enterprise-platforms"
              className="hover:text-[#0F72B1] cursor-pointer block"
            >
              Enterprise Platforms
            </Link>

            <MegaMenu>
              <div className={`grid ${showSalesforceSub ? 'grid-cols-[0.6fr_1fr_2fr]' : 'grid-cols-[0.5fr_2fr]'} gap-12`}>
                
                {/* LEFT COLUMN */}
                <div className="space-y-4">
                  <MenuLink href="/services/enterprise-platforms/oracle">Oracle</MenuLink>
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MenuLink href="/services/enterprise-platforms/salesforce">Salesforce <span className="text-3xl font-normal ml-4 relative -bottom-[2px]">›</span></MenuLink>
                  </div>
                  <MenuLink href="/services/enterprise-platforms/servicenow">ServiceNow</MenuLink>
                  <MenuLink href="/services/enterprise-platforms/gainsight">Gainsight</MenuLink>
                </div>

                {showSalesforceSub && (
                  /* SALESFORCE SUBMENU */
                  <div
                    className="transition-all duration-200"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h4 className="font-semibold mb-4">Salesforce</h4>
                    <div className="space-y-3 text-sm">
                      <MenuLink href="/services/enterprise-platforms/salesforce/sales-cloud">
                        Salesforce Sales Cloud
                      </MenuLink>
                      <MenuLink href="/services/enterprise-platforms/salesforce/service-cloud">
                        Salesforce Service Cloud
                      </MenuLink>
                      <MenuLink href="/services/enterprise-platforms/salesforce/marketing-cloud">
                        Salesforce Marketing Cloud
                      </MenuLink>
                      <MenuLink href="/services/enterprise-platforms/salesforce/commerce-cloud">
                        Salesforce Commerce Cloud
                      </MenuLink>
                      <MenuLink href="/services/enterprise-platforms/salesforce/data-cloud">
                        Salesforce Data Cloud
                      </MenuLink>
                      <MenuLink href="/services/enterprise-platforms/salesforce/mulesoft">
                        Mulesoft
                      </MenuLink>
                      <MenuLink href="/services/enterprise-platforms/salesforce/analytics-ai">
                        Analytics & AI (Einstein)
                      </MenuLink>
                    </div>
                  </div>
                )}

                <MenuImage />
              </div>
            </MegaMenu>
          </div>

          {/* Direct Links */}
          <Link
            href="/contact"
            className="hover:text-[#0F72B1] cursor-pointer block"
          >
            Contact
          </Link>

          <Link
            href="/about"
            className="hover:text-[#0F72B1] cursor-pointer block"
          >
            About
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
          <button 
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <div className="flex flex-col justify-center space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
              <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
              <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
            </div>
          </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <img src="/images/praval-logo-text.svg" className="h-8" />
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          {/* Digital Engineering */}
          <MobileSection
            title="Digital Engineering"
            active={activeMobile === "de"}
            onClick={() =>
              setActiveMobile(activeMobile === "de" ? null : "de")
            }
          >
            <p>Application Development</p>
            <p>Low Code No Code</p>
            <p>Azure</p>
            <p>Quality Engineering</p>
          </MobileSection>

          <MobileSection
            title="Data Analytics"
            active={activeMobile === "da"}
            onClick={() =>
              setActiveMobile(activeMobile === "da" ? null : "da")
            }
          >
            <p>Strategy Consulting</p>
            <p>Implementation</p>
            <p>Managed Services</p>
          </MobileSection>

          <MobileSection
            title="Enterprise Platforms"
            active={activeMobile === "ep"}
            onClick={() =>
              setActiveMobile(activeMobile === "ep" ? null : "ep")
            }
          >
            <p>Oracle</p>
            <p className="font-semibold mt-4">Salesforce ›</p>
            <div className="pl-4 space-y-2">
              <p>Salesforce Sales Cloud</p>
              <p>Salesforce Service Cloud</p>
              <p>Marketing Cloud</p>
              <p>Commerce Cloud</p>
              <p>Mulesoft</p>
              <p>Analytics & AI</p>
            </div>
            <p>ServiceNow</p>
            <p>Gainsight</p>
          </MobileSection>

          <Link href="/contact" className="block mt-6 font-semibold">
            Contact
          </Link>

          <Link href="/about" className="block mt-4 font-semibold">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

/* ---------------------------- */
/* REUSABLE COMPONENTS */
/* ---------------------------- */

function MegaMenu({ children }) {
  return (
    <div
      className="
        absolute lg:left-[26.7%] xl:left-[36.7%] 2xl:left-[41.7%]
        top-full
        w-[90vw] max-w-4xl
        bg-white shadow-2xl
        p-10
        opacity-0 invisible
        group-hover/menu:opacity-100 group-hover/menu:visible
        transition-all duration-300
      "
    >
      {children}
    </div>
  );
}

function MenuLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block hover:text-[#0F72B1] cursor-pointer transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function MenuImage() {
  return (
    <div>
      <img
        src="/images/homeCarousel1.png"
        alt="Menu Visual"
        className="w-full h-56 object-cover rounded"
      />
      <p className="mt-4 font-semibold">Platform Overview</p>
      <p className="text-sm text-gray-600">
        Take a free tour of our platform features
      </p>
    </div>
  );
}

/* MOBILE SECTION COMPONENT */
function MobileSection({ title, children, active, onClick }) {
  return (
    <div className="border-b py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-lg font-medium"
      >
        {title}
        <span>{active ? "▾" : "›"}</span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          active ? "max-h-[500px] mt-4 space-y-3" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}