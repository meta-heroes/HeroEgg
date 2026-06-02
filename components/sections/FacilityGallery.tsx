"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

/**
 * 店舗画像ギャラリー：メイン画像＋サムネイルカルーセル。
 * - images 指定時：実画像を表示。自動切替＋サムネイルクリックで切替。
 * - images 未指定時：count 枚のプレースホルダー（従来動作）。
 */
export function FacilityGallery({
  count = 6,
  images,
  alt = "店舗写真",
}: {
  count?: number;
  images?: readonly string[];
  alt?: string;
}) {
  const hasImages = !!images && images.length > 0;
  const slideCount = hasImages ? images.length : count;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (i: number) => setActive(((i % slideCount) + slideCount) % slideCount),
    [slideCount]
  );

  // 自動切替（実画像のときのみ）
  useEffect(() => {
    if (!hasImages || paused || slideCount <= 1) return;
    const t = setInterval(() => setActive((p) => (p + 1) % slideCount), 4500);
    return () => clearInterval(t);
  }, [hasImages, paused, slideCount]);

  // アクティブなサムネイルを表示領域内へスクロール
  useEffect(() => {
    const el = thumbsRef.current?.querySelector<HTMLElement>(`[data-thumb="${active}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [active]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* メイン画像（クロスフェード） */}
      <div className="relative aspect-[1025/577] w-full overflow-hidden rounded-[18px] bg-egg-gray-light/40">
        {hasImages ? (
          images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1025px"
              priority={i === 0}
              className={`object-cover transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        ) : (
          <ImagePlaceholder className="h-full w-full" />
        )}
      </div>

      {/* サムネイル（横スクロールカルーセル） */}
      <div
        ref={thumbsRef}
        className="mt-[20px] flex gap-[16px] overflow-x-auto pb-2 [scrollbar-width:thin]"
      >
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            data-thumb={i}
            onClick={() => goTo(i)}
            aria-label={`店舗画像 ${i + 1}`}
            aria-pressed={active === i}
            className={`relative aspect-[286/161] w-[200px] shrink-0 overflow-hidden rounded-[12px] border-2 transition-all duration-300 sm:w-[286px] ${
              active === i ? "border-egg-blue opacity-100" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            {hasImages ? (
              <Image
                src={images[i]}
                alt={`${alt} サムネイル ${i + 1}`}
                fill
                sizes="286px"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder className="h-full w-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
