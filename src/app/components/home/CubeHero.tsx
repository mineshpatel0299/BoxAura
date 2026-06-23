"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MOBILE_BREAKPOINT = 768;

function useCubeSize() {
  const [size, setSize] = useState(260);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 400) setSize(160);
      else if (w < 480) setSize(180);
      else if (w < 640) setSize(220);
      else if (w < 768) setSize(260);
      else setSize(320);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export default function CubeHero({
  step,
  onNext,
  images
}: {
  step: number;
  onNext: () => void;
  images: string[];
}) {
  const size = useCubeSize();
  const half = size / 2;

  const getRotation = (s: number) => {
    const cycle = Math.floor(s / 6);
    const rem = s % 6;
    const baseX = -360 * cycle;
    const baseY = -360 * cycle;

    switch (rem) {
      case 0: return { x: baseX, y: baseY };
      case 1: return { x: baseX, y: baseY - 90 };
      case 2: return { x: baseX, y: baseY - 180 };
      case 3: return { x: baseX, y: baseY - 270 };
      case 4: return { x: baseX - 90, y: baseY - 360 };
      case 5: return { x: baseX - 270, y: baseY - 360 };
      default: return { x: baseX, y: baseY };
    }
  };

  const { x, y } = getRotation(step);

  const faces = [
    { transform: `rotateY(0deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div
      className="flex items-center justify-center cursor-pointer group"
      onClick={onNext}
      onMouseEnter={onNext}
      style={{ touchAction: "manipulation" }}
    >
      <div
        style={{
          width: size,
          height: size,
          perspective: 1200,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: "rotateX(-15deg) rotateY(25deg)",
          }}
        >
          <motion.div
            animate={{ rotateX: x, rotateY: y }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 15,
              mass: 1.5,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
            }}
          >
            {faces.map((face, i) => (
              <div
                key={i}
                className="absolute w-full h-full rounded-sm overflow-hidden border border-white/20 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                style={{
                  transform: face.transform,
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${images[i]})` }}
                />
                {/* Reflection/Glare effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/20 mix-blend-overlay pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
