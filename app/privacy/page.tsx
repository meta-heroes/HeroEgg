import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPageLayout,
  LegalH2,
  LegalP,
  LegalOL,
  LegalUL,
  LegalLI,
} from "@/components/sections/LegalPageLayout";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Hero Egg",
  description:
    "株式会社Hero Eggにおける個人情報の取扱い方針（プライバシーポリシー）です。取得する情報・利用目的・第三者提供・開示請求等について定めています。",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="プライバシーポリシー" eyebrow="Privacy" updatedAt="2026年6月4日">
      <LegalP>
        株式会社Hero Egg（以下「当社」といいます）は、当社が運営するDX教育施設「Hero Egg」、本ウェブサイトおよび関連サービス（以下「本サービス」といいます）における利用者の個人情報を、個人情報の保護に関する法律（個人情報保護法）その他の関係法令を遵守し、以下の方針に基づき適切に取り扱います。
      </LegalP>

      <LegalH2>1. 事業者情報</LegalH2>
      <LegalUL>
        <LegalLI>事業者名：株式会社Hero Egg</LegalLI>
        <LegalLI>所在地：〒530-0027 大阪府大阪市北区堂山町1-5 三共梅田ビル8F</LegalLI>
        <LegalLI>代表者：代表取締役 近藤にこる</LegalLI>
      </LegalUL>

      <LegalH2>2. 取得する個人情報</LegalH2>
      <LegalP>当社は、本サービスの提供にあたり、次の個人情報を取得することがあります。</LegalP>
      <LegalUL>
        <LegalLI>お問い合わせ・資料請求・イベント申込等の際にご入力いただく情報（氏名、フリガナ、会社・団体名、メールアドレス、電話番号、お問い合わせ内容等）</LegalLI>
        <LegalLI>施設のご利用・イベント参加に伴い取得する情報</LegalLI>
        <LegalLI>本ウェブサイトの利用に伴い自動的に取得される情報（Cookie、アクセスログ、IPアドレス、閲覧履歴、端末情報等）</LegalLI>
      </LegalUL>

      <LegalH2>3. 利用目的</LegalH2>
      <LegalP>当社は、取得した個人情報を次の目的の範囲内で利用します。</LegalP>
      <LegalUL>
        <LegalLI>本サービスの提供・運営、施設利用・イベント等の受付および実施のため</LegalLI>
        <LegalLI>お問い合わせ・資料請求等へのご対応のため</LegalLI>
        <LegalLI>サービス・イベント・キャンペーン等のご案内のため</LegalLI>
        <LegalLI>本サービスの改善、新サービスの開発、統計データの作成のため</LegalLI>
        <LegalLI>利用規約に違反する行為への対応のため</LegalLI>
        <LegalLI>上記の利用目的に付随する目的のため</LegalLI>
      </LegalUL>

      <LegalH2>4. 個人情報の第三者提供</LegalH2>
      <LegalP>
        当社は、次の場合を除き、あらかじめ利用者の同意を得ることなく、個人情報を第三者に提供しません。
      </LegalP>
      <LegalUL>
        <LegalLI>法令に基づく場合</LegalLI>
        <LegalLI>人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難な場合</LegalLI>
        <LegalLI>公衆衛生の向上または児童の健全な育成の推進のために特に必要があり、本人の同意を得ることが困難な場合</LegalLI>
        <LegalLI>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに協力する必要がある場合</LegalLI>
      </LegalUL>

      <LegalH2>5. 個人情報の取扱いの委託</LegalH2>
      <LegalP>
        当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を外部に委託することがあります。この場合、当社は委託先に対して適切な監督を行います。
      </LegalP>

      <LegalH2>6. Cookie・アクセス解析ツールについて</LegalH2>
      <LegalOL>
        <LegalLI>本ウェブサイトは、利便性の向上やアクセス状況の把握のためにCookieを使用することがあります。利用者はブラウザの設定によりCookieを無効にすることができますが、その場合本サービスの一部機能が利用できなくなることがあります。</LegalLI>
        <LegalLI>当社は、ウェブサイトの利用状況を把握するためにアクセス解析ツールを利用する場合があります。これらのツールはCookie等を利用して情報を収集しますが、個人を特定する情報は含まれません。</LegalLI>
      </LegalOL>

      <LegalH2>7. 個人情報の安全管理</LegalH2>
      <LegalP>
        当社は、取得した個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じます。
      </LegalP>

      <LegalH2>8. 開示・訂正・利用停止等の請求</LegalH2>
      <LegalP>
        利用者は、当社の保有する自己の個人情報について、開示・訂正・追加・削除・利用停止・第三者提供の停止等を請求することができます。ご請求の際は、下記のお問い合わせ窓口までご連絡ください。ご本人であることを確認のうえ、法令に従い対応いたします。
      </LegalP>

      <LegalH2>9. お問い合わせ窓口</LegalH2>
      <LegalP>
        本ポリシーに関するお問い合わせ、個人情報の取扱いに関するご請求等は、下記までご連絡ください。
      </LegalP>
      <LegalUL>
        <LegalLI>株式会社Hero Egg 個人情報お問い合わせ窓口</LegalLI>
        <LegalLI>メール：customer@meta-heroes.io</LegalLI>
        <LegalLI>
          お問い合わせフォーム：
          <Link href="/contact" className="text-egg-blue underline underline-offset-2 hover:opacity-70">
            こちら
          </Link>
        </LegalLI>
      </LegalUL>

      <LegalH2>10. プライバシーポリシーの変更</LegalH2>
      <LegalP>
        当社は、法令の変更や事業内容の変更等に応じて、本ポリシーを改定することがあります。変更後の内容は、本ウェブサイトに掲載した時点から効力を生じるものとします。
      </LegalP>

      <LegalP>以上</LegalP>
    </LegalPageLayout>
  );
}
