"use client";

import Image from "next/image";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";

function AnimatedNumber({ end, start }: { end: number; start: boolean }) {
  const count = useCountUp(end, 2000, start);
  return <>{count}</>;
}

export function TrackRecordSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} id="track-record" className="bg-white overflow-hidden">
      {/* デスクトップ: Figma準拠 */}
      <div
        className={`w-full max-w-[1920px] mx-auto hidden lg:block transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ScaledStage width={1920} height={1024}>
        {/* Track Record */}
        <p
          className="absolute font-bold text-[80px] text-[#54c2dc] leading-[normal]"
          style={{ left: "23.13%", top: "11.33%" }}
        >
          Track Record
        </p>
        <p
          className="absolute font-bold text-[36px] text-[#333] leading-[normal]"
          style={{ left: "23.13%", top: "21.68%" }}
        >
          主な実績
        </p>

        {/* === カード1: イベント総動員数 (青) === */}
        <div
          className="absolute bg-[#54c2dc] rounded-[18px]"
          style={{ left: "23.13%", top: "36.82%", width: "16.98%", height: "46.19%" }}
        >
          {/* アイコン: カード外にはみ出す大きさ */}
          <div className="absolute overflow-hidden rounded-b-[18px]" style={{ left: "0%", top: "21.99%", width: "100%", bottom: "0" }}>
            <div className="absolute opacity-50" style={{ left: "-37.73%", top: "0", width: "149.39%", height: "131.98%" }}>
              <Image src="/images/icons/event-people.png" alt="" fill className="object-cover" />
            </div>
          </div>
          {/* ラベル */}
          <p className="absolute font-bold text-[20px] text-white leading-[1.5]"
            style={{ left: "13.19%", top: "8.25%" }}>
            イベント総動員数
          </p>
          {/* 数字 */}
          <p className="absolute font-bold text-[96px] text-white leading-[1.5]"
            style={{ left: "13.19%", top: "12.90%", width: "86.81%" }}>
            <AnimatedNumber end={22} start={isVisible} />
          </p>
          {/* 単位「万\n人」: 数字の右横 */}
          <div className="absolute font-bold text-[20px] text-white leading-[1.2]"
            style={{ left: "53.68%", top: "26.22%" }}>
            <p>万</p>
            <p>人</p>
          </div>
        </div>

        {/* === カード2: イベント開催数 (赤) === */}
        <div
          className="absolute bg-[#ec7072] rounded-[18px]"
          style={{ left: "41.51%", top: "36.82%", width: "16.98%", height: "46.19%" }}
        >
          {/* アイコン */}
          <div className="absolute overflow-hidden rounded-b-[18px]" style={{ left: "0%", top: "31.29%", width: "100%", bottom: "0" }}>
            <div className="absolute opacity-50" style={{ left: "-24.55%", top: "0", width: "124.55%", height: "126.46%" }}>
              <Image src="/images/icons/event-icon.png" alt="" fill className="object-cover" />
            </div>
          </div>
          {/* ラベル */}
          <p className="absolute font-bold text-[20px] text-white leading-[1.5]"
            style={{ left: "13.19%", top: "8.25%" }}>
            イベント開催数
          </p>
          {/* 数字 */}
          <p className="absolute font-bold text-[96px] text-white leading-[1.5]"
            style={{ left: "13.19%", top: "12.90%", width: "86.81%" }}>
            <AnimatedNumber end={500} start={isVisible} />
          </p>
          {/* 単位「回」 */}
          <div className="absolute font-bold text-[20px] text-white leading-[1.2]"
            style={{ left: "76.69%", top: "26.22%" }}>
            <p>&nbsp;</p>
            <p>回</p>
          </div>
        </div>

        {/* === カード3: 公式LINE登録者数 (緑) === */}
        <div
          className="absolute bg-[#52bc9a] rounded-[18px]"
          style={{ left: "59.90%", top: "36.82%", width: "16.98%", height: "46.19%" }}
        >
          {/* アイコン */}
          <div className="absolute overflow-hidden rounded-b-[18px]" style={{ left: "0%", top: "25.58%", width: "100%", bottom: "0" }}>
            <div className="absolute opacity-50" style={{ left: "-40.84%", top: "0", width: "140.84%", height: "124.43%" }}>
              <Image src="/images/icons/user-icon.png" alt="" fill className="object-cover" />
            </div>
          </div>
          {/* ラベル */}
          <p className="absolute font-bold text-[20px] text-white leading-[1.5]"
            style={{ left: "13.19%", top: "8.25%" }}>
            公式LINE登録者数
          </p>
          {/* 数字 */}
          <p className="absolute font-bold text-[96px] text-white leading-[1.5]"
            style={{ left: "13.19%", top: "12.90%", width: "86.81%" }}>
            <AnimatedNumber end={696} start={isVisible} />
          </p>
          {/* 単位「名」 */}
          <div className="absolute font-bold text-[20px] text-white leading-[1.2]"
            style={{ left: "75.15%", top: "26.22%" }}>
            <p>&nbsp;</p>
            <p>名</p>
          </div>
        </div>
        </ScaledStage>
      </div>

      {/* モバイル用 */}
      <div className={`lg:hidden px-6 py-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <p className="text-[#54c2dc] text-[48px] font-bold leading-none mb-2">
          Track Record
        </p>
        <p className="text-[28px] font-bold text-[#333] mb-8">
          主な実績
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "イベント総動員数", value: 22, suffix: "万人", color: "bg-[#54c2dc]", icon: "/images/icons/event-people.png" },
            { label: "イベント開催数", value: 500, suffix: "回", color: "bg-[#ec7072]", icon: "/images/icons/event-icon.png" },
            { label: "公式LINE登録者数", value: 696, suffix: "名", color: "bg-[#52bc9a]", icon: "/images/icons/user-icon.png" },
          ].map((item) => (
            <div
              key={item.label}
              className={`relative ${item.color} rounded-[18px] overflow-hidden p-8 min-h-[200px]`}
            >
              <div className="absolute right-0 bottom-0 w-[60%] h-[80%] opacity-50 pointer-events-none">
                <Image src={item.icon} alt="" fill className="object-contain object-bottom-right" />
              </div>
              <div className="relative z-10">
                <p className="font-bold text-[18px] text-white leading-[1.5] mb-2">{item.label}</p>
                <div className="flex items-baseline">
                  <span className="font-bold text-[72px] text-white leading-[1.5]">
                    <AnimatedNumber end={item.value} start={isVisible} />
                  </span>
                  <span className="font-bold text-[18px] text-white ml-2">{item.suffix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
