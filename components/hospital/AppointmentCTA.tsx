"use client";
import { useState } from "react";

export default function AppointmentCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="rounded-3xl bg-[#0B4F6C] text-white p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#01BAEF] text-xs font-semibold tracking-widest">
            BOOK AN APPOINTMENT
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[Sora] leading-tight">
            See a specialist today.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Fill in your details and our team will call you within 10 minutes
            to confirm your appointment.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/80">
            <p>📞 +91 12345 67890</p>
            <p>📍 Tashkent Hospital, Main Campus</p>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-white/10 border border-white/20 p-10 text-center">
            <p className="text-4xl mb-4">✅</p>
            <h3 className="text-xl font-semibold">Request received!</h3>
            <p className="text-white/70 mt-2 text-sm">
              Our team will call you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl bg-white/10 border border-white/20 p-6 space-y-4"
          >
            <input required placeholder="Full name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none" />
            <input required type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none" />
            <button type="submit" className="w-full py-3 rounded-lg bg-[#01BAEF] text-[#0B4F6C] font-semibold hover:bg-white transition">
              Request Appointment
            </button>
          </form>
        )}
      </div>
    </section>
  );
}