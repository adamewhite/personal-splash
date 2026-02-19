import Image from "next/image";
import Link from "next/link";
import ArabSpring from "./images/arab-spring.jpg";

export default function Home() {
  return (
    <main className="p-4">
      {/* Hero — full viewport */}
      <section className="relative h-[calc(100vh-2rem)] w-full">
        <Image
          src={ArabSpring}
          alt="Arab Spring"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Text overlay — bottom left, Zwirner-style */}
        <div className="absolute bottom-12 left-8 text-white">
          <p className="mb-3 text-xs uppercase tracking-widest opacity-70">
            UX Design / Data Strategy
          </p>
          <h2 className="mb-2 text-4xl font-light leading-tight md:text-5xl">
            Adam White
          </h2>
          <p className="mb-6 text-lg font-light opacity-80">New York</p>
          {/* <Link
            href="/work"
            className="inline-block border-b border-white pb-0.5 text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-50"
          >
            View Work
          </Link> */}
        </div>

        {/* Scroll indicator — bottom right */}
        <div className="writing-mode-vertical absolute bottom-12 right-8 text-xs uppercase tracking-widest text-white opacity-50">
          Scroll
        </div>
      </section>
    </main>
  );
}
