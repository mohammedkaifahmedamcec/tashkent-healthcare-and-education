import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectorNav from "@/components/SectorNav";
import { sectorThemes } from "@/components/SectorTheme";

export default function RealEstateAboutPage() {
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
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-realty-gold font-semibold tracking-[0.2em] uppercase text-xs mb-6">Our Philosophy</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1]">
            A legacy of property.
          </h1>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 items-center">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop" 
            alt="Property architecture" 
            className="w-full aspect-[4/5] object-cover border border-white/10"
          />
          <div>
            <h2 className="font-serif text-3xl text-white mb-6">Building on trust.</h2>
            <p className="text-realty-stone leading-relaxed mb-6">
              The Tashkent Real Estate division was founded on the belief that property is not just an asset, but a foundation for life and business.
            </p>
            <p className="text-realty-stone leading-relaxed mb-8">
              We focus on properties that offer genuine value—whether that is a family home, a commercial space, or a strategic investment. Our team provides transparent advice and clear processes.
            </p>
            
            <h3 className="font-serif text-xl text-white mb-4 border-t border-white/10 pt-6">Property Categories</h3>
            <ul className="text-sm text-realty-stone space-y-3">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-realty-gold rounded-full"></span> Residential Apartments</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-realty-gold rounded-full"></span> Independent Houses</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-realty-gold rounded-full"></span> Commercial Properties</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-realty-gold rounded-full"></span> Office Spaces</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}