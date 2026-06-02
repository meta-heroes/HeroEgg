"use client";

import { type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 表示開始までの遅延（ms） */
  delay?: number;
};

/** スクロールで下からフェードインさせる汎用ラッパー（サイト共通パターン） */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.12,
    rootMargin: "0px 0px -80px 0px",
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
