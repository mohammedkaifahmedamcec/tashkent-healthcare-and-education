import Breadcrumbs, { Crumb } from "./Breadcrumbs";

interface SectorHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  base: string;
  ink: string;
  muted: string;
  accent: string;
  dark?: boolean;
}

export default function SectorHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  base,
  ink,
  muted,
  accent,
  dark = false,
}: SectorHeroProps) {
  return (
    <section
      className="border-b"
      style={{
        backgroundColor: base,
        color: ink,
        borderColor: dark ? "#2A3A52" : "#E2E8F0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        {breadcrumbs && (
          <div className="mb-10">
            <Breadcrumbs items={breadcrumbs} dark={dark} />
          </div>
        )}
        <p
          className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-6"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl"
          style={{ color: ink }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-8 text-lg max-w-2xl leading-relaxed"
            style={{ color: muted }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}