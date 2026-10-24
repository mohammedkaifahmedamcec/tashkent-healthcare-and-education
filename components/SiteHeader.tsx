"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Transparent header only on the homepage hero
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isHome && !isScrolled ? "bg-transparent text-white border-transparent" : "bg-white/95 backdrop-blur-md text-ink border-line shadow-sm";
  const logoColor = isHome && !isScrolled ? "text-white" : "text-ink";
  const linkColor = isHome && !isScrolled ? "text-white/80 hover:text-white" : "text-med-muted hover:text-ink";

  const links = [
    { href: "/hospital", label: "Hospital" },
    { href: "/nursing", label: "Nursing" },
    { href: "/physiotherapy", label: "Physiotherapy" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className={`font-serif text-2xl tracking-wide transition-colors ${logoColor}`}>
          Tashkent<span className="text-med-teal">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-[0.15em] uppercase">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`transition-colors ${linkColor}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link 
          href="/contact" 
          className={`hidden lg:inline-flex px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
            isHome && !isScrolled 
              ? "bg-white text-ink hover:bg-med-teal hover:text-white" 
              : "bg-med-navy text-white hover:bg-med-teal"
          }`}
        >
          Book Appointment
        </Link>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${logoColor}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-line px-6 py-6 flex flex-col gap-6 text-xs font-semibold tracking-[0.15em] uppercase text-med-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}