import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAV, MAIN_NAV } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-egg-yellow">
        <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
          {/* Nav links — Header と同じ MAIN_NAV を参照（4列×2段） */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-5 md:gap-y-6 mb-2 md:mb-12">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-bold text-[#333] text-[17px] md:text-[20px] hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Logo + address + social area */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo/hero-egg-logo.png"
                alt="Hero Egg"
                width={238}
                height={69}
                className="h-[56px] md:h-[69px] w-auto mb-5 md:mb-6"
              />
              <div className="flex items-center gap-3">
                <a href="#" className="block w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-line.png" alt="LINE" width={40} height={40} />
                </a>
                <a href="#" className="block w-[42px] h-[42px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-x.png" alt="X" width={42} height={42} />
                </a>
                <a href="#" className="block w-[41px] h-[41px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-tiktok.png" alt="TikTok" width={41} height={41} />
                </a>
                <a href="#" className="block w-[42px] h-[42px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="/images/icons/social-instagram.png" alt="Instagram" width={42} height={42} />
                </a>
              </div>
            </div>

            <div className="text-[16px] md:text-[20px] text-[#333] leading-[150%] md:leading-[117%]">
              <p className="font-bold mb-2">
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
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo/mhyoko.png"
              alt="Meta Heroes"
              width={167}
              height={29}
              className="h-[29px] w-auto"
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
          <p className="text-[13px] md:text-[14px] text-[#333] text-center md:text-right">
            {FOOTER_NAV.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
