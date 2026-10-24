"use client";
import { useState } from "react";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="apply" className="max-w-7xl mx-auto px-6 py-20">
      <div className="rounded-3xl bg-[#7A4A1E] text-white p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#F4A261] text-xs font-semibold tracking-widest">ADMISSIONS 2026</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[Sora] leading-tight">Start your nursing journey.</h2>
          <p className="mt-4 text-white/75 leading-relaxed">Fill the form and our admissions counsellor will call you within 10 minutes.</p>
        </div>
        {submitted ? (
          <div className="rounded-2xl bg-white/10 border border-white/20 p-10 text-center">
            <p className="text-4xl mb-4">✅</p>
            <h3 className="text-xl font-semibold">Application received!</h3>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-2xl bg-white/10 border border-white/20 p-6 space-y-4">
            <input required placeholder="Full name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none" />
            <input required type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none" />
            <select required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none">
              <option value="" className="text-slate-900">Select programme</option>
              <option className="text-slate-900">B.Sc. Nursing</option>
              <option className="text-slate-900">GNM</option>
              <option className="text-slate-900">M.Sc. Nursing</option>
            </select>
            <button type="submit" className="w-full py-3 rounded-lg bg-[#F4A261] text-[#7A4A1E] font-semibold hover:bg-white transition">Submit Application</button>
          </form>
        )}
      </div>
    </section>
  );
}