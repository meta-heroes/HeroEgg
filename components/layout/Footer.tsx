import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAV } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-egg-yellow">
        <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
          {/* サイトマップ — 見出し＋サブリンク（FOOTER_NAV.columns） */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-9 md:gap-y-0">
            {FOOTER_NAV.columns.map((col) => (
              <div key={col.title}>
                <Link
                  href={col.titleHref}
                  className="inline-block font-bold text-[#333] text-[16px] md:text-[19px] leading-snug hover:opacity-70 transition-opacity"
                >
                  {col.title}
                </Link>
                <ul className="mt-3 md:mt-5 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-[13px] md:text-[15px] text-[#333]/75 hover:text-[#333] transition-colors"
                      >
                        <span className="h-[5px] w-[5px] rounded-full bg-[#333]/40 transition-colors group-hover:bg-[#333]" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo + address + social area */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo/hero-egg-logo.png"
                alt="Hero Egg"
                width={238}
                height={69}
                className="h-[56px] md:h-[69px] w-auto mb-5 md:mb-6 mx-auto md:mx-0"
              />
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="#" className="block w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-line.png" alt="LINE" width={40} height={40} className="w-full h-full object-contain" />
                </a>
                <a href="#" className="block w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-x.png" alt="X" width={40} height={40} className="w-full h-full object-contain" />
                </a>
                <a href="#" className="block w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-tiktok.png" alt="TikTok" width={40} height={40} className="w-full h-full object-contain" />
                </a>
                <a href="#" className="block w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-instagram.png" alt="Instagram" width={40} height={40} className="w-full h-full object-contain" />
                </a>
              </div>
            </div>

            <div className="text-[15px] md:text-[20px] text-[#333] leading-[170%] md:leading-[117%]">
              <p className="font-bold mb-1 md:mb-2">
                {FOOTER_NAV.address.name}
              </p>
              <p>{FOOTER_NAV.address.zip}</p>
              <p className="whitespace-pre-line">{FOOTER_NAV.address.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="bg-white border-t border-[#333]/20">
        <div className="max-w-[1440px] mx-auto px-6 py-6 md:py-4 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo/hero-egg-logo.png"
              alt="Hero Egg"
              width={238}
              height={69}
              className="h-[28px] md:h-[32px] w-auto"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-6 text-[13px] md:text-[14px] font-bold text-[#333]">
            {FOOTER_NAV.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-egg-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-[12px] md:text-[14px] text-[#333]/60 text-center md:text-right">
            {FOOTER_NAV.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
