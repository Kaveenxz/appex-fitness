import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=1920&q=80"
          alt="Training"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-apex-black/80" />
        <div className="absolute inset-0 bg-apex-red/10" />
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #E8151B 0, #E8151B 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="section-label mb-6">Limited Spots Available</p>
        <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-none tracking-wide mb-6">
          YOUR BEST SELF<br />
          <span className="text-apex-red text-glow">STARTS TODAY.</span>
        </h2>
        <p className="font-body text-apex-white-dim text-lg max-w-xl mx-auto mb-10">
          Stop waiting for the perfect moment. Every champion started somewhere. Join APEX and become the person you were meant to be.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#membership"
            className="font-condensed font-700 text-base tracking-widest uppercase px-12 py-4 bg-apex-red hover:bg-apex-red-light text-white transition-all duration-200 clip-slash glow-red hover:scale-105"
          >
            Get Started — Free Trial
          </Link>
          <Link
            href="#contact"
            className="font-condensed font-700 text-base tracking-widest uppercase px-10 py-4 border border-white/40 hover:border-white text-white transition-all duration-200"
          >
            Talk to a Coach
          </Link>
        </div>
      </div>
    </section>
  );
}
