import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function PhysiotherapyPage() {
  const theme = sectorThemes.physiotherapy;
  const links = [
    { label: "Overview", href: "/physiotherapy" },
    { label: "About", href: "/physiotherapy/about" },
    { label: "Gallery", href: "/physiotherapy/gallery" },
    { label: "Contact", href: "/physiotherapy/contact" },
  ];

  return (
    <>
      <SiteHeader />
      <SectorNav base="/physiotherapy" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-white">
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
            >
              <source src="/videos/physiotherapy.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-med-navy/95 via-med-navy/80 to-med-navy/30"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
            <div className="max-w-2xl">
              <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Tashkent Physiotherapy</p>
              <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] mb-6">
                Learn to make movement matter.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                A comprehensive physiotherapy programme combining academic study with hands-on rehabilitation training.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/physiotherapy/contact" className="px-8 py-4 bg-med-teal text-white text-xs font-semibold tracking-widest uppercase hover:bg-med-teal/90 transition-colors">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-med-navy mb-6 leading-snug">
              Restoring movement, rebuilding lives.
            </h2>
            <p className="text-med-muted leading-relaxed mb-6">
              Our physiotherapy division is dedicated to the science of human movement. We provide students with the clinical knowledge and practical skills required to help patients recover from injury and manage chronic conditions.
            </p>
            <p className="text-med-muted leading-relaxed mb-8">
              Students learn in a modern environment equipped with the latest rehabilitation tools and guided by professionals who are passionate about movement and recovery.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop" 
              alt="Physiotherapy equipment" 
              className="w-full aspect-[4/3] object-cover shadow-xl"
            />
          </div>
        </section>

        <section className="bg-med-bg border-y border-line py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-med-blue font-semibold tracking-[0.2em] uppercase text-xs mb-2">Programs</p>
              <h2 className="font-serif text-4xl text-med-navy">Our Physiotherapy Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {[
                { title: "BPT", desc: "Bachelor of Physiotherapy. Comprehensive undergraduate programme with clinical internship.", duration: "4.5 Years" },
                { title: "MPT", desc: "Master of Physiotherapy. Specialisations in Orthopaedics, Neurology, and Sports.", duration: "2 Years" },
              ].map((p, i) => (
                <div key={i} className="bg-white p-8 border border-line hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-xl text-med-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-med-muted leading-relaxed mb-6">{p.desc}</p>
                  <p className="text-xs text-med-muted border-t border-line pt-4">Duration: {p.duration}</p>
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