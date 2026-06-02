"use client";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { InfiniteScroller } from "@/components/ui/InfiniteScroller";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const supporters = Array.from({ length: 7 }, (_, i) => i);

export function SupporterSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className={`bg-white overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* デスクトップ */}
      <div
        className="relative w-full max-w-[1920px] mx-auto hidden md:block"
        style={{ aspectRatio: "1920 / 372" }}
      >
        <p className="absolute left-1/2 -translate-x-1/2 font-bold text-[36px] text-[#333] text-center leading-[normal] whitespace-nowrap"
          style={{ top: "15.86%" }}>
          サポーター企業
        </p>

        {/* ロゴ: 画面端からはみ出す無限スクロール */}
        <div className="absolute left-0 right-0" style={{ top: "43.01%" }}>
          <InfiniteScroller speed={35}>
            {supporters.map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[225px] h-[96px] rounded-[9px] shadow-[0px_0px_12.9px_-2px_rgba(0,0,0,0.25)] overflow-hidden"
              >
                <ImagePlaceholder className="w-full h-full" />
              </div>
            ))}
          </InfiniteScroller>
        </div>
      </div>

      {/* モバイル */}
      <div className="md:hidden px-6 py-10">
        <h2 className="font-bold text-[28px] text-[#333] text-center mb-6">
          サポーター企業
        </h2>
        <InfiniteScroller speed={25}>
          {supporters.map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[160px] h-[68px] rounded-[9px] shadow-[0px_0px_12.9px_-2px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <ImagePlaceholder className="w-full h-full" />
            </div>
          ))}
        </InfiniteScroller>
      </div>
    </section>
  );
}
