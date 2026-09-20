import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScienceSchoolHero } from "@/components/sections/ScienceSchoolHero";
import { ScienceSchoolBody } from "@/components/sections/ScienceSchoolBody";
import { SCIENCE_SCHOOL_FORM_URL } from "@/lib/constants";

const TITLE = "サイエンススクール講師募集 | Hero Egg × GENKI LABO";
const DESCRIPTION =
  "「科学を教える人」ではなく「科学を好きにさせる人」へ。Hero Egg × GENKI LABOが、小中学生向けサイエンススクールの講師を募集します。月4回程度・業務委託・勤務地はeスタジアムなんば本店 Hero Egg。";

/** 求人の掲載開始日（JobPosting 構造化データ用）。公開日に合わせて更新する。 */
const POSTED_DATE = "2026-09-20";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
  },
};

export default function ScienceSchoolRecruitPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa]">
        {/* ===== 背景の卵装飾（about / company / contact と同一） ===== */}
        <BackgroundEggs />

        <ScienceSchoolHero />
        <ScienceSchoolBody />
      </main>
      <Footer />
      <JobPostingJsonLd />
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
            opacity: 0.4,
          }}
        >
          <Image src={`/images/decorations/${e.src}.png`} alt="" fill sizes="700px" className="object-contain" />
        </div>
      ))}
    </div>
  );
}

/** Google しごと検索向けの求人構造化データ。掲載内容を変えたらここも合わせる。 */
function JobPostingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "サイエンススクール講師",
    description:
      "<p>小中学生を対象とした科学・実験スクールの講師です。カリキュラムに沿って実験を交えた授業を行い、授業前後の準備・片付け、GENKI LABO・元気先生によるオンラインレクチャーへの参加をお願いします。</p>",
    datePosted: POSTED_DATE,
    employmentType: "CONTRACTOR",
    directApply: false,
    applicantLocationRequirements: { "@type": "Country", name: "JP" },
    hiringOrganization: {
      "@type": "Organization",
      name: "株式会社Hero Egg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        postalCode: "556-0011",
        addressCountry: "JP",
        addressRegion: "大阪府",
        addressLocality: "大阪市浪速区",
        streetAddress: "難波中2丁目10-70 なんばパークス1F eスタジアムなんば本店内",
      },
    },
    url: SCIENCE_SCHOOL_FORM_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
