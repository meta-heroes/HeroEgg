import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
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
 * スマホでもPCと全く同じ表示にするための固定ビューポート（本文をPC表示のまま保つ）。
 * width をデスクトップのデザイン幅(1440px)に固定すると、スマホはその幅で描画して
 * 画面サイズに合わせ縮小表示する。デスクトップは width 指定を無視するためPC表示は不変。
 */
export const viewport: Viewport = {
  width: "1440",
  initialScale: undefined,
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
    </html>
  );
}
