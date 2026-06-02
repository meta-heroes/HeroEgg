"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MAIN_NAV } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-[45px] py-[15px]">
        {/* デスクトップ */}
        <div className="hidden lg:flex items-center h-[76px] bg-white rounded-[100px] shadow-[0px_0px_16.8px_0px_rgba(0,0,0,0.1)] px-[46px]">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/hero-egg-logo.png"
              alt="Hero Egg"
              width={138}
              height={40}
              className="h-[40px] w-auto"
              priority
            />
          </Link>

          <div className="flex-1" />

          <div className="flex items-center gap-[28px]">
            <a href="#"
              className="flex items-center gap-2 h-[54px] px-5 rounded-[51px] bg-[#06c755] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <Image src="/images/icons/line-brand.png" alt="" width={46} height={46} className="h-[46px] w-auto rounded-[51px]" />
              <span className="font-bold text-[20px] text-white">公式LINE</span>
            </a>

            <Link href="/document-request"
              className="flex items-center gap-2 h-[54px] px-5 rounded-[47px] bg-[#ec7072] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <Image src="/images/icons/doc-icon.png" alt="" width={25} height={35} className="h-[35px] w-auto" />
              <span className="font-bold text-[20px] text-white">資料請求</span>
            </Link>

            <Link href="/contact"
              className="flex items-center gap-2 h-[54px] px-5 rounded-[30px] bg-[#fed649] shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <rect x="3" y="7" width="32" height="24" rx="3" stroke="#262626" strokeWidth="2" />
                <path d="M3 13l16 10 16-10" stroke="#262626" strokeWidth="2" />
              </svg>
              <span className="font-bold text-[20px] text-[#262626]">お問い合わせ</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-[67px] h-[67px] rounded-full bg-white shadow-[0px_0px_16.8px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-lg transition-all"
              aria-label="メニューを開く"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4l16 16M20 4L4 20" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                  <line x1="2" y1="2" x2="26" y2="2" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="2" y1="10" x2="26" y2="10" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="2" y1="18" x2="26" y2="18" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* モバイル */}
        <div className="lg:hidden flex items-center justify-between h-[56px] bg-white rounded-[100px] shadow-[0px_0px_16.8px_0px_rgba(0,0,0,0.1)] px-5">
          <Link href="/">
            <Image src="/images/logo/hero-egg-logo.png" alt="Hero Egg" width={110} height={32} className="h-[32px] w-auto" priority />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-[44px] h-[44px] rounded-full cursor-pointer"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3l14 14M17 3L3 17" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <line x1="1" y1="2" x2="21" y2="2" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                <line x1="1" y1="8" x2="21" y2="8" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                <line x1="1" y1="14" x2="21" y2="14" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ドロワーメニュー (オーバーレイ) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* ドロワーパネル — ヘッダーの下から開始 */}
      <div
        className={`fixed top-[106px] lg:top-[106px] right-0 z-40 h-[calc(100vh-106px)] w-[420px] max-w-[85vw] bg-white shadow-[-8px_0_30px_rgba(0,0,0,0.15)] transition-transform duration-300 rounded-tl-[30px] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* メニュー内容 */}
        <nav className="px-8 py-8 overflow-y-auto h-full">
          <div className="space-y-1">
            {MAIN_NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-[20px] font-bold text-[#333] hover:text-[#54c2dc] transition-colors border-b border-[#eee]"
                >
                  {item.label}
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {"children" in item && item.children && (
                  <div className="pl-4 border-b border-[#eee]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center py-3 text-[16px] text-[#666] hover:text-[#54c2dc] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#54c2dc] mr-3 flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTAボタン */}
          <div className="mt-8 space-y-3">
            <a href="#"
              className="flex items-center justify-center gap-2 h-[54px] rounded-[51px] bg-[#06c755] text-white text-[18px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
              onClick={() => setIsMenuOpen(false)}>
              <Image src="/images/icons/line-brand.png" alt="" width={36} height={36} className="rounded-full" />
              公式LINE
            </a>
            <Link href="/document-request"
              className="flex items-center justify-center gap-2 h-[54px] rounded-[47px] bg-[#ec7072] text-white text-[18px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
              onClick={() => setIsMenuOpen(false)}>
              <Image src="/images/icons/doc-icon.png" alt="" width={20} height={28} />
              資料請求
            </Link>
            <Link href="/contact"
              className="flex items-center justify-center gap-2 h-[54px] rounded-[30px] bg-[#fed649] text-[#262626] text-[18px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)]"
              onClick={() => setIsMenuOpen(false)}>
              お問い合わせ
            </Link>
          </div>

          {/* SNSリンク */}
          <div className="mt-8 flex items-center gap-4 justify-center">
            <a href="#" className="w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
              <Image src="/images/icons/social-line.png" alt="LINE" width={40} height={40} />
            </a>
            <a href="#" className="w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
              <Image src="/images/icons/social-x.png" alt="X" width={40} height={40} />
            </a>
            <a href="#" className="w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
              <Image src="/images/icons/social-tiktok.png" alt="TikTok" width={40} height={40} />
            </a>
            <a href="#" className="w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
              <Image src="/images/icons/social-instagram.png" alt="Instagram" width={40} height={40} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
