"use client";

import { motion } from "framer-motion";

export default function DigitalEngineeringHero() {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-white">
      {/* IMAGE ANIMATION */}
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
        className="absolute inset-0 overflow-hidden"
      >
        <img
          src="/images/digitalEngineeringHero.png"
          alt="Digital Engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      {/* TEXT – TOP LEFT */}
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
          Digital Engineering
        </h1>
      </motion.div>
    </section>
  );
}
