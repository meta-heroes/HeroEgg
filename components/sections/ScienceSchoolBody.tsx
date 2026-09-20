"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { ApplyButton } from "@/components/sections/ScienceSchoolApply";
import { GenkiLaboWordmark } from "@/components/sections/GenkiLaboWordmark";
import {
  SCIENCE_SCHOOL_DUTIES,
  SCIENCE_SCHOOL_FLOW,
  SCIENCE_SCHOOL_MOMENTS,
  SCIENCE_SCHOOL_PARTNERS,
  SCIENCE_SCHOOL_TERMS,
  SCIENCE_SCHOOL_WELCOME,
} from "@/lib/constants";

const EGG_DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

/** ページ内ジャンプナビ（アンカーは下の各 section id と対応） */
const PAGE_NAV = [
  { label: "スクールについて", id: "about-school" },
  { label: "お仕事内容", id: "work" },
  { label: "募集条件", id: "terms" },
  { label: "歓迎する人物像", id: "welcome" },
  { label: "応募について", id: "apply" },
];

export function ScienceSchoolBody() {
  const rootRef = useRef<HTMLDivElement>(null);

  // スクロール連動フェードイン（globals.css の .animate-on-scroll を利用）
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative z-10">
      {/* ===== ページ内ジャンプナビ ===== */}
      <nav
        aria-label="ページ内メニュー"
        className="mx-auto mb-[28px] max-w-[1342px] px-[16px] sm:px-[24px]"
      >
        <ul className="flex flex-wrap justify-center gap-[8px] sm:gap-[10px]">
          {PAGE_NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex items-center rounded-full border border-egg-gray-light bg-white px-[16px] py-[9px] text-[13px] font-bold text-[#333] transition-colors hover:border-egg-blue hover:text-egg-blue sm:text-[14px]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===================================================================
          白カード 1：スクールについて／お仕事内容／募集条件
          ================================================================= */}
      <div className="mx-auto max-w-[1342px] rounded-[39px] bg-white px-[24px] py-[56px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[60px] lg:px-[110px] lg:py-[80px]">
        {/* ----- 科学の楽しさを、子どもたちへ ----- */}
        <section id="about-school" className="scroll-mt-[110px]">
          <SectionHead eyebrow="About the school" title="科学の楽しさを、子どもたちへ。" />

          <div className="animate-on-scroll">
            <p className="text-[16px] leading-[2] tracking-[0.03em] text-[#333] sm:text-[18px]">
              ただ知識を伝えるだけの授業ではありません。
              <br />
              Hero Eggがつくりたいのは、
              <strong className="font-bold">子どもたちが科学を好きになるきっかけ</strong>
              です。
            </p>
          </div>

          <ul className="mt-[36px] grid gap-[18px] md:auto-rows-fr md:grid-cols-3 lg:mt-[48px] lg:gap-[22px]">
            {SCIENCE_SCHOOL_MOMENTS.map((moment, i) => (
              <li
                key={moment.no}
                className="animate-on-scroll h-full rounded-[14px] bg-[#fafafa] p-[26px] lg:p-[30px]"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start gap-[14px]">
                  <CardNumber>{moment.no}</CardNumber>
                  <p className="pt-[3px] text-[20px] font-bold leading-[1.4] text-[#333] lg:text-[23px]">
                    {moment.title}
                  </p>
                </div>
                <p className="mt-[18px] text-[14px] leading-[1.9] text-[#333]/75 lg:text-[15px]">
                  {moment.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="animate-on-scroll mt-[36px] rounded-[22px] bg-egg-blue/10 p-[24px] lg:mt-[44px] lg:p-[32px]">
            <p className="text-[15px] leading-[2] tracking-[0.03em] text-[#333] sm:text-[16px]">
              GENKI LABO・元気先生によるレクチャーを受けながら、子どもたちに科学のワクワクを届けていただきます。
              <strong className="font-bold">
                はじめから「教えるプロ」である必要はありません。
              </strong>
            </p>
          </div>
        </section>

        {/* ----- お仕事内容 ----- */}
        <section id="work" className="mt-[72px] scroll-mt-[110px] lg:mt-[110px]">
          <SectionHead eyebrow="Job description" title="お仕事内容" />

          <div className="animate-on-scroll">
            <p className="text-[16px] leading-[2] tracking-[0.03em] text-[#333] sm:text-[18px]">
              小中学生を対象とした、科学・実験スクールの講師を担当していただきます。
            </p>
          </div>

          <ol className="mt-[32px] grid gap-[18px] md:auto-rows-fr md:grid-cols-2 lg:mt-[44px] lg:gap-[22px]">
            {SCIENCE_SCHOOL_DUTIES.map((duty, i) => (
              <li
                key={duty.no}
                className="animate-on-scroll h-full rounded-[14px] bg-[#fafafa] p-[26px] lg:p-[30px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-[14px]">
                  <CardNumber>{duty.no}</CardNumber>
                  <h3 className="pt-[4px] text-[17px] font-bold leading-[1.55] text-[#333] lg:text-[19px]">
                    {duty.title}
                  </h3>
                </div>
                <p className="mt-[18px] text-[14px] leading-[1.9] text-[#333]/75 lg:text-[15px]">
                  {duty.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ----- 募集条件 ----- */}
        <section id="terms" className="mt-[72px] scroll-mt-[110px] lg:mt-[110px]">
          <SectionHead eyebrow="Conditions" title="募集条件" />

          <dl className="animate-on-scroll overflow-hidden rounded-[22px] border border-egg-gray-light">
            {SCIENCE_SCHOOL_TERMS.map((term, i) => (
              <div
                key={term.label}
                className={`flex flex-col gap-[6px] p-[20px] sm:flex-row sm:items-start sm:gap-[24px] sm:p-[24px] ${
                  i > 0 ? "border-t border-egg-gray-light" : ""
                }`}
              >
                <dt className="shrink-0 text-[14px] font-bold text-egg-blue sm:w-[160px] sm:pt-[2px] sm:text-[15px]">
                  {term.label}
                </dt>
                <dd className="flex-1">
                  <p className="text-[16px] font-bold leading-[1.7] text-[#333] sm:text-[17px]">
                    {term.value}
                  </p>
                  {term.note && (
                    <p className="mt-[8px] text-[13px] leading-[1.8] text-[#333]/65 sm:text-[14px]">
                      ※{term.note}
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {/* ===================================================================
          全幅バンド：歓迎する人物像＋世界観コピー
          ================================================================= */}
      <section
        id="welcome"
        className="relative mt-[80px] scroll-mt-[110px] overflow-hidden bg-[#262626] py-[64px] lg:mt-[120px] lg:py-[100px]"
      >
        {/* 背景の卵（暗色バンド上のアクセント） */}
        <div className="pointer-events-none absolute -right-[80px] -top-[60px] h-[320px] w-[320px] rotate-[24deg] opacity-[0.12] lg:h-[460px] lg:w-[460px]">
          <Image src="/images/decorations/egg-blue.png" alt="" fill sizes="460px" className="object-contain" />
        </div>
        <div className="pointer-events-none absolute -bottom-[90px] -left-[70px] h-[300px] w-[300px] rotate-[-18deg] opacity-[0.10] lg:h-[420px] lg:w-[420px]">
          <Image src="/images/decorations/egg-orange.png" alt="" fill sizes="420px" className="object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1100px] px-[24px] lg:px-[40px]">
          <div className="animate-on-scroll text-center">
            <p className="text-[13px] font-bold tracking-[0.18em] text-egg-yellow sm:text-[15px]">
              WHO WE ARE LOOKING FOR
            </p>
            <h2 className="mt-[12px] text-[28px] font-bold leading-[1.5] text-white sm:text-[38px] lg:text-[44px]">
              こんな方を歓迎します
            </h2>
          </div>

          {/* 大きく入れたい世界観コピー */}
          <blockquote className="animate-on-scroll mx-auto mt-[40px] max-w-[760px] text-center lg:mt-[56px]">
            <p className="text-[21px] font-bold leading-[1.85] text-white sm:text-[28px] lg:text-[34px]">
              必要なのは、
              <br />
              科学の知識
              <span className="text-egg-gray">だけ</span>
              ではありません。
            </p>
            <p className="mt-[18px] text-[19px] font-bold leading-[1.85] text-egg-yellow sm:text-[26px] lg:text-[32px]">
              子どもの「なんで？」を
              <br className="sm:hidden" />
              一緒に楽しめること。
            </p>
          </blockquote>

          <p className="animate-on-scroll mx-auto mt-[32px] max-w-[640px] text-center text-[14px] leading-[2] text-white/70 sm:text-[16px]">
            理系の専門知識だけではなく、「子どもに科学を好きになってほしい」という想いを大切にしています。
          </p>

          <ul className="mt-[40px] grid gap-[12px] md:grid-cols-2 lg:mt-[52px] lg:gap-[16px]">
            {SCIENCE_SCHOOL_WELCOME.map((item, i) => (
              <li
                key={item}
                className="animate-on-scroll flex items-start gap-[14px] rounded-[16px] bg-white/[0.06] p-[18px] lg:p-[22px]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <CheckIcon />
                <span className="text-[14px] leading-[1.7] text-white sm:text-[16px]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="animate-on-scroll mt-[32px] text-center text-[13px] leading-[1.9] text-white/55 sm:text-[14px]">
            すべてに当てはまらなくても構いません。ひとつでも当てはまる方は、ぜひご相談ください。
          </p>
        </div>
      </section>

      {/* ===================================================================
          白カード 2：GENKI LABO × Hero Egg ／ 応募・選考フロー
          ================================================================= */}
      <div className="mx-auto mt-[80px] max-w-[1342px] rounded-[39px] bg-white px-[24px] py-[56px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[60px] lg:mt-[120px] lg:px-[110px] lg:py-[80px]">
        {/* ----- GENKI LABO × Hero Egg ----- */}
        <section id="partners" className="scroll-mt-[110px]">
          <SectionHead
            eyebrow="Why us"
            title={
              <>
                GENKI LABO × Hero Egg
                <br className="sm:hidden" />
                だからできること
              </>
            }
          />

          <div className="grid gap-[18px] md:auto-rows-fr md:grid-cols-2 lg:gap-[22px]">
            {SCIENCE_SCHOOL_PARTNERS.map((partner, i) => (
              <div
                key={partner.name}
                className="animate-on-scroll h-full rounded-[14px] bg-[#fafafa] p-[28px] lg:p-[34px]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex h-[32px] items-center">
                  {partner.name === "GENKI LABO" ? (
                    <GenkiLaboWordmark className="text-[20px] lg:text-[22px]" />
                  ) : (
                    <Image
                      src="/images/logo/hero-egg-logo.png"
                      alt="Hero Egg"
                      width={238}
                      height={69}
                      className="h-[28px] w-auto"
                    />
                  )}
                </div>
                <div className="mt-[20px] flex items-center">
                  <div
                    className="h-[3px] w-[30px] rounded-full"
                    style={{ backgroundColor: partner.accent }}
                  />
                  <div className="h-px flex-1 bg-egg-gray-light" />
                </div>
                <p className="mt-[18px] text-[18px] font-bold leading-[1.6] text-[#333] lg:text-[20px]">
                  {partner.lead}
                </p>
                <p className="mt-[12px] text-[14px] leading-[1.95] text-[#333]/75 lg:text-[15px]">
                  {partner.body}
                </p>
              </div>
            ))}
          </div>

          {/* 2つが一緒になることで */}
          <div className="animate-on-scroll mt-[28px] overflow-hidden rounded-[24px] bg-gradient-to-r from-egg-blue to-egg-yellow p-[2px] lg:mt-[36px]">
            <div className="rounded-[22px] bg-white px-[26px] py-[34px] text-center lg:px-[40px] lg:py-[48px]">
              <p className="text-[13px] font-bold tracking-[0.1em] text-egg-gray sm:text-[14px]">
                2つが一緒になることで
              </p>
              <p className="mt-[16px] text-[21px] font-bold leading-[1.7] text-[#333] sm:text-[28px] lg:text-[34px]">
                科学を
                <span className="text-egg-gray">学ぶ</span>
                場所ではなく、
                <br />
                科学を
                <span className="bg-[linear-gradient(transparent_62%,#fed649_62%)]">
                  好きになる
                </span>
                場所へ。
              </p>
              <p className="mt-[18px] text-[14px] leading-[1.95] text-[#333]/75 sm:text-[15px]">
                子どもたちの未来につながる新しいサイエンススクールを、一緒につくっていきます。
              </p>
            </div>
          </div>
        </section>

        {/* ----- 応募について ----- */}
        <section id="apply" className="mt-[72px] scroll-mt-[110px] lg:mt-[110px]">
          <SectionHead eyebrow="How to apply" title="応募について" />

          <div className="grid gap-[18px] md:grid-cols-2 lg:gap-[24px]">
            <div className="animate-on-scroll rounded-[22px] border-[2px] border-egg-red bg-white p-[24px] lg:p-[30px]">
              <span className="inline-flex items-center rounded-full bg-egg-red px-[14px] py-[6px] text-[12px] font-bold text-white">
                提出必須
              </span>
              <p className="mt-[16px] text-[18px] font-bold text-[#333] lg:text-[20px]">
                履歴書（PDF）
              </p>
              <p className="mt-[10px] text-[14px] leading-[1.9] text-[#333]/75">
                Googleフォームの該当項目からアップロードしてください。
              </p>
            </div>
            <div className="animate-on-scroll rounded-[22px] border border-egg-gray-light bg-white p-[24px] lg:p-[30px]">
              <span className="inline-flex items-center rounded-full bg-egg-gray-light px-[14px] py-[6px] text-[12px] font-bold text-[#333]">
                任意提出
              </span>
              <p className="mt-[16px] text-[18px] font-bold text-[#333] lg:text-[20px]">
                経験が分かる資料
              </p>
              <p className="mt-[10px] text-[14px] leading-[1.9] text-[#333]/75">
                研究・実験・指導経験などが分かる資料があれば、あわせてご提出ください。
              </p>
            </div>
          </div>

          {/* 選考フロー */}
          <h3 className="animate-on-scroll mt-[48px] text-[20px] font-bold text-[#333] lg:mt-[64px] lg:text-[24px]">
            選考フロー
          </h3>
          <ol className="mt-[24px] grid gap-[14px] md:grid-cols-4 lg:gap-[18px]">
            {SCIENCE_SCHOOL_FLOW.map((step, i) => (
              <li
                key={step.no}
                className="animate-on-scroll relative rounded-[20px] bg-[#fafafa] p-[22px] lg:p-[26px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-[12px] font-bold tracking-[0.12em] text-egg-blue">
                  STEP {step.no}
                </span>
                <p className="mt-[10px] text-[16px] font-bold leading-[1.5] text-[#333] lg:text-[17px]">
                  {step.title}
                </p>
                <p className="mt-[10px] text-[13px] leading-[1.85] text-[#333]/75 lg:text-[14px]">
                  {step.body}
                </p>
                {i < SCIENCE_SCHOOL_FLOW.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 text-egg-blue md:-right-[13px] md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 2l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="origin-center rotate-90 md:rotate-0"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>

          <p className="animate-on-scroll mt-[28px] text-[13px] leading-[1.9] text-[#333]/60 sm:text-[14px]">
            ※採用者が決まり次第、募集を終了します。
          </p>
        </section>
      </div>

      {/* ===================================================================
          クロージングCTA
          ================================================================= */}
      <section className="relative mt-[80px] overflow-hidden bg-egg-blue py-[64px] lg:mt-[120px] lg:py-[96px]">
        <div className="pointer-events-none absolute -bottom-[60px] -left-[40px] h-[280px] w-[280px] rotate-[18deg] opacity-25 lg:h-[380px] lg:w-[380px]">
          <Image src="/images/decorations/egg-yellow.png" alt="" fill sizes="380px" className="object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-[900px] px-[24px] text-center">
          <div className="animate-on-scroll">
            <p className="text-[16px] leading-[2] text-white/85 sm:text-[18px]">
              目の前で起きた実験に驚いたり、
              <br className="sm:hidden" />
              「なんでこうなるんだろう？」と夢中になったり。
              <br />
              そんな瞬間が、子どもの将来を変えるきっかけになるかもしれません。
            </p>
            <h2 className="mt-[28px] text-[26px] font-bold leading-[1.6] text-white sm:text-[38px] lg:text-[46px]">
              科学のワクワクを、
              <br />
              次の世代へ届けませんか？
            </h2>
          </div>

          <div className="animate-on-scroll mt-[36px] flex justify-center lg:mt-[48px]">
            <ApplyButton
              size="lg"
              note="履歴書（PDF）をご用意のうえ、Googleフォームよりご応募ください。"
              className="[&_p]:text-white/85"
            />
          </div>

          <div className="animate-on-scroll mt-[44px] flex justify-center">
            <div className="inline-flex items-center gap-[14px] rounded-full bg-white px-[26px] py-[14px] shadow-[0px_6px_18px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/logo/hero-egg-logo.png"
                alt="Hero Egg"
                width={238}
                height={69}
                className="h-[26px] w-auto sm:h-[30px]"
              />
              <span className="text-[15px] font-bold text-egg-gray">×</span>
              <GenkiLaboWordmark className="text-[17px] sm:text-[19px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** セクション見出し（卵ドット＋英字ラベル＋和文見出し＋区切り線） */
function SectionHead({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <div className="animate-on-scroll mb-[32px] lg:mb-[44px]">
      <div className="mb-[14px] flex items-center gap-[4px]">
        {EGG_DOTS.map((src) => (
          <Image key={src} src={src} alt="" width={16} height={16} className="h-[16px] w-[16px]" />
        ))}
      </div>
      <p className="text-[12px] font-bold tracking-[0.14em] text-egg-gray sm:text-[13px]">
        {eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-[6px] text-balance text-[26px] font-bold leading-[1.45] text-[#333] sm:text-[34px] lg:text-[40px]">
        {title}
      </h2>
      <div className="mt-[20px] flex items-center">
        <div className="h-[3px] w-[30px] rounded-full bg-egg-blue" />
        <div className="h-px flex-1 bg-egg-gray-light" />
      </div>
    </div>
  );
}

/** カード左の連番。サイト共通のイタリック体・グループ内1色の見せ方に合わせる。 */
function CardNumber({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 font-bold italic leading-none tracking-[0.02em] text-egg-blue text-[32px] lg:text-[38px]">
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-egg-blue">
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
        <path
          d="M1 5l3.5 3.5L11 1.5"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
