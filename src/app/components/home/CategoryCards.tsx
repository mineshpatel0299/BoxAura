"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionBg from "../SectionBg";

const CATEGORIES = [
  {
    label: "Fabric",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg",
  },
  {
    label: "Fabric",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
  },
  {
    label: "Accessory",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861841/ChatGPT_Image_Jun_19_2026_01_46_12_PM_1_1_egihmx.png",
  },
  {
    label: "Velvet",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.09_1_qzulax.jpg",
  },
];

function Card({
  label,
  image,
  className,
  delay,
  direction,
}: {
  label: string;
  image: string;
  className: string;
  delay: number;
  direction: "left" | "right" | "up" | "down";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const dirMap = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: -60 },
    down: { x: 0, y: 60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer ${className}`}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/40">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="250px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent" />
        <span className="absolute bottom-4 left-0 right-0 text-center font-heading text-sm sm:text-base uppercase tracking-[0.2em] font-medium text-white drop-shadow-lg">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function CategoryCards() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      <SectionBg />
      <div className="mx-auto max-w-3xl px-6 relative">
        {/* "LINA   EDIT" top text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute top-[10%] left-0 right-0 flex items-center justify-center pointer-events-none select-none z-0"
        >
          <span className="font-heading text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-light uppercase tracking-[0.3em] text-stone-300/50 italic">
            Lina
          </span>
          <span className="w-32 sm:w-44 md:w-52" />
          <span className="font-heading text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-light uppercase tracking-[0.3em] text-stone-300/50 italic">
            Edit
          </span>
        </motion.div>

        {/* "COLLECTION" bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-[8%] left-0 right-0 flex items-center justify-center pointer-events-none select-none z-0"
        >
          <span className="font-heading text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-light uppercase tracking-[0.3em] text-stone-300/50 italic">
            Col
          </span>
          <span className="w-24 sm:w-36 md:w-44" />
          <span className="font-heading text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-light uppercase tracking-[0.3em] text-stone-300/50 italic">
            tion
          </span>
        </motion.div>

        {/* 3-column grid */}
        <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-x-1">
          <Card
            label={CATEGORIES[0].label}
            image={CATEGORIES[0].image}
            className="justify-self-end w-[200px] sm:w-[220px] md:w-[250px]"
            delay={0.1}
            direction="left"
          />

          <div className="flex flex-col items-center" style={{ gap: "2px" }}>
            <Card
              label={CATEGORIES[1].label}
              image={CATEGORIES[1].image}
              className="w-[200px] sm:w-[220px] md:w-[250px]"
              delay={0.2}
              direction="up"
            />
            <Card
              label={CATEGORIES[3].label}
              image={CATEGORIES[3].image}
              className="w-[200px] sm:w-[220px] md:w-[250px]"
              delay={0.4}
              direction="down"
            />
          </div>

          <Card
            label={CATEGORIES[2].label}
            image={CATEGORIES[2].image}
            className="justify-self-start w-[200px] sm:w-[220px] md:w-[250px]"
            delay={0.3}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
