"use client";

import { motion } from "framer-motion";
import CubeHero from "./CubeHero";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Large watermark text behind cube */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] uppercase tracking-[0.15em] text-stone-200/25 leading-none select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        BoxAura
      </motion.span>

      {/* Top content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 justify-center mb-7"
        >
          <span className="h-px w-10 bg-rose-200" />
          <span className="font-heading text-[11px] uppercase tracking-[0.4em] text-rose-300">
            Handcrafted with Love
          </span>
          <span className="h-px w-10 bg-rose-200" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-stone-800"
        >
          Premium Wedding
          <br />
          <span className="italic text-rose-400/80 font-light">
            Invitation Boxes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-lg mx-auto text-base sm:text-lg text-stone-400 leading-relaxed font-light"
        >
          Elevate your celebrations with bespoke, hand-finished invitation
          boxes — designed to leave a lasting impression.
        </motion.p>
      </div>

      {/* 3D Cube — center focal point */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-12 sm:mt-16"
      >
        <CubeHero />
      </motion.div>

      {/* Bottom CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 mt-12 flex flex-col sm:flex-row gap-4 items-center"
      >
        <a
          href="/premium-wedding-invitation"
          className="inline-flex items-center justify-center rounded-full bg-stone-800 px-10 py-3.5 font-heading text-xs uppercase tracking-[0.2em] text-white shadow-lg shadow-stone-200/50 hover:bg-rose-400 transition-all duration-500"
        >
          Explore Collection
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-stone-200 px-10 py-3.5 font-heading text-xs uppercase tracking-[0.2em] text-stone-500 hover:border-rose-300 hover:text-rose-400 transition-all duration-500"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-300">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-stone-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}
