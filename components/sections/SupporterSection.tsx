"use client";

import { InfiniteScroller } from "@/components/ui/InfiniteScroller";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/** サポーター企業ロゴ（public/images/supporters）。 */
const SUPPORTER_LOGOS = [
  { src: "/images/supporters/KoMAXGroup.png", alt: "KoMAX Group" },
  { src: "/images/supporters/Seiju.png", alt: "Seiju 国際知財事務所" },
  { src: "/images/supporters/genie-kikaku.png", alt: "ジーニー企画" },
  { src: "/images/supporters/mikini.jpg", alt: "海鮮ダイニング 美喜仁館" },
];

// ロゴが少なく画面幅を埋めきれないと無限ループに隙間が出るため、
// セットを繰り返して帯を満たす（InfiniteScroller がさらに全体を複製する）。
const LOOP_LOGOS = [...SUPPORTER_LOGOS, ...SUPPORTER_LOGOS];

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
            {LOOP_LOGOS.map((logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="flex-shrink-0 w-[225px] h-[96px] flex items-center justify-center bg-white rounded-[9px] shadow-[0px_0px_12.9px_-2px_rgba(0,0,0,0.25)] p-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
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
          {LOOP_LOGOS.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 w-[160px] h-[68px] flex items-center justify-center bg-white rounded-[9px] shadow-[0px_0px_12.9px_-2px_rgba(0,0,0,0.25)] p-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </InfiniteScroller>
      </div>
    </section>
  );
}
