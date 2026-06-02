import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/sections/BlogCard";
import { NewsFilters } from "@/components/sections/NewsFilters";
import { getBlogs, getCategories, BLOG_PER_PAGE } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "お知らせ | Hero Egg",
  description:
    "Hero Eggの最新情報・プレスリリース・イベントレポート・メディア掲載などのお知らせ一覧です。",
};

/** 背景の卵装飾（施設ページと共通の座標・回転） */
const BG_EGGS = [
  { color: "red", src: "/images/decorations/egg-red.png", left: "265px", top: "-143px", size: 530, rotate: 84.1, delay: 0 },
  { color: "yellow", src: "/images/decorations/egg-yellow.png", left: "884px", top: "-90px", size: 453, rotate: 125.5, delay: 1.2 },
  { color: "green", src: "/images/decorations/egg-green.png", left: "226px", top: "83px", size: 657, rotate: 17.5, delay: 0.6 },
  { color: "blue", src: "/images/decorations/egg-blue.png", left: "1452px", top: "356px", size: 587, rotate: -124.7, delay: 1.8 },
  { color: "orange", src: "/images/decorations/egg-orange.png", left: "1320px", top: "238px", size: 689, rotate: -16.4, delay: 0.3 },
] as const;

const EGG_DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

type SearchParams = {
  category?: string;
  q?: string;
  year?: string;
  page?: string;
};

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { category, q, year, page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const offset = (currentPage - 1) * BLOG_PER_PAGE;

  const [categories, list] = await Promise.all([
    getCategories(),
    getBlogs({ limit: BLOG_PER_PAGE, offset, categoryId: category, q, year }),
  ]);

  const totalPages = Math.max(1, Math.ceil(list.totalCount / BLOG_PER_PAGE));
  const activeCategory = categories.find((c) => c.id === category);
  const heading = activeCategory?.name ?? (q ? `「${q}」の検索結果` : "すべてのお知らせ");

  // 年フィルタの選択肢（直近5年）
  const thisYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => String(thisYear - i));

  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa] pb-[120px]">
        {/* ===== 背景の卵装飾 ===== */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden" aria-hidden="true">
          {BG_EGGS.map((egg) => (
            <div
              key={egg.color}
              className="absolute animate-float"
              style={{ left: egg.left, top: egg.top, width: egg.size, height: egg.size, animationDelay: `${egg.delay}s` }}
            >
              <div className="relative h-full w-full" style={{ transform: `rotate(${egg.rotate}deg)` }}>
                <Image src={egg.src} alt="" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* ===== ページタイトル ===== */}
        <section className="animate-fade-in-up relative z-10 pt-[200px] pb-[60px] text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Image src="/images/logo/hero-egg-logomark.png" alt="" width={59} height={59} className="rounded-full" />
            <span className="text-[24px] text-[#333]">News</span>
          </div>
          <h1 className="text-[44px] font-bold text-[#333] sm:text-[64px]">お知らせ</h1>
        </section>

        {/* ===== メイン白カード ===== */}
        <div className="relative z-10 mx-auto max-w-[1342px] rounded-[39px] bg-white px-[24px] py-[60px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[60px] lg:px-[100px] lg:py-[80px]">
          {/* 最新情報 見出し */}
          <div className="mb-[40px]">
            <div className="mb-[18px] flex items-center gap-[4px]">
              {EGG_DOTS.map((src, i) => (
                <Image key={i} src={src} alt="" width={20} height={20} className="h-[20px] w-[20px]" />
              ))}
            </div>
            <h2 className="text-[36px] font-medium text-[#333] lg:text-[48px]">最新情報</h2>
          </div>

          {/* フィルタ */}
          <NewsFilters
            categories={categories.map((c) => ({ id: c.id, name: c.name }))}
            years={years}
          />

          {/* カテゴリ見出し */}
          <h3 className="mb-[30px] mt-[40px] text-[28px] font-medium text-[#333] lg:text-[32px]">{heading}</h3>

          {/* 記事グリッド */}
          {list.contents.length === 0 ? (
            <p className="py-[60px] text-center text-[18px] text-egg-gray">該当するお知らせはありません。</p>
          ) : (
            <div className="grid grid-cols-1 gap-x-[24px] gap-y-[50px] sm:grid-cols-2 lg:grid-cols-3">
              {list.contents.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}

          {/* ページネーション */}
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} params={{ category, q, year }} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ===== ページネーション ===== */
function buildHref(page: number, params: { category?: string; q?: string; year?: string }) {
  const sp = new URLSearchParams();
  if (params.category) sp.set("category", params.category);
  if (params.q) sp.set("q", params.q);
  if (params.year) sp.set("year", params.year);
  if (page > 1) sp.set("page", String(page));
  const query = sp.toString();
  return query ? `/news?${query}` : "/news";
}

function Pagination({
  currentPage,
  totalPages,
  params,
}: {
  currentPage: number;
  totalPages: number;
  params: { category?: string; q?: string; year?: string };
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const circle =
    "flex h-[46px] w-[46px] items-center justify-center rounded-full text-[20px] font-bold transition-colors";

  return (
    <nav className="mt-[70px] flex items-center justify-center gap-[24px]" aria-label="ページ送り">
      {currentPage > 1 && (
        <Link href={buildHref(currentPage - 1, params)} className={`${circle} text-egg-blue hover:bg-egg-blue/10`} aria-label="前のページ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
      {pages.map((p) => (
        <Link
          key={p}
          href={buildHref(p, params)}
          aria-current={p === currentPage}
          className={`${circle} ${p === currentPage ? "bg-egg-blue text-white" : "text-[#333] hover:bg-egg-blue/10"}`}
        >
          {p}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link href={buildHref(currentPage + 1, params)} className={`${circle} text-egg-blue hover:bg-egg-blue/10`} aria-label="次のページ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </nav>
  );
}
