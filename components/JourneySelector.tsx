"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const journeys = [
  { id: "hospital", title: "Hospital", subtitle: "Multispecialty care", href: "/hospital" },
  { id: "nursing", title: "Nursing College", subtitle: "B.Sc. Nursing", href: "/nursing" },
  { id: "physiotherapy", title: "Physiotherapy", subtitle: "BPT & MPT", href: "/physiotherapy" },
  { id: "real-estate", title: "Real Estate", subtitle: "Residential & commercial", href: "/real-estate" },
];

export default function JourneySelector() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-32">
      <div className="border-t border-line">
        {journeys.map((j, i) => (
          <motion.div
            key={j.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.1 }}
          >
            <Link
              href={j.href}
              className="group flex items-baseline justify-between py-8 border-b border-line hover:bg-white/50 transition-colors px-2 -mx-2"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xs text-muted tabular-nums">0{i + 1}</span>
                <h2 className="font-serif text-3xl md:text-4xl text-ink group-hover:text-accent transition-colors">
                  {j.title}
                </h2>
              </div>
              <span className="text-sm text-muted hidden md:block">
                {j.subtitle}
              </span>
              <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}