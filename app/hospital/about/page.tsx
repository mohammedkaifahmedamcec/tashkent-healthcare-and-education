import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function HospitalAboutPage() {
  const theme = sectorThemes.hospital;
  const links = [
    { label: "Overview", href: "/hospital" },
    { label: "About", href: "/hospital/about" },
    { label: "Gallery", href: "/hospital/gallery" },
    { label: "Contact", href: "/hospital/contact" },
  ];

  return (
    <>
      <SiteHeader />
      <SectorNav base="/hospital" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-white">
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-6">Our Philosophy</p>
          <h1 className="font-serif text-5xl md:text-6xl text-med-navy leading-[1.1]">
            Treating the whole person, not just the condition.
          </h1>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 items-center">
          <img 
            src="/images/hospital/team.jpg" 
            alt="Medical team collaboration" 
            className="w-full aspect-[4/5] object-cover"
          />
          <div>
            <h2 className="font-serif text-3xl text-med-navy mb-6">A patient-first approach.</h2>
            <p className="text-med-muted leading-relaxed mb-6">
              We understand that visiting a hospital can be a stressful experience. Our facilities are designed to be calm and reassuring, and our staff are trained to communicate clearly and empathetically.
            </p>
            <p className="text-med-muted leading-relaxed mb-8">
              Our medical approach prioritizes accurate diagnosis, transparent treatment options, and ongoing support. We do not believe in rushed consultations or unnecessary interventions.
            </p>
            <h3 className="font-semibold text-med-navy mb-4">Facilities & Infrastructure</h3>
            <ul className="text-sm text-med-muted space-y-3">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-med-teal rounded-full"></span> Modern consultation suites</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-med-teal rounded-full"></span> Dedicated diagnostic areas</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-med-teal rounded-full"></span> Comfortable inpatient rooms</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-med-teal rounded-full"></span> Supportive family waiting areas</li>
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