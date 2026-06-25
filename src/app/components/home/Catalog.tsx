"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SectionBg from "../SectionBg";
import CursorRevealBg from "../CursorRevealBg";
import RosePetals from "./RosePetals";

const PANORAMA_SRC =
  "https://res.cloudinary.com/de4pazo51/image/upload/v1782377703/slider_horizontal-4.2_v5b6ie.png";

const CATALOG_ITEMS = [
  {
    category: "Signature Heritage",
    subtitle: "Timeless Elegance",
    image:
      "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.1_kofhcn.png",
  },
  {
    category: "Obsidian Reserve",
    subtitle: "Bold & Luxurious",
    image:
      "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.2_p6edgp.png",
  },
  {
    category: "Lumina Prisma",
    subtitle: "Radiant Textures",
    image:
      "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.3_hrfbhm.png",
  },
];

const MOBILE_CATALOG_ITEMS = [
  {
    category: "Premium Wedding Invitation",
    subtitle: "Love in Every Detail",
    image:
      "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.1_kofhcn.png",
    href: "/premium-wedding-invitation",
  },
  {
    category: "Diwali Boxes & Gifting",
    subtitle: "Celebrate in Style",
    image:
      "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.2_p6edgp.png",
    href: "/diwali-boxes-gifting",
  },
];

const TOTAL = CATALOG_ITEMS.length;

function MobileCatalogCard({
  item,
  index,
}: {
  item: (typeof MOBILE_CATALOG_ITEMS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Link href={item.href}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(120,100,80,0.12)]"
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={item.image}
            alt={item.category}
            fill
            className="object-cover"
            sizes="90vw"
            priority={index === 0}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/5" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-10 px-6">
          <span className="font-heading text-[8px] uppercase tracking-[0.5em] text-white/40 mb-3">
            {String(index + 1).padStart(2, "0")} — {String(MOBILE_CATALOG_ITEMS.length).padStart(2, "0")}
          </span>
          <h3 className="text-2xl font-heading text-white text-center leading-tight tracking-tight">
            {item.category}
          </h3>
          <span className="mt-2.5 w-6 h-px bg-white/25" />
          <p className="mt-2.5 text-[10px] text-white/50 font-light tracking-[0.2em] uppercase">
            {item.subtitle}
          </p>
          <span className="mt-4 text-[9px] font-medium tracking-[0.3em] uppercase text-white/60 border border-white/20 px-5 py-2 hover:bg-white/10 transition-colors">
            Explore
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Catalog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <>
      {/* ── Mobile View ── */}
      <section className="md:hidden relative bg-[#EFECE5] pt-14 pb-12 px-5 overflow-hidden">
        {/* Auto-hovering bgimage exclusively for mobile view */}
        <CursorRevealBg />
        <SectionBg variant="corner-both" />
        <RosePetals count={6} />
        
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 mb-10">
          <h2 className="text-4xl sm:text-6xl font-heading tracking-tight leading-none text-center">
            <span className="text-stone-800">Curated</span>{" "}
            <span className="italic font-light text-stone-500">Collections</span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-[280px] sm:max-w-sm text-center text-[10px] sm:text-xs text-stone-400 font-light tracking-widest sm:tracking-[0.15em] leading-relaxed uppercase">
            Handpicked textures &amp; finishes — crafted for those who
            demand the&nbsp;extraordinary
          </p>

        </div>

        <div className="relative z-10 flex flex-col gap-6">
          {MOBILE_CATALOG_ITEMS.map((item, i) => (
            <MobileCatalogCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Desktop View ── */}
      <div className="hidden md:block">
        {/* Section Header */}
        <div className="relative bg-[#EFECE5] pt-20 lg:pt-24 pb-14 lg:pb-16 overflow-hidden border-b border-stone-300">
          <div className="relative z-10 flex flex-col items-center px-6">
            <h2 className="text-6xl lg:text-8xl font-heading tracking-tight leading-none text-center">
              <span className="text-stone-800">Curated</span>{" "}
              <span className="italic font-light text-stone-500">Collections</span>
            </h2>

            <p className="mt-5 max-w-sm text-center text-xs text-stone-400 font-light tracking-[0.15em] leading-relaxed uppercase">
              Handpicked textures &amp; finishes — crafted for those who
              demand the&nbsp;extraordinary
            </p>

          </div>
        </div>

        {/* Scroll-driven Panorama Gallery */}
        <section
          ref={sectionRef}
          className="relative bg-stone-950"
          style={{ height: `${TOTAL * 100}vh` }}
        >
          <div className="sticky top-0 h-screen w-screen overflow-hidden">
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

            <div className="absolute inset-0 z-[1] pointer-events-none shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.3)]" />

            {CATALOG_ITEMS.map((item, i) => (
              <CatalogText
                key={i}
                item={item}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}

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
      </div>
    </>
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
      <motion.div className="flex flex-col items-center rounded-2xl bg-black/40 backdrop-blur-md px-6 sm:px-16 py-6 sm:py-10" style={{ scale }}>
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
