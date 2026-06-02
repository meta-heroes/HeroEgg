"use client";

import { type ReactNode, useRef } from "react";
import { useAutoSlide } from "@/hooks/useAutoSlide";

type CarouselProps = {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  visibleCount?: number;
  gap?: number;
  className?: string;
};

export function Carousel({
  children,
  autoPlay = true,
  interval = 4000,
  showDots = true,
  visibleCount = 1,
  gap = 24,
  className = "",
}: CarouselProps) {
  const totalSlides = children.length;
  const { currentIndex, goTo, pause, resume } = useAutoSlide(
    autoPlay ? totalSlides : 0,
    interval
  );
  const trackRef = useRef<HTMLDivElement>(null);

  const slideWidth = `calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap,
            transform: `translateX(calc(-${currentIndex} * (${slideWidth} + ${gap}px)))`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: slideWidth }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides - (visibleCount - 1) }).map((_, i) => (
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
      )}
    </div>
  );
}
