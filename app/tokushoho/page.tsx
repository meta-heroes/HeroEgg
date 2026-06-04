import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Hero Egg",
  description:
    "株式会社Hero Eggが提供する有料サービスに関する、特定商取引法に基づく表記です。",
};

/** 特商法の各行。value に JSX を許容（リンク・改行を含むため）。 */
const ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "販売事業者", value: "株式会社Hero Egg" },
  { label: "運営統括責任者", value: "近藤にこる" },
  {
    label: "所在地",
    value: (
      <>
        〒530-0027
        <br />
        大阪府大阪市北区堂山町1-5 三共梅田ビル8F
      </>
    ),
  },
  {
    label: "電話番号",
    value: "お問い合わせはメールまたはお問い合わせフォームより承ります。請求があった場合には遅滞なく電話番号を開示いたします。",
  },
  {
    label: "お問い合わせ",
    value: (
      <>
        メール：customer@meta-heroes.io
        <br />
        お問い合わせフォーム：
        <Link href="/contact" className="text-egg-blue underline underline-offset-2 hover:opacity-70">
          こちら
        </Link>
      </>
    ),
  },
  {
    label: "販売価格",
    value: "各サービス・イベントのご案内ページ、またはお見積り・お申込み時にご案内する金額に基づきます。価格はすべて消費税込みで表示します。",
  },
  {
    label: "商品代金以外の必要料金",
    value: "銀行振込をご利用の場合の振込手数料、その他通信・配送等に係る費用はお客様のご負担となります。",
  },
  {
    label: "お支払方法",
    value: "銀行振込、クレジットカード決済、その他当社が指定する方法によります（サービスごとに異なります）。",
  },
  {
    label: "お支払時期",
    value: "サービスごとに定める期日までにお支払いください。原則として、イベント・サービスの提供開始前のお支払いとなります。",
  },
  {
    label: "サービスの提供時期",
    value: "お申込み・お支払い確認後、各サービス・イベントのご案内に記載の日時に提供します。",
  },
  {
    label: "キャンセル・返金について",
    value: "お申込み後のキャンセルおよび返金の可否・条件は、各サービス・イベントのご案内に定めるところによります。当社の責に帰すべき事由によりサービスを提供できなかった場合は、お支払いいただいた料金を全額返金いたします。",
  },
  {
    label: "動作環境",
    value: "オンラインで提供するサービスをご利用の場合は、各サービスのご案内に記載の通信環境・端末・ブラウザ等が必要となります。",
  },
];

export default function TokushohoPage() {
  return (
    <LegalPageLayout
      title="特定商取引法に基づく表記"
      eyebrow="Legal"
      updatedAt="2026年6月4日"
    >
      <p className="mb-[32px] text-[15px] leading-[1.9] text-[#333] sm:text-[16px]">
        「特定商取引に関する法律」第11条に基づき、当社が提供する有料サービスについて以下のとおり表示します。
      </p>

      <dl className="overflow-hidden rounded-[14px] border border-egg-gray-light">
        {ROWS.map((row, i) => (
          <div
            key={row.label}
            className={`flex flex-col gap-[4px] px-[20px] py-[18px] sm:flex-row sm:gap-[24px] sm:px-[28px] sm:py-[22px] ${
              i !== 0 ? "border-t border-egg-gray-light" : ""
            }`}
          >
            <dt className="w-full flex-shrink-0 text-[14px] font-bold text-[#262626] sm:w-[220px] sm:text-[15px]">
              {row.label}
            </dt>
            <dd className="flex-1 text-[14px] leading-[1.8] text-[#333] sm:text-[15px]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </LegalPageLayout>
  );
}
