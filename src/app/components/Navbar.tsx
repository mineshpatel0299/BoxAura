"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", shortLabel: "Home", href: "/" },
  { label: "Premium Wedding Invitation", shortLabel: "Wedding", href: "/premium-wedding-invitation" },
  { label: "Diwali Boxes & Gifting", shortLabel: "Diwali", href: "/diwali-boxes-gifting" },
  { label: "Contact", shortLabel: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasHero = pathname === "/";
  const useDarkText = scrolled || !hasHero;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useDarkText
          ? "bg-[#EFECE5]/95 backdrop-blur-md border-b border-stone-300 py-2.5 sm:py-3"
          : "bg-transparent border-b border-transparent py-4 sm:py-6"
      }`}
    >
      {/* Desktop layout — unchanged */}
      <div className="hidden lg:flex mx-auto max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-12">
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

        <ul className="flex items-center gap-10">
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
      </div>

      {/* Mobile layout — centered logo + inline nav strip */}
      <div className="lg:hidden flex flex-col items-center px-4">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/de4pazo51/image/upload/v1781949351/WhatsApp_Image_2026-06-19_at_17.10.04__1_-removebg-preview_hdhqbp.png"
            alt="BoxAura"
            width={300}
            height={100}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              useDarkText
                ? "h-10"
                : "h-12 brightness-0 invert drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            }`}
          />
        </Link>

        <div className="flex items-center gap-1 mt-1.5">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`relative font-heading text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? useDarkText
                        ? "text-stone-950 bg-stone-900/10"
                        : "text-white bg-white/20"
                      : useDarkText
                        ? "text-stone-500 hover:text-stone-800"
                        : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {link.shortLabel}
                  {isActive && (
                    <motion.span
                      layoutId="mobile-nav-dot"
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        useDarkText ? "bg-stone-800" : "bg-white"
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
