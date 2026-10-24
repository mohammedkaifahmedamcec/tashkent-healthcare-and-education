"use client";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import Lightbox from "@/components/Lightbox";
import { sectorThemes } from "@/components/SectorTheme";

export default function NursingGalleryPage() {
  const theme = sectorThemes.nursing;
  const links = [
    { label: "Overview", href: "/nursing" },
    { label: "About", href: "/nursing/about" },
    { label: "Gallery", href: "/nursing/gallery" },
    { label: "Contact", href: "/nursing/contact" },
  ];

  const items: GalleryItem[] = [
    { id: "1", category: "Campus", caption: "Nursing College Building", src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" },
    { id: "2", category: "Classrooms", caption: "Lecture Hall", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop" },
    { id: "3", category: "Labs", caption: "Anatomy & Practical Lab", src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop" },
    { id: "4", category: "Library", caption: "Medical Library", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />
      <SectorNav base="/nursing" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Gallery</p>
          <h1 className="font-serif text-5xl text-med-navy">Inside our campus.</h1>
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