"use client";

import Image from "next/image";
import { EVENT_IMAGES, LINE_URL } from "@/lib/constants";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { useAutoSlide } from "@/hooks/useAutoSlide";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function EventSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { currentIndex, goTo, pause, resume } = useAutoSlide(EVENT_IMAGES.length, 4000);

  return (
    <section ref={ref} id="event" className="bg-white overflow-hidden relative">
      {/* デスクトップ: Figma準拠の絶対配置 */}
      <div
        className={`w-full max-w-[1920px] mx-auto hidden lg:block transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <ScaledStage width={1920} height={1158}>
        {/* 赤ボーダー枠 */}
        <div
          className="absolute border-[7px] border-[#ec7072] rounded-[60px]"
          style={{
            left: "18.59%",
            top: "7.43%",
            width: "62.86%",
            height: "85.15%",
          }}
        />

        {/* 画像エリア */}
        <div
          className="absolute rounded-[21px] overflow-hidden"
          style={{
            left: "43.33%",
            top: "13.04%",
            width: "33.54%",
            height: "65.72%",
          }}
        >
          {EVENT_IMAGES.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              sizes="34vw"
              className={`object-cover transition-opacity duration-700 ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
        </div>

        {/* Event テキスト */}
        <p
          className="absolute font-bold text-[80px] text-[#ec7072] leading-[normal]"
          style={{ left: "23.18%", top: "13.04%" }}
        >
          Event
        </p>

        {/* イベント案内 */}
        <p
          className="absolute font-bold text-[36px] text-[#333] leading-[normal]"
          style={{ left: "23.18%", top: "22.19%" }}
        >
          イベント案内
        </p>

        {/* 説明文 */}
        <div
          className="absolute text-[24px] text-[#333] leading-[2]"
          style={{ left: "23.18%", top: "28.93%", width: "14.74%" }}
        >
          <p>毎週、様々なイベントを</p>
          <p>開催しています。</p>
          <p>共催での開催も承っておりますので、お気軽にご相談ください。</p>
        </div>

        {/* ボタン: イベントラインナップ */}
        <a
          href="#event-list"
          className="absolute flex items-center gap-2 rounded-[30px] bg-[#333] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
          style={{
            left: "23.18%",
            top: "57.17%",
            width: "16.65%",
            height: "5.27%",
          }}
        >
          <span className="font-bold text-[18px] text-white ml-6">
            イベントラインナップ
          </span>
          <svg width="33" height="14" viewBox="0 0 33 14" className="ml-auto mr-5">
            <path d="M0 7h31M24 1l7 6-7 6" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </a>

        {/* ボタン: LINEで最新情報GET */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute flex items-center gap-2 rounded-[51px] bg-[#06c755] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
          style={{
            left: "23.18%",
            top: "65.46%",
            width: "16.65%",
            height: "5.07%",
          }}
        >
          <Image
            src="/images/icons/line-brand.png"
            alt=""
            width={49}
            height={49}
            className="rounded-[51px] ml-3"
          />
          <span className="font-bold text-[18px] text-white">
            LINEで最新情報GET
          </span>
        </a>

        {/* ボタン: 共催イベントのご相談 */}
        <a
          href="#contact"
          className="absolute flex items-center gap-2 rounded-[30px] bg-[#fed649] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
          style={{
            left: "23.18%",
            top: "73.49%",
            width: "16.65%",
            height: "5.27%",
          }}
        >
          <svg width="45" height="43" viewBox="0 0 45 43" className="ml-4" fill="none">
            <rect x="4" y="8" width="37" height="27" rx="4" stroke="#333" strokeWidth="2.5" />
            <path d="M4 16l18.5 12L41 16" stroke="#333" strokeWidth="2.5" />
          </svg>
          <span className="font-bold text-[18px] text-[#333]">
            共催イベントのご相談
          </span>
        </a>

        {/* スライドドット */}
        <div
          className="absolute flex items-center gap-[7px]"
          style={{ left: "55.89%", top: "83.0%" }}
        >
          {EVENT_IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => goTo(i)}
              className={`w-[18px] h-[19px] rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex ? "bg-[#ec7072] scale-110" : "bg-[#ec7072]/30"
              }`}
              aria-label={`イベント画像 ${i + 1}`}
            />
          ))}
        </div>
        </ScaledStage>
      </div>

      {/* モバイル用 */}
      <div className={`lg:hidden px-6 py-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="border-[5px] border-[#ec7072] rounded-[30px] p-6 md:p-10">
          <p className="font-bold text-[48px] text-[#ec7072] leading-[normal] mb-2">
            Event
          </p>
          <p className="font-bold text-[28px] text-[#333] leading-[normal] mb-4">
            イベント案内
          </p>

          <div className="relative rounded-[21px] overflow-hidden mb-4 aspect-[644/761]">
            {EVENT_IMAGES.map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            {EVENT_IMAGES.map((img, i) => (
              <button
                key={img.src}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? "bg-[#ec7072]" : "bg-[#ec7072]/30"
                }`}
                aria-label={`イベント画像 ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-[18px] text-[#333] leading-[2] mb-6">
            <p>毎週、様々なイベントを開催しています。</p>
            <p>共催での開催も承っておりますので、お気軽にご相談ください。</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#event-list"
              className="flex items-center justify-center gap-2 h-[54px] rounded-[30px] bg-[#333] text-white text-[16px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
            >
              イベントラインナップ
              <svg width="22" height="14" viewBox="0 0 22 14">
                <path d="M0 7h20M13 1l7 6-7 6" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-[54px] rounded-[51px] bg-[#06c755] text-white text-[16px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
            >
              <Image src="/images/icons/line-brand.png" alt="" width={36} height={36} className="rounded-full" />
              LINEで最新情報GET
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 h-[54px] rounded-[30px] bg-[#fed649] text-[#333] text-[16px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
            >
              共催イベントのご相談
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
