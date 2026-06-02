import Image from "next/image";

type SectionTitleProps = {
  english: string;
  japanese: string;
  englishColor?: string;
  align?: "left" | "center";
  showIcon?: boolean;
};

export function SectionTitle({
  english,
  japanese,
  englishColor = "text-egg-blue",
  align = "left",
  showIcon = true,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-8`}>
      {showIcon && (
        <div className={`flex items-center gap-2 mb-1 ${align === "center" ? "justify-center" : ""}`}>
          <Image
            src="/images/logo/hero-egg-logomark.png"
            alt=""
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm font-bold text-egg-gray">{english}</span>
        </div>
      )}
      {!showIcon && (
        <p className={`text-[80px] font-bold leading-none ${englishColor} mb-4`}>
          {english}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-egg-dark">
        {japanese}
      </h2>
    </div>
  );
}
