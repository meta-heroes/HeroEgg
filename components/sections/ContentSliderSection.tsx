"use client";

import Image from "next/image";
import { CONTENT_SLIDES } from "@/lib/constants";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useAutoSlide } from "@/hooks/useAutoSlide";

export function ContentSliderSection() {
  const { currentIndex, goTo, pause, resume } = useAutoSlide(CONTENT_SLIDES.length, 3000);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div
        className="relative"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div className="overflow-hidden px-6">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex} * (min(437px, 80vw) + 24px)))`,
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
