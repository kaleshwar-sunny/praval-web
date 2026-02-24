"use client";
import { useState } from "react";

export default function OfficeLocations() {
  const [city, setCity] = useState("delaware");

  const data = {
    delaware: {
      name: "Delaware",
      address:
        "1000 N West Street, Suite 1200 Wilmington, DE 19801",
      phone: "+1 302 220 5686",
      image: "/images/delaware.png",
    },
    hyderabad: {
      name: "Hyderabad",
      address:
        "Prestige Skytech, Sky One, Financial District, Nanakramguda, Hyderabad, Telangana 500032",
      phone: "+91 950200 2999",
      image: "/images/hyderabad.png",
    },
  };

  const current = data[city];

  return (
    <div className="relative w-full bg-black text-white overflow-hidden min-h-[600px] md:min-h-[600px]">
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
        
        <h2 className="text-2xl md:text-4xl font-medium mb-8">
          Our Office Locations
        </h2>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => setCity(key)}
              className={`px-12 py-3 rounded-full cursor-pointer border-2 transition-all duration-300
                ${
                  city === key
                    ? "border-white text-white"
                    : "border-white/40 text-white/60"
                }`}
            >
              {data[key].name}
            </button>
          ))}
        </div>

        {/* Address */}
        <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-6 leading-relaxed">
          {current.address}
        </p>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3 text-lg md:text-xl">
          <img src="images/icons/phone.svg" className="w-5 h-5" />
          <span className="font-medium">{current.phone}</span>
        </div>
      </div>

      {/* Bottom Images (Smooth Fade Layered) */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[260px] pointer-events-none">
        
        {/* Delaware */}
        <img
          src="/images/delaware.png"
          alt="delaware skyline"
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out
            ${city === "delaware" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />

        {/* Hyderabad */}
        <img
          src="/images/hyderabad.png"
          alt="hyderabad skyline"
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out
            ${city === "hyderabad" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />
      </div>
    </div>
  );
}