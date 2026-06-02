"use client";

import Image from "next/image";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const VISION_IMAGES = [
  { src: "/images/vision/vision-a.png", left: "15.16%", top: "17.96%", width: "16.56%", height: "34.93%", fit: "object-cover" },
  { src: "/images/vision/vision-b.png", left: "21.77%", top: "49.19%", width: "19.01%", height: "40.07%", fit: "object-cover" },
  { src: "/images/vision/vision-c.png", left: "65.89%", top: "6.95%", width: "19.01%", height: "40.07%", fit: "object-cover" },
  { src: "/images/vision/vision-d.png", left: "45.05%", top: "42.33%", width: "24.06%", height: "50.72%", fit: "object-cover" },
] as const;

const HeadingCopy = () => (
  <>
    <span>次世代の</span>
    <span className="text-[#54c2dc]">HERO</span>
    <span>を</span>
    <br />
    <span className="text-[#54c2dc]">100</span>
    <span>人創出する</span>
  </>
);

const MoreButton = () => (
  <a
    href="#about"
    className="inline-flex items-center gap-2 h-[54px] px-10 rounded-[30px] bg-[#262626] text-white text-[18px] md:text-[20px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
  >
    もっと見る
    <svg width="22" height="14" viewBox="0 0 22 14" className="ml-1">
      <path d="M0 7h20M13 1l7 6-7 6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  </a>
);

export function VisionSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} id="vision" className="bg-white overflow-hidden relative">
      {/* ===== デスクトップ（Figma 1920×1108 を等比スケール） ===== */}
      <div
        className={`hidden lg:block w-full max-w-[1920px] mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ScaledStage width={1920} height={1108}>
          {VISION_IMAGES.map((img) => (
            <div
              key={img.src}
              className="absolute overflow-hidden rounded-[16px] shadow-[6px_7px_18.6px_0px_rgba(0,0,0,0.1)]"
              style={{ left: img.left, top: img.top, width: img.width, height: img.height }}
            >
              <Image src={img.src} alt="" fill className={img.fit} sizes="25vw" />
            </div>
          ))}

          <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: "11.64%" }}>
            <h2 className="text-[64px] font-bold text-[#333] leading-[normal] whitespace-nowrap">
              <HeadingCopy />
            </h2>
            <div className="mt-6">
              <MoreButton />
            </div>
          </div>
        </ScaledStage>
      </div>

      {/* ===== モバイル / タブレット ===== */}
      <div
        className={`lg:hidden px-6 py-16 md:px-10 md:py-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-[30px] font-bold leading-[1.4] text-[#333] sm:text-[40px] md:text-[48px]">
          <HeadingCopy />
        </h2>

        {/* 画像コラージュ（左列を少し下げてスタッガード） */}
        <div className="mx-auto mt-10 flex max-w-[600px] justify-center gap-4 md:max-w-[760px] md:gap-6">
          <div className="flex w-1/2 flex-col gap-4 pt-10 md:gap-6 md:pt-14">
            <VisionPhoto src="/images/vision/vision-a.png" ratio="4/5" />
            <VisionPhoto src="/images/vision/vision-b.png" ratio="5/6" />
          </div>
          <div className="flex w-1/2 flex-col gap-4 md:gap-6">
            <VisionPhoto src="/images/vision/vision-c.png" ratio="5/6" />
            <VisionPhoto src="/images/vision/vision-d.png" ratio="4/5" />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <MoreButton />
        </div>
      </div>
    </section>
  );
}

function VisionPhoto({ src, ratio }: { src: string; ratio: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-[16px] shadow-[4px_5px_14px_0px_rgba(0,0,0,0.12)]"
      style={{ aspectRatio: ratio }}
    >
      <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 45vw, 360px" />
    </div>
  );
}
