"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAutoSlide } from "@/hooks/useAutoSlide";
import { categoryTagClass, type BlogCardData } from "@/lib/blog-utils";

export function TopicsSection({ posts }: { posts: BlogCardData[] }) {
  const { ref, isVisible } = useIntersectionObserver();
  const { currentIndex, goTo, pause, resume } = useAutoSlide(Math.max(posts.length, 1), 5000);

  if (posts.length === 0) return null;

  return (
    <section id="topics" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-egg-green rounded-l-[60px] ml-[60px] md:ml-[120px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-[1440px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-white text-[48px] md:text-[80px] font-bold leading-none mb-2">
          Topics
        </p>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#333] mb-4">
          トピック一覧
        </h2>
        <div className="mb-8">
          <Button color="dark" href="/news">
            もっと見る
            <svg width="22" height="14" viewBox="0 0 22 14" className="ml-1">
              <path d="M0 7h20M13 1l7 6-7 6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </Button>
        </div>

        <div
          className="overflow-visible"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex} * (min(435px, 80vw) + 24px)))`,
            }}
          >
            {posts.map((topic) => (
              <Link
                key={topic.id}
                href={`/news/${topic.id}`}
                className="flex-shrink-0 w-[min(435px,80vw)] bg-white rounded-[30px] shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-52 rounded-lg overflow-hidden mb-4 bg-egg-gray-light">
                  {topic.eyecatchUrl ? (
                    <Image
                      src={topic.eyecatchUrl}
                      alt=""
                      fill
                      sizes="435px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder className="w-full h-full rounded-lg" />
                  )}
                </div>
                <p className="text-[#333] text-[20px] font-normal mb-2 text-right">
                  {topic.date}
                </p>
                <div className="border-t border-egg-gray-light pt-3 mb-3">
                  <p className="text-[#333] text-[24px] font-bold leading-[40px] line-clamp-2">
                    {topic.title}
                  </p>
                </div>
                {topic.category && (
                  <span className={`inline-block px-4 py-1.5 rounded-full text-[15px] font-bold ${categoryTagClass(topic.category)}`}>
                    {topic.category}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {posts.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
                aria-label={`スライド ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
