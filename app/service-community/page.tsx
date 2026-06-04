import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCommunitySection } from "@/components/sections/ServiceCommunitySection";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "サービス・コミュニティー | Hero Egg",
  description:
    "Hero Eggが提供するサービスとコミュニティーのご紹介。イベント実施・施設利用・地域展開・スポンサーシップ・共創プログラム、EGG JAM・AI MONDAYなど、Hero Eggでできることをまとめています。",
  openGraph: {
    title: "サービス・コミュニティー | Hero Egg",
    description:
      "Hero Eggが提供するサービスとコミュニティーのご紹介。Hero Eggでできることをまとめています。",
    type: "website",
    locale: "ja_JP",
  },
};

/* 背景卵装飾 — aboutページと同一（Figma use_figma取得の座標・サイズ・回転） */
const BLOBS = [
  { src: "/images/decorations/egg-red.png", left: 265, top: -143, size: 530, rot: 84.1 },
  { src: "/images/decorations/egg-yellow.png", left: 884, top: -90, size: 453, rot: 125.5 },
  { src: "/images/decorations/egg-green.png", left: 226, top: 83, size: 657, rot: 17.5 },
  { src: "/images/decorations/egg-blue.png", left: 1452, top: 356, size: 587, rot: -124.7 },
  { src: "/images/decorations/egg-orange.png", left: 1320, top: 238, size: 689, rot: -16.4 },
];

export default function ServiceCommunityPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa]">
        {/* 背景卵装飾（aboutページと完全に同じ配置） */}
        {BLOBS.map((b) => (
          <div
            key={b.src}
            className="absolute pointer-events-none"
            style={{
              left: `${b.left}px`,
              top: `${b.top}px`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              transform: `rotate(${b.rot}deg)`,
              transformOrigin: "0 0",
            }}
          >
            <Image src={b.src} alt="" fill className="object-contain" />
          </div>
        ))}

        {/* ページタイトル（カード外） */}
        <PageHeader
          eyebrow="Service & Community"
          title={
            <>
              サービス・<br className="sm:hidden" />コミュニティー
            </>
          }
        />

        {/* メインコンテンツ（インタラクティブな白カード） */}
        <div className="relative z-10 px-4 md:px-8">
          <ServiceCommunitySection />
        </div>
      </main>
      <Footer />
    </>
  );
}
