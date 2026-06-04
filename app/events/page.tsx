import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventBody } from "@/components/sections/EventBody";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "イベント | Hero Egg",
  description:
    "Hero Eggでは毎週、テクノロジー教育・グローバル教育・ファイナンス教育・アントレプレナー教育など、子どもから大人まで参加できる多彩なイベントを開催しています。体験会・登壇イベント・交流会、対面／オンライン／ハイブリッドの各形式に対応。",
  openGraph: {
    title: "イベント | Hero Egg",
    description:
      "Hero Eggでは毎週、多彩なイベントを開催。テクノロジー・グローバル・ファイナンス・アントレプレナー教育を、対面／オンライン／ハイブリッドで提供します。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fafafa] relative overflow-hidden">
        {/* ===== 背景の卵装飾（Figma 背景フレーム 419:394 準拠の座標・サイズ・回転） ===== */}
        <div
          className="absolute pointer-events-none"
          style={{ left: "265px", top: "-143px", width: "530px", height: "530px", transform: "rotate(84.1deg)", transformOrigin: "0 0" }}
        >
          <Image src="/images/decorations/egg-red.png" alt="" fill className="object-contain" />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ left: "884px", top: "-90px", width: "453px", height: "453px", transform: "rotate(125.5deg)", transformOrigin: "0 0" }}
        >
          <Image src="/images/decorations/egg-yellow.png" alt="" fill className="object-contain" />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ left: "226px", top: "83px", width: "657px", height: "657px", transform: "rotate(17.5deg)", transformOrigin: "0 0" }}
        >
          <Image src="/images/decorations/egg-green.png" alt="" fill className="object-contain" />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ left: "1452px", top: "356px", width: "587px", height: "587px", transform: "rotate(-124.7deg)", transformOrigin: "0 0" }}
        >
          <Image src="/images/decorations/egg-blue.png" alt="" fill className="object-contain" />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ left: "1320px", top: "238px", width: "689px", height: "689px", transform: "rotate(-16.4deg)", transformOrigin: "0 0" }}
        >
          <Image src="/images/decorations/egg-orange.png" alt="" fill className="object-contain" />
        </div>

        {/* ===== ページタイトル（カード外） ===== */}
        <PageHeader eyebrow="Event" title="イベント" />

        {/* ===== メインコンテンツ（白カード） ===== */}
        <EventBody />
      </main>
      <Footer />
    </>
  );
}
