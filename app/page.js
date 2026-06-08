"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArabSpring from "./images/arab-spring.jpg";

export default function Home() {
  return (
    <main className="p-4">
      {/* Hero — full viewport */}
      <section className="relative h-[calc(100svh-2rem)] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={ArabSpring}
            alt="Arab Spring"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Gradient scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Text overlay — bottom left, Zwirner-style */}
        <div className="absolute bottom-12 left-8 text-white">
          <motion.p
            className="mb-3 text-xs uppercase tracking-widest opacity-70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            UX Design / Data Strategy
          </motion.p>
          <motion.h2
            className="mb-2 text-4xl font-light leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Adam White
          </motion.h2>
        </div>
      </section>
    </main>
  );
}
