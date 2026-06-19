"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 500, suffix: "+", label: "Boxes Crafted" },
  { value: 120, suffix: "+", label: "Happy Families" },
  { value: 15, suffix: "+", label: "Premium Fabrics" },
  { value: 100, suffix: "%", label: "Bespoke Designs" },
];

function useCounter(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  inView,
}: {
  stat: (typeof STATS)[number];
  index: number;
  inView: boolean;
}) {
  const count = useCounter(stat.value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4 sm:px-8"
    >
      <div className="flex items-baseline gap-0.5">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light text-stone-800 tabular-nums tracking-tight">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-light text-stone-500">
          {stat.suffix}
        </span>
      </div>
      <span className="mt-3 sm:mt-4 w-6 h-px bg-stone-300" />
      <p className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#EFECE5] py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-stone-300"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-stone-300/60 via-transparent to-stone-300/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-stone-400" />
            <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-stone-500">
              In Numbers
            </span>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-stone-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
