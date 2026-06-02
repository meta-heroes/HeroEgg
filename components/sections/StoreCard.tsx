"use client";

import Image from "next/image";
import { useAutoSlide } from "@/hooks/useAutoSlide";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { STORE_SOCIALS, type Store } from "@/lib/constants";

type StoreCardProps = {
  store: Store;
  /** スクロール表示アニメーションのスタッガー用 */
  index?: number;
};

export function StoreCard({ store, index = 0 }: StoreCardProps) {
  const hasImages = !!store.images && store.images.length > 0;
  const slideCount = hasImages ? store.images!.length : Math.max(store.photoCount, 1);
  const { currentIndex, goTo, pause, resume } = useAutoSlide(slideCount, 4500);
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll flex flex-col lg:flex-row gap-[28px] lg:gap-[65px] ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* ===== 写真スライダー ===== */}
      <div className="flex-shrink-0 w-full lg:w-[440px]">
        <div
          className="group relative w-full aspect-[440/351] rounded-[20px] overflow-hidden bg-egg-gray-light/40 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.2)]"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: slideCount }).map((_, i) => (
              <div key={i} className="relative w-full h-full flex-shrink-0">
                {hasImages ? (
                  <Image
                    src={store.images![i]}
                    alt={`${store.name} 写真 ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder className="w-full h-full" />
                )}
              </div>
            ))}
          </div>

          {/* 矢印（ホバーで表示） */}
          {slideCount > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo((currentIndex - 1 + slideCount) % slideCount)}
                aria-label="前の写真"
                className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/80 text-[#333] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer"
              >
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                  <path d="M8 1L2 8l6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo((currentIndex + 1) % slideCount)}
                aria-label="次の写真"
                className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/80 text-[#333] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer"
              >
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                  <path d="M1 1l6 7-6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* スライドドット */}
        {slideCount > 1 && (
          <div className="flex justify-center items-center gap-[17px] mt-[16px]">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`写真 ${i + 1} を表示`}
                aria-current={i === currentIndex}
                className={`h-[18px] rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? "w-[18px] bg-egg-blue scale-110"
                    : "w-[18px] bg-egg-gray-light hover:bg-egg-gray"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== 店舗情報 ===== */}
      <div className="flex-1 min-w-0">
        {/* 店名 + SNS */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h3 className="text-[28px] lg:text-[36px] font-medium text-[#333]">{store.name}</h3>
          <div className="flex items-center gap-[10px]">
            {STORE_SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="block w-[40px] h-[40px] rounded-full overflow-hidden transition-all hover:-translate-y-0.5 hover:opacity-80"
              >
                <Image src={s.icon} alt={s.label} width={40} height={40} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
        </div>

        {/* 区切り線 */}
        <div className="h-px bg-egg-gray-light my-[22px]" />

        {/* 詳細情報 */}
        <ul className="space-y-[20px]">
          <li className="flex items-start gap-[13px]">
            <PinIcon />
            <div className="text-[18px] lg:text-[20px] text-[#333] leading-[1.6] tracking-[2px]">
              <p>{store.zip}</p>
              {store.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </li>
          <li className="flex items-center gap-[13px]">
            <ClockIcon />
            <span className="text-[18px] lg:text-[20px] text-[#333]">{store.hours}</span>
          </li>
          <li className="flex items-center gap-[13px]">
            <UserIcon />
            <span className="text-[18px] lg:text-[20px] text-[#333]">{store.capacity}</span>
          </li>
        </ul>

        {/* ストアページボタン */}
        <a
          href={store.storeUrl}
          className="group mt-[32px] inline-flex items-center justify-between gap-3 w-[284px] max-w-full h-[51px] pl-[32px] pr-[26px] rounded-full border border-[#333] text-[#333] text-[17px] lg:text-[19px] font-medium whitespace-nowrap transition-colors duration-300 hover:bg-[#333] hover:text-white"
        >
          ストアページを見る
          <svg width="25" height="10" viewBox="0 0 25 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M0 5h23M18 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[3px] text-egg-blue" aria-hidden="true">
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-egg-blue" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-egg-blue" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 18.5a6 6 0 0 1 11 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
