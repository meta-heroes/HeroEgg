"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { Turntable } from "@/components/ui/Turntable";

const SLIDES = [
  { label: ["主催・共催", "イベント開催"], bgColor: "#ffe073", textColor: "#fed649", image: "/images/hero/slide-1.png" },
  { label: ["HEROサロン", "施設スポンサー"], bgColor: "#54c2dc", textColor: "#58c2dc", image: "/images/hero/slide-2.png" },
  { label: ["施設", "利用"], bgColor: "#f6a04d", textColor: "#f6a04d", image: "/images/hero/slide-3.png" },
  { label: ["Hero Egg", "地域展開"], bgColor: "#52bc9a", textColor: "#52bc9a", image: "/images/hero/slide-4.png" },
  { label: ["共創", "プログラム"], bgColor: "#ec7072", textColor: "#ec7072", image: "/images/hero/slide-5.png" },
];

export function FirstViewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);
  const prev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden">
      {/* ===== デスクトップ ===== */}
      <div
        className="hidden lg:block w-full overflow-hidden transition-[background-color] duration-700"
        style={{ backgroundColor: slide.bgColor }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="mx-auto max-w-[1920px]">
          <ScaledStage width={1920} height={1080}>
        {/* 1. スライド画像 (最背面・クロスフェード) */}
        <div
          className="absolute rounded-[30px] shadow-[0px_99px_95.2px_0px_rgba(0,0,0,0.1)] overflow-hidden z-[1]"
          style={{ left: "43.44%", top: "14%", width: "67.92%", height: "74.07%" }}
        >
          {SLIDES.map((s, i) => (
            <Image
              key={s.image}
              src={s.image}
              alt={s.label.join(" ")}
              fill
              sizes="68vw"
              priority={i === 0}
              className={`object-cover transition-opacity duration-700 ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* 2. ターンテーブル */}
        <Turntable
          rotation={currentSlide * -72}
          className="absolute z-[2]"
          style={{
            left: "-30%",
            top: "-5%",
            width: "150%",
          }}
        />

        {/* 3. ドット+矢印 */}
        <button
          onClick={prev}
          className="absolute flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors cursor-pointer z-[3]"
          style={{ left: "25.63%", top: "90.56%", width: "3.96%", height: "7.04%" }}
          aria-label="前へ"
        >
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path d="M10 2L2 12l8 10" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors cursor-pointer z-[3]"
          style={{ left: "70.36%", top: "90.56%", width: "3.96%", height: "7.04%" }}
          aria-label="次へ"
        >
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path d="M2 2l8 10-8 10" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* 4. テキスト */}
        <p
          className="absolute font-bold text-[48px] text-[#333] leading-[normal] whitespace-nowrap z-[4]"
          style={{ left: "6.72%", top: "15.09%" }}
        >
          子どもから大人まで学べる
        </p>
        <p
          className="absolute font-bold text-[96px] text-[#333] leading-none whitespace-nowrap z-[4]"
          style={{ left: "6.72%", top: "22.22%" }}
        >
          DX教育施設
        </p>

        {/* 5. スライドテキスト */}
        <div className="absolute z-[5]" style={{ left: "65.05%", top: "54.63%" }}>
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 font-bold text-[96px] leading-[normal] whitespace-nowrap transition-opacity duration-500"
              style={{
                color: s.textColor,
                opacity: i === currentSlide ? 1 : 0,
                WebkitTextStroke: "10px #fff",
                paintOrder: "stroke",
              }}
            >
              <p>{s.label[0]}</p>
              <p>{s.label[1]}</p>
            </div>
          ))}
        </div>

        {/* 6. 資料請求ボタン */}
        <a
          href="#contact"
          className="absolute flex items-center gap-3 rounded-[47px] bg-[#333] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all z-[6]"
          style={{ left: "6.04%", top: "38.61%", width: "15.68%", height: "7.17%" }}
        >
          <Image src="/images/icons/doc-icon.png" alt="" width={33} height={45} className="h-[40px] w-auto ml-5" />
          <span className="font-bold text-[30px] text-white">資料請求</span>
        </a>

        {/* 7. お問い合わせボタン (最前面) */}
        <a
          href="#contact"
          className="absolute flex items-center gap-3 rounded-[47px] bg-white border-4 border-[#333] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all z-[7]"
          style={{ left: "6.04%", top: "47.50%", width: "15.68%", height: "7.17%" }}
        >
          <svg width="45" height="43" viewBox="0 0 45 43" className="ml-4" fill="none">
            <rect x="4" y="8" width="37" height="27" rx="4" stroke="#333" strokeWidth="2.5" />
            <path d="M4 16l18.5 12L41 16" stroke="#333" strokeWidth="2.5" />
          </svg>
          <span className="font-bold text-[30px] text-[#333]">お問い合わせ</span>
        </a>

        {/* ドット */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[10px] z-[3]"
          style={{ top: "93.24%" }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-[14px] h-[14px] rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide ? "bg-[#333] scale-110" : "bg-[#333]/30"
              }`}
              aria-label={`スライド ${i + 1}`}
            />
          ))}
        </div>
          </ScaledStage>
        </div>
      </div>

      {/* ===== モバイル ===== */}
      <div
        className="lg:hidden pt-24 pb-12 transition-[background-color] duration-700 overflow-hidden"
        style={{ backgroundColor: slide.bgColor }}
      >
        <div className="px-6 mb-6">
          <p className="font-bold text-[28px] text-[#333] leading-[normal] mb-1">
            子どもから大人まで学べる
          </p>
          <h1 className="font-bold text-[48px] text-[#333] leading-none">DX教育施設</h1>
        </div>

        <div className="px-6 flex flex-col gap-3 mb-6">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 h-[56px] rounded-[47px] bg-[#333] text-white text-[20px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
          >
            <Image src="/images/icons/doc-icon.png" alt="" width={24} height={32} />
            資料請求
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 h-[56px] rounded-[47px] bg-white border-3 border-[#333] text-[#333] text-[20px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
          >
            お問い合わせ
          </a>
        </div>

        {/* モバイル版スライド画像 (クロスフェード) */}
        <div className="px-6 mb-4">
          <div className="relative aspect-[1304/800] w-full overflow-hidden rounded-[20px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)]">
            {SLIDES.map((s, i) => (
              <Image
                key={s.image}
                src={s.image}
                alt={s.label.join(" ")}
                fill
                sizes="100vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* モバイル版ターンテーブル — 全体を中央に表示（見切れ防止） */}
        <div className="px-6 mb-2 flex justify-center">
          <Turntable
            rotation={currentSlide * -72}
            className="w-full max-w-[320px]"
          />
        </div>

        {/* スライドテキスト */}
        <div className="px-6 text-center mb-4 h-[80px] relative">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center font-bold text-[28px] leading-[normal] transition-opacity duration-500"
              style={{
                color: s.textColor,
                opacity: i === currentSlide ? 1 : 0,
                WebkitTextStroke: "4px #fff",
                paintOrder: "stroke",
              }}
            >
              <p>{s.label[0]}</p>
              <p>{s.label[1]}</p>
            </div>
          ))}
        </div>

        {/* 矢印 + ドット */}
        <div className="px-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-[44px] h-[44px] rounded-full bg-white/80 flex items-center justify-center cursor-pointer"
            aria-label="前へ"
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M8 2L2 9l6 7" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === currentSlide ? "bg-[#333]" : "bg-[#333]/30"
                }`}
                aria-label={`スライド ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-[44px] h-[44px] rounded-full bg-white/80 flex items-center justify-center cursor-pointer"
            aria-label="次へ"
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M2 2l6 7-6 7" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
