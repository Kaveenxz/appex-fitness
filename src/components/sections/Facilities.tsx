import { Dumbbell, Droplets, Utensils, Wifi, ParkingCircle, Shield, Camera, Wind } from "lucide-react";

const facilities = [
  { icon: Dumbbell, name: "Free Weights Zone", desc: "Full rack of dumbbells up to 60kg, barbells, and Olympic platforms." },
  { icon: Wind, name: "Cardio Floor", desc: "50+ treadmills, bikes, ellipticals, and rowers with entertainment systems." },
  { icon: Droplets, name: "Recovery Pool & Sauna", desc: "Hydrotherapy pool, steam room, and Finnish sauna for optimal recovery." },
  { icon: Utensils, name: "Nutrition Bar", desc: "Freshly blended shakes, whole foods, and supplements available daily." },
  { icon: Shield, name: "24/7 Security", desc: "CCTV monitored, key-card access, and on-site security for your safety." },
  { icon: Camera, name: "Progress Studio", desc: "Private room with lighting and scales to track your transformation." },
  { icon: Wifi, name: "High-Speed WiFi", desc: "Ultra-fast connectivity throughout the entire facility." },
  { icon: ParkingCircle, name: "Member Parking", desc: "Dedicated, secure underground parking for all members." },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-28 bg-apex-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">World-Class Facility</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide mb-4">
            BUILT FOR<br /><span className="text-apex-red">CHAMPIONS</span>
          </h2>
          <p className="font-body text-apex-white-dim text-base max-w-lg mx-auto">
            Our 18,000 sq ft facility is packed with everything you need to perform, recover, and thrive.
          </p>
        </div>

        {/* Facility image with overlaid cards */}
        <div className="relative">
          <div className="aspect-video overflow-hidden mb-0">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=80"
              alt="Apex Fitness Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-apex-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-apex-black/50 to-transparent" />
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-apex-gray/30 mt-0">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.name}
                className={`p-6 border-apex-gray/30 hover:bg-apex-red/5 transition-colors duration-200 group cursor-default
                  ${i % 4 !== 3 ? "border-r" : ""}
                  ${i < 4 ? "border-b" : ""}
                `}
              >
                <Icon className="w-6 h-6 text-apex-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-condensed font-700 text-sm tracking-wider uppercase text-apex-white mb-2">{facility.name}</h3>
                <p className="font-body text-xs text-apex-gray-muted leading-relaxed">{facility.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
