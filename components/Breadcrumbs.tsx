import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  dark = false,
}: {
  items: Crumb[];
  dark?: boolean;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-[11px] tracking-[0.15em] uppercase ${
        dark ? "text-[#A8B2C1]" : "text-[#8895A4]"
      }`}
    >
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? (
              <Link
                href={c.href}
                className="hover:underline underline-offset-4 transition-colors"
              >
                {c.label}
              </Link>
            ) : (
              <span className={dark ? "text-[#F5F1E8]" : "text-[#1A1A1A]"}>
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}