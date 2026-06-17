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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.13 2.51 7.67 6.09 9.18-.08-.75-.16-1.92.03-2.74.17-.74 1.12-4.76 1.12-4.76s-.29-.57-.29-1.42c0-1.33.77-2.33 1.73-2.33.82 0 1.21.61 1.21 1.34 0 .82-.52 2.05-.79 3.19-.22.95.47 1.72 1.41 1.72 1.69 0 2.99-1.78 2.99-4.37 0-2.28-1.64-3.88-3.98-3.88-2.71 0-4.3 2.04-4.3 4.14 0 .82.32 1.7.71 2.18.08.09.09.17.07.27-.07.3-.24.95-.27 1.08-.04.18-.14.22-.33.13-1.23-.57-2-2.37-2-3.81 0-3.1 2.25-5.95 6.49-5.95 3.41 0 6.06 2.43 6.06 5.67 0 3.39-2.14 6.11-5.1 6.11-1 0-1.93-.52-2.25-1.13l-.61 2.34c-.22.86-.82 1.93-1.22 2.59.92.28 1.9.44 2.92.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative mt-10">
      {/* Top divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://res.cloudinary.com/de4pazo51/image/upload/v1781679251/WhatsApp_Image_2026-06-17_at_09.42.19__1_-removebg-preview_1_cupphn.png"
                alt="BoxAura"
                width={140}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-base text-stone-400 leading-relaxed font-light max-w-xs mb-8">
              Handcrafted premium invitation boxes & festive gifting — where
              elegance meets artistry in every detail.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-rose-300 hover:text-rose-400 hover:bg-rose-50/50 transition-all duration-300"
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
            className="lg:col-span-3"
          >
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-stone-700 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-rose-400 transition-colors duration-300 font-light"
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
            className="lg:col-span-2"
          >
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-stone-700 mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-rose-400 transition-colors duration-300 font-light"
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
            className="lg:col-span-3"
          >
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-stone-700 mb-6">
              Stay in Touch
            </h4>
            <p className="text-sm text-stone-400 font-light leading-relaxed mb-5">
              Subscribe for exclusive previews, new collections & bespoke offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-stone-200 bg-transparent px-5 py-3 text-sm text-stone-600 placeholder:text-stone-300 outline-none focus:border-rose-300 transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-stone-800 px-5 py-3 font-heading text-[11px] uppercase tracking-[0.25em] text-white hover:bg-rose-400 transition-all duration-500"
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
          className="mt-16 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-stone-300 font-light tracking-wide">
            &copy; {new Date().getFullYear()} BoxAura. All rights reserved.
          </p>
          <p className="text-xs text-stone-300 font-light tracking-wide">
            Crafted with passion in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
