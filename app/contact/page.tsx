import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { LINE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お問い合わせ | Hero Egg",
  description:
    "Hero Eggへのお問い合わせ。施設利用・イベント主催/共催・HEROサロン・施設スポンサー・共創プログラム・取材など、各種ご相談を承っております。資料請求・公式LINEもご利用いただけます。",
  openGraph: {
    title: "お問い合わせ | Hero Egg",
    description:
      "Hero Eggへのお問い合わせ。施設利用・イベント・スポンサー・共創プログラムなど各種ご相談を承っております。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa] pb-[120px]">
        {/* ===== 背景の卵装飾（about / company と同一） ===== */}
        <BackgroundEggs />

        {/* ===== ページタイトル ===== */}
        <section className="animate-fade-in-up relative z-10 pt-[200px] pb-[60px] text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Image
              src="/images/logo/hero-egg-logomark.png"
              alt=""
              width={59}
              height={59}
              className="rounded-full"
            />
            <span className="text-[24px] tracking-[0.1em] text-[#333]">Contact</span>
          </div>
          <h1 className="text-[44px] font-bold text-[#333] sm:text-[64px]">お問い合わせ</h1>
        </section>

        {/* ===== メイン白カード ===== */}
        <div className="relative z-10 mx-auto max-w-[1342px] rounded-[39px] bg-white px-[24px] py-[60px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[60px] lg:px-[120px] lg:py-[80px]">
          {/* 5色ドット */}
          <div className="mb-[20px] flex items-center gap-[6px]">
            {["blue", "orange", "green", "red", "yellow"].map((c) => (
              <Image key={c} src={`/images/decorations/egg-${c}.png`} alt="" width={20} height={20} />
            ))}
          </div>

          {/* リード */}
          <h2 className="mb-[20px] text-[28px] font-bold text-[#333] md:text-[36px]">
            お気軽にご相談ください
          </h2>
          <p className="mb-[40px] text-[16px] leading-[2] tracking-[0.05em] text-[#333] md:text-[18px]">
            施設のご利用、イベントの主催・共催、スポンサーシップ、共創プログラム、取材のご依頼など、
            Hero Eggに関するご相談を承っております。下記フォームよりお気軽にお問い合わせください。
            資料請求・公式LINEからのご連絡も可能です。
          </p>

          {/* 他の連絡手段 */}
          <div className="mb-[56px] grid gap-[20px] md:grid-cols-2">
            <a
              href="/document-request"
              className="group flex items-center gap-[18px] rounded-[18px] bg-egg-red px-[28px] py-[22px] text-white shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Image src="/images/icons/doc-icon.png" alt="" width={36} height={49} className="h-[44px] w-auto" />
              <span className="flex-1">
                <span className="block text-[20px] font-bold">資料請求</span>
                <span className="block text-[13px] opacity-90">サービス資料をダウンロード</span>
              </span>
              <Arrow />
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-[18px] rounded-[18px] bg-[#06c755] px-[28px] py-[22px] text-white shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Image src="/images/icons/line-brand.png" alt="" width={48} height={48} className="h-[48px] w-auto rounded-[12px]" />
              <span className="flex-1">
                <span className="block text-[20px] font-bold">Hero Egg 公式LINE</span>
                <span className="block text-[13px] opacity-90">最新情報・お問い合わせはこちら</span>
              </span>
              <Arrow />
            </a>
          </div>

          {/* 区切り線 */}
          <div className="mb-[16px] flex items-center gap-[8px]">
            <div className="h-[3px] w-[30px] bg-egg-blue" />
            <div className="h-px flex-1 bg-egg-gray-light" />
          </div>
          <h3 className="mb-[40px] text-[26px] font-medium text-[#333] md:text-[32px]">
            フォームからのお問い合わせ
          </h3>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

function Arrow() {
  return (
    <svg
      width="25"
      height="10"
      viewBox="0 0 25 10"
      fill="none"
      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M0 5h23M18 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function BackgroundEggs() {
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
          <Image src={`/images/decorations/${e.src}.png`} alt="" fill sizes="700px" className="object-contain" />
        </div>
      ))}
    </div>
  );
}
