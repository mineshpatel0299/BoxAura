"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionBg from "../SectionBg";

export default function GoldClubCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-40">
      <SectionBg />

      {/* Large watermark letter */}
      <motion.span
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-8 top-1/2 -translate-y-1/2 font-heading text-[20rem] sm:text-[28rem] lg:text-[36rem] font-light text-stone-200/30 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        B
      </motion.span>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-6">
          {/* Left — Stacked images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[45%] relative flex justify-center"
          >
            <div className="relative">
              {/* Back card (offset) */}
              <motion.div
                initial={{ opacity: 0, rotate: -6 }}
                animate={inView ? { opacity: 1, rotate: -6 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -left-6 -top-4 sm:-left-10 sm:-top-6 w-56 sm:w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl opacity-60"
              >
                <Image
                  src="/images/wedding_box_1.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="288px"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Front card */}
              <div className="relative w-60 sm:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/50">
                <Image
                  src="/images/wedding_box_5.png"
                  alt="BoxAura premium collection"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating detail chip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-white/80 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg border border-rose-100/60"
              >
                <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-rose-300 mb-0.5">
                  Crafted with
                </p>
                <p className="font-heading text-sm text-stone-700 font-light tracking-wide">
                  Passion & Precision
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="lg:w-[55%] text-center lg:text-left lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-7"
            >
              <span className="h-px w-10 bg-rose-200" />
              <span className="font-heading text-[11px] uppercase tracking-[0.35em] text-rose-300">
                The BoxAura Promise
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-stone-800 leading-[1.08] mb-6"
            >
              Where Every Detail
              <br />
              <span className="italic text-stone-400">Tells a Story</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md mx-auto lg:mx-0 text-base sm:text-lg text-stone-400 leading-relaxed font-light mb-10"
            >
              Each box is a curated composition of premium fabrics, intricate
              finishes, and thoughtful details — designed to make your
              celebration unforgettable from the very first touch.
            </motion.p>

            {/* Minimal stat row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-10 sm:gap-14 mb-12"
            >
              {[
                { number: "500+", label: "Boxes Crafted" },
                { number: "50+", label: "Unique Designs" },
                { number: "100%", label: "Handmade" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-heading text-2xl sm:text-3xl font-light text-stone-700 tracking-wide">
                    {stat.number}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-300 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-stone-800 px-10 py-3.5 font-heading text-xs uppercase tracking-[0.2em] text-white shadow-lg shadow-stone-200/50 hover:bg-rose-400 transition-all duration-500"
              >
                Start Your Order
              </a>
              <a
                href="/premium-wedding-invitation"
                className="inline-flex items-center justify-center rounded-full border border-stone-200 px-10 py-3.5 font-heading text-xs uppercase tracking-[0.2em] text-stone-500 hover:border-rose-300 hover:text-rose-400 transition-all duration-500"
              >
                Explore More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
