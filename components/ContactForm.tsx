"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-3xl mb-4 text-med-teal">✓</p>
        <h3 className="font-serif text-2xl text-med-navy mb-2">Message received</h3>
        <p className="text-sm text-med-muted">Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div>
        <label className="block text-xs font-semibold text-med-navy mb-2">Full Name</label>
        <input required type="text" className="w-full px-4 py-3 border border-line bg-white text-sm focus:outline-none focus:border-med-blue focus:ring-1 focus:ring-med-blue transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-med-navy mb-2">Email Address</label>
        <input required type="email" className="w-full px-4 py-3 border border-line bg-white text-sm focus:outline-none focus:border-med-blue focus:ring-1 focus:ring-med-blue transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-med-navy mb-2">Which division is this regarding?</label>
        <select required className="w-full px-4 py-3 border border-line bg-white text-sm focus:outline-none focus:border-med-blue focus:ring-1 focus:ring-med-blue transition-colors">
          <option value="">Select a division</option>
          <option value="hospital">Hospital</option>
          <option value="nursing">Nursing College</option>
          <option value="physiotherapy">Physiotherapy</option>
          <option value="real-estate">Real Estate</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-med-navy mb-2">Message</label>
        <textarea required rows={4} className="w-full px-4 py-3 border border-line bg-white text-sm focus:outline-none focus:border-med-blue focus:ring-1 focus:ring-med-blue transition-colors resize-none"></textarea>
      </div>
      <button type="submit" className="w-full py-4 bg-med-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-med-teal transition-colors mt-4">
        Send Message
      </button>
    </form>
  );
}