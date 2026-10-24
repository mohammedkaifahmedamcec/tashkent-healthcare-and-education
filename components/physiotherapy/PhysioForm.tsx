"use client";
import { useState } from "react";

export default function PhysioForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="enquire" className="bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto rounded-3xl bg-white p-10 border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold font-[Sora] text-slate-900 mb-6 text-center">Download Course Brochure</h2>
        {submitted ? (
          <div className="text-center py-10">
            <p className="text-4xl mb-4">✅</p>
            <p className="text-slate-600">Check your email for the brochure and admissions details.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <input required placeholder="Full name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#8ECAE6]" />
            <input required type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#8ECAE6]" />
            <button type="submit" className="w-full py-3 rounded-lg bg-[#1E3A8A] text-white font-semibold hover:bg-[#152C6B] transition">
              Request Brochure
            </button>
          </form>
        )}
      </div>
    </section>
  );
}