import Image from "next/image";
import { type ReactNode } from "react";

/**
 * 全コンテンツページ共通のページタイトル見出し。
 * 「Hero Eggについて」ページのスケールを基準に、ロゴマーク＋英字ラベル＋
 * 見出しのモバイル／デスクトップのサイズ・余白を統一する。
 */
export function PageHeader({
  eyebrow,
  title,
  children,
  className = "",
}: {
  /** 見出し上の英字ラベル（例: About us / Company） */
  eyebrow: string;
  /** ページ見出し（例: 企業情報）。長いタイトルは改行制御のため ReactNode 可。 */
  title: ReactNode;
  /** 見出し下に中央配置する追加要素（バッジ等） */
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`animate-fade-in-up relative z-10 pt-[120px] pb-[40px] text-center sm:pt-[200px] sm:pb-[60px] ${className}`}
    >
      <div className="mb-[6px] flex items-center justify-center gap-[10px]">
        <Image
          src="/images/logo/hero-egg-logomark.png"
          alt=""
          width={59}
          height={59}
          className="h-[40px] w-[40px] rounded-full sm:h-[59px] sm:w-[59px]"
        />
        <span className="text-[18px] tracking-[0.1em] text-[#333] sm:text-[24px]">
          {eyebrow}
        </span>
      </div>
      <h1 className="text-[34px] font-bold leading-tight text-[#333] sm:text-[48px] lg:text-[64px]">
        {title}
      </h1>
      {children}
    </section>
  );
}
