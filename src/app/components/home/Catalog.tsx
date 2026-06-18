"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionBg from "../SectionBg";

const PRODUCTS = [
  {
    id: "01",
    image: "/images/wedding_box_2.png",
    name: "The Signature Heritage",
  },
  {
    id: "02",
    image: "/images/wedding_box_1.png",
    name: "Obsidian Reserve",
  },
  {
    id: "03",
    image: "/images/wedding_box_5.png",
    name: "Lumina Prisma",
  },
  {
    id: "04",
    image: "/images/wedding_box_3.png",
    name: "Artisan Silk Cascade",
  },
];

export default function Catalog() {
  return (
    <section className="relative w-full bg-[#EFECE5] flex items-stretch justify-center overflow-hidden border-b border-stone-400">
      <SectionBg variant="top-right" />
      
      {/* Main Framed Container */}
      <div className="w-full max-w-[1400px] border-x border-stone-400 flex flex-col relative z-10 border-t border-stone-400/50">
        
        {/* Header Bar */}
        <div className="w-full border-b border-stone-400 py-8 px-6 sm:px-12 flex justify-between items-center bg-[#EFECE5]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-800 tracking-tight">
            Curated <span className="italic font-light text-stone-500">Catalog</span>
          </h2>
          <div className="hidden sm:flex items-center gap-4">
            <span className="h-px w-8 bg-stone-400" />
            <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-stone-500">
              The Collection
            </p>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#EFECE5]">
          {PRODUCTS.map((product, index) => {
            // Precise grid border logic to maintain 1px inner lines without doubling
            const borderClasses = "border-stone-400 " +
              (index !== 3 ? "border-b " : "") +
              (index % 2 === 0 ? "sm:border-r " : "sm:border-r-0 ") +
              (index < 2 ? "sm:border-b " : "sm:border-b-0 ") +
              "lg:border-b-0 " +
              (index !== 3 ? "lg:border-r " : "lg:border-r-0");

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex flex-col w-full h-[50vh] sm:h-[60vh] min-h-[350px] group cursor-pointer ${borderClasses}`}
              >
                {/* Image Container */}
                <div className="relative flex-1 overflow-hidden bg-stone-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.15]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                
                {/* Text Bar */}
                <div className="h-16 border-t border-stone-400 flex items-center justify-between px-6 bg-[#EFECE5] transition-colors duration-500 group-hover:bg-[#E5E1D8]">
                  <span className="text-stone-800 text-xs sm:text-sm font-medium tracking-widest uppercase">
                    {product.name}
                  </span>
                  <span className="text-stone-400 text-[10px] tracking-widest font-heading">
                    {product.id}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
