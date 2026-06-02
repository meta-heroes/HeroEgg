import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "資料請求 | Hero Egg",
  description:
    "Hero Eggのサービス資料を無料でダウンロードいただけます。サービス概要・料金プラン・施設/ 設備・イベント実績・導入事例などをまとめた資料をお送りします。",
  openGraph: {
    title: "資料請求 | Hero Egg",
    description:
      "Hero Eggのサービス資料を無料でダウンロード。サービス概要・料金プラン・施設情報・実績をまとめてお送りします。",
    type: "website",
    locale: "ja_JP",
  },
};

const DOC_CONTENTS = [
  "サービス全体の概要",
  "施設・設備のご案内",
  "ご利用プラン・料金表",
  "イベント開催・導入事例",
  "スポンサー・共創プログラム",
];

export default function DocumentRequestPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa] pb-[120px]">
        <BackgroundEggs />

        {/* ===== ページタイトル ===== */}
        <section className="animate-fade-in-up relative z-10 pt-[200px] pb-[60px] text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Image src="/images/logo/hero-egg-logomark.png" alt="" width={59} height={59} className="rounded-full" />
            <span className="text-[24px] tracking-[0.1em] text-[#333]">Document</span>
          </div>
          <h1 className="text-[44px] font-bold text-[#333] sm:text-[64px]">資料請求</h1>
          <span className="mt-[20px] inline-flex items-center gap-[8px] rounded-full bg-egg-yellow px-[20px] py-[8px] text-[15px] font-bold text-[#333]">
            <span className="h-[8px] w-[8px] rounded-full bg-[#333]" />
            ただいま準備中
          </span>
        </section>

        {/* ===== メイン白カード ===== */}
        <div className="relative z-10 mx-auto max-w-[1342px] rounded-[39px] bg-white px-[24px] py-[60px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[60px] lg:px-[120px] lg:py-[80px]">
          {/* 5色ドット */}
          <div className="mb-[20px] flex items-center gap-[6px]">
            {["blue", "orange", "green", "red", "yellow"].map((c) => (
              <Image key={c} src={`/images/decorations/egg-${c}.png`} alt="" width={20} height={20} />
            ))}
          </div>

          <h2 className="mb-[20px] text-[28px] font-bold text-[#333] md:text-[36px]">
            サービス資料を準備しています
          </h2>
          <p className="mb-[40px] text-[16px] leading-[2] tracking-[0.05em] text-[#333] md:text-[18px]">
            Hero Eggのサービス概要・施設情報・料金プラン・導入事例などをまとめた資料を現在準備しております。
            資料請求機能の公開まで、いましばらくお待ちください。お急ぎの場合は、お問い合わせフォームよりお気軽にご連絡ください。
          </p>

          {/* 資料に含まれる内容 */}
          <div className="mb-[56px] flex flex-col gap-[28px] overflow-hidden rounded-[18px] bg-[#fafafa] p-[32px] md:flex-row md:items-center md:p-[40px]">
            <div className="relative h-[180px] w-full shrink-0 md:h-[200px] md:w-[300px]">
              <Image
                src="/images/facilities/namba/1.jpg"
                alt="Hero Egg 施設の様子"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="rounded-[14px] object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="mb-[16px] text-[20px] font-bold text-[#333]">資料に含まれる予定の内容</p>
              <ul className="space-y-[12px]">
                {DOC_CONTENTS.map((item) => (
                  <li key={item} className="flex items-center gap-[10px] text-[16px] text-[#333]">
                    <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-egg-blue">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 区切り線 */}
          <div className="mb-[16px] flex items-center gap-[8px]">
            <div className="h-[3px] w-[30px] bg-egg-blue" />
            <div className="h-px flex-1 bg-egg-gray-light" />
          </div>

          {/* 準備中の案内 */}
          <div className="flex flex-col items-center rounded-[18px] border-2 border-dashed border-egg-gray-light bg-[#fafafa] px-6 py-[72px] text-center">
            <div className="mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-egg-yellow">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#333" strokeWidth="2" />
                <path d="M12 7v5l3.5 2" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mb-4 text-[26px] font-bold text-[#333] md:text-[32px]">
              資料請求機能は準備中です
            </h3>
            <p className="mb-[36px] text-[16px] leading-[2] text-[#333] md:text-[18px]">
              ただいま資料請求フォームを準備しております。公開までもうしばらくお待ちください。
              <br />
              お急ぎの方は、お問い合わせフォームまたは公式LINEよりご連絡ください。
            </p>
            <div className="flex flex-col gap-[16px] sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-[61px] items-center justify-center gap-3 rounded-[30px] bg-[#333] px-[36px] text-[18px] font-bold text-white shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222] hover:shadow-lg"
              >
                お問い合わせはこちら
                <svg width="25" height="10" viewBox="0 0 25 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M0 5h23M18 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>
              <Link
                href="/"
                className="inline-flex h-[61px] items-center justify-center gap-3 rounded-[30px] border-2 border-[#333] px-[36px] text-[18px] font-bold text-[#333] transition-colors duration-300 hover:bg-[#333] hover:text-white"
              >
                トップページへ戻る
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
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
