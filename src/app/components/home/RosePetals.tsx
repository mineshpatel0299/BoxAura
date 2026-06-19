"use client";

import { useEffect, useState } from "react";

interface RosePetalsProps {
  count?: number;
}

export default function RosePetals({ count = 12 }: RosePetalsProps) {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 12 + 10; // 10px to 22px
      const left = Math.random() * 120 - 20; // -20% to 100% width
      const fallDuration = Math.random() * 7 + 10; // 10s to 17s fall (very slow, elegant)
      const delay = Math.random() * 15; // stagger the start times
      const swayDuration = Math.random() * 2 + 3; // 3s to 5s sway
      const spinDuration = Math.random() * 4 + 4; // 4s to 8s spin
      const drift = Math.random() * 30 + 10; // wind blows them 10vw to 40vw to the right

      return { id: i, size, left, fallDuration, delay, swayDuration, spinDuration, drift };
    });
    setPetals(generated);
  }, [count]);

  if (petals.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes petal-fall {
          0% {
            transform: translate3d(0, -10vh, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translate3d(var(--drift), 110vh, 0);
            opacity: 0;
          }
        }
        @keyframes petal-sway {
          0% {
            transform: translateX(-40px);
          }
          100% {
            transform: translateX(40px);
          }
        }
        @keyframes petal-spin {
          0% {
            transform: rotate3d(1, 1, 1, 0deg);
          }
          100% {
            transform: rotate3d(1, 1, 1, 360deg);
          }
        }
      `}</style>
      
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0 will-change-transform"
          style={{
            left: `${petal.left}%`,
            "--drift": `${petal.drift}vw`,
            animation: `petal-fall ${petal.fallDuration}s linear ${petal.delay}s infinite`,
          } as any}
        >
          <div
            className="will-change-transform"
            style={{
              animation: `petal-sway ${petal.swayDuration}s ease-in-out ${petal.delay}s infinite alternate`,
            }}
          >
            <div
              className="will-change-transform"
              style={{
                width: petal.size,
                height: petal.size,
                background: "linear-gradient(135deg, #f0c3cf 0%, #c8879b 100%)",
                borderRadius: "50% 0 50% 50%",
                boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.3), 0 0 6px rgba(200,135,155,0.4)",
                animation: `petal-spin ${petal.spinDuration}s linear infinite`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
