"use client";

import { useEffect, useState } from "react";

const TABS = [
  { id: "equipment", label: "設備・サービス" },
  { id: "pricing", label: "料金表" },
];

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-1 h-[24px] w-[24px]" aria-hidden>
      <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 施設情報内のページ内ナビ（設備・サービス / 料金表）。
 *  クリックで該当セクションへスムーススクロール、スクロール位置で自動ハイライト。 */
export function FacilityNav() {
  const [active, setActive] = useState("equipment");

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid grid-cols-2 gap-[16px] md:gap-[24px]">
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleClick(tab.id)}
            aria-current={isActive}
            className={`group flex h-[90px] flex-col items-center justify-center rounded-[14px] border-[3px] border-egg-blue px-2 text-center text-[18px] font-medium leading-tight transition-colors duration-300 md:h-[115px] md:text-[24px] ${
              isActive ? "bg-egg-blue text-white" : "bg-transparent text-egg-blue hover:bg-egg-blue/10"
            }`}
          >
            <span className="whitespace-nowrap">{tab.label}</span>
            <span className="transition-transform duration-300 group-hover:translate-y-1">
              <ChevronDown />
            </span>
          </button>
        );
      })}
    </div>
  );
}
