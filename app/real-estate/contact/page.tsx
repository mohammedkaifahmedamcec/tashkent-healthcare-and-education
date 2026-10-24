"use client";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function RealEstateContactPage() {
  const theme = sectorThemes["real-estate"];
  const links = [
    { label: "Overview", href: "/real-estate" },
    { label: "About", href: "/real-estate/about" },
    { label: "Gallery", href: "/real-estate/gallery" },
    { label: "Contact", href: "/real-estate/contact" },
  ];
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SiteHeader />
      <SectorNav base="/real-estate" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-realty-navy">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <p className="text-realty-gold font-semibold tracking-[0.2em] uppercase text-xs mb-4">Contact</p>
          <h1 className="font-serif text-5xl text-white">Property Enquiries.</h1>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-white mb-6">Real Estate Desk</h2>
            <div className="space-y-6 border-t border-white/10 pt-6">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-realty-stone mb-1">Phone</p>
                <p className="text-sm text-white font-medium">+91 12345 67893</p>
              </div>
            </div>
          </div>

          <div className="bg-[#16253D] border border-white/10 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-16">
                <p className="text-4xl mb-4 text-realty-gold">✓</p>
                <h3 className="font-serif text-2xl text-white mb-2">Enquiry received</h3>
                <p className="text-sm text-realty-stone">Our property team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 border border-white/20 bg-transparent text-white text-sm focus:outline-none focus:border-realty-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Property Interest</label>
                  <select required className="w-full px-4 py-3 border border-white/20 bg-transparent text-white text-sm focus:outline-none focus:border-realty-gold transition-colors">
                    <option value="" className="text-black">Select category</option>
                    <option className="text-black">Residential Apartment</option>
                    <option className="text-black">Independent House</option>
                    <option className="text-black">Commercial / Office</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-realty-gold text-realty-navy font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors mt-4">
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