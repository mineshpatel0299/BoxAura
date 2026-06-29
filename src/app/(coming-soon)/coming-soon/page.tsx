"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-stone-950">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/de4pazo51/image/upload/v1781861841/ChatGPT_Image_Jun_19_2026_01_46_12_PM_1_1_egihmx.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-stone-950/80 backdrop-blur-sm" />

      {/* Subtle glowing orbs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen">
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#c9a96e]/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#c9a96e]/10 blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Image
              src="https://res.cloudinary.com/de4pazo51/image/upload/v1781949351/WhatsApp_Image_2026-06-19_at_17.10.04__1_-removebg-preview_hdhqbp.png"
              alt="BoxAura"
              width={240}
              height={100}
              className="h-auto w-48 sm:w-60 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              priority
            />
        </motion.div>

        <motion.p
          className="font-heading text-xl sm:text-2xl tracking-[0.4em] uppercase text-[#c9a96e] font-medium mb-6 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Coming Soon
        </motion.p>

        <motion.p
          className="font-body text-base sm:text-lg text-stone-300 leading-relaxed max-w-md mb-12 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          We&apos;re crafting something extraordinary. Premium wedding invitation
          boxes &amp; festive gifting — arriving soon.
        </motion.p>

        <motion.div
          className="w-20 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/60 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />

        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <p className="font-heading text-xs uppercase text-[#c9a96e]/70 tracking-[0.3em]">
            Get in touch
          </p>
          <a
            href="https://wa.me/919990171703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-none border border-[#c9a96e]/40 text-stone-200 font-body text-sm tracking-widest hover:bg-[#c9a96e]/10 hover:border-[#c9a96e] transition-all duration-500 backdrop-blur-sm uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#25D366"
              className="drop-shadow-md"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            +91 99901 71703
          </a>
        </motion.div>
      </motion.div>

      <motion.p
        className="absolute bottom-8 font-heading text-[10px] uppercase text-[#c9a96e]/50 tracking-[0.3em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        © {new Date().getFullYear()} BoxAura
      </motion.p>
    </div>
  );
}
