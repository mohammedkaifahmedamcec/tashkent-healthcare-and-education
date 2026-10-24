interface PlaceholderProps {
  label: string;
  aspect?: "video" | "square" | "wide" | "tall";
  dark?: boolean;
  className?: string;
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  tall: "aspect-[3/4]",
};

export default function Placeholder({
  label,
  aspect = "video",
  dark = false,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`relative w-full ${aspectMap[aspect]} rounded-sm overflow-hidden border ${
        dark
          ? "bg-[#16253D] border-[#2A3A52] text-[#A8B2C1]"
          : "bg-[#F0F2F5] border-[#E2E8F0] text-[#8895A4]"
      } ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
          Image placeholder
        </span>
        <span className="text-xs max-w-xs leading-relaxed">{label}</span>
      </div>
    </div>
  );
}