import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "企業情報 | Hero Egg",
  description:
    "株式会社Hero Eggの企業情報。会社名・本店所在地・設立日・代表取締役・資本金・店舗情報をご紹介します。",
};

/** カード見出しの卵ドット（青→橙→緑→赤→黄、Figma 538:371-375 準拠） */
const EGG_DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa] pb-[120px]">
        {/* ===== 背景の卵装飾（aboutページと同一） ===== */}
        <BackgroundEggs />

        {/* ===== ページタイトル ===== */}
        <PageHeader eyebrow="Company" title="企業情報" />

        {/* ===== メイン白カード ===== */}
        <div className="relative z-10 mx-auto max-w-[1342px] rounded-[39px] bg-white px-[24px] py-[60px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[60px] lg:px-[155px] lg:py-[80px]">
          {/* 会社概要 見出し（卵ドット付き） */}
          <div className="mb-[50px] lg:mb-[70px]">
            <div className="mb-[18px] flex items-center gap-[4px]">
              {EGG_DOTS.map((src, i) => (
                <Image key={i} src={src} alt="" width={20} height={20} className="h-[20px] w-[20px]" />
              ))}
            </div>
            <h2 className="text-[36px] font-medium text-[#333] lg:text-[48px]">会社概要</h2>
          </div>

          {/* セクション見出し */}
          <div className="mb-[44px] lg:mb-[56px]">
            <h2 className="mb-[22px] text-[32px] font-medium text-[#262626] lg:text-[40px]">会社概要</h2>
            <div className="flex items-center">
              <div className="h-[3px] w-[30px] rounded-full bg-egg-blue" />
              <div className="h-px flex-1 bg-egg-gray-light" />
            </div>
          </div>

          {/* 写真 + 会社概要テーブル */}
          <CompanyOverview />
        </div>
      </main>
      <Footer />
    </>
  );
}

function BackgroundEggs() {
  // Figma: 背景 (419:375) 上部の装飾卵（座標・サイズ・回転を踏襲）
  const eggs = [
    { src: "egg-red", left: 265, top: -143, size: 530, rot: 84 },
    { src: "egg-yellow", left: 884, top: -90, size: 453, rot: 125 },
    { src: "egg-green", left: 226, top: 83, size: 657, rot: 17 },
    { src: "egg-blue", left: 1452, top: 356, size: 587, rot: -125 },
    { src: "egg-orange", left: 1320, top: 238, size: 689, rot: -16 },
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-[1100px] w-[1920px] -translate-x-1/2 overflow-hidden xl:block">
      {eggs.map((e) => (
        <div
          key={e.src}
          className="absolute"
          style={{
            left: e.left,
            top: e.top,
            width: e.size,
            height: e.size,
            transform: `rotate(${e.rot}deg)`,
            transformOrigin: "0 0",
            opacity: 0.85,
          }}
        >
          <Image
            src={`/images/decorations/${e.src}.png`}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
