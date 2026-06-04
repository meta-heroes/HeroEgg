"use client";

import { useRef, useState, type PointerEvent } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type ProgramCarouselProps = {
  title: string;
  color: string;
  tagText: string;
  side: "left" | "right";
  cards: readonly string[];
};

export function ProgramCarousel({
  title,
  color,
  tagText,
  side,
  cards,
}: ProgramCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // ドラッグでスクロール（マウス／タッチ共通）
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    setDragging(true);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
    setDragging(false);
  };

  const isLeft = side === "left";

  return (
    <section className="relative">
      {/* 背景カラーバンド（画面端まで抜ける） */}
      <div
        aria-hidden
        className={`absolute top-[20px] h-[278px] pointer-events-none ${
          isLeft ? "rounded-r-[30px]" : "rounded-l-[30px]"
        }`}
        style={{
          backgroundColor: color,
          ...(isLeft
            ? { left: "calc(50% - 50vw)", right: "34%" }
            : { right: "calc(50% - 50vw)", left: "34%" }),
        }}
      />

      {/* 見出し + 矢印コントロール */}
      <div
        className={`relative z-10 flex items-center justify-between mb-[24px] ${
          isLeft ? "flex-row-reverse" : ""
        }`}
      >
        <h3 className="text-[28px] lg:text-[36px] font-bold text-[#333]">{title}</h3>
        <div className="flex items-center gap-[10px]">
          <CarouselArrow dir="prev" color={color} onClick={() => scrollByCard(-1)} />
          <CarouselArrow dir="next" color={color} onClick={() => scrollByCard(1)} />
        </div>
      </div>

      {/* カードトラック（横スクロール／スナップ／ドラッグ） */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`relative z-10 flex gap-[24px] overflow-x-auto pb-[20px] snap-x snap-mandatory select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y" }}
      >
        {cards.map((label, i) => (
          <article
            key={i}
            data-card
            className="group flex-shrink-0 w-[280px] md:w-[320px] snap-start rounded-[20px] bg-[#fafafa] shadow-[0px_0px_13.1px_0px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]"
            // ドラッグ後のクリック誤爆を防ぐ
            onClickCapture={(e) => {
              if (drag.current.moved) e.preventDefault();
            }}
          >
            {/* 画像 */}
            <div className="relative aspect-[407/230] overflow-hidden">
              <ImagePlaceholder className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            {/* 内容 */}
            <div className="relative pt-[18px] pb-[26px]">
              <div
                className="inline-flex items-center h-[42px] pl-[19px] pr-[26px] rounded-r-[100px]"
                style={{ backgroundColor: color }}
              >
                <span className="text-[19px] font-bold whitespace-nowrap" style={{ color: tagText }}>
                  {label}
                </span>
              </div>
            </div>
          </article>
        ))}
        {/* 右端の余白（最後のカードもスナップ後に少し余白） */}
        <div className="flex-shrink-0 w-px" aria-hidden />
      </div>
    </section>
  );
}

function CarouselArrow({
  dir,
  color,
  onClick,
}: {
  dir: "prev" | "next";
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "前へ" : "次へ"}
      className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.15)] cursor-pointer transition-all hover:scale-110 active:scale-95"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {dir === "prev" ? (
          <path d="M10 2L4 8l6 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M6 2l6 6-6 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}
