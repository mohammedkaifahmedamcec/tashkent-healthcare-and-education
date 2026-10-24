"use client";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function PhysiotherapyContactPage() {
  const theme = sectorThemes.physiotherapy;
  const links = [
    { label: "Overview", href: "/physiotherapy" },
    { label: "About", href: "/physiotherapy/about" },
    { label: "Gallery", href: "/physiotherapy/gallery" },
    { label: "Contact", href: "/physiotherapy/contact" },
  ];
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SiteHeader />
      <SectorNav base="/physiotherapy" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-med-bg">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Contact</p>
          <h1 className="font-serif text-5xl text-med-navy">Enquire About Physiotherapy.</h1>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-med-navy mb-6">Get in Touch</h2>
            <div className="space-y-6 border-t border-line pt-6">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-med-muted mb-1">Phone</p>
                <p className="text-sm text-med-navy font-medium">+91 12345 67892</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-line p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-16">
                <p className="text-4xl mb-4 text-med-teal">✓</p>
                <h3 className="font-serif text-2xl text-med-navy mb-2">Enquiry received</h3>
                <p className="text-sm text-med-muted">We will contact you shortly.</p>
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
                <button type="submit" className="w-full py-4 bg-med-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-med-teal transition-colors mt-4">
                  Send Enquiry
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