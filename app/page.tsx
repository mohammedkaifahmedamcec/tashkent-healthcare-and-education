import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        
        {/* CINEMATIC HERO WITH VIDEO */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center">
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
            <div className="absolute inset-0 bg-gradient-to-r from-med-navy/90 via-med-navy/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
            <div className="max-w-2xl">
              <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-6 animate-fade-in-up">
                Tashkent Healthcare & Education
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                One vision. <br />Four pathways to a better future.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Discover healthcare services, professional education, and property opportunities through one connected destination.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Link href="#pathways" className="px-8 py-4 bg-med-teal text-white text-xs font-semibold tracking-widest uppercase hover:bg-med-teal/90 transition-colors">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-med-navy transition-colors">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO TEXT */}
        <section className="py-24 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-med-navy leading-snug">
            A unified organization dedicated to health, education, and property.
          </h2>
          <p className="mt-6 text-med-muted leading-relaxed">
            The Tashkent Group brings together four distinct divisions under one parent brand. While our sectors serve different needs, they share a single commitment to excellence, integrity, and community impact.
          </p>
        </section>

        {/* FOUR BUSINESS PATHWAYS */}
        <section id="pathways" className="bg-med-bg py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-med-blue font-semibold tracking-[0.2em] uppercase text-xs mb-3">Our Divisions</p>
              <h2 className="font-serif text-4xl text-med-navy">Discover our pathways.</h2>
            </div>

            <div className="space-y-6">
              
              {/* Pathway 1: Hospital */}
              <Link href="/hospital" className="group block relative h-[400px] overflow-hidden">
                <img 
                  src="/images/hospital/hero.jpg" 
                  alt="Hospital interior" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-med-navy/90 via-med-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">Multispecialty Hospital</h3>
                    <p className="text-white/80 max-w-md">Care that puts people first. Explore medical services and request an appointment.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase border border-white/30 px-6 py-3 group-hover:bg-white group-hover:text-med-navy transition-colors">
                    Find a Doctor <span>→</span>
                  </span>
                </div>
              </Link>

              {/* Pathway 2: Nursing */}
              <Link href="/nursing" className="group block relative h-[400px] overflow-hidden">
                <img 
                  src="/images/hospital/team.jpg" 
                  alt="Nursing students" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-med-navy/90 via-med-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">B.Sc. Nursing</h3>
                    <p className="text-white/80 max-w-md">Build a future in nursing. Discover our educational environment and admissions process.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase border border-white/30 px-6 py-3 group-hover:bg-white group-hover:text-med-navy transition-colors">
                    Explore Nursing <span>→</span>
                  </span>
                </div>
              </Link>

              {/* Pathway 3: Physiotherapy */}
              <Link href="/physiotherapy" className="group block relative h-[400px] overflow-hidden">
                <img 
                  src="/images/hospital/doctor.jpg" 
                  alt="Physiotherapy training" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-med-navy/90 via-med-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">Physiotherapy</h3>
                    <p className="text-white/80 max-w-md">Learn to make movement matter. A comprehensive education in rehabilitation.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase border border-white/30 px-6 py-3 group-hover:bg-white group-hover:text-med-navy transition-colors">
                    Explore Physiotherapy <span>→</span>
                  </span>
                </div>
              </Link>

              {/* Pathway 4: Real Estate */}
              <Link href="/real-estate" className="group block relative h-[400px] overflow-hidden">
                <img 
                  src="/images/hospital/corridor.jpg" 
                  alt="Modern luxury property" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-realty-navy/90 via-realty-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">Real Estate</h3>
                    <p className="text-white/80 max-w-md">Find a place for your next chapter. Premium property discovery and consultation.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase border border-white/30 px-6 py-3 group-hover:bg-realty-gold group-hover:text-realty-navy hover:border-realty-gold transition-colors">
                    Explore Properties <span>→</span>
                  </span>
                </div>
              </Link>

            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}