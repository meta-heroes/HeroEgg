import Image from "next/image";

/**
 * GENKI LABO の社名表示。
 *
 * 公式ロゴ画像を受領したら `public/images/logo/genki-labo-logo.png` に配置し、
 * 下の LOGO_SRC にそのパスを設定すれば、ページ内の全箇所が画像ロゴに切り替わる。
 * それまでは通常のテキストで表示する（ロゴ風の装飾はしない）。
 *
 * サイズは親から className で文字サイズを渡す。画像に差し替わったときも
 * 高さが文字サイズに追従するため、周囲との比率が崩れない。
 */
const LOGO_SRC: string | null = null;

export function GenkiLaboWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-bold text-[#333] ${className}`}>
      {LOGO_SRC ? (
        <Image
          src={LOGO_SRC}
          alt="GENKI LABO"
          width={240}
          height={64}
          className="h-[1.15em] w-auto"
        />
      ) : (
        "GENKI LABO"
      )}
    </span>
  );
}
