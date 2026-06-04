"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SERVICE_COMMUNITY,
  type ServiceCommunityCard,
  type ServiceCommunityTab,
} from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type MainTab = "service" | "community";

/* 5色ドット（Figma: 青→橙→緑→赤→黄） */
const DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#54c2dc" />
      <path d="M5.5 10.2l3 3 6-6.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="34" height="12" viewBox="0 0 34 12" fill="none" aria-hidden>
      <path d="M0 6h31M26 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── サブカテゴリタブ（クリックで該当カードへスクロール） ─── */
function SubTabs({
  tabs,
  active,
  onSelect,
}: {
  tabs: readonly ServiceCommunityTab[];
  active: string;
  onSelect: (id: string) => void;
}) {
  // サービスは5タブ→5カラム、コミュニティーは2タブ→2カラム
  const cols =
    tabs.length >= 5
      ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-5"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid ${cols} gap-[15px]`}>
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            aria-current={isActive}
            className={`group flex h-[76px] flex-col items-center justify-center rounded-[14px] border-[3px] border-egg-blue px-1 text-center text-[14px] leading-tight font-medium transition-colors duration-300 md:h-[96px] sm:text-[18px] xl:text-[22px] ${
              isActive ? "bg-egg-blue text-white" : "bg-transparent text-egg-blue hover:bg-egg-blue/10"
            }`}
          >
            <span>
              {tab.label.map((line, i) => (
                <span key={i} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </span>
            <ChevronDown className="mt-1 h-[22px] w-[22px] transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        );
      })}
    </div>
  );
}

/* ─── 個別カード（スクロールで下からフェードイン） ─── */
function Card({ card }: { card: ServiceCommunityCard }) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px",
  });

  return (
    <div
      id={`sc-${card.id}`}
      data-card-id={card.id}
      ref={ref}
      className={`scroll-mt-[140px] rounded-[20px] bg-[#fafafa] p-[24px] md:p-[40px] shadow-[inset_0px_0px_38.4px_-12px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* ヘッダー：タイトル ＋（コミュニティーはロゴ）＋ 大きな番号 */}
      <div className="relative flex items-center gap-6">
        <h3 className="text-[24px] md:text-[34px] font-medium text-[#333] leading-tight">
          {card.title}
        </h3>
        {card.logo && (
          <span className="relative hidden sm:block h-[56px] w-[160px] shrink-0">
            <Image src={card.logo.src} alt={card.logo.alt} fill className="object-contain object-left" />
          </span>
        )}
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-medium italic leading-none text-[72px] md:text-[120px] text-[rgba(51,51,51,0.05)]"
        >
          {card.num}
        </span>
      </div>

      {/* 区切り線 */}
      <div className="mt-[18px] h-px w-full bg-egg-gray-light" />

      {/* 本文：左テキスト／右画像 */}
      <div className="mt-[24px] flex flex-col gap-[24px] xl:flex-row xl:items-start xl:justify-between">
        <div className="xl:max-w-[451px]">
          <p className="text-[16px] leading-[2] tracking-[1.6px] text-[#333]">{card.description}</p>
          <ul className="mt-[20px] space-y-[12px]">
            {card.items.map((item) => (
              <li key={item} className="flex items-center gap-[10px] text-[16px] tracking-[1.6px] text-[#333]">
                <CheckCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={card.href}
            className="mt-[28px] inline-flex h-[54px] w-[200px] items-center justify-center gap-3 rounded-[30px] bg-[#333] text-[18px] font-bold text-white shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222] hover:shadow-lg"
          >
            {card.cta}
            <ArrowRight />
          </a>
        </div>

        {card.character ? (
          /* サービス：アクセント色ボックス＋キャラクター（上にはみ出す） */
          <div className="relative h-[180px] w-full xl:h-[220px] xl:w-[420px] xl:shrink-0">
            <div className="absolute inset-0 rounded-[10px]" style={{ backgroundColor: card.accent }} />
            <Image
              src={card.character}
              alt={card.title}
              width={420}
              height={420}
              sizes="420px"
              className="absolute bottom-0 right-[6%] h-[122%] w-auto object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
            />
          </div>
        ) : (
          <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] xl:h-[257px] xl:w-[457px] xl:shrink-0">
            {card.image ? (
              <Image src={card.image} alt={card.title} fill sizes="(max-width: 1280px) 100vw, 457px" className="object-cover" />
            ) : (
              <ImagePlaceholder className="h-full w-full" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function ServiceCommunitySection() {
  const [mainTab, setMainTab] = useState<MainTab>("service");
  const data = SERVICE_COMMUNITY[mainTab];
  const [activeSub, setActiveSub] = useState<string>(data.tabs[0].id);
  const cardsRef = useRef<HTMLDivElement>(null);

  // ?tab=community / #community でディープリンク（コミュニティーを直接開く）
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("tab") ?? window.location.hash.replace("#", "");
    if (requested === "community" || requested === "service") {
      setMainTab(requested);
    }
  }, []);

  // メインタブ切替時はサブの選択をリセット
  useEffect(() => {
    setActiveSub(SERVICE_COMMUNITY[mainTab].tabs[0].id);
  }, [mainTab]);

  // スクロールスパイ：画面中央付近にあるカードをアクティブ表示
  useEffect(() => {
    const root = cardsRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-card-id]"));
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.cardId;
            if (id) setActiveSub(id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [mainTab]);

  const handleSubSelect = (id: string) => {
    setActiveSub(id);
    document.getElementById(`sc-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative z-10 mx-auto mb-[64px] w-full max-w-[1342px] rounded-[24px] bg-white px-5 py-[40px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] sm:rounded-[39px] md:px-[80px] md:py-[56px] xl:px-[155px]">
      {/* 5色ドット */}
      <div className="mb-[18px] flex items-center gap-[2px]">
        {DOTS.map((src) => (
          <span key={src} className="relative h-[18px] w-[18px]">
            <Image src={src} alt="" fill className="object-contain" />
          </span>
        ))}
      </div>

      {/* セクションタイトル */}
      <h2 className="mb-[28px] text-[28px] md:mb-[36px] md:text-[40px] font-bold text-[#333]">
        Hero Eggでできること
      </h2>

      {/* メイントグル：サービス / コミュニティー */}
      <div className="mb-[28px] grid grid-cols-2 gap-[14px] md:mb-[36px] md:gap-[37px]">
        {(["service", "community"] as const).map((tab) => {
          const isActive = mainTab === tab;
          const label = tab === "service" ? "サービス" : "コミュニティー";
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setMainTab(tab)}
              aria-pressed={isActive}
              className={`group flex h-[76px] flex-col items-center justify-center rounded-[14px] border-[3px] border-egg-orange text-[18px] md:h-[96px] md:text-[22px] xl:text-[24px] font-medium transition-colors duration-300 ${
                isActive ? "bg-egg-orange text-white" : "bg-transparent text-egg-orange hover:bg-egg-orange/10"
              }`}
            >
              <span>{label}</span>
              <ChevronDown className="mt-1 h-[26px] w-[26px] transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          );
        })}
      </div>

      {/* サブカテゴリタブ */}
      <div className="mb-[28px] md:mb-[36px]">
        <SubTabs tabs={data.tabs} active={activeSub} onSelect={handleSubSelect} />
      </div>

      {/* カード群（メインタブ切替で再マウント＝アニメーション再生） */}
      <div key={mainTab} ref={cardsRef} className="space-y-[28px] md:space-y-[36px]">
        {data.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
