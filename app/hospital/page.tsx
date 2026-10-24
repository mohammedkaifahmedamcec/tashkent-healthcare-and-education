import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function HospitalPage() {
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
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              poster="/images/hospital/hero.jpg"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-med-navy/95 via-med-navy/80 to-med-navy/30"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
            <div className="max-w-2xl">
              <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Tashkent Hospital</p>
              <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] mb-6">
                Expert Care. <br/>Compassionate People.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                A multispecialty clinical environment built around the patient. We combine modern medical practice with a commitment to dignity and trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/hospital/contact" className="px-8 py-4 bg-med-teal text-white text-xs font-semibold tracking-widest uppercase hover:bg-med-teal/90 transition-colors">
                  Request an Appointment
                </Link>
                <Link href="#departments" className="px-8 py-4 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-med-navy transition-colors">
                  Explore Departments
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-med-navy mb-6 leading-snug">
              Healthcare built on trust.
            </h2>
            <p className="text-med-muted leading-relaxed mb-6">
              At Tashkent Hospital, we believe that clinical excellence and human compassion must go hand in hand. Our facility is designed to provide a calm, reassuring environment for patients and their families.
            </p>
            <p className="text-med-muted leading-relaxed mb-8">
              We offer a range of medical departments, supported by a team dedicated to professional standards and ethical patient care.
            </p>
            <Link href="/hospital/about" className="inline-flex items-center gap-2 text-med-blue font-semibold text-xs tracking-widest uppercase border-b border-med-blue pb-1 hover:text-med-teal hover:border-med-teal transition-colors">
              Read Our Philosophy <span>→</span>
            </Link>
          </div>
          <div>
            <img 
              src="/images/hospital/doctor.jpg" 
              alt="Doctor consulting with patient" 
              className="w-full aspect-[4/3] object-cover shadow-xl"
            />
          </div>
        </section>

        <section id="departments" className="bg-med-bg border-y border-line py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-med-blue font-semibold tracking-[0.2em] uppercase text-xs mb-2">Medical Services</p>
              <h2 className="font-serif text-4xl text-med-navy">Our Departments</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {[
                { title: "General Medicine", desc: "Comprehensive primary care and preventative health assessments.", icon: "🩺" },
                { title: "Cardiology", desc: "Diagnostic and ongoing management for cardiovascular health.", icon: "❤️" },
                { title: "Orthopaedics", desc: "Care for bone, joint, and musculoskeletal conditions.", icon: "🦴" },
                { title: "Paediatrics", desc: "Dedicated healthcare for infants, children, and adolescents.", icon: "👶" },
                { title: "Neurology", desc: "Evaluation and management of nervous system disorders.", icon: "🧠" },
                { title: "Gynaecology", desc: "Comprehensive women's health services and maternity care.", icon: "🌸" },
              ].map((d, i) => (
                <div key={i} className="bg-white p-8 border border-line hover:shadow-lg transition-shadow group">
                  <span className="text-3xl mb-6 block opacity-80 group-hover:scale-110 transition-transform">{d.icon}</span>
                  <h3 className="font-serif text-xl text-med-navy mb-2">{d.title}</h3>
                  <p className="text-sm text-med-muted leading-relaxed mb-6">{d.desc}</p>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-auto">Demo Content</p>
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