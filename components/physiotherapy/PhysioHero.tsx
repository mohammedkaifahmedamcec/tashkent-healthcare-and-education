export default function PhysioHero() {
  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] to-[#8ECAE6] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-widest mb-6">
          TASHKENT PHYSIOTHERAPY
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-[Sora] max-w-2xl leading-tight">
          Restore movement. Rebuild lives.
        </h1>
        <p className="mt-6 text-white/85 text-lg max-w-xl leading-relaxed">
          BPT & MPT programmes with advanced clinical training and hospital
          immersion at Tashkent Hospital.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#enquire" className="px-6 py-3 rounded-full bg-white text-[#1E3A8A] font-semibold text-sm hover:bg-slate-100 transition">
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}