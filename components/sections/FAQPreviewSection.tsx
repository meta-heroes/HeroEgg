"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { EggDecoration } from "@/components/ui/EggDecoration";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function FAQPreviewSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="faq" className="bg-egg-gray-light py-24 overflow-hidden relative">
      <EggDecoration color="red" size={400} top="-100px" right="-100px" opacity={0.12} rotate={60} />
      <EggDecoration color="yellow" size={350} bottom="-80px" left="-100px" opacity={0.15} rotate={-25} />

      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white rounded-[44px] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ababab] text-[48px] md:text-[80px] font-bold leading-none mb-2">
                FAQ
              </p>
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#333] mb-6">
                よくある質問
              </h2>
              <div className="text-[#333] text-[24px] leading-[2] mb-8 space-y-0">
                <p>Hero Eggご利用者からの</p>
                <p>よくあるご質問をご紹介します。</p>
              </div>
              <Button color="dark" href="#faq-all">
                質問を見る
                <svg width="22" height="14" viewBox="0 0 22 14" className="ml-1">
                  <path d="M0 7h20M13 1l7 6-7 6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </Button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/faq/faq.jpg"
                alt="Hero Egg 施設の様子"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
