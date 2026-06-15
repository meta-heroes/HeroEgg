import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

/**
 * 端末幅に追従する通常のレスポンシブビューポート。
 * （以前はデザイン幅1440px固定でPC表示を縮小していたが、レスポンシブ対応へ移行中。
 * ヘッダー／フッターはモバイルレイアウトに対応済み。他セクションは順次対応予定。）
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hero Egg | 子どもから大人まで学べるDX教育施設",
  description:
    "Hero Eggは、子どもから大人まで学べるDX教育施設です。テクノロジー教育、メタバース・eスポーツ体験、セミナー・ワークショップなど、様々なプログラムを提供しています。",
  keywords: ["Hero Egg", "DX教育", "テクノロジー教育", "プログラミング", "イベント", "なんば"],
  openGraph: {
    title: "Hero Egg | 子どもから大人まで学べるDX教育施設",
    description:
      "Hero Eggは、子どもから大人まで学べるDX教育施設です。テクノロジー教育、メタバース・eスポーツ体験、セミナー・ワークショップなど、様々なプログラムを提供しています。",
    type: "website",
    locale: "ja_JP",
  },
  verification: {
    google: "Hf3vxUx4g2wZpST0UhdndQFRyhQ1h3qV5tk_8I7tvIk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-DGBFTN2JC9" />
    </html>
  );
}
