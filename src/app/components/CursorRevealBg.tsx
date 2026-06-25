"use client";

import { useRef, useEffect, useCallback } from "react";

const BG_URL =
  "https://res.cloudinary.com/de4pazo51/image/upload/v1782384033/Untitled-1_copy_2_gxjmly.jpg";

export default function CursorRevealBg() {
  const revealRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const isMobileRef = useRef(false);

  const setMask = useCallback((mask: string) => {
    if (revealRef.current) {
      revealRef.current.style.setProperty("--reveal-mask", mask);
    }
  }, []);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const section = el.parentElement;
    if (!section) return;

    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    isMobileRef.current = isMobile;

    if (isMobile) {
      let running = true;
      const w = section.offsetWidth;
      const h = section.offsetHeight;
      const speed = 0.005;
      let t = 0;

      const animate = () => {
        if (!running) return;
        t += speed;

        const cx = w * 0.5 + Math.sin(t * 2.1) * w * 0.35;
        const cy = h * 0.5 + Math.cos(t * 1.4) * h * 0.3;

        setMask(`radial-gradient(circle 220px at ${cx}px ${cy}px, black 0%, transparent 100%)`);
        animFrameRef.current = requestAnimationFrame(animate);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            running = true;
            animate();
          } else {
            running = false;
            cancelAnimationFrame(animFrameRef.current);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(section);

      return () => {
        running = false;
        cancelAnimationFrame(animFrameRef.current);
        observer.disconnect();
      };
    } else {
      const onMove = (e: MouseEvent) => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMask(`radial-gradient(circle 250px at ${x}px ${y}px, black 0%, transparent 100%)`);
      };

      const onLeave = () => {
        setMask("radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)");
      };

      section.addEventListener("mousemove", onMove);
      section.addEventListener("mouseleave", onLeave);

      return () => {
        section.removeEventListener("mousemove", onMove);
        section.removeEventListener("mouseleave", onLeave);
      };
    }
  }, [setMask]);

  return (
    <div
      ref={revealRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{
        backgroundImage: `url('${BG_URL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.45,
        mask: "var(--reveal-mask, radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%))",
        WebkitMask: "var(--reveal-mask, radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%))",
        transition: "mask 0.3s ease, -webkit-mask 0.3s ease",
      }}
    />
  );
}
