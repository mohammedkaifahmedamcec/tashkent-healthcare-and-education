import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-med-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="lg:col-span-1">
          <p className="font-serif text-3xl text-white">Tashkent<span className="text-med-teal">.</span></p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-med-muted mt-3">
            Healthcare & Education
          </p>
          <p className="text-sm text-med-muted mt-6 leading-relaxed max-w-xs">
            One vision. Four pathways to a better future. Delivering excellence in healthcare, education, and real estate.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Divisions</p>
          <ul className="space-y-3 text-sm text-med-muted">
            <li><Link href="/hospital" className="hover:text-med-teal transition-colors">Multispecialty Hospital</Link></li>
            <li><Link href="/nursing" className="hover:text-med-teal transition-colors">Nursing College</Link></li>
            <li><Link href="/physiotherapy" className="hover:text-med-teal transition-colors">Physiotherapy</Link></li>
            <li><Link href="/real-estate" className="hover:text-med-teal transition-colors">Real Estate</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Company</p>
          <ul className="space-y-3 text-sm text-med-muted">
            <li><Link href="/about" className="hover:text-med-teal transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-med-teal transition-colors">Contact Us</Link></li>
            <li><Link href="/contact" className="hover:text-med-teal transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Get in Touch</p>
          <ul className="space-y-3 text-sm text-med-muted">
            <li>+91 12345 67890</li>
            <li>contact@tashkentgroup.com</li>
            <li className="pt-4 text-xs">Mon–Sat, 8:00 AM – 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-med-muted">
        <p>© {new Date().getFullYear()} Tashkent Group. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}