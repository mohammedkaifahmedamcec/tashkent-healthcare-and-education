const properties = [
  { title: "Tashkent Heights", type: "Residential Apartments", price: "Starting ₹45L", status: "Ready to Move", icon: "🏢" },
  { title: "Tashkent Business Park", type: "Commercial Offices", price: "Starting ₹1.2Cr", status: "Under Construction", icon: "🏙️" },
  { title: "Tashkent Greens", type: "Luxury Villas", price: "Starting ₹2.5Cr", status: "New Launch", icon: "🏡" },
];

export default function ListingsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="text-[#2A9D8F] text-xs font-semibold tracking-widest">OUR PROJECTS</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[Sora] text-slate-900">Explore Tashkent Realty</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p.title} className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-lg transition group cursor-pointer">
            <div className="h-48 bg-slate-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
              {p.icon}
            </div>
            <div className="p-6">
              <p className="text-[10px] font-bold tracking-widest text-[#2A9D8F] mb-2">{p.status}</p>
              <h3 className="text-xl font-bold font-[Sora] text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{p.type}</p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <p className="font-semibold text-slate-900">{p.price}</p>
                <span className="text-sm font-medium text-[#2A9D8F]">View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}