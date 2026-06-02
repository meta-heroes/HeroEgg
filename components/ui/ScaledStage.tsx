"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Figma の 1920px 基準で絶対配置された「ステージ」を、
 * コンテナ幅に合わせて等比スケール（フォント・余白ごと縮小）するラッパー。
 *
 * 従来は aspect-ratio のボックス内で位置だけ % 指定し、フォントは固定 px だったため、
 * 1024〜1536px ではテキストがボックスに対して大きすぎて溢れていた。
 * このコンポーネントは内側を実寸（width×height）でレンダリングし transform: scale で
 * 縮小するので、デザイン全体が比率を保ったまま破綻なくフィットする。
 *
 * 高さは aspectRatio で確保するため SSR でもレイアウトシフトしない。
 */
export function ScaledStage({
  width,
  height,
  className = "",
  innerClassName = "",
  children,
}: {
  width: number;
  height: number;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(Math.min(1, w / width));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  const hostStyle: CSSProperties = {
    width: "100%",
    aspectRatio: `${width} / ${height}`,
    overflow: "hidden",
  };
  const innerStyle: CSSProperties = {
    position: "relative",
    width,
    height,
    transformOrigin: "top left",
    transform: `scale(${scale})`,
  };

  return (
    <div ref={hostRef} className={className} style={hostStyle}>
      <div className={innerClassName} style={innerStyle}>
        {children}
      </div>
    </div>
  );
}
