"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionBg from "../SectionBg";

const PRODUCTS = [
  {
    image: "/images/wedding_box_2.png",
    name: "The Art of Presentation",
    tag: "Signature",
  },
  {
    image: "/images/wedding_box_1.png",
    name: "The Gift of Luxurious Collection",
    tag: "Exclusive",
  },
  {
    image: "/images/wedding_box_5.png",
    name: "Premium Drapes, Polished",
    tag: "Premium",
  },
  {
    image: "/images/wedding_box_3.png",
    name: "Exotic Custom Artisan Fabric",
    tag: "Artisan",
  },
  {
    image: "/images/wedding_box_4.png",
    name: "Orniq, Torma Prisma Sheet",
    tag: "Limited",
  },
  {
    image: "/images/wedding_box_6.png",
    name: "Fabric, Obsidian Accessories",
    tag: "Bespoke",
  },
];

export default function Catalog() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <SectionBg variant="bottom-left" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-pink-200" />
                <p className="font-heading text-[11px] font-medium uppercase tracking-[0.35em] text-pink-400/70">
                  Our Work
                </p>
              </div>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-stone-800 leading-[1.05]">
                The{" "}
                <span className="italic font-normal text-stone-500">
                  Catalog
                </span>
              </h2>
            </div>
            <p className="sm:max-w-xs text-sm sm:text-base text-stone-400 leading-relaxed font-light sm:text-right">
              A curated showcase of our finest creations — each box tells a
              story of elegance, craftsmanship, and timeless design.
            </p>
          </div>
          <div className="w-full h-px bg-linear-to-r from-stone-200/80 via-pink-200/40 to-transparent mt-10" />
        </motion.div>

        {/* Editorial grid — asymmetric masonry-inspired layout */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {/* Row 1 — featured large + tall side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-12 sm:col-span-7 row-span-2"
          >
            <CatalogCard
              product={PRODUCTS[0]}
              index={0}
              aspectClass="aspect-4/5 sm:aspect-auto sm:h-full sm:min-h-120"
              size="large"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-6 sm:col-span-5"
          >
            <CatalogCard
              product={PRODUCTS[1]}
              index={1}
              aspectClass="aspect-square"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-6 sm:col-span-5"
          >
            <CatalogCard
              product={PRODUCTS[2]}
              index={2}
              aspectClass="aspect-square"
            />
          </motion.div>

          {/* Row 2 — three equal columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-12 sm:col-span-4"
          >
            <CatalogCard
              product={PRODUCTS[3]}
              index={3}
              aspectClass="aspect-3/4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-6 sm:col-span-4"
          >
            <CatalogCard
              product={PRODUCTS[4]}
              index={4}
              aspectClass="aspect-3/4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-6 sm:col-span-4"
          >
            <CatalogCard
              product={PRODUCTS[5]}
              index={5}
              aspectClass="aspect-3/4"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-stone-300">
            {PRODUCTS.length} Curated Pieces
          </p>
          <a
            href="/premium-wedding-invitation"
            className="group inline-flex items-center gap-3 font-heading text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-pink-400 transition-colors duration-500"
          >
            View Full Collection
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 group-hover:border-pink-300 transition-all duration-500">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CatalogCard({
  product,
  index,
  aspectClass,
  size = "default",
}: {
  product: (typeof PRODUCTS)[number];
  index: number;
  aspectClass: string;
  size?: "default" | "large";
}) {
  return (
    <div
      className={`group relative ${aspectClass} rounded-2xl overflow-hidden cursor-pointer`}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        sizes={
          size === "large"
            ? "(max-width: 640px) 100vw, 58vw"
            : "(max-width: 640px) 50vw, 33vw"
        }
      />

      {/* Default overlay — subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent transition-opacity duration-500" />

      {/* Hover overlay — darker reveal */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Tag pill — top right */}
      <span className="absolute top-4 right-4 sm:top-5 sm:right-5 font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/60 border border-white/15 rounded-full px-3 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
        {product.tag}
      </span>

      {/* Bottom content — lowered & subtler */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
        <h3
          className={`font-heading font-light text-white/40 leading-snug tracking-wide transition-all duration-500 group-hover:text-white/70 group-hover:-translate-y-0.5 ${
            size === "large" ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs"
          }`}
        >
          {product.name}
        </h3>

        {/* Reveal line on hover */}
        <div className="w-0 group-hover:w-8 h-px bg-pink-300/40 mt-2 transition-all duration-700 ease-out" />
      </div>
    </div>
  );
}
