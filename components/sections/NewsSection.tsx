"use client";

import Link from "next/link";
import { EggDecoration } from "@/components/ui/EggDecoration";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { categoryTagClass, type BlogCardData } from "@/lib/blog-utils";

export function NewsSection({ posts }: { posts: BlogCardData[] }) {
  const { ref, isVisible } = useIntersectionObserver();

  if (posts.length === 0) return null;

  return (
    <section ref={ref} id="news" className="bg-[#d7d7d7] overflow-hidden relative py-[80px] lg:py-[120px]">
      <EggDecoration color="green" size={500} top="-150px" left="-150px" opacity={0.15} rotate={20} />
      <EggDecoration color="orange" size={450} top="100px" right="-200px" opacity={0.12} rotate={-30} />
      <EggDecoration color="blue" size={350} bottom="-100px" left="30%" opacity={0.1} rotate={45} />

      <div
        className={`relative z-10 mx-auto w-full max-w-[1290px] px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white rounded-[44px] px-6 py-[50px] sm:px-[60px] lg:px-[120px] lg:py-[80px]">
          <p className="text-[#ababab] text-[48px] lg:text-[80px] font-bold leading-none mb-1">
            News
          </p>
          <p className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-[40px]">
            お知らせ
          </p>

          {/* ニュース一覧（microCMSの最新記事） */}
          <div className="border-t border-egg-gray-light">
            {posts.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="group flex flex-col gap-3 border-b border-egg-gray-light py-[22px] lg:flex-row lg:items-center lg:gap-10 lg:py-[28px]"
              >
                <div className="flex items-center gap-5 lg:w-[290px] lg:shrink-0">
                  <time className="text-[16px] lg:text-[20px] font-bold text-[#333]">{news.date}</time>
                  {news.category && (
                    <span
                      className={`inline-flex h-[32px] items-center rounded-full px-4 text-[14px] font-bold lg:h-[40px] lg:text-[16px] ${categoryTagClass(
                        news.category,
                      )}`}
                    >
                      {news.category}
                    </span>
                  )}
                </div>
                <p className="text-[16px] lg:text-[24px] font-bold leading-[1.6] text-[#333] line-clamp-2 transition-colors group-hover:text-egg-blue">
                  {news.title}
                </p>
              </Link>
            ))}
          </div>

          {/* お知らせ一覧へ */}
          <div className="mt-[40px] flex justify-end">
            <Link
              href="/news"
              className="flex items-center gap-3 text-egg-blue font-bold text-[24px] lg:text-[36px] transition-all hover:gap-5"
            >
              <span className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center lg:h-[51px] lg:w-[51px]">
                <svg viewBox="0 0 51 51" fill="none" className="h-full w-full">
                  <circle cx="25.5" cy="25.5" r="24" stroke="#54c2dc" strokeWidth="3" />
                  <path d="M20 25.5h14M28 19l6 6.5-6 6.5" stroke="#54c2dc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              お知らせ一覧へ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
