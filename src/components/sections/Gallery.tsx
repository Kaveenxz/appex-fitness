"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Gym floor", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", alt: "Weight training", span: "" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80", alt: "Barbell", span: "" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", alt: "Treadmill", span: "" },
  { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80", alt: "Yoga", span: "" },
  { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80", alt: "CrossFit", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80", alt: "Boxing", span: "" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80", alt: "Training", span: "" },
  { src: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=600&q=80", alt: "HIIT", span: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-28 bg-apex-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Inside APEX</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide">
              THE FACILITY<br /><span className="text-apex-red">IN ACTION</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed font-700 text-sm tracking-widest uppercase text-apex-red hover:text-white border border-apex-red hover:bg-apex-red px-6 py-3 transition-all duration-200 self-start md:self-auto"
          >
            Follow on Instagram
          </a>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-4 grid-rows-3 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-apex-black/0 group-hover:bg-apex-black/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
              {/* Red corner accent */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-apex-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-apex-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-apex-white-dim hover:text-apex-red transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
