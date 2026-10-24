"use client";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function HospitalContactPage() {
  const theme = sectorThemes.hospital;
  const links = [
    { label: "Overview", href: "/hospital" },
    { label: "About", href: "/hospital/about" },
    { label: "Gallery", href: "/hospital/gallery" },
    { label: "Contact", href: "/hospital/contact" },
  ];
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SiteHeader />
      <SectorNav base="/hospital" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-med-bg">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Contact</p>
          <h1 className="font-serif text-5xl text-med-navy">Request an appointment.</h1>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-med-navy mb-6">Hospital Direct Line</h2>
            <div className="space-y-6 border-t border-line pt-6">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-med-muted mb-1">Phone</p>
                <p className="text-sm text-med-navy font-medium">+91 12345 67890 (Reception)</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-med-muted mb-1">Email</p>
                <p className="text-sm text-med-navy font-medium">hospital@tashkentgroup.com</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-med-muted mb-1">Hours</p>
                <p className="text-sm text-med-navy font-medium">Mon–Sat, 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-line p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-16">
                <p className="text-4xl mb-4 text-med-teal">✓</p>
                <h3 className="font-serif text-2xl text-med-navy mb-2">Request received</h3>
                <p className="text-sm text-med-muted">Our hospital team will call you to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-med-navy mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 border border-line bg-white text-sm focus:outline-none focus:border-med-blue focus:ring-1 focus:ring-med-blue transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-med-navy mb-2">Phone Number</label>
                  <input required type="tel" className="w-full px-4 py-3 border border-line bg-white text-sm focus:outline-none focus:border-med-blue focus:ring-1 focus:ring-med-blue transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-med-navy mb-2">Department</label>
                  <select required className="w-full px-4 py-3 border border-line bg-white text-sm focus:outline-none focus:border-med-blue focus:ring-1 focus:ring-med-blue transition-colors">
                    <option value="">Select department</option>
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Orthopaedics</option>
                    <option>Paediatrics</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-med-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-med-teal transition-colors mt-4">
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}