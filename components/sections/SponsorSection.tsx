"use client";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const sponsors = Array.from({ length: 5 }, (_, i) => i);

export function SponsorSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className={`bg-[#fed649] overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* デスクトップ: Figma準拠 */}
      <div
        className="relative w-full max-w-[1920px] mx-auto hidden md:block"
        style={{ aspectRatio: "1920 / 372" }}
      >
        <p className="absolute left-1/2 -translate-x-1/2 font-bold text-[36px] text-[#333] text-center leading-[normal] whitespace-nowrap"
          style={{ top: "15.86%" }}>
          スポンサー企業
        </p>

        {/* ロゴ5枚: 均等配置 */}
        {sponsors.map((i) => {
          const positions = [2.08, 21.77, 41.41, 61.09, 80.78];
          return (
            <div
              key={i}
              className="absolute rounded-[9px] shadow-[0px_0px_12.9px_-2px_rgba(0,0,0,0.25)] overflow-hidden"
              style={{
                left: `${positions[i]}%`,
                top: "41.13%",
                width: "17.08%",
                height: "37.63%",
              }}
            >
              <ImagePlaceholder className="w-full h-full" />
            </div>
          );
        })}
      </div>

      {/* モバイル */}
      <div className="md:hidden px-6 py-10">
        <h2 className="font-bold text-[28px] text-[#333] text-center mb-6">
          スポンサー企業
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {sponsors.map((i) => (
            <div
              key={i}
              className="rounded-[9px] shadow-[0px_0px_12.9px_-2px_rgba(0,0,0,0.25)] overflow-hidden aspect-[328/140]"
            >
              <ImagePlaceholder className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
