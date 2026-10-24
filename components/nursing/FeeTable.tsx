const fees = [
  { program: "B.Sc. Nursing", tuition: "₹75,000", hostel: "₹45,000", total: "₹1,20,000" },
  { program: "GNM", tuition: "₹55,000", hostel: "₹45,000", total: "₹1,00,000" },
  { program: "M.Sc. Nursing", tuition: "₹90,000", hostel: "₹45,000", total: "₹1,35,000" },
];

export default function FeeTable() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#F4A261] text-xs font-semibold tracking-widest">FEE STRUCTURE</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[Sora] text-slate-900">Transparent fees</h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-[#7A4A1E] text-white">
              <tr>
                <th className="text-left px-6 py-4 font-semibold">Program</th>
                <th className="text-right px-6 py-4 font-semibold">Tuition</th>
                <th className="text-right px-6 py-4 font-semibold">Hostel</th>
                <th className="text-right px-6 py-4 font-semibold">Total / Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {fees.map((f) => (
                <tr key={f.program} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{f.program}</td>
                  <td className="px-6 py-4 text-right text-slate-700">{f.tuition}</td>
                  <td className="px-6 py-4 text-right text-slate-700">{f.hostel}</td>
                  <td className="px-6 py-4 text-right font-semibold text-slate-900">{f.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}