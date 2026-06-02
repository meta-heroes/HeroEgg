"use client";

import { type ReactNode } from "react";

type InfiniteScrollerProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export function InfiniteScroller({
  children,
  speed = 30,
  className = "",
}: InfiniteScrollerProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="infinite-scroll-track flex gap-8 w-max"
        style={{
          animation: `infiniteScroll ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
