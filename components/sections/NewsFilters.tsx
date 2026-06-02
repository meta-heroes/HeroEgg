"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type CategoryOption = { id: string; name: string };

/** お知らせ一覧のフィルタ（カテゴリタブ／キーワード検索／年）。URLのクエリで状態管理 */
export function NewsFilters({
  categories,
  years,
}: {
  categories: CategoryOption[];
  years: string[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") ?? "";
  const currentYear = searchParams.get("year") ?? "";
  const [keyword, setKeyword] = useState(searchParams.get("q") ?? "");

  function navigate(next: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(next)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    params.delete("page"); // フィルタ変更時は1ページ目へ
    const query = params.toString();
    router.push(query ? `/news?${query}` : "/news");
  }

  const tabs: CategoryOption[] = [{ id: "", name: "ALL" }, ...categories];

  return (
    <div>
      {/* カテゴリタブ */}
      <div className="flex flex-wrap gap-[10px]">
        {tabs.map((tab) => {
          const active = currentCategory === tab.id;
          return (
            <button
              key={tab.id || "all"}
              type="button"
              onClick={() => navigate({ category: tab.id || undefined })}
              aria-pressed={active}
              className={`h-[44px] rounded-full border-2 px-5 text-[15px] font-bold transition-colors lg:h-[48px] lg:text-[16px] ${
                active
                  ? "border-egg-blue bg-egg-blue text-white"
                  : "border-egg-gray-light bg-white text-[#333] hover:border-egg-blue hover:text-egg-blue"
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      <div className="my-[24px] flex items-center">
        <div className="h-[3px] w-[30px] rounded-full bg-egg-blue" />
        <div className="h-px flex-1 bg-egg-gray-light" />
      </div>

      {/* 検索 ＋ 年 */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ q: keyword.trim() || undefined });
          }}
          className="flex items-center gap-3"
        >
          <span className="text-[16px] text-[#333]">検索</span>
          <div className="flex h-[48px] items-center gap-2 rounded-full border border-egg-gray-light bg-white px-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="#ababab" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="#ababab" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="キーワード入力"
              className="w-[200px] bg-transparent text-[15px] text-[#333] outline-none placeholder:text-egg-gray"
            />
          </div>
        </form>

        <label className="relative">
          <span className="sr-only">公開年で絞り込み</span>
          <select
            value={currentYear}
            onChange={(e) => navigate({ year: e.target.value || undefined })}
            className="h-[48px] cursor-pointer appearance-none rounded-full border border-egg-gray-light bg-white pl-5 pr-11 text-[15px] text-[#333] outline-none"
          >
            <option value="">YEAR</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path d="M5 9l7 7 7-7" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </label>
      </div>
    </div>
  );
}
