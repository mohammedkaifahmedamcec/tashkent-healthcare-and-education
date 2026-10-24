const courses = [
  { title: "BPT (Bachelor of Physiotherapy)", duration: "4.5 Years", eligibility: "12th with PCB (min 50%)", desc: "Comprehensive undergraduate programme with 6 months of mandatory clinical internship." },
  { title: "MPT (Master of Physiotherapy)", duration: "2 Years", eligibility: "BPT degree", desc: "Specialisations available in Orthopaedics, Neurology, and Sports Physiotherapy." },
];

export default function CoursesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-[Sora] text-slate-900">Our Programs</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {courses.map((c) => (
          <div key={c.title} className="rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold font-[Sora] text-slate-900">{c.title}</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{c.desc}</p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-slate-500">Duration</dt><dd className="font-medium text-slate-900">{c.duration}</dd></div>
              <div className="flex justify-between"><dt className="text-slate-500">Eligibility</dt><dd className="font-medium text-slate-900 text-right">{c.eligibility}</dd></div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}