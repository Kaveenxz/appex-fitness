"use client";
import { useState } from "react";
import { Clock, Users } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const schedule: Record<string, { time: string; name: string; trainer: string; spots: number; duration: string; intensity: "Low" | "Medium" | "High" | "Extreme" }[]> = {
  Monday: [
    { time: "05:30", name: "Morning HIIT", trainer: "Ashan P.", spots: 12, duration: "30 min", intensity: "High" },
    { time: "07:00", name: "Strength & Power", trainer: "Dinesh R.", spots: 8, duration: "60 min", intensity: "High" },
    { time: "09:00", name: "Yoga Flow", trainer: "Nimali S.", spots: 15, duration: "75 min", intensity: "Low" },
    { time: "12:00", name: "Bootcamp", trainer: "Kasun M.", spots: 20, duration: "45 min", intensity: "Extreme" },
    { time: "17:30", name: "CrossFit WOD", trainer: "Ashan P.", spots: 10, duration: "45 min", intensity: "Extreme" },
    { time: "19:00", name: "Boxing Fundamentals", trainer: "Roshan T.", spots: 12, duration: "60 min", intensity: "Medium" },
  ],
  Tuesday: [
    { time: "06:00", name: "Cardio Conditioning", trainer: "Nimali S.", spots: 20, duration: "50 min", intensity: "Medium" },
    { time: "08:00", name: "Powerlifting Clinic", trainer: "Dinesh R.", spots: 6, duration: "90 min", intensity: "High" },
    { time: "10:00", name: "Pilates Core", trainer: "Kavindi J.", spots: 15, duration: "60 min", intensity: "Low" },
    { time: "17:00", name: "HIIT Bootcamp", trainer: "Kasun M.", spots: 20, duration: "30 min", intensity: "Extreme" },
    { time: "18:30", name: "Strength Training", trainer: "Dinesh R.", spots: 10, duration: "60 min", intensity: "High" },
    { time: "20:00", name: "Yoga & Stretch", trainer: "Nimali S.", spots: 15, duration: "60 min", intensity: "Low" },
  ],
  Wednesday: [
    { time: "05:30", name: "Morning Run Club", trainer: "Kasun M.", spots: 25, duration: "60 min", intensity: "Medium" },
    { time: "07:00", name: "CrossFit WOD", trainer: "Ashan P.", spots: 10, duration: "45 min", intensity: "Extreme" },
    { time: "09:30", name: "Mobility & Recovery", trainer: "Kavindi J.", spots: 12, duration: "60 min", intensity: "Low" },
    { time: "12:30", name: "Boxing Circuit", trainer: "Roshan T.", spots: 12, duration: "45 min", intensity: "High" },
    { time: "17:30", name: "Functional Strength", trainer: "Dinesh R.", spots: 10, duration: "60 min", intensity: "High" },
    { time: "19:30", name: "HIIT Bootcamp", trainer: "Ashan P.", spots: 20, duration: "30 min", intensity: "Extreme" },
  ],
  Thursday: [
    { time: "06:00", name: "Yoga Flow", trainer: "Nimali S.", spots: 15, duration: "75 min", intensity: "Low" },
    { time: "08:30", name: "Strength & Power", trainer: "Dinesh R.", spots: 8, duration: "60 min", intensity: "High" },
    { time: "12:00", name: "Lunchtime HIIT", trainer: "Kasun M.", spots: 20, duration: "30 min", intensity: "High" },
    { time: "17:00", name: "Boxing Sparring", trainer: "Roshan T.", spots: 8, duration: "60 min", intensity: "High" },
    { time: "18:30", name: "CrossFit WOD", trainer: "Ashan P.", spots: 10, duration: "45 min", intensity: "Extreme" },
    { time: "20:00", name: "Pilates & Core", trainer: "Kavindi J.", spots: 15, duration: "60 min", intensity: "Low" },
  ],
  Friday: [
    { time: "05:30", name: "Power Morning", trainer: "Dinesh R.", spots: 10, duration: "60 min", intensity: "High" },
    { time: "07:30", name: "CrossFit WOD", trainer: "Ashan P.", spots: 10, duration: "45 min", intensity: "Extreme" },
    { time: "09:00", name: "Cardio Blast", trainer: "Kasun M.", spots: 20, duration: "45 min", intensity: "High" },
    { time: "12:00", name: "Yoga & Mindfulness", trainer: "Nimali S.", spots: 15, duration: "60 min", intensity: "Low" },
    { time: "17:00", name: "Full Body HIIT", trainer: "Ashan P.", spots: 20, duration: "45 min", intensity: "Extreme" },
    { time: "19:00", name: "Boxing Clinic", trainer: "Roshan T.", spots: 12, duration: "60 min", intensity: "Medium" },
  ],
  Saturday: [
    { time: "07:00", name: "Bootcamp Outdoors", trainer: "Kasun M.", spots: 30, duration: "60 min", intensity: "Extreme" },
    { time: "09:00", name: "Olympic Lifting", trainer: "Dinesh R.", spots: 8, duration: "90 min", intensity: "High" },
    { time: "10:30", name: "Yoga for Athletes", trainer: "Nimali S.", spots: 15, duration: "75 min", intensity: "Medium" },
    { time: "12:30", name: "Sparring Session", trainer: "Roshan T.", spots: 10, duration: "60 min", intensity: "High" },
    { time: "15:00", name: "Open Gym", trainer: "Staff", spots: 50, duration: "180 min", intensity: "Medium" },
  ],
  Sunday: [
    { time: "08:00", name: "Recovery Yoga", trainer: "Kavindi J.", spots: 15, duration: "90 min", intensity: "Low" },
    { time: "10:00", name: "Light Cardio", trainer: "Staff", spots: 30, duration: "45 min", intensity: "Low" },
    { time: "12:00", name: "Skill Workshop", trainer: "Dinesh R.", spots: 12, duration: "120 min", intensity: "Medium" },
    { time: "16:00", name: "Open Box", trainer: "Roshan T.", spots: 15, duration: "90 min", intensity: "Medium" },
  ],
};

