"use client";
import { useState } from "react";
import Placeholder from "./Placeholder";

export interface GalleryItem {
  id: string;
  category: string;
  caption: string;
  aspect?: "video" | "square" | "wide" | "tall";
  src?: string; // optional real image path
  alt?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  dark?: boolean;
  accent: string;
  onItemClick: (index: number) => void;
}

export default function GalleryGrid({
  items,
  dark = false,
  accent,
  onItemClick,
}: GalleryGridProps) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All" ? items : items.filter((i) => i.category === filter);

  const line = dark ? "#2A3A52" : "#E2E8F0";
  const muted = dark ? "#A8B2C1" : "#8895A4";
  const ink = dark ? "#F5F1E8" : "#1A1A1A";

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase border transition-colors"
              style={{
                borderColor: active ? accent : line,
                backgroundColor: active ? accent : "transparent",
                color: active ? (dark ? "#0F1B2D" : "#FFFFFF") : muted,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              const realIndex = items.findIndex((i) => i.id === item.id);
              onItemClick(realIndex);
            }}
            className="group text-left cursor-pointer"
            aria-label={`Open ${item.caption}`}
          >
            {item.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.alt ?? item.caption}
                loading="lazy"
                className="w-full aspect-video object-cover rounded-sm group-hover:opacity-90 transition-opacity"
              />
            ) : (
              <Placeholder
                label={item.caption}
                aspect={item.aspect ?? "video"}
                dark={dark}
              />
            )}
            <div className="mt-3">
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-1"
                style={{ color: accent }}
              >
                {item.category}
              </p>
              <p className="text-sm" style={{ color: ink }}>
                {item.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-center py-16" style={{ color: muted }}>
          No images in this category yet.
        </p>
      )}
    </div>
  );
}