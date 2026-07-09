"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#7F807F] pt-14 sm:pt-20 lg:pt-28 pb-4 sm:pb-8">
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/Premium Wedding Card Showroom at a glance, Shubh Cards.mp4"
        />
        {/* Elegant overlay for contrast */}
        <div className="absolute inset-0 bg-[#7F807F]/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7F807F]/80 via-[#7F807F]/10 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col items-center justify-center gap-6 sm:gap-12">
        {/* Top Typography */}
        <div className="text-center mt-12 sm:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-stone-300 uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs mb-4 sm:mb-8 font-light"
          >
            BoxAura Unveiled
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] font-heading text-white font-light leading-[1.1] tracking-tight drop-shadow-lg"
          >
            The Art of <br />
            <span className="italic text-stone-200 font-light pr-2 sm:pr-4">Impressions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-stone-300 text-xs sm:text-sm text-center px-4 font-light leading-relaxed max-w-[320px] sm:max-w-md mx-auto mt-6 sm:mt-8"
          >
            Elevating celebrations with premium handcrafted boxes and exquisite invitations.
          </motion.p>
        </div>

        {/* Bottom CTA */}
        <div className="w-full flex flex-col items-center text-center text-white mt-8 sm:mt-12">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="flex flex-col items-center max-w-[280px] sm:max-w-lg mx-auto"
          >
            <a href="/premium-wedding-invitation" className="inline-flex items-center justify-center rounded-none border border-white/40 bg-white/5 backdrop-blur-md text-white px-8 py-4 sm:px-12 sm:py-5 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] hover:bg-white hover:text-stone-950 transition-all duration-500 w-max">
               Explore Collection
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
