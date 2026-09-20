import { SCIENCE_SCHOOL_FORM_URL, SCIENCE_SCHOOL_OPEN } from "@/lib/constants";

type ApplyButtonProps = {
  /** lg はページ末尾のクロージングCTA用 */
  size?: "md" | "lg";
  /** ボタン下の補足テキスト（省略時は非表示） */
  note?: string;
  className?: string;
};

/**
 * Googleフォームへの応募ボタン（ページ内共通）。
 * 募集終了時は lib/constants.ts の SCIENCE_SCHOOL_OPEN を false にすれば、
 * 全箇所が「募集は終了しました」の表示に切り替わる。
 */
export function ApplyButton({ size = "md", note, className = "" }: ApplyButtonProps) {
  // モバイルでラベルが2行に折れないよう、狭い画面では文字・余白を詰める
  const sizeClass =
    size === "lg"
      ? "h-[64px] px-[22px] text-[16px] sm:h-[84px] sm:px-[52px] sm:text-[24px]"
      : "h-[60px] px-[22px] text-[16px] sm:h-[68px] sm:px-[38px] sm:text-[19px]";

  if (!SCIENCE_SCHOOL_OPEN) {
    return (
      <div className={className}>
        <p
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-[51px] bg-egg-gray-light font-bold text-[#333]/60 ${sizeClass}`}
        >
          本募集は終了しました
        </p>
        <p className="mt-[12px] text-[13px] text-egg-gray">
          次回の募集情報はお知らせページと公式LINEでご案内します。
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <a
        href={SCIENCE_SCHOOL_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center justify-center gap-[12px] whitespace-nowrap rounded-[51px] bg-egg-red font-bold text-white sm:gap-[14px] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e45c5e] hover:shadow-lg ${sizeClass}`}
      >
        Googleフォームから応募する
        <svg
          width="25"
          height="10"
          viewBox="0 0 25 10"
          fill="none"
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M0 5h23M18 1l5 4-5 4" stroke="currentColor" strokeWidth="1.8" fill="none" />
        </svg>
      </a>
      {note && <p className="mt-[12px] text-[13px] leading-[1.7] text-egg-gray">{note}</p>}
    </div>
  );
}
