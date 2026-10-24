import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "About Us | Tashkent Healthcare & Education",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-6">
            About the Organization
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-med-navy leading-[1.1]">
            One family.<br />A legacy of trust.
          </h1>
          <p className="mt-8 text-lg text-med-muted leading-relaxed max-w-2xl mx-auto">
            Tashkent Healthcare & Education represents a unified vision across
            four distinct sectors. From clinical care and nursing education to
            physiotherapy and real estate, our divisions operate independently
            while sharing a single commitment to quality and community.
          </p>
        </section>

        <section className="bg-med-bg border-y border-line py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-med-navy mb-4">Our Vision</h2>
              <p className="font-serif text-2xl text-med-navy leading-snug">
                To build a lasting ecosystem of care, education, and property that serves generations.
              </p>
              <p className="mt-4 text-sm text-med-muted leading-relaxed">
                We aim to create institutions that people trust not just for what they provide, but for how they provide it — with integrity, transparency, and long-term thinking.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-med-navy mb-4">Our Mission</h2>
              <p className="font-serif text-2xl text-med-navy leading-snug">
                To deliver professional excellence and ethical service across healthcare, education, and real estate.
              </p>
              <p className="mt-4 text-sm text-med-muted leading-relaxed">
                Our mission is to give each of our sectors the resources, standards, and independence to be the best in their field, while ensuring the Tashkent name remains synonymous with reliability.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-med-navy mb-10 text-center">Our Divisions</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="border-t border-line pt-6">
              <Link href="/hospital" className="group">
                <h3 className="font-serif text-2xl text-med-navy group-hover:text-med-teal transition-colors">Hospital</h3>
                <p className="mt-2 text-sm text-med-muted">Multispecialty clinical care and patient-focused services.</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase text-med-teal">Learn More →</span>
              </Link>
            </div>
            <div className="border-t border-line pt-6">
              <Link href="/nursing" className="group">
                <h3 className="font-serif text-2xl text-med-navy group-hover:text-med-teal transition-colors">Nursing College</h3>
                <p className="mt-2 text-sm text-med-muted">B.Sc. Nursing education with practical clinical training.</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase text-med-teal">Learn More →</span>
              </Link>
            </div>
            <div className="border-t border-line pt-6">
              <Link href="/physiotherapy" className="group">
                <h3 className="font-serif text-2xl text-med-navy group-hover:text-med-teal transition-colors">Physiotherapy</h3>
                <p className="mt-2 text-sm text-med-muted">Physiotherapy education and rehabilitation services.</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase text-med-teal">Learn More →</span>
              </Link>
            </div>
            <div className="border-t border-line pt-6">
              <Link href="/real-estate" className="group">
                <h3 className="font-serif text-2xl text-med-navy group-hover:text-med-teal transition-colors">Real Estate</h3>
                <p className="mt-2 text-sm text-med-muted">Residential and commercial property services.</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase text-med-teal">Learn More →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-med-navy py-20 text-white text-center px-6">
          <h2 className="font-serif text-3xl mb-4">Core Values</h2>
          <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-med-teal mb-2">01</p>
              <h3 className="font-semibold mb-1">Integrity</h3>
              <p className="text-sm text-white/70">We do what we say. We build trust through transparency in all dealings.</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-med-teal mb-2">02</p>
              <h3 className="font-semibold mb-1">Care</h3>
              <p className="text-sm text-white/70">Whether treating a patient or advising a buyer, we prioritize the human element.</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-med-teal mb-2">03</p>
              <h3 className="font-semibold mb-1">Excellence</h3>
              <p className="text-sm text-white/70">We hold our institutions to high standards, continuously improving what we offer.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}