export type SectorKey = "hospital" | "nursing" | "physiotherapy" | "real-estate";

export interface SectorTheme {
  name: string;
  base: string;        // page background
  surface: string;     // card / panel surface
  ink: string;         // primary text
  muted: string;       // secondary text
  line: string;        // dividers
  accent: string;      // CTA / highlight
  accentHover: string;
  onAccent: string;    // text on accent buttons
}

export const sectorThemes: Record<SectorKey, SectorTheme> = {
  hospital: {
    name: "Hospital",
    base: "#F8FAFC",
    surface: "#FFFFFF",
    ink: "#0B2545",
    muted: "#5B6B7E",
    line: "#E2E8F0",
    accent: "#0B4F6C",
    accentHover: "#093D54",
    onAccent: "#FFFFFF",
  },
  nursing: {
    name: "Nursing College",
    base: "#FFFFFF",
    surface: "#F8FAFC",
    ink: "#102A43",
    muted: "#5B6B7E",
    line: "#E2E8F0",
    accent: "#1E3A5F",
    accentHover: "#152A47",
    onAccent: "#FFFFFF",
  },
  physiotherapy: {
    name: "Physiotherapy",
    base: "#FFFFFF",
    surface: "#F0F9FF",
    ink: "#1E3A8A",
    muted: "#52627A",
    line: "#DBEAFE",
    accent: "#1E3A8A",
    accentHover: "#172E6E",
    onAccent: "#FFFFFF",
  },
  "real-estate": {
    name: "Real Estate",
    base: "#0F1B2D",
    surface: "#16253D",
    ink: "#F5F1E8",
    muted: "#A8B2C1",
    line: "#2A3A52",
    accent: "#C9A961",
    accentHover: "#B89650",
    onAccent: "#0F1B2D",
  },
};