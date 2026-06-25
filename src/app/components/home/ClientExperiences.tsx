"use client";

import SectionBg from "../SectionBg";
import CursorRevealBg from "../CursorRevealBg";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function ClientExperiences() {
  return (
    <section className="relative w-full bg-[#fdf6f0] py-16 sm:py-24 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">

      <CursorRevealBg />
      <SectionBg variant="corner-both" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-4">
          <span className="w-8 h-[1px] bg-stone-300" />
          <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-stone-500 font-light">
            Voices of Elegance
          </span>
          <span className="w-8 h-[1px] bg-stone-300" />
        </div>
      </div>

      {/* Staggered Cards Component */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <StaggerTestimonials />
      </div>

    </section>
  );
}
