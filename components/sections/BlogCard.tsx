import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/lib/microcms";
import { formatBlogDate, categoryTagClass } from "@/lib/blog-utils";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

/** お知らせ一覧の記事カード（Figma「Group 12」準拠） */
export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/news/${blog.id}`}
      className="group block rounded-[14px] transition-transform duration-300 hover:-translate-y-1"
    >
      {/* アイキャッチ */}
      <div className="relative aspect-[313/181] w-full overflow-hidden rounded-[14px] bg-egg-gray-light">
        {blog.eyecatch ? (
          <Image
            src={blog.eyecatch.url}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 314px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder className="h-full w-full" />
        )}
      </div>

      {/* 日付 ＋ カテゴリ */}
      <div className="mt-[18px] flex items-center justify-between gap-2">
        <time className="text-[16px] text-[#333]">{formatBlogDate(blog.publishedAt ?? blog.createdAt)}</time>
        {blog.category && (
          <span
            className={`inline-flex shrink-0 items-center rounded-full px-3 py-[3px] text-[13px] font-bold ${categoryTagClass(
              blog.category.name,
            )}`}
          >
            {blog.category.name}
          </span>
        )}
      </div>

      {/* 区切り線 */}
      <div className="mt-[12px] h-px w-full bg-egg-gray-light" />

      {/* タイトル */}
      <h3 className="mt-[14px] line-clamp-2 text-[18px] font-bold leading-[1.6] text-[#333] transition-colors group-hover:text-egg-blue">
        {blog.title}
      </h3>
    </Link>
  );
}
