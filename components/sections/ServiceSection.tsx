"use client";

import Image from "next/image";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function ServiceSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} id="service" className="bg-white overflow-hidden">
      {/* デスクトップ: Figma準拠の絶対配置 */}
      <div
        className={`w-full max-w-[1920px] mx-auto hidden lg:block transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ScaledStage width={1920} height={1414}>
        {/* Service タイトル */}
        <p
          className="absolute font-bold text-[80px] text-[#fed649] leading-[normal]"
          style={{ left: "23.13%", top: "8.20%" }}
        >
          Service
        </p>
        <p
          className="absolute font-bold text-[36px] text-[#333] leading-[normal]"
          style={{ left: "23.13%", top: "15.70%" }}
        >
          Hero Eggでできること
        </p>

        {/* === 上段左: 主催・共催 イベント実施 === */}
        <div
          className="absolute bg-[#ababab] rounded-[18px] overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          style={{ left: "23.13%", top: "27.58%", width: "26.25%", height: "27.72%" }}
        >
          {/* キャラクター */}
          <div className="absolute" style={{ left: "28.57%", top: "4.85%", width: "84.13%", height: "108.16%" }}>
            <div className="rotate-6">
              <Image src="/images/characters/ch-yellow-flag.png" alt="" width={386} height={386} className="w-full h-auto" />
            </div>
          </div>
          {/* テキスト */}
          <div className="absolute text-[32px] font-bold text-white leading-[1.5]" style={{ left: "10.12%", top: "10.97%" }}>
            <p>主催・共催</p>
            <p>イベント実施</p>
          </div>
          {/* ボタン */}
          <a
            href="#"
            className="absolute flex items-center gap-1 rounded-[30px] bg-[#fed649] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-all"
            style={{ left: "8.73%", top: "75.26%", width: "60.52%", height: "15.56%" }}
          >
            <span className="font-bold text-[18px] text-[#333] ml-5">イベント開催者・参加者向け</span>
            <svg width="17" height="10" viewBox="0 0 17 10" className="ml-auto mr-4">
              <path d="M0 5h15M10 1l5 4-5 4" stroke="#333" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </div>

        {/* === 上段右: HEROサロン 施設スポンサー === */}
        <div
          className="absolute bg-[#ababab] rounded-[18px] overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          style={{ left: "50.63%", top: "27.58%", width: "26.25%", height: "27.72%" }}
        >
          {/* キャラクター */}
          <div className="absolute" style={{ left: "23.61%", top: "-3.32%", width: "85.32%", height: "109.69%" }}>
            <Image src="/images/characters/ch-blue-cheer.png" alt="" width={430} height={430} className="w-full h-auto" />
          </div>
          {/* テキスト */}
          <div className="absolute text-[32px] font-bold text-white leading-[1.5]" style={{ left: "10.12%", top: "10.97%" }}>
            <p>HEROサロン</p>
            <p>施設スポンサー</p>
          </div>
          {/* ボタン1: パートナー企業向け */}
          <a
            href="#"
            className="absolute flex items-center gap-1 rounded-[30px] bg-[#54c2dc] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-all"
            style={{ left: "8.73%", top: "55.36%", width: "52.58%", height: "15.56%" }}
          >
            <span className="font-bold text-[18px] text-white ml-5">パートナー企業向け</span>
            <svg width="17" height="10" viewBox="0 0 17 10" className="ml-auto mr-4">
              <path d="M0 5h15M10 1l5 4-5 4" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
          {/* ボタン2: スポンサー候補者向け */}
          <a
            href="#"
            className="absolute flex items-center gap-1 rounded-[30px] bg-[#54c2dc] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-all"
            style={{ left: "8.73%", top: "75.26%", width: "52.58%", height: "15.56%" }}
          >
            <span className="font-bold text-[18px] text-white ml-5">スポンサー候補者向け</span>
            <svg width="17" height="10" viewBox="0 0 17 10" className="ml-auto mr-4">
              <path d="M0 5h15M10 1l5 4-5 4" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </div>

        {/* === 下段左: 施設利用 === */}
        <div
          className="absolute bg-[#ababab] rounded-[18px] overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          style={{ left: "23.13%", top: "57.07%", width: "16.98%", height: "27.72%" }}
        >
          {/* キャラクター */}
          <div className="absolute" style={{ left: "7.06%", top: "26.28%", width: "93.87%", height: "78.06%" }}>
            <Image src="/images/characters/ch-orange-microphone.png" alt="" width={306} height={306} className="w-full h-auto" />
          </div>
          {/* テキスト */}
          <div className="absolute text-[32px] font-bold text-white leading-[1.5]" style={{ left: "15.64%", top: "9.44%" }}>
            <p>施設</p>
            <p>利用</p>
          </div>
          {/* ボタン */}
          <a
            href="#"
            className="absolute flex items-center gap-1 rounded-[30px] bg-[#f6a04d] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-all"
            style={{ left: "13.50%", top: "75.77%", width: "72.70%", height: "15.56%" }}
          >
            <span className="font-bold text-[18px] text-white ml-4">イベント主催者向け</span>
            <svg width="17" height="10" viewBox="0 0 17 10" className="ml-auto mr-3">
              <path d="M0 5h15M10 1l5 4-5 4" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </div>

        {/* === 下段中: Hero Egg 地域展開 === */}
        <div
          className="absolute bg-[#ababab] rounded-[18px] overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          style={{ left: "41.51%", top: "57.07%", width: "16.98%", height: "27.72%" }}
        >
          {/* キャラクター */}
          <div className="absolute" style={{ left: "17.18%", top: "23.47%", width: "90.18%", height: "75.00%" }}>
            <Image src="/images/characters/ch-green-teacher.png" alt="" width={294} height={294} className="w-full h-auto" />
          </div>
          {/* テキスト */}
          <div className="absolute text-[32px] font-bold text-white leading-[1.5]" style={{ left: "15.64%", top: "9.44%" }}>
            <p>Hero Egg</p>
            <p>地域展開</p>
          </div>
          {/* ボタン */}
          <a
            href="#"
            className="absolute flex items-center gap-1 rounded-[30px] bg-[#52bc9a] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-all"
            style={{ left: "13.50%", top: "75.77%", width: "72.70%", height: "15.56%" }}
          >
            <span className="font-bold text-[18px] text-white ml-3 text-nowrap">遊休施設オーナー向け</span>
            <svg width="17" height="10" viewBox="0 0 17 10" className="ml-auto mr-3">
              <path d="M0 5h15M10 1l5 4-5 4" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </div>

        {/* === 下段右: 共創プログラム === */}
        <div
          className="absolute bg-[#ababab] rounded-[18px] overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          style={{ left: "59.90%", top: "57.07%", width: "16.98%", height: "27.72%" }}
        >
          {/* キャラクター */}
          <div className="absolute" style={{ left: "0%", top: "11.73%", width: "118.40%", height: "98.47%" }}>
            <Image src="/images/characters/ch-red-tickets.png" alt="" width={386} height={386} className="w-full h-auto" />
          </div>
          {/* テキスト */}
          <div className="absolute text-[32px] font-bold text-white leading-[1.5]" style={{ left: "15.64%", top: "9.44%" }}>
            <p>共創</p>
            <p>プログラム</p>
          </div>
          {/* ボタン */}
          <a
            href="#"
            className="absolute flex items-center gap-1 rounded-[30px] bg-[#ec7072] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-all"
            style={{ left: "13.50%", top: "75.77%", width: "72.70%", height: "15.56%" }}
          >
            <span className="font-bold text-[16px] text-white ml-3 text-nowrap">コンテンツホルダー向け</span>
            <svg width="17" height="10" viewBox="0 0 17 10" className="ml-auto mr-3">
              <path d="M0 5h15M10 1l5 4-5 4" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </div>
        </ScaledStage>
      </div>

      {/* モバイル用 */}
      <div className={`lg:hidden px-6 py-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <p className="text-[#fed649] text-[48px] font-bold leading-none mb-2">
          Service
        </p>
        <p className="text-[28px] font-bold text-[#333] mb-8">
          Hero Eggでできること
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { title: ["主催・共催", "イベント実施"], char: "/images/characters/ch-yellow-flag.png", btn: "イベント開催者・参加者向け", btnColor: "bg-[#fed649] text-[#333]" },
            { title: ["HEROサロン", "施設スポンサー"], char: "/images/characters/ch-blue-cheer.png", btn: "スポンサー候補者向け", btnColor: "bg-[#54c2dc] text-white" },
            { title: ["施設", "利用"], char: "/images/characters/ch-orange-microphone.png", btn: "イベント主催者向け", btnColor: "bg-[#f6a04d] text-white" },
            { title: ["Hero Egg", "地域展開"], char: "/images/characters/ch-green-teacher.png", btn: "遊休施設オーナー向け", btnColor: "bg-[#52bc9a] text-white" },
            { title: ["共創", "プログラム"], char: "/images/characters/ch-red-tickets.png", btn: "コンテンツホルダー向け", btnColor: "bg-[#ec7072] text-white" },
          ].map((item, i) => (
            <div key={i} className="relative bg-[#ababab] rounded-[18px] overflow-hidden min-h-[280px]">
              <div className="absolute right-0 bottom-0 w-[60%] h-[90%]">
                <Image src={item.char} alt="" fill className="object-contain object-bottom-right" />
              </div>
              <div className="relative z-10 p-6 flex flex-col h-full min-h-[280px]">
                <div className="text-[24px] font-bold text-white leading-[1.5] mb-auto">
                  {item.title.map((line, j) => <p key={j}>{line}</p>)}
                </div>
                <a
                  href="#"
                  className={`inline-flex items-center gap-1 self-start h-[48px] px-5 rounded-[30px] text-[16px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] ${item.btnColor}`}
                >
                  {item.btn}
                  <svg width="17" height="10" viewBox="0 0 17 10" className="ml-1">
                    <path d="M0 5h15M10 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
