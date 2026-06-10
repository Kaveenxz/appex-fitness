"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xFactor = (clientX / innerWidth - 0.5) * 15;
      const yFactor = (clientY / innerHeight - 0.5) * 10;
      videoRef.current.style.transform = `scale(1.08) translate(${xFactor}px, ${yFactor}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden mt-20">
      {/* Background */}
      <div ref={videoRef} className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Gym"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-apex-black via-apex-black/70 to-apex-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-transparent to-apex-black/20" />
        <div className="absolute inset-0 bg-apex-red/5 mix-blend-color" />
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-apex-red/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-apex-red/30" />
        <div className="absolute top-24 right-0 w-32 h-32 border-r-2 border-t-2 border-apex-red/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="w-8 h-px bg-apex-red" />
            <span className="section-label">Est. 2018 · Colombo, Sri Lanka</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display leading-none mb-6">
            <span
              className="block text-[clamp(4rem,10vw,8.5rem)] text-apex-white tracking-wide animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              FORGE
            </span>
            <span
              className="block text-[clamp(4rem,10vw,8.5rem)] text-apex-red text-glow tracking-wide animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              YOUR
            </span>
            <span
              className="block text-[clamp(4rem,10vw,8.5rem)] text-apex-white tracking-wide animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              LEGEND.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-apex-white-dim text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Sri Lanka&apos;s most elite fitness facility. World-class equipment, expert coaching, and a community that never settles for second place.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="#membership"
              className="inline-flex items-center justify-center gap-3 bg-apex-red hover:bg-apex-red-light text-white font-condensed font-700 text-base tracking-widest uppercase px-10 py-4 transition-all duration-200 clip-slash glow-red hover:scale-105"
            >
              Start Your Journey
            </Link>
            <button className="inline-flex items-center justify-center gap-3 border border-apex-white/30 hover:border-apex-red text-apex-white hover:text-apex-red font-condensed font-600 text-base tracking-widest uppercase px-8 py-4 transition-all duration-200 group">
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-apex-red group-hover:border-apex-red transition-all">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              Watch Story
            </button>
          </div>

          {/* Quick stats */}
          <div
            className="flex gap-8 mt-14 animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            {[
              { value: "2,400+", label: "Members" },
              { value: "47", label: "Expert Trainers" },
              { value: "30+", label: "Programs" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-apex-red pl-4">
                <p className="font-display text-2xl text-apex-white">{s.value}</p>
                <p className="font-mono text-xs text-apex-gray-muted tracking-wider uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse2 z-10">
        <span className="font-mono text-xs text-apex-gray-muted tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-apex-red" />
      </div>

      {/* Right edge decorative text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 -rotate-90 flex items-center gap-4 z-10 hidden lg:flex">
        <span className="font-mono text-xs text-apex-gray-muted tracking-[0.3em] uppercase">High Performance · Elite Training</span>
        <div className="w-16 h-px bg-apex-red/40" />
      </div>
    </section>
  );
}
