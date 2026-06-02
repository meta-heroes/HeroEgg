"use client";

import Image from "next/image";
import { FEATURES } from "@/lib/constants";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function FeaturesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} id="features" className="bg-white overflow-hidden relative">
      {/* デスクトップ: Figma準拠の絶対配置 */}
      <div
        className={`w-full max-w-[1920px] mx-auto hidden lg:block transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ScaledStage width={1920} height={2192}>
        {/* オレンジ背景帯: 左から右へ、右端に丸み */}
        <div
          className="absolute bg-[#f6a04d] rounded-tr-[60px] rounded-br-[60px]"
          style={{
            left: 0,
            top: "3.33%",
            width: "43.54%",
            height: "91.42%",
          }}
        />

        {/* Features タイトル */}
        <p
          className="absolute font-bold text-[80px] text-white leading-[normal]"
          style={{ left: "23.13%", top: "5.29%" }}
        >
          Features
        </p>
        <p
          className="absolute font-bold text-[36px] text-[#333] leading-[normal]"
          style={{ left: "23.13%", top: "10.13%" }}
        >
          Hero Eggが提供するもの
        </p>

        {/* --- ブロック1: 原体験 --- */}
        {/* 画像1 (右にオフセット) */}
        <div
          className="absolute rounded-[24px] overflow-hidden"
          style={{
            left: "27.40%",
            top: "16.15%",
            width: "30.57%",
            height: "19.16%",
          }}
        >
          <Image src={FEATURES[0].image} alt={FEATURES[0].title} fill className="object-cover" sizes="31vw" />
        </div>
        {/* ドット1 */}
        <div
          className="absolute flex items-center gap-[5px]"
          style={{ left: "39.48%", top: "37.04%" }}
        >
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]/40" />
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]" />
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]/40" />
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]/40" />
        </div>
        {/* 原体験 テキスト */}
        <p
          className="absolute font-bold text-[64px] text-[#f6a04d] leading-[normal]"
          style={{ left: "62.14%", top: "20.35%" }}
        >
          原体験
        </p>
        {/* リスト1 */}
        <ul
          className="absolute list-disc text-[22px] text-[#333] leading-[2]"
          style={{ left: "61.0%", top: "25.05%" }}
        >
          <li className="ms-[33px]">無償のテクノロジー教育</li>
          <li className="ms-[33px]">メタバース・eスポーツ体験</li>
          <li className="ms-[33px]">セミナー・ワークショップ</li>
        </ul>

        {/* --- ブロック2: 環境 --- */}
        {/* 画像2 (左寄り) */}
        <div
          className="absolute rounded-[24px] overflow-hidden"
          style={{
            left: "23.13%",
            top: "41.92%",
            width: "30.57%",
            height: "19.16%",
          }}
        >
          <Image src={FEATURES[1].image} alt={FEATURES[1].title} fill className="object-cover" sizes="31vw" />
        </div>
        {/* ドット2 */}
        <div
          className="absolute flex items-center gap-[5px]"
          style={{ left: "36.15%", top: "62.82%" }}
        >
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]/40" />
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]" />
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]/40" />
        </div>
        {/* 環境 テキスト */}
        <p
          className="absolute font-bold text-[64px] text-[#f6a04d] leading-[normal]"
          style={{ left: "57.86%", top: "46.12%" }}
        >
          環境
        </p>
        {/* リスト2 */}
        <ul
          className="absolute list-disc text-[22px] text-[#333] leading-[2]"
          style={{ left: "56.72%", top: "50.82%" }}
        >
          <li className="ms-[33px]">PCやHMDなどの最新の設備を無料で自由に利用</li>
          <li className="ms-[33px]">子どもたちだけで定期的にイベント企画・運営</li>
          <li className="ms-[33px]">共創で企業と提供するコンテンツへの参加</li>
        </ul>

        {/* --- ブロック3: 目標 --- */}
        {/* 画像3 (右にオフセット) */}
        <div
          className="absolute rounded-[24px] overflow-hidden"
          style={{
            left: "27.40%",
            top: "67.70%",
            width: "30.57%",
            height: "19.16%",
          }}
        >
          <Image src={FEATURES[2].image} alt={FEATURES[2].title} fill className="object-cover" sizes="31vw" />
        </div>
        {/* ドット3 */}
        <div
          className="absolute flex items-center gap-[5px]"
          style={{ left: "40.42%", top: "88.55%" }}
        >
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]/40" />
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]" />
          <div className="w-[18px] h-[19px] rounded-full bg-[#f6a04d]/40" />
        </div>
        {/* 目標 テキスト */}
        <p
          className="absolute font-bold text-[64px] text-[#f6a04d] leading-[normal]"
          style={{ left: "62.14%", top: "71.90%" }}
        >
          目標
        </p>
        {/* リスト3 */}
        <ul
          className="absolute list-disc text-[22px] text-[#333] leading-[2]"
          style={{ left: "61.0%", top: "76.60%" }}
        >
          <li className="ms-[33px]">ピッチコンテストやアワード</li>
          <li className="ms-[33px]">大規模イベントでのプレゼン</li>
          <li className="ms-[33px]">アンバサダー就任</li>
        </ul>
        </ScaledStage>
      </div>

      {/* モバイル用 */}
      <div className={`lg:hidden px-6 py-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="bg-[#f6a04d] rounded-tr-[30px] rounded-br-[30px] -ml-6 pl-6 pr-6 pt-10 pb-10 mb-8">
          <p className="text-white text-[48px] font-bold leading-none mb-2">
            Features
          </p>
          <p className="text-[28px] font-bold text-[#333]">
            Hero Eggが提供するもの
          </p>
        </div>

        <div className="space-y-16">
          {FEATURES.map((feature) => (
            <div key={feature.title}>
              <div className="relative rounded-[24px] overflow-hidden mb-4 aspect-[587/420]">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#f6a04d]/40" />
                <div className="w-3 h-3 rounded-full bg-[#f6a04d]" />
                <div className="w-3 h-3 rounded-full bg-[#f6a04d]/40" />
              </div>
              <h3 className="text-[40px] font-bold text-[#f6a04d] mb-4">
                {feature.title}
              </h3>
              <ul className="list-disc text-[18px] text-[#333] leading-[2]">
                {feature.items.map((item) => (
                  <li key={item} className="ms-[33px]">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
