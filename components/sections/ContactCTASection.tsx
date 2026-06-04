"use client";

import Image from "next/image";
import { LINE_URL } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function ContactCTASection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="bg-egg-gray-light py-24 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-egg-blue rounded-[44px] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[480px]">
            <div className="bg-white rounded-l-[44px] p-8 md:p-16 flex flex-col justify-center">
              <p className="text-[48px] md:text-[80px] font-bold bg-gradient-to-r from-egg-blue to-egg-yellow bg-clip-text text-transparent mb-4">
                Contact
              </p>
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#333] mb-8">
                お気軽にご相談ください
              </h2>
              <div className="relative w-[200px] h-[180px] mx-auto lg:mx-0 mt-4">
                <Image
                  src="/images/hero/hero-egg-2.png"
                  alt="Hero Egg"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="p-8 md:p-16 flex flex-col justify-center gap-6">
              <a
                href="/contact"
                className="flex items-center justify-center gap-3 h-[80px] md:h-[104px] rounded-[51px] bg-egg-yellow text-[#333] text-[24px] md:text-[36px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                お問い合わせ
              </a>

              <a
                href="/document-request"
                className="flex items-center justify-center gap-3 h-[80px] md:h-[104px] rounded-[51px] bg-egg-red text-white text-[24px] md:text-[36px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <Image src="/images/icons/doc-icon.png" alt="" width={40} height={55} className="h-[40px] md:h-[55px] w-auto" />
                資料請求
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 h-[80px] md:h-[104px] rounded-[51px] bg-[#06c755] text-white text-[24px] md:text-[36px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <Image src="/images/icons/line-brand.png" alt="" width={72} height={72} className="h-[56px] md:h-[72px] w-auto rounded-[51px]" />
                Hero Egg 公式LINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
