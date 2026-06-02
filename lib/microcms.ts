import "server-only";
import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import { formatBlogDate, type BlogCardData } from "@/lib/blog-utils";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error(
    "microCMS の環境変数が設定されていません。.env.local に MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください。",
  );
}

const client = createClient({ serviceDomain, apiKey });

/* ===== 型 ===== */
export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
} & MicroCMSListContent;

export type BlogList = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

/** 一覧の1ページあたり件数（Figmaの3列×3行に合わせる） */
export const BLOG_PER_PAGE = 9;

type GetBlogsParams = {
  limit?: number;
  offset?: number;
  /** カテゴリID（フィルタ） */
  categoryId?: string;
  /** 全文検索キーワード */
  q?: string;
  /** 公開年（YEARフィルタ） */
  year?: string;
};

/** ブログ一覧を取得（カテゴリ/検索/年で絞り込み、新しい順） */
export async function getBlogs({
  limit = BLOG_PER_PAGE,
  offset = 0,
  categoryId,
  q,
  year,
}: GetBlogsParams = {}): Promise<BlogList> {
  const filtersParts: string[] = [];
  if (categoryId) filtersParts.push(`category[equals]${categoryId}`);
  if (year) {
    // publishedAt が指定年の 1/1〜12/31 の範囲
    filtersParts.push(`publishedAt[greater_than]${year}-01-01T00:00:00.000Z`);
    filtersParts.push(`publishedAt[less_than]${Number(year) + 1}-01-01T00:00:00.000Z`);
  }

  return client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit,
      offset,
      orders: "-publishedAt",
      ...(filtersParts.length ? { filters: filtersParts.join("[and]") } : {}),
      ...(q ? { q } : {}),
    },
    // ISR: 60秒ごとに再検証
    customRequestInit: { next: { revalidate: 60 } },
  }) as Promise<BlogList>;
}

/** ブログ詳細を1件取得 */
export async function getBlog(contentId: string): Promise<Blog> {
  return client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    customRequestInit: { next: { revalidate: 60 } },
  });
}

/** 全ブログのIDを取得（generateStaticParams 用） */
export async function getAllBlogIds(): Promise<string[]> {
  const { contents } = await client.getList<Blog>({
    endpoint: "blogs",
    queries: { fields: "id", limit: 100 },
  });
  return contents.map((c) => c.id);
}

/** カテゴリ一覧を取得（フィルタタブ用） */
export async function getCategories(): Promise<Category[]> {
  const { contents } = await client.getList<Category>({
    endpoint: "categories",
    queries: { limit: 100, orders: "createdAt" },
    customRequestInit: { next: { revalidate: 60 } },
  });
  return contents;
}

/** Blog をトップセクション用の軽量カードデータへ変換 */
export function toBlogCardData(blog: Blog): BlogCardData {
  return {
    id: blog.id,
    title: blog.title,
    date: formatBlogDate(blog.publishedAt ?? blog.createdAt),
    category: blog.category?.name,
    eyecatchUrl: blog.eyecatch?.url,
  };
}
