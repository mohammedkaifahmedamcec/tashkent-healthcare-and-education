"use client";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import Lightbox from "@/components/Lightbox";
import { sectorThemes } from "@/components/SectorTheme";

export default function HospitalGalleryPage() {
  const theme = sectorThemes.hospital;
  const links = [
    { label: "Overview", href: "/hospital" },
    { label: "About", href: "/hospital/about" },
    { label: "Gallery", href: "/hospital/gallery" },
    { label: "Contact", href: "/hospital/contact" },
  ];

  const items: GalleryItem[] = [
    { id: "1", category: "Facilities", caption: "Modern Hospital Reception", src: "/images/hospital/hero.jpg" },
    { id: "2", category: "Patient Care", caption: "Consultation Room", src: "/images/hospital/doctor.jpg" },
    { id: "3", category: "Team", caption: "Medical Professionals", src: "/images/hospital/team.jpg" },
    { id: "4", category: "Facilities", caption: "Clinical Environment", src: "/images/hospital/corridor.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />
      <SectorNav base="/hospital" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Gallery</p>
          <h1 className="font-serif text-5xl text-med-navy">Inside Tashkent Hospital.</h1>
          <p className="text-med-muted mt-4 max-w-lg">A look at our facilities, patient areas, and clinical environments.</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <GalleryGrid items={items} accent={theme.accent} onItemClick={setActiveIndex} />
        </section>
      </main>

      <Lightbox items={items} currentIndex={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
      <SiteFooter />
    </>
  );
}