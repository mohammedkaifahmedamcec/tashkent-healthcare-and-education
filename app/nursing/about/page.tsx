import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function NursingAboutPage() {
  const theme = sectorThemes.nursing;
  const links = [
    { label: "Overview", href: "/nursing" },
    { label: "About", href: "/nursing/about" },
    { label: "Gallery", href: "/nursing/gallery" },
    { label: "Contact", href: "/nursing/contact" },
  ];

  return (
    <>
      <SiteHeader />
      <SectorNav base="/nursing" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-white">
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-6">Our Philosophy</p>
          <h1 className="font-serif text-5xl md:text-6xl text-med-navy leading-[1.1]">
            Educating the next generation of caregivers.
          </h1>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 items-center">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
            alt="Nursing students learning" 
            className="w-full aspect-[4/5] object-cover"
          />
          <div>
            <h2 className="font-serif text-3xl text-med-navy mb-6">Nursing is both a science and an art.</h2>
            <p className="text-med-muted leading-relaxed mb-6">
              Our educational philosophy is built on clinical competence, patient empathy, and professional integrity. Students are trained not just in medical procedures, but in how to communicate, support, and care for individuals during vulnerable moments.
            </p>
            <p className="text-med-muted leading-relaxed mb-8">
              We maintain strong connections with clinical environments to ensure our curriculum remains relevant and rigorous.
            </p>
            <h3 className="font-semibold text-med-navy mb-4">Campus Facilities</h3>
            <ul className="text-sm text-med-muted space-y-3">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-med-teal rounded-full"></span> Dedicated Nursing Laboratories</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-med-teal rounded-full"></span> Comprehensive Medical Library</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-med-teal rounded-full"></span> Clinical Simulation Rooms</li>
            </ul>
          </div>
        </section>

        <section className="bg-med-navy py-24 text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Mission</h2>
              <p className="font-serif text-3xl leading-snug">
                To provide accessible, high-quality medical care that treats the whole person, not just the condition.
              </p>
            </div>
            <div>
              <h2 className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Vision</h2>
              <p className="font-serif text-3xl leading-snug">
                To be a trusted healthcare institution known for clinical integrity, patient dignity, and community service.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}