const departments = [
  { name: "Cardiology", icon: "❤️", desc: "Heart & vascular care" },
  { name: "Orthopaedics", icon: "🦴", desc: "Bones, joints & sports injuries" },
  { name: "Paediatrics", icon: "👶", desc: "Child health & vaccination" },
  { name: "Neurology", icon: "🧠", desc: "Brain, spine & nerves" },
  { name: "Oncology", icon: "🎗️", desc: "Cancer diagnosis & treatment" },
  { name: "Gynaecology", icon: "🌸", desc: "Women's health & maternity" },
  { name: "Dermatology", icon: "✨", desc: "Skin, hair & nails" },
  { name: "General Medicine", icon: "🩺", desc: "Primary & preventive care" },
];

export default function DepartmentsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="text-[#01BAEF] text-xs font-semibold tracking-widest">
          OUR DEPARTMENTS
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[Sora] text-slate-900">
          Specialties we care for
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto">
          Comprehensive care across 30+ medical specialties.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {departments.map((d) => (
          <div
            key={d.name}
            className="group rounded-2xl bg-white p-6 border border-slate-100 hover:border-[#01BAEF]/40 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#01BAEF]/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              {d.icon}
            </div>
            <h3 className="font-semibold text-slate-900">{d.name}</h3>
            <p className="text-sm text-slate-600 mt-1">{d.desc}</p>
            <span className="mt-4 inline-block text-xs font-medium text-[#01BAEF]">
              Learn more →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}