"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { COMPANY_INFO } from "@/lib/constants";

/**
 * 企業情報ページ「会社概要」本体（Figma node 538:404 準拠）。
 * 左：本社オフィス写真 / 右：会社概要テーブル。
 * Figmaにアニメーション指定はないため、スクロール表示時に
 * 写真を左から、テーブル行を下から順にフェードインさせる。
 */
export function CompanyOverview() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px",
  });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-[40px] lg:flex-row lg:items-start lg:gap-[79px]"
    >
      {/* ===== 本社オフィス写真 ===== */}
      <div
        className={`group relative w-full overflow-hidden rounded-[19px] bg-egg-gray-light/30 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out lg:w-[542px] lg:flex-shrink-0 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}
      >
        <div className="relative aspect-[542/744] w-full">
          <Image
            src="/images/about/company-office.jpg"
            alt="株式会社Hero Egg なんば本店オフィス"
            fill
            sizes="(max-width: 1024px) 100vw, 542px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* ===== 会社概要テーブル ===== */}
      {/* Figmaでは各行が約103px間隔で写真の高さいっぱいに配置されているため、
          PC幅では行の天地余白を広げて同じ縦リズムを再現する。 */}
      <dl className="flex-1">
        {COMPANY_INFO.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-start gap-[16px] border-b border-egg-gray-light py-[22px] transition-all duration-500 ease-out lg:py-[40px] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${0.25 + i * 0.1}s` }}
          >
            <dt className="w-[88px] flex-shrink-0 text-[15px] font-medium text-[#333] lg:w-[112px] lg:text-[16px]">
              {row.label}
            </dt>
            <dd className="flex-1 text-[15px] font-medium leading-[1.6] text-[#333] lg:text-[16px]">
              {row.value.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
