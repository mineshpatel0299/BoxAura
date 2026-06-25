"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionBg from "../components/SectionBg";
import CursorRevealBg from "../components/CursorRevealBg";
import RosePetals from "../components/home/RosePetals";

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi BoxAura!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full bg-transparent border-b border-stone-300 focus:border-stone-800 outline-none py-3 text-[13px] sm:text-[14px] text-stone-800 font-light tracking-wide placeholder:text-stone-400 transition-colors duration-300";

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full bg-[#EFECE5] overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 border-b border-stone-300">
        <SectionBg variant="top-center" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-stone-400 mb-8 sm:mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-6 sm:mb-8"
          >
            <span className="w-8 sm:w-12 h-px bg-stone-300" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-stone-400 font-light">
              Get in Touch
            </span>
            <span className="w-8 sm:w-12 h-px bg-stone-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[80px] font-heading text-stone-800 tracking-tight leading-[0.95]"
          >
            Let&apos;s Create
            <br />
            <span className="italic font-light text-stone-500">Something Beautiful</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 max-w-md text-[11px] sm:text-[13px] text-stone-400 font-light tracking-[0.15em] leading-[1.9] uppercase"
          >
            Share your vision with us — we&apos;ll craft a luxury experience tailored to your celebration
          </motion.p>

          <span className="mt-8 sm:mt-10 w-px h-10 sm:h-14 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="relative w-full bg-[#EFECE5] py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-stone-300">
        <CursorRevealBg />
        <SectionBg variant="corner-both" />
        <RosePetals count={6} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

          {/* ── Contact Info Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20 sm:mb-28"
          >
            {[
              {
                label: "Visit Us",
                value: "Chawri Bazar,\nOld Delhi, Delhi 110006",
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
              },
              {
                label: "Call Us",
                value: "+91 99999 99999",
                icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
                href: "tel:+919999999999",
              },
              {
                label: "Email",
                value: "hello@boxaura.in",
                icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
                href: "mailto:hello@boxaura.in",
              },
              {
                label: "Hours",
                value: "Mon – Sat: 10 AM – 7 PM\nSun: By Appointment",
                icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white/40 backdrop-blur-sm border border-stone-200/60 rounded-xl p-5 sm:p-6 hover:bg-white/60 hover:border-stone-300 hover:shadow-[0_8px_30px_rgba(120,100,70,0.08)] hover:-translate-y-0.5 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center mb-4 group-hover:border-stone-500 transition-colors">
                  <svg className="w-4.5 h-4.5 text-stone-400 group-hover:text-stone-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-heading text-[10px] sm:text-[11px] text-stone-800 tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </h3>
                {item.href ? (
                  <a href={item.href} className="text-[11px] sm:text-[12px] text-stone-500 font-light tracking-wide leading-relaxed hover:text-stone-800 transition-colors whitespace-pre-line">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[11px] sm:text-[12px] text-stone-500 font-light tracking-wide leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* ── Form Section ── */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            {/* Form header */}
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-px bg-gradient-to-r from-transparent to-stone-400" />
                <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-stone-400">
                  Send an Enquiry
                </span>
                <span className="w-10 h-px bg-gradient-to-l from-transparent to-stone-400" />
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading text-stone-800 tracking-tight leading-none text-center">
                <span className="text-stone-800">Share Your</span>{" "}
                <span className="italic font-light text-stone-500">Vision</span>
              </h2>
            </div>

            {/* Form card */}
            <div className="relative">
              {/* Shadow card behind */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-stone-300/40 bg-[#e8e4dc] hidden sm:block" />

              <div className="relative bg-white/50 backdrop-blur-md rounded-2xl border border-stone-200/70 p-7 sm:p-10 lg:p-14 shadow-[0_12px_50px_rgba(120,100,70,0.07)]">
                <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-10">
                    <div>
                      <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light mb-3 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light mb-3 block">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light mb-3 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light mb-3 block">
                      Your Vision
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your celebration — quantity, colors, timeline, special requests..."
                      className={`${inputClass} resize-none border rounded-xl border-stone-200 focus:border-stone-500 px-5 pt-4`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-stone-800 rounded-full px-10 py-4 hover:bg-stone-900 transition-all duration-500 shadow-[0_4px_20px_rgba(60,50,40,0.15)]"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white font-medium">
                        Send via WhatsApp
                      </span>
                    </button>
                    <span className="text-[9px] text-stone-400 font-light tracking-wide">
                      We typically respond within 2 hours
                    </span>
                  </div>
                </form>
              </div>
            </div>

            {/* Social links below form */}
            <div className="flex items-center justify-center gap-5 mt-12 sm:mt-16">
              <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Follow Us</span>
              <span className="w-6 h-px bg-stone-300" />
              {[
                { label: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { label: "Facebook", href: "#", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-800 hover:border-stone-800 group transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
