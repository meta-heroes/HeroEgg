import Image from "next/image";
import { type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/** カード見出しの卵ドット（企業情報ページと同じ並び）。 */
const EGG_DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

type LegalPageLayoutProps = {
  /** ページタイトル（例: 利用規約） */
  title: string;
  /** タイトル上の英語ラベル（例: Terms） */
  eyebrow: string;
  /** 最終改定日（例: 2026年6月4日） */
  updatedAt: string;
  children: ReactNode;
};

/**
 * 利用規約・プライバシーポリシー・特定商取引法ページ共通レイアウト。
 * 企業情報ページ（app/company）のタイトル＋白カードの作法を踏襲し、
 * テキスト主体ページとして読みやすい本文幅・行間に調整している。
 */
export function LegalPageLayout({ title, eyebrow, updatedAt, children }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa] pb-[120px]">
        {/* ===== ページタイトル ===== */}
        <section className="animate-fade-in-up relative z-10 pt-[160px] pb-[48px] text-center sm:pt-[200px] sm:pb-[60px]">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Image
              src="/images/logo/hero-egg-logomark.png"
              alt=""
              width={59}
              height={59}
              className="h-[44px] w-[44px] rounded-full sm:h-[59px] sm:w-[59px]"
            />
            <span className="text-[20px] text-[#333] sm:text-[24px]">{eyebrow}</span>
          </div>
          <h1 className="text-[36px] font-bold text-[#333] sm:text-[56px]">{title}</h1>
        </section>

        {/* ===== メイン白カード ===== */}
        <div className="relative z-10 mx-auto max-w-[1040px] rounded-[28px] bg-white px-[24px] py-[48px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.12)] sm:rounded-[39px] sm:px-[56px] sm:py-[64px] lg:px-[88px]">
          {/* 卵ドット */}
          <div className="mb-[10px] flex items-center gap-[4px]">
            {EGG_DOTS.map((src, i) => (
              <Image key={i} src={src} alt="" width={16} height={16} className="h-[16px] w-[16px]" />
            ))}
          </div>
          <p className="mb-[40px] text-[14px] text-[#888]">最終改定日：{updatedAt}</p>

          {/* 本文 */}
          <div className="legal-body text-[15px] leading-[1.9] text-[#333] sm:text-[16px]">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ---- 本文用の小さなプリミティブ（typographyプラグイン非依存で統一） ---- */

/** 条見出し（例: 第1条（適用）） */
export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-[40px] mb-[14px] text-[19px] font-bold text-[#262626] sm:text-[22px]">
      {children}
    </h2>
  );
}

/** 段落 */
export function LegalP({ children }: { children: ReactNode }) {
  return <p className="mb-[14px]">{children}</p>;
}

/** 番号付きリスト */
export function LegalOL({ children }: { children: ReactNode }) {
  return (
    <ol className="mb-[14px] list-decimal space-y-[8px] pl-[1.4em] marker:text-[#888]">
      {children}
    </ol>
  );
}

/** 中黒リスト */
export function LegalUL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-[14px] list-disc space-y-[8px] pl-[1.4em] marker:text-[#888]">
      {children}
    </ul>
  );
}

export function LegalLI({ children }: { children: ReactNode }) {
  return <li className="leading-[1.8]">{children}</li>;
}
