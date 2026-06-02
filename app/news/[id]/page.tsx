import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getBlog, getAllBlogIds } from "@/lib/microcms";
import { formatBlogDate, categoryTagClass } from "@/lib/blog-utils";

export const revalidate = 60;
export const dynamicParams = true;

const BG_EGGS = [
  { color: "red", src: "/images/decorations/egg-red.png", left: "265px", top: "-143px", size: 530, rotate: 84.1 },
  { color: "yellow", src: "/images/decorations/egg-yellow.png", left: "884px", top: "-90px", size: 453, rotate: 125.5 },
  { color: "green", src: "/images/decorations/egg-green.png", left: "226px", top: "83px", size: 657, rotate: 17.5 },
] as const;

export async function generateStaticParams() {
  const ids = await getAllBlogIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const blog = await getBlog(id);
    const description = blog.content.replace(/<[^>]*>/g, "").slice(0, 100);
    return {
      title: `${blog.title} | お知らせ | Hero Egg`,
      description,
      openGraph: {
        title: blog.title,
        description,
        images: blog.eyecatch ? [blog.eyecatch.url] : undefined,
      },
    };
  } catch {
    return { title: "お知らせ | Hero Egg" };
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let blog;
  try {
    blog = await getBlog(id);
  } catch {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa] pb-[120px]">
        {/* 背景の卵装飾 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] overflow-hidden" aria-hidden="true">
          {BG_EGGS.map((egg) => (
            <div key={egg.color} className="absolute animate-float" style={{ left: egg.left, top: egg.top, width: egg.size, height: egg.size }}>
              <div className="relative h-full w-full" style={{ transform: `rotate(${egg.rotate}deg)` }}>
                <Image src={egg.src} alt="" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <section className="relative z-10 pt-[180px] pb-[40px] text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Image src="/images/logo/hero-egg-logomark.png" alt="" width={48} height={48} className="rounded-full" />
            <span className="text-[20px] text-[#333]">News</span>
          </div>
        </section>

        {/* 記事カード */}
        <article className="relative z-10 mx-auto max-w-[900px] rounded-[39px] bg-white px-[24px] py-[50px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:px-[50px] lg:px-[80px] lg:py-[70px]">
          {/* メタ情報 */}
          <div className="mb-[20px] flex flex-wrap items-center gap-[16px]">
            <time className="text-[16px] text-egg-gray">{formatBlogDate(blog.publishedAt ?? blog.createdAt)}</time>
            {blog.category && (
              <span className={`inline-flex items-center rounded-full px-4 py-[4px] text-[14px] font-bold ${categoryTagClass(blog.category.name)}`}>
                {blog.category.name}
              </span>
            )}
          </div>

          {/* タイトル */}
          <h1 className="mb-[36px] text-[28px] font-bold leading-[1.5] text-[#333] lg:text-[40px]">{blog.title}</h1>

          {/* アイキャッチ */}
          {blog.eyecatch && (
            <div className="relative mb-[40px] aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-egg-gray-light">
              <Image
                src={blog.eyecatch.url}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 740px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* 本文（microCMSのリッチエディタHTML） */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>

        {/* 一覧へ戻る */}
        <div className="relative z-10 mx-auto mt-[50px] flex max-w-[900px] justify-center">
          <Link
            href="/news"
            className="inline-flex h-[61px] items-center gap-3 rounded-[30px] border-2 border-[#333] px-8 text-[18px] font-bold text-[#333] transition-all hover:bg-[#333] hover:text-white"
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path d="M22 7H2M9 1L2 7l7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            お知らせ一覧へ
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
