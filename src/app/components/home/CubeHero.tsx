"use client";

import { useEffect, useRef, useState } from "react";

const CUBE_IMAGES = [
  "/images/wedding_box_2.png",
  "/images/wedding_box_1.png",
  "/images/wedding_box_4.png",
  "/images/wedding_box_6.png",
  "/images/wedding_box_5.png",
  "/images/wedding_box_3.png",
];

export default function CubeHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -20, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const px = e.clientX / window.innerWidth;
      const py = e.clientY / window.innerHeight;
      setRotation({
        x: -160 + 320 * py,
        y: -160 + 320 * px,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const size = 260;
  const half = size / 2;

  const faces = [
    { transform: `rotateY(0deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div className="flex items-center justify-center">
      <div
        ref={wrapRef}
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
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {faces.map((face, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${CUBE_IMAGES[i]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: face.transform,
                backfaceVisibility: "hidden",
                borderRadius: 4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
