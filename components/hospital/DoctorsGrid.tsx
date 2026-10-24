const doctors = [
  { name: "Dr. A. Tashkent", role: "Cardiologist", exp: "20+ yrs", initials: "AT" },
  { name: "Dr. S. Rahman", role: "Orthopaedic Surgeon", exp: "15+ yrs", initials: "SR" },
  { name: "Dr. P. Sharma", role: "Paediatrician", exp: "12+ yrs", initials: "PS" },
  { name: "Dr. M. Khan", role: "Neurologist", exp: "18+ yrs", initials: "MK" },
];

export default function DoctorsGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#01BAEF] text-xs font-semibold tracking-widest">
            OUR CONSULTANTS
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[Sora] text-slate-900">
            Meet our specialists
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#0B4F6C] text-white flex items-center justify-center text-xl font-bold font-[Sora] mx-auto mb-4">
                {doc.initials}
              </div>
              <h3 className="font-semibold text-slate-900">{doc.name}</h3>
              <p className="text-sm text-[#01BAEF] font-medium mt-1">{doc.role}</p>
              <p className="text-xs text-slate-500 mt-1">{doc.exp} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}