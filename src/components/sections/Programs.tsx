"use client";
import { useState } from "react";
import { Dumbbell, Zap, Heart, Wind, Shield, Target, Apple, Flame } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    name: "Strength & Powerlifting",
    tag: "Foundation",
    duration: "60 min",
    level: "All levels",
    description: "Heavy compound movements, periodized programming, and expert coaching to build raw, functional strength from the ground up.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    color: "#E8151B",
  },
  {
    icon: Flame,
    name: "CrossFit WOD",
    tag: "High Intensity",
    duration: "45 min",
    level: "Intermediate",
    description: "Constantly varied functional movements executed at high intensity. Expect sweat, community, and serious results.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
    color: "#E8151B",
  },
  {
    icon: Heart,
    name: "Yoga & Mindfulness",
    tag: "Recovery",
    duration: "75 min",
    level: "All levels",
    description: "Breath, alignment, and mindful movement. Balance your hard training with sessions that restore and realign the body.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    color: "#E8151B",
  },
  {
    icon: Wind,
    name: "Cardio & Conditioning",
    tag: "Endurance",
    duration: "50 min",
    level: "All levels",
    description: "Treadmills, rowing, bikes, and functional intervals to skyrocket your cardiovascular fitness and burn maximum calories.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    color: "#E8151B",
  },
  {
    icon: Shield,
    name: "Boxing & Combat Fit",
    tag: "Combat Sports",
    duration: "60 min",
    level: "Beginner–Advanced",
    description: "Learn technique, build explosive power, and get into peak cardiovascular condition through boxing fundamentals and pad work.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
    color: "#E8151B",
  },
  {
    icon: Target,
    name: "Personal Training",
    tag: "1-on-1",
    duration: "60 min",
    level: "Tailored",
    description: "A dedicated coach. A personalized plan. Undivided attention. Maximum accountability. This is how you break plateaus.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    color: "#E8151B",
  },
  {
    icon: Apple,
    name: "Nutrition Coaching",
    tag: "Lifestyle",
    duration: "Ongoing",
    level: "All levels",
    description: "Personalized meal plans, macro tracking, and regular check-ins with certified nutritionists to fuel your performance.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    color: "#E8151B",
  },
  {
    icon: Zap,
    name: "HIIT Bootcamp",
    tag: "Group",
    duration: "30 min",
    level: "Intermediate",
    description: "Short, brutal, effective. 30-minute sessions designed for maximum metabolic output and after-burn effect.",
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=600&q=80",
    color: "#E8151B",
  },
];

export default function Programs() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="programs" className="py-28 bg-apex-black-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">What We Offer</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide">
              ELITE PROGRAMS<br />
              <span className="text-apex-red">FOR EVERY GOAL</span>
            </h2>
          </div>
          <p className="font-body text-apex-white-dim max-w-xs text-sm leading-relaxed">
            Whether you're chasing strength, endurance, or total transformation — we have the program and coaches to get you there.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <div
                key={program.name}
                className="relative overflow-hidden group cursor-pointer card-lift"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-apex-black/60 to-transparent" />
                <div className="absolute inset-0 bg-apex-red/0 group-hover:bg-apex-red/15 transition-colors duration-300" />

                {/* Tag */}
                <div className="absolute top-4 left-4 bg-apex-red px-3 py-1">
                  <span className="font-mono text-xs text-white tracking-widest uppercase">{program.tag}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Icon className="w-6 h-6 text-apex-red mb-3" />
                  <h3 className="font-display text-xl tracking-wide text-white mb-2">{program.name}</h3>
                  <div className="flex gap-4 mb-3">
                    <span className="font-mono text-xs text-apex-white-dim tracking-wider">{program.duration}</span>
                    <span className="font-mono text-xs text-apex-red tracking-wider">{program.level}</span>
                  </div>
                  <p
                    className={`font-body text-xs text-apex-white-dim leading-relaxed transition-all duration-300 overflow-hidden ${
                      hoveredIdx === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {program.description}
                  </p>
                  <button className="mt-3 font-condensed font-600 text-xs tracking-widest uppercase text-apex-red hover:text-white transition-colors flex items-center gap-2">
                    Learn More <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
