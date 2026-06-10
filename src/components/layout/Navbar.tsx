"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Schedule", href: "#schedule" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-apex-black/95 backdrop-blur-md border-b border-apex-gray/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-apex-red flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="white" />
            </div>
            <span className="font-display text-2xl tracking-wider text-apex-white group-hover:text-apex-red transition-colors duration-300">
              APEX<span className="text-apex-red group-hover:text-apex-white transition-colors duration-300">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-condensed font-600 text-sm tracking-widest uppercase transition-colors duration-200 hover-underline ${
                    activeSection === link.href.slice(1)
                      ? "text-apex-red"
                      : "text-apex-white-dim hover:text-apex-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#membership"
              className="font-condensed font-700 text-sm tracking-widest uppercase px-6 py-2.5 bg-apex-red hover:bg-apex-red-light text-white transition-all duration-200 clip-slash glow-red-sm hover:glow-red"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-apex-white hover:text-apex-red transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-apex-black/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-center ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 px-8">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`transition-all duration-400 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl tracking-wider text-apex-white hover:text-apex-red transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="#membership"
              onClick={() => setMobileOpen(false)}
              className="font-condensed font-700 text-lg tracking-widest uppercase px-10 py-3 bg-apex-red text-white clip-slash"
            >
              Join Now
            </Link>
          </li>
        </ul>

        {/* Decorative */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-apex-gray-muted tracking-widest">
          APEX FITNESS © 2025
        </div>
      </div>
    </>
  );
}
