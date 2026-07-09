"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", mobileLabel: "Home", href: "/" },
  { label: "Premium Wedding Invitation", mobileLabel: "Wedding Invitation", href: "/premium-wedding-invitation" },
  { label: "Diwali Boxes & Gifting", mobileLabel: "Boxes & Gifting", href: "/diwali-boxes-gifting" },
  { label: "Contact", mobileLabel: "Contact", href: "https://wa.me/919999999999?text=Hi%20BoxAura!", isExternal: true },
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
          ? "lg:bg-[#EFECE5]/95 lg:backdrop-blur-md border-b border-stone-300 py-2.5 sm:py-3"
          : "bg-transparent border-b border-transparent py-4 sm:py-6"
      }`}
    >
      {/* Mobile Pattern Background */}
      <div 
        className={`absolute inset-0 z-[-1] lg:hidden transition-opacity duration-500 overflow-hidden ${
          useDarkText ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
         {/* Solid/Blur background */}
         <div className="absolute inset-0 bg-[#EFECE5]/85 backdrop-blur-md" />
         
         {/* Pattern Overlay */}
         <div 
            className="absolute inset-0 opacity-[0.25] mix-blend-multiply"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/de4pazo51/image/upload/v1782384033/Untitled-1_copy_2_gxjmly.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
         />
      </div>

      {/* Desktop layout — unchanged */}
      <div className="hidden lg:flex mx-auto max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-12">
        <Link href="/" className="block flex-shrink-0">
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
                {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
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
      <div className="lg:hidden flex flex-col items-center w-full px-2">
        <Link href="/" className="mb-3 block transition-transform active:scale-95">
          <Image
            src="https://res.cloudinary.com/de4pazo51/image/upload/v1781949351/WhatsApp_Image_2026-06-19_at_17.10.04__1_-removebg-preview_hdhqbp.png"
            alt="BoxAura"
            width={300}
            height={100}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              useDarkText
                ? "h-14 sm:h-16 drop-shadow-sm brightness-100 invert-0"
                : "h-16 sm:h-20 brightness-0 invert drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            }`}
          />
        </Link>

        <div className="flex items-stretch gap-1.5 w-full justify-center px-2 pb-1">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                className="flex-1 min-w-0"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`relative flex items-center justify-center text-center h-full font-heading text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest leading-tight px-2 py-1.5 rounded-2xl transition-all duration-300 border backdrop-blur-sm ${
                    isActive
                      ? useDarkText
                        ? "text-stone-900 border-stone-300 bg-stone-100/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                        : "text-white border-white/40 bg-white/10 shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
                      : useDarkText
                        ? "text-stone-500 border-transparent hover:text-stone-900 hover:bg-stone-200/30"
                        : "text-white/70 border-transparent hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.mobileLabel}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
