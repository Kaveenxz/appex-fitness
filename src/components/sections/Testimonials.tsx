"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Malith Gunasekara",
    role: "Software Engineer · Member since 2021",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "APEX completely changed my relationship with fitness. I came in with zero gym experience, and within 8 months I lost 22kg and built the most functional body of my life. The coaches here actually care about your progress.",
    stats: { before: "94kg", after: "72kg", duration: "8 months" },
  },
  {
    name: "Dulani Wickramasinghe",
    role: "Doctor · Member since 2020",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "As a doctor I was skeptical about gyms, but APEX's approach to evidence-based programming won me over immediately. Nimali's yoga sessions have given me back pain-free living after years of discomfort. Truly world-class.",
    stats: { before: "Chronic back pain", after: "Pain-free", duration: "6 months" },
  },
  {
    name: "Thilina Bandara",
    role: "Entrepreneur · Member since 2019",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "I've trained at gyms in London, Dubai, and Singapore. APEX stands up to all of them. The equipment is top-tier, the community is unbeatable, and coach Ashan's CrossFit programming is genuinely world-class. This is home.",
    stats: { before: "70kg", after: "82kg muscle", duration: "14 months" },
  },
  {
    name: "Sandya Perera",
    role: "Teacher · Member since 2022",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "I joined the HIIT Bootcamp with zero expectations and fell completely in love. Six months in, I ran my first 10K and started deadlifting twice my bodyweight. The coaches push you just enough without being intimidating.",
    stats: { before: "Sedentary", after: "10K runner", duration: "6 months" },
  },
  {
    name: "Chaminda Ranatunga",
    role: "Retired Military · Member since 2020",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "Coming from a military background, my standards are high. APEX exceeds them. The discipline, the attention to form, the culture — it's exactly the environment that keeps me accountable. Best gym I've ever been a member of.",
    stats: { before: "Post-service decline", after: "Peak condition", duration: "12 months" },
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  const next = () => setIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-28 bg-apex-black-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Member Stories</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide">
            REAL RESULTS.<br /><span className="text-apex-red">REAL PEOPLE.</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Quote card */}
          <div className="relative bg-apex-black-4 border border-apex-gray/30 p-10">
            {/* Red accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-apex-red" />
            <Quote className="w-12 h-12 text-apex-red/30 mb-6" fill="currentColor" />

            <p className="font-body text-base text-apex-white leading-relaxed mb-8 italic">
              {current.text}
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-apex-red fill-apex-red" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-apex-red"
              />
              <div>
                <p className="font-condensed font-700 text-base tracking-wide text-apex-white">{current.name}</p>
                <p className="font-mono text-xs text-apex-gray-muted tracking-wider">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Transformation stats */}
          <div>
            <p className="section-label mb-6">Transformation Snapshot</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Before", value: current.stats.before },
                { label: "After", value: current.stats.after },
                { label: "Timeline", value: current.stats.duration },
              ].map((s) => (
                <div key={s.label} className="bg-apex-black-4 border border-apex-gray/20 p-5 text-center">
                  <p className="font-display text-xl text-apex-red mb-1">{s.value}</p>
                  <p className="font-mono text-xs text-apex-gray-muted tracking-widest uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Dots & nav */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 transition-all duration-300 ${
                      i === idx ? "bg-apex-red w-8" : "bg-apex-gray/50 w-4 hover:bg-apex-gray"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-apex-gray/40 hover:border-apex-red flex items-center justify-center text-apex-white-dim hover:text-apex-red transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-apex-gray/40 hover:border-apex-red flex items-center justify-center text-apex-white-dim hover:text-apex-red transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Avatars strip */}
            <div className="flex gap-3 mt-6">
              {testimonials.map((t, i) => (
                <button key={i} onClick={() => setIdx(i)} className="group">
                  <img
                    src={t.image}
                    alt={t.name}
                    className={`w-10 h-10 rounded-full object-cover transition-all duration-200 ${
                      i === idx ? "border-2 border-apex-red scale-110" : "border-2 border-transparent opacity-50 group-hover:opacity-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-apex-gray/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "4.9/5", label: "Google Rating" },
            { value: "2,400+", label: "Active Members" },
            { value: "98%", label: "Member Retention" },
            { value: "#1", label: "Rated Gym in Colombo" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl text-apex-red">{s.value}</p>
              <p className="font-mono text-xs text-apex-gray-muted tracking-wider uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
