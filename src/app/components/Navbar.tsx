"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Premium Wedding Invitation", href: "/premium-wedding-invitation" },
  { label: "Diwali Boxes & Gifting", href: "/diwali-boxes-gifting" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasHero = pathname === "/";
  const useDarkText = scrolled || !hasHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useDarkText
          ? "bg-[#EFECE5]/95 backdrop-blur-md border-b border-stone-300 py-2.5 sm:py-3"
          : "bg-transparent border-b border-transparent py-4 sm:py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-4 sm:px-6 md:px-12">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/de4pazo51/image/upload/v1781949351/WhatsApp_Image_2026-06-19_at_17.10.04__1_-removebg-preview_hdhqbp.png"
            alt="BoxAura"
            width={300}
            height={100}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              useDarkText
                ? "h-12 sm:h-12 md:h-14"
                : "h-14 sm:h-16 md:h-20 brightness-0 invert drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            }`}
          />
        </Link>

        {/* Desktop links */}
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
                className={`font-heading text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  useDarkText
                    ? `${pathname === link.href ? "text-stone-950" : "text-stone-800"} hover:text-stone-950`
                    : "text-white/90 hover:text-white drop-shadow-md"
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2.5 z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-7 rounded-full transition-all duration-400 ${
              useDarkText || mobileOpen ? "bg-stone-800" : "bg-white"
            } ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 ml-auto rounded-full transition-all duration-400 ${
              useDarkText || mobileOpen ? "bg-stone-800" : "bg-white"
            } ${mobileOpen ? "opacity-0 w-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-7 rounded-full transition-all duration-400 ${
              useDarkText || mobileOpen ? "bg-stone-800" : "bg-white"
            } ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#EFECE5]/98 backdrop-blur-2xl border-b border-stone-300 shadow-[0_20px_60px_rgba(80,60,40,0.1)]"
          >
            <div className="px-6 sm:px-8 pt-6 pb-8">
              {/* Menu label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-stone-400" />
                <span className="text-[8px] uppercase tracking-[0.4em] text-stone-400 font-light">
                  Menu
                </span>
              </div>

              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-4 border-b border-stone-200/60 last:border-0 transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-stone-900"
                          : "text-stone-600 hover:text-stone-900"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-heading text-[13px] uppercase tracking-[0.15em]">
                        {link.label}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-colors ${
                          pathname === link.href ? "text-stone-800" : "text-stone-300"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
