"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const PANORAMA_SRC =
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781871639/slider_horizontal-4_xpqof6.png";

const CATALOG_ITEMS = [
  { category: "Signature Heritage", subtitle: "Timeless Elegance" },
  { category: "Obsidian Reserve", subtitle: "Bold & Luxurious" },
  { category: "Lumina Prisma", subtitle: "Radiant Textures" },
];

const TOTAL = CATALOG_ITEMS.length;

export default function Catalog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);
  const [headerHidden, setHeaderHidden] = useState(false);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.005], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.005], ["0%", "-10%"]);
  const headerScale = useTransform(scrollYProgress, [0, 0.005], [1, 0.97]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setHeaderHidden(v > 0.01);
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-stone-950"
      style={{ height: `${TOTAL * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        {/* Single Panorama Image */}
        <motion.div
          className="absolute top-0 left-0 h-full"
          style={{ x: imgX, width: `${TOTAL * 100}%` }}
        >
          <Image
            src={PANORAMA_SRC}
            alt="BoxAura curated catalog"
            fill
            className="object-cover"
            sizes={`${TOTAL * 100}vw`}
            priority
          />
        </motion.div>

        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 z-[1] pointer-events-none shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.3)]" />

        {/* Section Header — centered, editorial */}
        <motion.div
          className={`absolute top-0 left-0 w-full z-20 flex flex-col items-center pt-12 sm:pt-16 lg:pt-20 pointer-events-none ${headerHidden ? "invisible" : ""}`}
          style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-5">
            <span className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent to-amber-400/50" />
            <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-amber-300/60">
              The Collection
            </span>
            <span className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-8xl font-heading text-white tracking-tight leading-none text-center">
            Curated
          </h2>
          <h2 className="text-3xl sm:text-6xl lg:text-8xl font-heading italic font-light tracking-tight leading-none text-center mt-1 sm:mt-2 bg-gradient-to-r from-white/50 via-amber-200/70 to-white/50 bg-clip-text text-transparent">
            Catalog
          </h2>

          <p className="mt-4 sm:mt-6 max-w-[260px] sm:max-w-sm text-center text-[10px] sm:text-xs text-white/30 font-light tracking-[0.1em] sm:tracking-[0.15em] leading-relaxed uppercase">
            Handpicked textures &amp; finishes — crafted for those who
            demand the&nbsp;extraordinary
          </p>

          <span className="mt-5 sm:mt-6 w-px h-8 sm:h-10 bg-gradient-to-b from-amber-400/40 to-transparent" />
        </motion.div>

        {/* Floating Category Text */}
        {CATALOG_ITEMS.map((item, i) => (
          <CatalogText
            key={i}
            item={item}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Luxury Progress Bar */}
        <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-5">
          {CATALOG_ITEMS.map((_, i) => (
            <ProgressLine
              key={i}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogText({
  item,
  index,
  scrollYProgress,
}: {
  item: (typeof CATALOG_ITEMS)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const segmentStart = index / TOTAL;
  const segmentEnd = (index + 1) / TOTAL;
  const fadeIn = segmentStart + (segmentEnd - segmentStart) * 0.12;
  const fadeOut = segmentEnd - (segmentEnd - segmentStart) * 0.12;

  const textY = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    ["0%", "-10%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [segmentStart, fadeIn, fadeOut, segmentEnd],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [segmentStart, fadeIn, fadeOut, segmentEnd],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-20 sm:pb-36 lg:pb-40 px-4 sm:px-6 pointer-events-none"
      style={{ y: textY, opacity }}
    >
      <motion.div className="flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md px-6 sm:px-16 py-6 sm:py-10" style={{ scale }}>
        <span className="font-heading text-[8px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/40 mb-3 sm:mb-5">
          {String(index + 1).padStart(2, "0")} — {String(TOTAL).padStart(2, "0")}
        </span>
        <h3 className="text-2xl sm:text-6xl lg:text-8xl font-heading text-white text-center leading-[1.1] tracking-tight">
          {item.category}
        </h3>
        <span className="mt-3 sm:mt-5 w-6 sm:w-8 h-px bg-white/25" />
        <p className="mt-3 sm:mt-5 text-[10px] sm:text-sm lg:text-base text-white/50 font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          {item.subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
}

function ProgressLine({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const segmentStart = index / TOTAL;
  const segmentEnd = (index + 1) / TOTAL;

  const fillWidth = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    ["0%", "100%"]
  );

  const barOpacity = useTransform(
    scrollYProgress,
    [segmentStart, segmentStart + 0.01, segmentEnd - 0.01, segmentEnd],
    [0.2, 0.6, 0.6, 0.2]
  );

  return (
    <motion.div
      className="relative w-10 sm:w-14 h-px overflow-hidden"
      style={{ opacity: barOpacity }}
    >
      <div className="absolute inset-0 bg-white/20" />
      <motion.div
        className="absolute inset-y-0 left-0 bg-white/80"
        style={{ width: fillWidth }}
      />
    </motion.div>
  );
}
