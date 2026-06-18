"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Premium Wedding Invitation", href: "/premium-wedding-invitation" },
  { label: "Diwali Boxes & Gifting", href: "/diwali-boxes-gifting" },
  { label: "Collections", href: "/#collections" },
  { label: "Catalog", href: "/#catalog" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Our Philosophy", href: "/#philosophy" },
  { label: "Contact", href: "/contact" },
  { label: "Social Media", href: "/social-media" },
  { label: "Privacy Policy", href: "/privacy" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  }
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative w-full bg-[#EFECE5] border-t border-stone-400 flex justify-center">
      <div className="w-full max-w-[1400px] px-6 sm:px-16 lg:px-24 pt-12 sm:pt-24 pb-8 flex flex-col relative z-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8 pb-12 lg:pb-16">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="col-span-2 lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="https://res.cloudinary.com/de4pazo51/image/upload/v1781679251/WhatsApp_Image_2026-06-17_at_09.42.19__1_-removebg-preview_1_cupphn.png"
                alt="BoxAura"
                width={140}
                height={56}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light max-w-xs mb-6 sm:mb-8">
              Handcrafted premium invitation boxes & festive gifting — where
              elegance meets artistry.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-stone-400 flex items-center justify-center text-stone-500 hover:bg-stone-300 hover:text-stone-800 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-1 lg:col-span-3 lg:pl-8"
          >
            <h4 className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-stone-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4">
              <span className="w-2 sm:w-4 h-px bg-stone-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[11px] sm:text-sm text-stone-500 hover:text-stone-900 transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 lg:col-span-2"
          >
            <h4 className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-stone-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4">
              <span className="w-2 sm:w-4 h-px bg-stone-400" />
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[11px] sm:text-sm text-stone-500 hover:text-stone-900 transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-2 lg:col-span-3"
          >
            <h4 className="font-heading text-[10px] uppercase tracking-[0.25em] text-stone-800 mb-6 flex items-center gap-4">
              <span className="w-4 h-px bg-stone-400" />
              Stay in Touch
            </h4>
            <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed mb-6">
              Subscribe for exclusive previews & new collections.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full border border-stone-400 bg-transparent px-4 py-3 text-[10px] sm:text-xs uppercase tracking-[0.1em] text-stone-600 placeholder:text-stone-400 outline-none focus:border-stone-800 transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full bg-stone-800 px-6 py-3 font-heading text-[10px] uppercase tracking-[0.2em] text-white hover:bg-stone-700 transition-all duration-300 border border-stone-800"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-stone-400 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-light">
            &copy; {new Date().getFullYear()} BoxAura. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-light">
            Crafted with passion in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
