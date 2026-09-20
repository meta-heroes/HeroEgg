import Image from "next/image";
import { ApplyButton } from "@/components/sections/ScienceSchoolApply";
import { GenkiLaboWordmark } from "@/components/sections/GenkiLaboWordmark";

/** ファーストビュー直下に並べる募集条件のサマリー（本文の募集要項と重複させない粒度） */
const QUICK_FACTS = [
  { label: "勤務頻度", value: "月4回程度" },
  { label: "契約形態", value: "業務委託" },
  { label: "対象", value: "小中学生" },
  { label: "勤務地", value: "なんばパークス1F" },
];

/**
 * 講師募集ページのファーストビュー。
 * 「科学を教える人ではなく、科学を好きにさせる人へ」という世界観を
 * 最初の一画面で伝えきることを優先し、募集条件は要点のみを添える。
 */
export function ScienceSchoolHero() {
  return (
    <section className="relative z-10 px-6 pt-[110px] pb-[56px] sm:pt-[170px] lg:pb-[90px]">
      <div className="mx-auto max-w-[1240px]">
        {/* パートナーロックアップ */}
        <div className="animate-fade-in-up flex items-center justify-center gap-[14px] lg:justify-start">
          <Image
            src="/images/logo/hero-egg-logo.png"
            alt="Hero Egg"
            width={238}
            height={69}
            priority
            className="h-[30px] w-auto sm:h-[38px]"
          />
          <span className="text-[18px] font-bold text-egg-gray sm:text-[22px]">×</span>
          <GenkiLaboWordmark className="text-[19px] sm:text-[24px]" />
        </div>

        <div className="mt-[34px] grid items-center gap-[44px] lg:mt-[48px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-[64px]">
          {/* ===== 左：コピー ===== */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <span className="inline-flex items-center gap-[10px] rounded-full bg-egg-blue px-[20px] py-[9px] text-[13px] font-bold tracking-[0.08em] text-white shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.18)] sm:text-[15px]">
              <span className="h-[7px] w-[7px] rounded-full bg-white" />
              サイエンススクール講師募集
            </span>

            <h1 className="mt-[22px] text-[31px] font-bold leading-[1.42] tracking-[0.01em] text-[#333] sm:text-[42px] lg:text-[52px]">
              科学で、子どもの
              <br />
              <span className="bg-[linear-gradient(transparent_62%,#fed649_62%)]">
                目の色を変える
              </span>
              仕事。
            </h1>

            <p className="mt-[26px] text-[17px] font-bold leading-[1.9] sm:text-[21px]">
              <span className="text-[#333]/70">「科学を教える人」ではなく、</span>
              <br />
              <span className="text-[#2a9cba]">「科学を好きにさせる人」へ。</span>
            </p>

            <p className="mx-auto mt-[24px] max-w-[560px] text-[15px] leading-[2] tracking-[0.03em] text-[#333]/85 sm:text-[16px] lg:mx-0">
              Hero Egg × GENKI LABOでは、小中学生に科学や実験の楽しさを届ける
              <strong className="font-bold text-[#333]">サイエンススクール講師</strong>
              を募集します。元気先生・GENKI LABOのノウハウを学びながら、子どもたちが「もっと知りたい！」「やってみたい！」と思える原体験を、一緒につくりませんか？
            </p>

            <div className="mt-[34px] flex justify-center lg:justify-start">
              <ApplyButton />
            </div>

            {/* 募集条件のサマリー */}
            <dl className="mt-[32px] grid grid-cols-2 gap-[10px] sm:flex sm:flex-wrap sm:gap-[12px] lg:justify-start">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[14px] border border-egg-gray-light bg-white/80 px-[14px] py-[10px] text-left"
                >
                  <dt className="text-[11px] tracking-[0.06em] text-egg-gray">{fact.label}</dt>
                  <dd className="mt-[2px] text-[14px] font-bold text-[#333] sm:text-[15px]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ===== 右：ビジュアル ===== */}
          <div className="animate-fade-in-up relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[30px] border-[8px] border-egg-blue bg-egg-gray-light shadow-[0px_20px_46px_-18px_rgba(0,0,0,0.35)] sm:aspect-[5/6] lg:border-[10px]">
              <Image
                src="/images/events/event-4.png"
                alt="Hero Eggの教室で授業に見入る子どもたち"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>

            {/* 吹き出し風のコピー */}
            <div className="absolute -bottom-[18px] left-[8px] rotate-[-3deg] rounded-[18px] bg-egg-yellow px-[18px] py-[12px] shadow-[0px_6px_18px_rgba(0,0,0,0.18)] sm:left-[24px] sm:px-[24px] sm:py-[15px]">
              <p className="text-[14px] font-bold leading-[1.5] text-[#333] sm:text-[17px]">
                「なんで？」があふれる教室を、
                <br />
                一緒につくる。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
