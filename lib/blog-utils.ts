/**
 * ブログ表示用のクライアント安全ユーティリティ。
 * （microcms.ts は server-only のため、クライアントコンポーネントからは本ファイルを参照する）
 */

/** トップのTopics/Newsセクションへ渡す軽量なカードデータ */
export type BlogCardData = {
  id: string;
  title: string;
  /** YYYY.MM.DD 形式 */
  date: string;
  /** カテゴリ名 */
  category?: string;
  /** アイキャッチ画像URL */
  eyecatchUrl?: string;
};

/** ISO日時を YYYY.MM.DD 形式に（サイト共通の日付表記） */
export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
}

/** カテゴリ名に応じたタグ配色（サイトのブランドカラーに割り当て） */
export function categoryTagClass(name?: string): string {
  switch (name) {
    case "更新情報":
      return "bg-egg-blue text-white";
    case "テクノロジー":
      return "bg-egg-orange text-white";
    case "チュートリアル":
      return "bg-egg-green text-white";
    default:
      return "bg-egg-gray text-white";
  }
}
