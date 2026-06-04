"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProgramCarousel } from "@/components/ui/ProgramCarousel";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  EVENT_PROGRAMS,
  EVENT_OTHER_PROGRAMS,
  EVENT_TYPES,
  EVENT_FORMATS,
} from "@/lib/constants";

const NAV = [
  { label: "プログラム", id: "program" },
  { label: "イベントの種類", id: "event-types" },
  { label: "イベント形式", id: "event-formats" },
] as const;

const EGG_DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

export function EventBody() {
  const [active, setActive] = useState<string>("program");
  const rootRef = useRef<HTMLDivElement>(null);

  // ページ内ナビ：スクロールスパイ（表示中セクションをハイライト）
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // スクロール連動フェードイン（globals.css の .animate-on-scroll を利用）
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      ref={rootRef}
      className="relative z-10 mx-auto max-w-[1342px] bg-white rounded-[39px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] px-[24px] pt-[60px] pb-[90px] mb-[100px]"
    >
      {/* ===== イベントラインナップ 見出し ===== */}
      <div className="animate-on-scroll mb-[40px]">
        <div className="flex items-center gap-[4px] mb-[18px]">
          {EGG_DOTS.map((src) => (
            <Image key={src} src={src} alt="" width={20} height={20} />
          ))}
        </div>
        <h2 className="text-[28px] font-medium text-[#333]">
          イベントラインナップ
        </h2>
      </div>

      {/* ===== ページ内ナビ（3ボタン） ===== */}
      <nav className="animate-on-scroll grid grid-cols-3 gap-[16px] mb-[80px]">
        {NAV.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              aria-current={isActive ? "true" : undefined}
              className={`flex flex-col items-center justify-center h-[88px] rounded-[14px] border-[3px] border-[#54c2dc] transition-all duration-300 ${
                isActive
                  ? "bg-[#54c2dc] text-white"
                  : "bg-white text-[#54c2dc] hover:bg-[#54c2dc]/10"
              }`}
            >
              <span className="text-[18px] font-medium text-center leading-tight px-2">
                {item.label}
              </span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                className="mt-[2px]"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          );
        })}
      </nav>

      {/* ===== プログラム ===== */}
      <Divider id="program" title="プログラム" />

      <div className="flex flex-col gap-[80px] mb-[80px]">
        {EVENT_PROGRAMS.map((p) => (
          <div key={p.id} className="animate-on-scroll">
            <ProgramCarousel
              title={p.title}
              color={p.color}
              tagText={p.tagText}
              side={p.side}
              cards={p.cards}
            />
          </div>
        ))}
      </div>

      {/* ===== その他、様々なプログラム（全幅レッドバンド） ===== */}
      <div className="animate-on-scroll">
        <h3 className="text-[28px] font-bold text-[#333] text-center mb-[40px]">
          その他、様々なプログラムをご用意
        </h3>
      </div>

      {/* 全幅レッドバンド（カードの内側余白・白カードを突き破って画面端まで） */}
      <div
        className="relative w-screen bg-[#ec7072] py-[50px] mb-[50px]"
        style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
      >
        <div className="mx-auto max-w-[1632px] px-[24px]">
          <div className="grid grid-cols-1 gap-[24px]">
            {EVENT_OTHER_PROGRAMS.map((label, i) => (
              <article
                key={i}
                className="animate-on-scroll group rounded-[20px] bg-[#fafafa] shadow-[0px_4px_16px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[407/230] overflow-hidden">
                  <ImagePlaceholder className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="relative pt-[18px] pb-[26px]">
                  <div className="inline-flex items-center h-[42px] pl-[19px] pr-[26px] rounded-r-[100px] bg-[#ec7072]">
                    <span className="text-[19px] font-bold text-white whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 関連リンク（サービス／実績） ===== */}
      <div className="animate-on-scroll flex flex-wrap justify-center gap-[24px] mb-[100px]">
        <LinkButton href="/#service" label="サービスを見る" color="#54c2dc" />
        <LinkButton href="/#track-record" label="実績を見る" color="#333333" />
      </div>

      {/* ===== イベントの種類 ===== */}
      <Divider id="event-types" title="イベントの種類" />

      <div className="grid grid-cols-1 gap-[24px] mb-[100px]">
        {EVENT_TYPES.map((t) => (
          <article
            key={t.no}
            className="animate-on-scroll rounded-[10px] bg-[#fafafa] p-[22px] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-start gap-[12px] mb-[24px]">
              <span className="font-bold italic text-[48px] leading-none text-[#54c2dc]">
                {t.no}
              </span>
              <div className="text-[22px] font-bold text-[#333] leading-[1.4] tracking-[1px] pt-[2px]">
                {t.title.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden aspect-[287/171] mb-[24px]">
              <ImagePlaceholder className="w-full h-full" />
            </div>
            <ul className="list-disc pl-[28px] text-[18px] font-medium text-[#333] leading-[1.9] tracking-[1px]">
              {t.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* ===== イベント形式 ===== */}
      <Divider id="event-formats" title="イベント形式" />

      <div className="grid grid-cols-1 gap-[24px]">
        {EVENT_FORMATS.map((label) => (
          <article
            key={label}
            className="animate-on-scroll rounded-[20px] overflow-hidden bg-white shadow-[0px_0px_14.8px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="relative aspect-[318/220] overflow-hidden">
              <ImagePlaceholder className="w-full h-full" />
            </div>
            {/* ラベルバー（コーナーに卵装飾） */}
            <div className="relative h-[106px] bg-[#fafafa] overflow-hidden flex items-center justify-center">
              <div className="absolute -left-[18px] -bottom-[28px] w-[96px] h-[96px] pointer-events-none">
                <Image src="/images/decorations/egg-yellow.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute -right-[20px] -top-[26px] w-[88px] h-[88px] pointer-events-none">
                <Image src="/images/decorations/egg-blue.png" alt="" fill className="object-contain" />
              </div>
              <span className="relative z-10 text-[26px] font-medium text-[#333]">
                {label}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Divider({ id, title }: { id: string; title: string }) {
  return (
    <div id={id} className="animate-on-scroll scroll-mt-[140px] mb-[40px]">
      <h2 className="text-[30px] font-medium text-[#333] mb-[16px]">
        {title}
      </h2>
      <div className="flex items-center gap-[8px]">
        <div className="w-[40px] h-[3px] bg-[#333]" />
        <div className="flex-1 h-[1px] bg-[#d7d7d7]" />
      </div>
    </div>
  );
}

function LinkButton({
  href,
  label,
  color,
}: {
  href: string;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-[12px] h-[51px] px-[28px] rounded-[100px] border bg-white text-[18px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
      style={{ borderColor: color, color }}
    >
      {label}
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none" className="transition-transform group-hover:translate-x-1">
        <path d="M0 6h22M17 1l5 5-5 5" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
