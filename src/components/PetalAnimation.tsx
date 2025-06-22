// src/components/PetalAnimation.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type PetalConfig = {
  src: string;
  initialX: number;   // in vw units (0–100)
  delay: number;      // in seconds
  duration: number;   // in seconds
  rotation: number;   // in degrees (starting rotation)
};

export default function PetalAnimation() {
  // Start with no petals on the first render (server or client)
  const [petals, setPetals] = useState<PetalConfig[]>([]);

  useEffect(() => {
    // This runs only on the client, after hydration.
    const generated: PetalConfig[] = Array.from({ length: 7 }, (_, i) => ({
      src: `/petals/${i + 1}.png`,
      initialX: Math.random() * 100,       // 0–100vw
      delay: Math.random() * 3,            // 0–3 seconds
      duration: 5 + Math.random() * 5,     // 5–10 seconds
      rotation: Math.random() * 360,       // 0–360 degrees
    }));
    setPetals(generated);
  }, []);

  // If petals array is still empty, render nothing (so server HTML matches client HTML initially).
  if (petals.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((petal, idx) => (
        <motion.img
          key={idx}
          src={petal.src}
          alt={`Petal ${idx + 1}`}
          className="absolute w-12 h-12 sm:w-16 sm:h-16 object-contain"
          // Start just above the top at (initialX vw, -10vh)
          initial={{
            x: `${petal.initialX}vw`,
            y: "-10vh",
            rotate: petal.rotation,
          }}
          // Animate to slightly off the left & bottom
          animate={{
            x: "-10vw",
            y: "110vh",
            rotate: petal.rotation + 360,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
