"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Premium Wedding Invitation", href: "/premium-wedding-invitation" },
  { label: "Diwali Boxes & Gifting", href: "/diwali-boxes-gifting" },
  { label: "Contact", href: "/contact" },
  { label: "Social Media", href: "/social-media" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#EFECE5]/95 backdrop-blur-md border-b border-stone-400"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/de4pazo51/image/upload/v1781949351/WhatsApp_Image_2026-06-19_at_17.10.04__1_-removebg-preview_hdhqbp.png"
            alt="BoxAura"
            width={160}
            height={64}
            priority
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            >
              <Link
                href={link.href}
                className="font-heading text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-stone-800 hover:text-stone-950 transition-colors duration-300"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-stone-800 transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-stone-800 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-stone-800 transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#EFECE5]/95 backdrop-blur-xl border-t border-stone-400 overflow-hidden"
          >
            <ul className="flex flex-col gap-0 px-6 sm:px-8 py-4 sm:py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-stone-300 last:border-b-0"
                >
                  <Link
                    href={link.href}
                    className="block py-4 font-heading text-xs uppercase tracking-[0.2em] text-stone-800 hover:text-stone-950 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
