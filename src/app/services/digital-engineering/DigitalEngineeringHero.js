"use client";

import { motion } from "framer-motion";

export default function DigitalEngineeringHero({bgImage, title}) {

  const imageMap = {
    "DE": "/images/digitalEngineeringHero.png",
    "DA": "/images/dataAnalyticsHero.png",
    "EP": "/images/enterprisePlatformHero.png",
  };

  const imagePath = imageMap[bgImage];

  return (
    <section className="relative md:h-[90vh] h-[50vh] overflow-hidden bg-white">
      <motion.div
        initial={{
          y: 200,
          scale: 0.4,
          borderRadius: "32px",
        }}
        animate={{
          y: 0,
          scale: 1,
          borderRadius: "0px",
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 md:h-[85vh] h-[50vh] overflow-hidden"
      >
        <img
          src={imagePath}
          alt="Digital Engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.1,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto px-16 pt-40"
      >
        <h1 className="text-white text-4xl md:text-6xl font-normal">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}
