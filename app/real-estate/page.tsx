import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function RealEstatePage() {
  const theme = sectorThemes["real-estate"];
  const links = [
    { label: "Overview", href: "/real-estate" },
    { label: "About", href: "/real-estate/about" },
    { label: "Gallery", href: "/real-estate/gallery" },
    { label: "Contact", href: "/real-estate/contact" },
  ];

  return (
    <>
      <SiteHeader />
      <SectorNav base="/real-estate" links={links} accent={theme.accent} ink={theme.ink} muted={theme.muted} line={theme.line} baseBg={theme.base} />
      
      <main className="bg-realty-navy text-realty-ivory">
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            >
              <source src="/videos/real-estate.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-realty-navy/95 via-realty-navy/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
            <div className="max-w-2xl">
              <p className="text-realty-gold font-semibold tracking-[0.2em] uppercase text-xs mb-4">Tashkent Real Estate</p>
              <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] mb-6">
                Find a place for your next chapter.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                Premium residential and commercial property services built on a legacy of trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/real-estate/gallery" className="px-8 py-4 bg-realty-gold text-realty-navy font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors">
                  Explore Properties
                </Link>
                <Link href="/real-estate/contact" className="px-8 py-4 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-realty-navy transition-colors">
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-snug">
              Real estate with integrity.
            </h2>
            <p className="text-realty-stone leading-relaxed mb-6">
              We bring the same commitment to quality and transparency to our property division as we do to our healthcare and education sectors. Whether you are buying, selling, or investing, we prioritize clear communication and long-term value.
            </p>
            <Link href="/real-estate/about" className="inline-flex items-center gap-2 text-realty-gold font-semibold text-xs tracking-widest uppercase border-b border-realty-gold pb-1 hover:text-white hover:border-white transition-colors">
              Our Approach <span>→</span>
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern interior" 
              className="w-full aspect-[4/3] object-cover border border-white/10"
            />
          </div>
        </section>

        <section className="bg-[#16253D] border-y border-white/10 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-realty-gold font-semibold tracking-[0.2em] uppercase text-xs mb-2">Featured Listings</p>
              <h2 className="font-serif text-4xl text-white">Premium Properties</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Tashkent Heights", type: "Residential Apartment", price: "Starting ₹45L", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" },
                { title: "Tashkent Business Park", type: "Commercial Office", price: "Starting ₹1.2Cr", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" },
                { title: "Tashkent Greens", type: "Luxury Villa", price: "Starting ₹2.5Cr", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" },
              ].map((p, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="overflow-hidden aspect-[4/3] mb-4">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-realty-gold mb-1">Demo Listing</p>
                  <h3 className="font-serif text-xl text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-realty-stone mb-3">{p.type}</p>
                  <p className="text-white font-medium">{p.price}</p>
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