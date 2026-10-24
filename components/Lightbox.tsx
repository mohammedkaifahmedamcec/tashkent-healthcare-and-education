"use client";
import { useEffect } from "react";
import Placeholder from "./Placeholder";
import type { GalleryItem } from "./GalleryGrid";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  dark?: boolean;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
  dark = false,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onNavigate((currentIndex + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    document.addEventListener("keydown", handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null) return null;
  const item = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none"
      >
        ‹
      </button>

      {/* Image */}
      <div
        className="max-w-5xl w-full px-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full">
          {item.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.alt ?? item.caption}
              className="w-full max-h-[75vh] object-contain"
            />
          ) : (
            <Placeholder
              label={item.caption}
              aspect={item.aspect ?? "video"}
              dark={dark}
            />
          )}
        </div>
        <div className="mt-6 text-center text-white/80 max-w-xl">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A961] mb-2">
            {item.category}
          </p>
          <p className="text-sm">{item.caption}</p>
          <p className="mt-3 text-xs text-white/40">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        aria-label="Next image"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none"
      >
        ›
      </button>
    </div>
  );
}