"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionBg from "../SectionBg";

const PRODUCTS = [
  {
    image: "/images/wedding_box_2.png",
    name: "The Art of Presentation",
  },
  {
    image: "/images/wedding_box_1.png",
    name: "The Gift of Luxurious Collection",
  },
  {
    image: "/images/wedding_box_5.png",
    name: "Premium Drapes, Polished",
  },
  {
    image: "/images/wedding_box_3.png",
    name: "Exotic Custom Artisan Fabric",
  },
  {
    image: "/images/wedding_box_4.png",
    name: "Orniq, Torma Prisma Sheet",
  },
  {
    image: "/images/wedding_box_6.png",
    name: "Fabric, Obsidian Accessories",
  },
];

export default function Catalog() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 sm:py-36">
      <SectionBg />
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-rose-300 mb-4">
              Our Work
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-stone-800">
              Catalog
            </h2>
          </div>
          <p className="sm:max-w-sm text-base text-stone-400 leading-relaxed font-light sm:text-right">
            A curated showcase of our finest creations — each box tells a story
            of elegance, craftsmanship, and timeless design.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 350px"
                />
              </div>
              <h3 className="font-heading text-sm font-medium text-stone-700 leading-snug group-hover:text-rose-400 transition-colors duration-300">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