const intensityColor: Record<string, string> = {
  Low: "bg-green-900/40 text-green-400 border border-green-800/50",
  Medium: "bg-yellow-900/40 text-yellow-400 border border-yellow-800/50",
  High: "bg-orange-900/40 text-orange-400 border border-orange-800/50",
  Extreme: "bg-apex-red/20 text-apex-red border border-apex-red/40",
};

export default function Schedule() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const [activeDay, setActiveDay] = useState(days.includes(today) ? today : "Monday");

  return (
    <section id="schedule" className="py-28 bg-apex-black-3">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Weekly Timetable</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide">
              CLASS<br /><span className="text-apex-red">SCHEDULE</span>
            </h2>
          </div>
          <p className="font-body text-apex-white-dim text-sm max-w-xs leading-relaxed">
            Book your spot in advance — classes fill fast. Download our app to reserve anytime.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`font-condensed font-700 text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                activeDay === day
                  ? "bg-apex-red text-white"
                  : "bg-apex-gray/30 text-apex-white-dim hover:bg-apex-gray/50 hover:text-white"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Schedule list */}
        <div className="space-y-3">
          {(schedule[activeDay] || []).map((cls, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-4 bg-apex-black-4 border border-apex-gray/20 hover:border-apex-red/40 p-5 transition-all duration-200 group"
            >
              {/* Time */}
              <div className="w-20 shrink-0">
                <span className="font-mono text-apex-red text-base font-500">{cls.time}</span>
              </div>
              {/* Name */}
              <div className="flex-1">
                <h3 className="font-condensed font-700 text-base tracking-wide text-apex-white group-hover:text-apex-red transition-colors">
                  {cls.name}
                </h3>
                <p className="font-body text-apex-gray-muted text-xs mt-0.5">with {cls.trainer}</p>
              </div>
              {/* Meta */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-apex-white-dim">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">{cls.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-apex-white-dim">
                  <Users className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">{cls.spots} spots</span>
                </div>
                <span className={`font-mono text-xs px-2 py-0.5 rounded-sm ${intensityColor[cls.intensity]}`}>
                  {cls.intensity}
                </span>
              </div>
              {/* Book */}
              <button className="shrink-0 font-condensed font-700 text-xs tracking-widest uppercase px-5 py-2 border border-apex-red text-apex-red hover:bg-apex-red hover:text-white transition-all duration-200">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Download note */}
        <div className="mt-8 text-center">
          <p className="font-body text-apex-gray-muted text-sm">
            Want the full schedule?{" "}
            <a href="#" className="text-apex-red hover:underline">Download our app</a> or{" "}
            <a href="#contact" className="text-apex-red hover:underline">contact us</a> for more info.
          </p>
        </div>
      </div>
    </section>
  );
}
