import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Tashkent Healthcare & Education",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-med-bg min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-med-teal font-semibold tracking-[0.2em] uppercase text-xs mb-4">Get in Touch</p>
            <h1 className="font-serif text-5xl text-med-navy leading-tight">We're here to help.</h1>
            <p className="mt-6 text-med-muted leading-relaxed">
              Whether you have a question for our hospital, nursing college, physiotherapy division, or real estate team, please reach out. Our appropriate division will get back to you within one business day.
            </p>
            <div className="mt-12 space-y-8 border-t border-line pt-8">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-med-navy mb-1">Email</p>
                <p className="text-sm text-med-muted">contact@tashkentgroup.com</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-med-navy mb-1">Phone</p>
                <p className="text-sm text-med-muted">+91 12345 67890</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-med-navy mb-1">Address</p>
                <p className="text-sm text-med-muted">Head Office Address — Placeholder<br />City, State, PIN</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-line p-8 md:p-10 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}