import { Zap } from "lucide-react";

const items = [
  "STRENGTH TRAINING", "CARDIO", "CROSSFIT", "YOGA", "BOXING",
  "PERSONAL TRAINING", "NUTRITION COACHING", "GROUP CLASSES", "POWERLIFTING",
  "HIIT WORKOUTS", "RECOVERY & MOBILITY", "ENDURANCE COACHING",
];

export default function MarqueeBar() {
  const doubled = [...items, ...items];
  return (
    <div className="relative bg-apex-red py-4 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-apex-red to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-apex-red to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-6 whitespace-nowrap">
            <Zap className="w-4 h-4 text-white/70" fill="currentColor" />
            <span className="font-condensed font-600 text-sm tracking-[0.2em] uppercase text-white/90">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
