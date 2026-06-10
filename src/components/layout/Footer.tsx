import Link from "next/link";
import { Zap, Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  Programs: ["Weight Training", "CrossFit", "Yoga & Mindfulness", "Cardio & Conditioning", "Boxing", "Nutrition Coaching"],
  Company: ["About Us", "Our Team", "Careers", "News & Blog", "Press Kit", "Partnerships"],
  Support: ["FAQ", "Contact Us", "Privacy Policy", "Terms of Service", "Refund Policy", "Accessibility"],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
];

export default function Footer() {
  return (
    <footer className="bg-apex-black-2 border-t border-apex-gray/30 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-apex-red flex items-center justify-center rotate-45">
                <Zap className="w-4 h-4 text-white -rotate-45" fill="white" />
              </div>
              <span className="font-display text-2xl tracking-wider">
                APEX<span className="text-apex-red">.</span>
              </span>
            </div>
            <p className="font-body text-apex-white-dim text-sm leading-relaxed mb-6 max-w-xs">
              Sri Lanka&apos;s most elite fitness destination. We don&apos;t just build bodies — we forge champions.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: "42 Galle Road, Colombo 03, Sri Lanka" },
                { icon: Phone, text: "+94 11 234 5678" },
                { icon: Mail, text: "hello@apexfitness.lk" },
                { icon: Clock, text: "Mon–Fri 5AM–11PM | Sat–Sun 6AM–9PM" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-apex-red mt-0.5 shrink-0" />
                  <span className="font-body text-apex-white-dim text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-apex-gray hover:border-apex-red hover:bg-apex-red/10 flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-apex-gray-muted group-hover:text-apex-red transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-condensed font-700 text-xs tracking-widest uppercase text-apex-white mb-5 section-label">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-body text-apex-white-dim text-sm hover:text-apex-red transition-colors duration-200 hover-underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-apex-gray/30 bg-apex-black-3 p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-apex-red/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="section-label mb-1">Newsletter</p>
              <h3 className="font-display text-2xl tracking-wider">
                GET EXCLUSIVE OFFERS & FITNESS TIPS
              </h3>
            </div>
            <div className="flex w-full md:w-auto gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-72 bg-apex-black border border-apex-gray/50 border-r-0 px-4 py-3 text-sm font-body text-apex-white placeholder:text-apex-gray-muted focus:outline-none focus:border-apex-red transition-colors"
              />
              <button className="bg-apex-red hover:bg-apex-red-light px-6 py-3 font-condensed font-700 text-sm tracking-widest uppercase text-white transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-apex-gray/20">
          <p className="font-mono text-xs text-apex-gray-muted tracking-wider">
            © 2025 APEX FITNESS. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-xs text-apex-gray-muted tracking-wider">
            FORGED IN COLOMBO. BUILT FOR CHAMPIONS.
          </p>
        </div>
      </div>
    </footer>
  );
}
