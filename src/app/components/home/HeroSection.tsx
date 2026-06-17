"use client";

import { motion } from "framer-motion";
import CubeHero from "./CubeHero";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Ambient pastel blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-pink-200/20 via-orange-100/15 to-rose-200/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-pink-100/15 blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-orange-100/10 blur-[90px]" />
      </div>

      {/* Thin decorative side lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[8%] top-[15%] bottom-[15%] w-px origin-top bg-gradient-to-b from-transparent via-pink-200/30 to-transparent"
        aria-hidden="true"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[8%] top-[15%] bottom-[15%] w-px origin-top bg-gradient-to-b from-transparent via-pink-200/30 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 sm:py-20">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300/50" />
          <span className="font-heading text-[11px] uppercase tracking-[0.45em] text-pink-400/70">
            Handcrafted with Love
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300/50" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-center leading-[1] mb-4"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-stone-800 tracking-[-0.01em]">
            The Art of
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl italic font-light mt-1 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 bg-clip-text text-transparent">
            First Impressions
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-md mx-auto text-center text-[15px] sm:text-base text-stone-400 leading-relaxed font-light mb-10"
        >
          Bespoke wedding invitation boxes, hand-finished to perfection
          — where luxury meets celebration.
        </motion.p>

        {/* 3D Cube with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 sm:mb-14"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-55 h-55 sm:w-85 sm:h-85 md:w-105 md:h-105 rounded-full pointer-events-none bg-gradient-radial"
            style={{
              background:
                "radial-gradient(circle, rgba(251,207,232,0.12) 0%, rgba(251,207,232,0.04) 40%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[200px] h-px pointer-events-none bg-gradient-to-r from-transparent via-pink-300/25 to-transparent"
            aria-hidden="true"
          />
          <CubeHero />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="/premium-wedding-invitation"
            className="inline-flex items-center justify-center rounded-full bg-stone-800 px-11 py-3.5 font-heading text-[11px] uppercase tracking-[0.25em] text-white shadow-lg shadow-stone-300/40 hover:bg-stone-700 transition-all duration-500"
          >
            Explore Collection
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-pink-200 px-11 py-3.5 font-heading text-[11px] uppercase tracking-[0.25em] text-stone-500 hover:border-pink-400 hover:text-pink-500 transition-all duration-500"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-14 flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-stone-300"
        >
          <span>500+ Weddings</span>
          <span className="w-1 h-1 rounded-full bg-pink-300/40" />
          <span>Pan India</span>
          <span className="w-1 h-1 rounded-full bg-pink-300/40" />
          <span>100% Bespoke</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-300">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-pink-300/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
