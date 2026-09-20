import Image from "next/image";

/**
 * GENKI LABO のロゴ表示。
 *
 * 公式ロゴ画像を受領したら `public/images/logo/genki-labo-logo.png` に配置し、
 * 下の LOGO_SRC にそのパスを設定すれば、ページ内の全箇所が画像ロゴに切り替わる。
 * 未設定の間は、レイアウトが崩れないよう文字ロゴを表示する。
 */
const LOGO_SRC: string | null = null;

export function GenkiLaboWordmark({ className = "" }: { className?: string }) {
  if (LOGO_SRC) {
    return (
      <Image
        src={LOGO_SRC}
        alt="GENKI LABO"
        width={240}
        height={64}
        className={`w-auto ${className}`}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-[8px] bg-[#333] px-[12px] font-bold leading-none tracking-[0.06em] text-white ${className}`}
      aria-label="GENKI LABO"
    >
      <span className="text-[0.52em]">
        GENKI<span className="text-egg-orange"> LABO</span>
      </span>
    </span>
  );
}
