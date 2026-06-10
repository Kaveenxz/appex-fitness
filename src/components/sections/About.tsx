"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "State-of-the-art 18,000 sq ft facility",
  "Over 200 pieces of premium equipment",
  "Science-backed programming & coaching",
  "Nutrition bar & recovery lounge on-site",
  "24/7 secure access for premium members",
  "Corporate wellness & group packages",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 bg-apex-black overflow-hidden" ref={sectionRef}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-apex-red/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-apex-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image stack */}
        <div className="reveal-left relative">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80"
              alt="Apex Gym interior"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-apex-red/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-apex-red p-6 flex flex-col items-center justify-center w-32 h-32">
            <p className="font-display text-4xl text-white leading-none">7</p>
            <p className="font-mono text-xs text-white/80 tracking-widest uppercase text-center">Years<br/>of Excellence</p>
          </div>
          {/* Image accent frame */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-apex-red/60" />
          <div className="absolute -bottom-4 right-16 w-24 h-24 border-r-2 border-b-2 border-apex-red/30" />
        </div>

        {/* Content */}
        <div className="reveal">
          <p className="section-label mb-4">Who We Are</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-apex-white mb-6 tracking-wide">
            NOT JUST A GYM.<br />
            <span className="text-apex-red">A MOVEMENT.</span>
          </h2>
          <p className="font-body text-apex-white-dim text-base leading-relaxed mb-6">
            Since 2018, APEX FITNESS has been redefining what a gym can be in Sri Lanka. We&apos;re not here to simply offer memberships — we&apos;re here to transform lives. Our facility was designed from the ground up for serious athletes and first-timers alike, with a culture of relentless improvement at its core.
          </p>
          <p className="font-body text-apex-white-dim text-base leading-relaxed mb-8">
            Every machine, every coach, every class has been curated with one goal in mind: to help you reach the apex of your potential.
          </p>

          {/* Pillars */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {pillars.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-apex-red mt-0.5 shrink-0" />
                <span className="font-body text-sm text-apex-white-dim">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#programs"
            className="inline-flex items-center gap-3 font-condensed font-700 text-sm tracking-widest uppercase text-apex-red hover:text-apex-white border border-apex-red hover:bg-apex-red px-8 py-3 transition-all duration-200"
          >
            Explore Programs
            <span className="text-lg leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
