"use client";
import { useState } from "react";
import { Instagram, Linkedin, Award } from "lucide-react";

const trainers = [
  {
    name: "Ashan Perera",
    role: "Head CrossFit Coach",
    specialty: ["CrossFit L3", "HIIT", "Olympic Lifting"],
    bio: "Former national-level athlete and CrossFit Games competitor. Ashan has been transforming lives at APEX for 5 years with his relentless energy and scientific programming.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51cd?w=600&q=80",
    experience: "12 Years",
    certifications: "CrossFit L3, NSCA-CPT",
    clients: "300+",
  },
  {
    name: "Dinesh Rajapaksa",
    role: "Strength & Conditioning",
    specialty: ["Powerlifting", "Olympic Lifting", "Periodization"],
    bio: "Masters in Sports Science from Colombo University. Dinesh brings academic rigour and real-world coaching to every session, specializing in elite powerlifting technique.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    experience: "9 Years",
    certifications: "CSCS, USAW L2",
    clients: "200+",
  },
  {
    name: "Nimali Silva",
    role: "Yoga & Recovery Lead",
    specialty: ["Vinyasa Yoga", "Mobility", "Breathwork"],
    bio: "Trained in India under Iyengar masters, Nimali bridges the gap between elite performance and recovery science. Her sessions are transformative for athletes of all disciplines.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    experience: "8 Years",
    certifications: "RYT-500, NASM-CES",
    clients: "400+",
  },
  {
    name: "Kasun Mendis",
    role: "Cardio & Bootcamp Coach",
    specialty: ["Endurance", "Bootcamp", "Fat Loss"],
    bio: "Military fitness background meets modern endurance coaching. Kasun pushes members to their absolute limits with programming that delivers measurable fat-loss and conditioning results.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
    experience: "7 Years",
    certifications: "NASM-CPT, ACSM",
    clients: "350+",
  },
  {
    name: "Roshan Thilakaratne",
    role: "Boxing & Combat Coach",
    specialty: ["Boxing", "Combat Fitness", "Agility"],
    bio: "Professional boxer turned coach. Roshan's technique-first approach builds not just fighters, but disciplined athletes who carry the mental fortitude of boxing into every area of life.",
    image: "https://images.unsplash.com/photo-1608138278524-a7e5c3d40284?w=600&q=80",
    experience: "10 Years",
    certifications: "USBA Certified, CPT",
    clients: "180+",
  },
  {
    name: "Kavindi Jayawardena",
    role: "Pilates & Nutrition Coach",
    specialty: ["Pilates", "Sports Nutrition", "Rehabilitation"],
    bio: "Dual-qualified in Pilates and sports nutrition, Kavindi is the secret weapon for members who want to build from a solid foundation of core strength and optimal fuelling strategy.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    experience: "6 Years",
    certifications: "PMA-CPT, Precision Nutrition L2",
    clients: "250+",
  },
];

export default function Trainers() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="trainers" className="py-28 bg-apex-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Coaching Staff</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide mb-4">
            MEET YOUR<br /><span className="text-apex-red">COACHES</span>
          </h2>
          <p className="font-body text-apex-white-dim text-base max-w-lg mx-auto">
            Every coach at APEX is a certified expert and a proven performer. They don&apos;t just train — they inspire.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <div
              key={trainer.name}
              className="group relative overflow-hidden bg-apex-black-3 border border-apex-gray/20 hover:border-apex-red/40 transition-all duration-300 card-lift cursor-pointer"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Photo */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-apex-black/40 to-transparent" />
              </div>

              {/* Specialty tags */}
              <div className="absolute top-4 right-4 flex flex-col gap-1.5">
                {trainer.specialty.map((tag) => (
                  <span key={tag} className="bg-apex-black/80 backdrop-blur-sm border border-apex-gray/40 font-mono text-[10px] text-apex-white-dim px-2 py-0.5 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl tracking-wide text-apex-white group-hover:text-apex-red transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="font-condensed font-600 text-xs tracking-widest uppercase text-apex-red mt-0.5">
                      {trainer.role}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <a href="#" className="text-apex-gray-muted hover:text-apex-red transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-apex-gray-muted hover:text-apex-red transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Bio (visible on hover) */}
                <p
                  className={`font-body text-xs text-apex-white-dim leading-relaxed transition-all duration-300 overflow-hidden ${
                    activeIdx === i ? "max-h-24 opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"
                  }`}
                >
                  {trainer.bio}
                </p>

                {/* Stats row */}
                <div className="flex gap-6 pt-4 border-t border-apex-gray/20">
                  {[
                    { label: "Experience", value: trainer.experience },
                    { label: "Clients", value: trainer.clients },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-lg text-apex-white">{s.value}</p>
                      <p className="font-mono text-[10px] text-apex-gray-muted tracking-wider uppercase">{s.label}</p>
                    </div>
                  ))}
                  <div className="ml-auto">
                    <div className="flex items-center gap-1 text-apex-gray-muted">
                      <Award className="w-3.5 h-3.5 text-apex-red" />
                      <span className="font-mono text-[10px] tracking-wider">{trainer.certifications.split(",")[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-condensed font-700 text-sm tracking-widest uppercase bg-apex-red hover:bg-apex-red-light text-white px-10 py-4 transition-all duration-200 clip-slash glow-red"
          >
            Book a Personal Session
          </a>
        </div>
      </div>
    </section>
  );
}
