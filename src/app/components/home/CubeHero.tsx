"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

const CUBE_ROTATIONS = [
  { ry: 0, rx: 0 },
  { ry: 90, rx: 0 },
  { ry: 180, rx: 0 },
  { ry: 270, rx: 0 },
  { ry: 0, rx: 90 },
  { ry: 0, rx: -90 },
] as const;

const CUBE_IMAGES = [
  "/images/wedding_box_2.png",
  "/images/wedding_box_1.png",
  "/images/wedding_box_4.png",
  "/images/wedding_box_6.png",
  "/images/wedding_box_5.png",
  "/images/wedding_box_3.png",
] as const;

export default function CubeHero() {
  const cubeRef = useRef<HTMLDivElement | null>(null);
  const facesRef = useRef<HTMLDivElement[]>([]);
  const cubeWrapRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const cube = cubeRef.current;
    const faces = facesRef.current;
    const wrap = cubeWrapRef.current;

    if (!cube || !wrap || faces.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(cube, {
        rotationY: 30,
        rotationX: -15,
        opacity: 1,
        scale: 1,
      });

      if (!prefersReducedMotion) {
        gsap.from(cube, {
          rotationY: 180,
          rotationX: 30,
          scale: 0.7,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
        });
      }
    }, cube);

    const applyFaceLayout = () => {
      const size = wrap.getBoundingClientRect().width;
      const depth = Math.max(90, Math.round(size / 2));
      const parallax = Math.max(70, Math.round(size * 0.4));

      gsap.set(faces, {
        rotateY: (i: number) => CUBE_ROTATIONS[i].ry,
        rotateX: (i: number) => CUBE_ROTATIONS[i].rx,
        transformOrigin: `50% 50% -${depth}px`,
        z: depth,
        backgroundImage: (i: number) => `url(${CUBE_IMAGES[i]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      });

      return { depth, parallax };
    };

    let layout = applyFaceLayout();

    const resizeObserver = new ResizeObserver(() => {
      layout = applyFaceLayout();
    });

    resizeObserver.observe(wrap);

    if (prefersReducedMotion) {
      return () => {
        resizeObserver.disconnect();
        ctx.revert();
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      const winPercent = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };

      gsap.to(cube, {
        duration: 0.9,
        rotationX: -160 + 320 * winPercent.y,
        rotationY: -160 + 320 * winPercent.x,
        ease: "power2.out",
      });

      gsap.to(faces, {
        duration: 0.9,
        backgroundPositionX: `calc(50% + ${(winPercent.x - 0.5) * (layout.parallax * 0.4)}px)`,
        backgroundPositionY: `calc(50% + ${(winPercent.y - 0.5) * (layout.parallax * 0.4)}px)`,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative flex w-full max-w-lg items-center justify-center">
      <div
        ref={cubeWrapRef}
        className="relative h-[230px] w-[230px] sm:h-[270px] sm:w-[270px] md:h-[340px] md:w-[340px]"
        style={{
          perspective: "1600px",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute left-1/2 pointer-events-none bottom-[-50px] h-12 w-[230px] sm:bottom-[-58px] sm:h-14 sm:w-[260px] md:bottom-[-66px] md:h-[58px] md:w-[300px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(244,163,177,0.4) 0%, rgba(251,207,232,0.12) 60%, transparent 75%)",
            filter: "blur(12px)",
            transform: "translateX(-50%) translateZ(-250px)",
          }}
        />

        <div
          ref={cubeRef}
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            position: "relative",
          }}
        >
          {CUBE_ROTATIONS.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) facesRef.current[i] = el;
              }}
              style={{
                position: "absolute",
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
                userSelect: "none",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow:
                  "0 18px 50px rgba(0,0,0,0.45), inset 0 0 60px rgba(255,255,255,0.06)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
