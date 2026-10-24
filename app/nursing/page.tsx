import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function NursingPage() {
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
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
            >
              <source src="/videos/nursing.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-med-navy/95 via-med-navy/80 to-med-navy/30"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
            <div className="max-w-2xl">
              <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Tashkent Nursing College</p>
              <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] mb-6">
                Build a future in nursing.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                A B.Sc. Nursing programme that combines rigorous academic study with practical clinical training, preparing students for a meaningful career in healthcare.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/nursing/contact" className="px-8 py-4 bg-med-teal text-white text-xs font-semibold tracking-widest uppercase hover:bg-med-teal/90 transition-colors">
                  Apply for Admission
                </Link>
                <Link href="#programs" className="px-8 py-4 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-med-navy transition-colors">
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-med-navy mb-6 leading-snug">
              An environment of learning.
            </h2>
            <p className="text-med-muted leading-relaxed mb-6">
              Our campus provides a professional and inspiring environment for future nurses. With dedicated laboratories, a comprehensive library, and experienced faculty, students have the tools they need to succeed.
            </p>
            <p className="text-med-muted leading-relaxed mb-8">
              We focus on clinical competence, patient empathy, and professional integrity.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop" 
              alt="Nursing lab" 
              className="w-full aspect-[4/3] object-cover shadow-xl"
            />
          </div>
        </section>

        <section id="programs" className="bg-med-bg border-y border-line py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-med-blue font-semibold tracking-[0.2em] uppercase text-xs mb-2">Programs</p>
              <h2 className="font-serif text-4xl text-med-navy">Our Nursing Courses</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                { title: "B.Sc. Nursing", desc: "Full-time degree programme with hospital immersion.", duration: "4 Years", seats: "60" },
                { title: "GNM", desc: "Diploma programme focused on bedside care and midwifery.", duration: "3 Years", seats: "40" },
                { title: "M.Sc. Nursing", desc: "Postgraduate programme with 5 specialisations available.", duration: "2 Years", seats: "20" },
              ].map((p, i) => (
                <div key={i} className="bg-white p-8 border border-line hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-xl text-med-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-med-muted leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex justify-between text-xs text-med-muted border-t border-line pt-4">
                    <span>Duration: {p.duration}</span>
                    <span>Seats: {p.seats}</span>
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-4">Demo Content</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}