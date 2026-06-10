"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2400, suffix: "+", label: "Active Members", description: "A thriving community of athletes" },
  { value: 47, suffix: "", label: "Expert Trainers", description: "Certified industry professionals" },
  { value: 30, suffix: "+", label: "Weekly Classes", description: "For every fitness level" },
  { value: 7, suffix: "Y", label: "Years Strong", description: "Established legacy in Colombo" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative bg-apex-black-3 py-20 border-b border-apex-gray/20 overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 bg-gradient-radial from-apex-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-apex-gray/30">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="px-8 py-10 group hover:bg-apex-red/5 transition-colors duration-300"
            >
              <div className="mb-2">
                <p className="stat-number text-[clamp(3rem,6vw,5rem)] leading-none">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
              </div>
              <p className="font-condensed font-700 text-base tracking-widest uppercase text-apex-white mb-1">
                {stat.label}
              </p>
              <p className="font-body text-apex-gray-muted text-sm">{stat.description}</p>
              <div className="w-8 h-0.5 bg-apex-red mt-4 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
