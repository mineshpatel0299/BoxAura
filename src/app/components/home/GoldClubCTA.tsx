"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionBg from "../SectionBg";

export default function GoldClubCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      ref={ref} 
      className="relative w-full bg-[#EFECE5] flex flex-col items-center justify-center border-t border-stone-400/50 overflow-hidden"
    >
      <SectionBg variant="corner-both" />

      {/* Main Container */}
      <div className="w-full max-w-[1400px] flex flex-col relative z-10">
        
        <div className="w-full flex flex-col lg:flex-row items-center justify-between py-16 lg:py-20 px-8 sm:px-16 lg:px-24 bg-[#EFECE5]">
          
          {/* Left Side: Typography */}
          <div className="flex flex-col items-start text-left lg:w-1/2 w-full mb-10 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="h-px w-8 bg-stone-400" />
              <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-stone-500">
                The BoxAura Promise
              </p>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-serif text-stone-800 tracking-tight leading-[1.05] mb-4"
            >
              Where Every Detail <br />
              <span className="italic font-light text-stone-500">Tells a Story</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-600 text-sm leading-relaxed max-w-sm font-light tracking-wide"
            >
              A curated composition of premium fabrics and intricate finishes, designed for unforgettable celebrations.
            </motion.p>
          </div>

          {/* Right Side: Stats & CTA */}
          <div className="flex flex-col items-start lg:items-end lg:w-1/2 w-full">
            
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-8 w-full lg:justify-end border-l lg:border-l-0 lg:border-r-0 border-stone-400 pl-4 lg:pl-0"
            >
              <span>500+ Crafted</span>
              <span className="w-px h-3 bg-stone-400 hidden sm:block" />
              <span className="hidden sm:inline">100% Bespoke</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a 
                href="/premium-wedding-invitation" 
                className="w-full sm:w-auto inline-flex items-center justify-center border border-stone-400 text-stone-600 px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#E5E1D8] transition-colors"
              >
                Explore More
              </a>
              <a 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center border border-stone-800 bg-stone-800 text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-stone-700 transition-colors"
              >
                Start Your Order
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
