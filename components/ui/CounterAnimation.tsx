"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type CounterAnimationProps = {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CounterAnimation({
  end,
  suffix = "",
  duration = 2000,
  className = "",
}: CounterAnimationProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(end, duration, isVisible);

  return (
    <div ref={ref} className={className}>
      <span className="text-[64px] md:text-[96px] font-bold leading-[1.5]">
        {count}
      </span>
      {suffix && (
        <span className="text-[20px] font-bold ml-1 block">{suffix}</span>
      )}
    </div>
  );
}
