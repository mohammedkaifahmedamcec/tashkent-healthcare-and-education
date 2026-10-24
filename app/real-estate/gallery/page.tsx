"use client";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import Lightbox from "@/components/Lightbox";
import { sectorThemes } from "@/components/SectorTheme";

export default function RealEstateGalleryPage() {
  const theme = sectorThemes["real-estate"];
  const links = [
    { label: "Overview", href: "/real-estate" },
    { label: "About", href: "/real-estate/about" },
    { label: "Gallery", href: "/real-estate/gallery" },
    { label: "Contact", href: "/real-estate/contact" },
  ];

  const items: GalleryItem[] = [
    { id: "1", category: "Residential", caption: "Modern Apartment Complex (Demo)", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" },
    { id: "2", category: "Interiors", caption: "Living Room Design (Demo)", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
    { id: "3", category: "Commercial", caption: "Office Space Layout (Demo)", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" },
    { id: "4", category: "Exteriors", caption: "Independent Villa (Demo)", src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />
      <SectorNav base="/real-estate" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-realty-navy">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <p className="text-realty-gold font-semibold tracking-[0.2em] uppercase text-xs mb-4">Gallery</p>
          <h1 className="font-serif text-5xl text-white">Property Showcase.</h1>
          <p className="text-realty-stone mt-4 max-w-lg">Note: All images below are demonstration content.</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <GalleryGrid items={items} accent={theme.accent} onItemClick={setActiveIndex} dark={true} />
        </section>
      </main>

      <Lightbox items={items} currentIndex={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} dark={true} />
      <SiteFooter />
    </>
  );
}