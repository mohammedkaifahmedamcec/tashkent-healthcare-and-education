const programs = [
  { title: "B.Sc. Nursing", duration: "4 Years", eligibility: "12th with PCB (min 50%)", seats: 60, highlight: true, desc: "Full-time degree programme with hospital immersion at Tashkent Hospital." },
  { title: "GNM", duration: "3 Years", eligibility: "12th with PCB (min 40%)", seats: 40, highlight: false, desc: "Diploma programme focused on bedside care and midwifery practice." },
  { title: "M.Sc. Nursing", duration: "2 Years", eligibility: "B.Sc. Nursing + 1 yr exp", seats: 20, highlight: false, desc: "Postgraduate programme with 5 specialisations available." },
];

export default function ProgramsGrid() {
  return (
    <section id="programs" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="text-[#F4A261] text-xs font-semibold tracking-widest">OUR PROGRAMS</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[Sora] text-slate-900">Choose your nursing path</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.title} className={`rounded-2xl p-8 border-2 transition-all ${p.highlight ? "bg-[#F4A261]/10 border-[#F4A261] shadow-md" : "bg-white border-slate-100"}`}>
            {p.highlight && <span className="inline-block text-[10px] font-semibold tracking-widest bg-[#F4A261] text-white px-2 py-0.5 rounded mb-3">MOST POPULAR</span>}
            <h3 className="text-xl font-bold font-[Sora] text-slate-900">{p.title}</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-slate-500">Duration</dt><dd className="font-medium text-slate-900">{p.duration}</dd></div>
              <div className="flex justify-between"><dt className="text-slate-500">Eligibility</dt><dd className="font-medium text-slate-900 text-right">{p.eligibility}</dd></div>
              <div className="flex justify-between"><dt className="text-slate-500">Seats</dt><dd className="font-medium text-slate-900">{p.seats}</dd></div>
            </dl>
            <a href="#apply" className="mt-6 inline-flex w-full justify-center items-center px-4 py-2.5 rounded-full bg-[#7A4A1E] text-white text-sm font-medium hover:bg-[#5E3714] transition">Apply Now →</a>
          </div>
        ))}
      </div>
    </section>
  );
}