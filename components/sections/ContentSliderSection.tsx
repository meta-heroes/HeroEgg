"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CONTENT_SLIDES } from "@/lib/constants";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useAutoSlide } from "@/hooks/useAutoSlide";

export function ContentSliderSection() {
  const { currentIndex, next, prev, goTo, pause, resume } = useAutoSlide(
    CONTENT_SLIDES.length,
    3000,
  );

  // 指でのスワイプ操作（モバイル）。ドラッグ中は指に追従し、離した時に閾値で切替。
  // 判定は ref（同期更新）で行い、state は表示の追従用にのみ使う。
  const touchStartX = useRef<number | null>(null);
  const dragX = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = dragOffset !== 0;

  const onTouchStart = (e: React.TouchEvent) => {
    pause();
    touchStartX.current = e.touches[0].clientX;
    dragX.current = 0;
    setDragOffset(0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const d = e.touches[0].clientX - touchStartX.current;
    dragX.current = d;
    setDragOffset(d);
  };
  const onTouchEnd = () => {
    const SWIPE_THRESHOLD = 50;
    if (dragX.current <= -SWIPE_THRESHOLD && currentIndex < CONTENT_SLIDES.length - 1) {
      next();
    } else if (dragX.current >= SWIPE_THRESHOLD && currentIndex > 0) {
      prev();
    }
    touchStartX.current = null;
    dragX.current = 0;
    setDragOffset(0);
    resume();
  };

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div
        className="relative"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          className="overflow-hidden px-6 touch-pan-y select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`flex gap-6 ${isDragging ? "" : "transition-transform duration-500 ease-in-out"}`}
            style={{
              transform: `translateX(calc(-${currentIndex} * (min(437px, 80vw) + 24px) + ${dragOffset}px))`,
            }}
          >
            {CONTENT_SLIDES.map((slide) => (
              <div
                key={slide.number}
                className="flex-shrink-0 w-[min(437px,80vw)] border-3 border-egg-blue rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  {slide.image ? (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <ImagePlaceholder className="w-full h-full rounded-lg" />
                  )}
                </div>
                <p className="text-egg-blue text-2xl font-bold">{slide.number}</p>
                <h3 className="text-2xl font-bold text-egg-dark mt-1">
                  {slide.title}
                </h3>
                <p className="text-lg font-bold text-egg-dark mt-1">
                  {slide.subtitle}
                </p>
                <div className="flex justify-end mt-2">
                  <svg width="29" height="14" viewBox="0 0 29 14" className="text-egg-dark group-hover:translate-x-1 transition-transform">
                    <path d="M0 7h27M20 1l7 6-7 6" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {CONTENT_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-egg-blue scale-125"
                  : "bg-egg-gray-light hover:bg-egg-gray"
              }`}
              aria-label={`スライド ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
