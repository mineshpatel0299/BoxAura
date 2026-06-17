"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionBg from "../SectionBg";

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <SectionBg variant="left-strip" />
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-2/5 shrink-0"
        >
          <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-pink-400/70 mb-4">
            What We Believe
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-stone-800 leading-[1.05]">
            Our
            <br />
            <span className="italic font-normal text-stone-500">Philosophy</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-3/5"
        >
          <div className="w-16 h-px bg-pink-200 mb-8" />
          <div className="space-y-6 text-lg sm:text-xl text-stone-400 leading-relaxed font-light">
            <p>
              We open this brand with a vision to redefine how celebrations begin.
              Every box we craft is an experience — a blend of premium fabrics,
              satin finishes, velvet textures, and exquisite accessories that
              transform a simple invitation into an unforgettable first impression.
            </p>
            <p>
              From hand-picked materials to meticulous detailing, each piece
              carries the warmth of artisan craftsmanship and the elegance of
              modern design. We believe your celebration deserves a beginning as
              beautiful as the occasion itself.
            </p>
            <p className="font-heading italic text-stone-300 tracking-wide text-base">
              Our commitment to perfection — texture-inspired, mesh-crafted,
              detail-refined.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
