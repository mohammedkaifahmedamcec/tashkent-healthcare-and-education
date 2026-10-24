"use client";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import Lightbox from "@/components/Lightbox";
import { sectorThemes } from "@/components/SectorTheme";

export default function PhysiotherapyGalleryPage() {
  const theme = sectorThemes.physiotherapy;
  const links = [
    { label: "Overview", href: "/physiotherapy" },
    { label: "About", href: "/physiotherapy/about" },
    { label: "Gallery", href: "/physiotherapy/gallery" },
    { label: "Contact", href: "/physiotherapy/contact" },
  ];

  const items: GalleryItem[] = [
    { id: "1", category: "Laboratories", caption: "Physiotherapy Lab", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" },
    { id: "2", category: "Equipment", caption: "Rehabilitation Equipment", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" },
    { id: "3", category: "Training", caption: "Exercise & Movement Training", src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop" },
    { id: "4", category: "Classrooms", caption: "Lecture Hall", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />
      <SectorNav base="/physiotherapy" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Gallery</p>
          <h1 className="font-serif text-5xl text-med-navy">Practical Learning.</h1>
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