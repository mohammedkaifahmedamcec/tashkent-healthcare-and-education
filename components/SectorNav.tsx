"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SectorNavProps {
  base: string;
  links: { label: string; href: string }[];
  accent: string;
  ink: string;
  muted: string;
  line: string;
  baseBg: string;
}

export default function SectorNav({
  base,
  links,
  accent,
  ink,
  muted,
  line,
  baseBg,
}: SectorNavProps) {
  const pathname = usePathname();

  return (
    <div
      className="sticky top-20 z-40 border-b"
      style={{ backgroundColor: baseBg, borderColor: line }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex gap-8 overflow-x-auto">
          {links.map((l) => {
            const isActive =
              l.href === base
                ? pathname === base
                : pathname.startsWith(l.href);
            return (
              <li key={l.href} className="shrink-0">
                <Link
                  href={l.href}
                  className="block py-4 text-xs tracking-[0.15em] uppercase border-b-2 transition-colors"
                  style={{
                    color: isActive ? ink : muted,
                    borderColor: isActive ? accent : "transparent",
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}