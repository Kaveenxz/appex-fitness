"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-apex-black-4 border border-apex-gray/30 focus:border-apex-red text-apex-white placeholder:text-apex-gray-muted px-4 py-3 text-sm font-body outline-none transition-colors duration-200";

  return (
    <section id="contact" className="py-28 bg-apex-black-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide mb-4">
            LET&apos;S TALK<br /><span className="text-apex-red">ABOUT YOUR GOALS</span>
          </h2>
          <p className="font-body text-apex-white-dim text-base max-w-lg mx-auto">
            Whether you&apos;re ready to join, want a tour, or need advice — our team is here. No pressure, no sales scripts. Just honest answers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, title: "Visit Us", lines: ["42 Galle Road, Colombo 03", "Western Province, Sri Lanka"] },
                { icon: Phone, title: "Call Us", lines: ["+94 11 234 5678", "+94 77 890 1234 (WhatsApp)"] },
                { icon: Mail, title: "Email Us", lines: ["hello@apexfitness.lk", "members@apexfitness.lk"] },
                { icon: Clock, title: "Opening Hours", lines: ["Mon – Fri: 5:00 AM – 11:00 PM", "Sat – Sun: 6:00 AM – 9:00 PM"] },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-apex-red/10 border border-apex-red/30 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-apex-red" />
                  </div>
                  <div>
                    <p className="font-condensed font-700 text-xs tracking-widest uppercase text-apex-white mb-1">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="font-body text-sm text-apex-white-dim">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-video bg-apex-black-4 border border-apex-gray/30 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=60"
                alt="Location"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <MapPin className="w-8 h-8 text-apex-red" />
                <p className="font-condensed font-700 text-sm tracking-widest uppercase text-apex-white">42 Galle Road, Colombo 03</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-apex-red hover:underline tracking-wider mt-1"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-apex-black-4 border border-apex-gray/30 p-8">
            {!submitted ? (
              <>
                <h3 className="font-display text-2xl tracking-wide text-apex-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" className="bg-apex-black">I&apos;m interested in...</option>
                    <option value="membership" className="bg-apex-black">Membership</option>
                    <option value="pt" className="bg-apex-black">Personal Training</option>
                    <option value="classes" className="bg-apex-black">Group Classes</option>
                    <option value="corporate" className="bg-apex-black">Corporate Wellness</option>
                    <option value="tour" className="bg-apex-black">Facility Tour</option>
                    <option value="other" className="bg-apex-black">Other</option>
                  </select>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="w-full bg-apex-red hover:bg-apex-red-light text-white font-condensed font-700 text-sm tracking-widest uppercase py-4 transition-all duration-200 flex items-center justify-center gap-3 glow-red-sm hover:glow-red"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-16 h-16 text-apex-red mb-6" />
                <h3 className="font-display text-3xl tracking-wide text-apex-white mb-3">Message Received!</h3>
                <p className="font-body text-apex-white-dim text-sm leading-relaxed max-w-xs">
                  We&apos;ll get back to you within 24 hours. In the meantime, follow us on Instagram for daily motivation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-condensed font-700 text-xs tracking-widest uppercase text-apex-red border border-apex-red px-6 py-2.5 hover:bg-apex-red hover:text-white transition-all duration-200"
                >
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
