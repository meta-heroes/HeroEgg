import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StoreCard } from "@/components/sections/StoreCard";
import { PageHeader } from "@/components/sections/PageHeader";
import { STORE_SECTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "施設について | Hero Egg",
  description:
    "Hero Eggの施設一覧。なんば本店をはじめ、全国に展開する各施設の所在地・営業時間・収容人数をご紹介します。",
};

/** 背景の卵装飾（Figma「背景」レイヤー準拠の座標・回転） */
const BG_EGGS = [
  { color: "red", src: "/images/decorations/egg-red.png", left: "265px", top: "-143px", size: 530, rotate: 84.1, delay: 0 },
  { color: "yellow", src: "/images/decorations/egg-yellow.png", left: "884px", top: "-90px", size: 453, rotate: 125.5, delay: 1.2 },
  { color: "green", src: "/images/decorations/egg-green.png", left: "226px", top: "83px", size: 657, rotate: 17.5, delay: 0.6 },
  { color: "blue", src: "/images/decorations/egg-blue.png", left: "1452px", top: "356px", size: 587, rotate: -124.7, delay: 1.8 },
  { color: "orange", src: "/images/decorations/egg-orange.png", left: "1320px", top: "238px", size: 689, rotate: -16.4, delay: 0.3 },
] as const;

const EGG_DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa] pb-[120px]">
        {/* ===== 背景の卵装飾 ===== */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden" aria-hidden="true">
          {BG_EGGS.map((egg) => (
            <div
              key={egg.color}
              className="absolute animate-float"
              style={{ left: egg.left, top: egg.top, width: egg.size, height: egg.size, animationDelay: `${egg.delay}s` }}
            >
              <div className="relative h-full w-full" style={{ transform: `rotate(${egg.rotate}deg)` }}>
                <Image src={egg.src} alt="" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* ===== ページタイトル ===== */}
        <PageHeader eyebrow="Store" title="施設について" />

        {/* ===== メイン白カード ===== */}
        <div className="relative z-10 mx-auto max-w-[1342px] rounded-[39px] bg-white px-[24px] py-[60px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[60px] lg:px-[155px] lg:py-[80px]">
          {/* 施設一覧 見出し */}
          <div className="mb-[60px] lg:mb-[80px]">
            <div className="mb-[18px] flex items-center gap-[4px]">
              {EGG_DOTS.map((src, i) => (
                <Image key={i} src={src} alt="" width={20} height={20} className="h-[20px] w-[20px]" />
              ))}
            </div>
            <h2 className="text-[36px] font-medium text-[#333] lg:text-[48px]">施設一覧</h2>
          </div>

          {/* 施設セクション（本店 / 支店） */}
          <div className="space-y-[80px] lg:space-y-[110px]">
            {STORE_SECTIONS.map((section) => (
              <section key={section.label}>
                <SectionHeader label={section.label} />
                <div className="space-y-[70px] lg:space-y-[90px]">
                  {section.stores.map((store, i) => (
                    <StoreCard key={store.id} store={store} index={i} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-[50px]">
      <h2 className="mb-[22px] text-[32px] font-medium text-[#262626] lg:text-[40px]">{label}</h2>
      <div className="flex items-center">
        <div className="h-[3px] w-[30px] rounded-full bg-egg-blue" />
        <div className="h-px flex-1 bg-egg-gray-light" />
      </div>
    </div>
  );
}
