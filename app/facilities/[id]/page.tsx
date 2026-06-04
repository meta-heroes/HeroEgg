import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { FacilityGallery } from "@/components/sections/FacilityGallery";
import { FacilityNav } from "@/components/sections/FacilityNav";
import { PageHeader } from "@/components/sections/PageHeader";
import { STORE_SECTIONS, type Store } from "@/lib/constants";

const ALL_STORES: Store[] = STORE_SECTIONS.flatMap((section) => section.stores);

function getStore(id: string): Store | undefined {
  return ALL_STORES.find((s) => s.id === id);
}

export function generateStaticParams() {
  return ALL_STORES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const store = getStore(id);
  const name = store?.name ?? "施設";
  return {
    title: `${name} | 施設について | Hero Egg`,
    description: `Hero Egg ${name}の施設情報。設備・サービス、活用シーン、アクセス、料金表など、ご利用に関する情報をまとめています。`,
    openGraph: {
      title: `${name} | 施設について | Hero Egg`,
      description: `Hero Egg ${name}の施設情報・設備・料金表のご案内。`,
      type: "website",
      locale: "ja_JP",
    },
  };
}

/* 背景卵装飾 — aboutページと同一（Figma use_figma取得の座標・サイズ・回転） */
const BLOBS = [
  { src: "/images/decorations/egg-red.png", left: 265, top: -143, size: 530, rot: 84.1 },
  { src: "/images/decorations/egg-yellow.png", left: 884, top: -90, size: 453, rot: 125.5 },
  { src: "/images/decorations/egg-green.png", left: 226, top: 83, size: 657, rot: 17.5 },
  { src: "/images/decorations/egg-blue.png", left: 1452, top: 356, size: 587, rot: -124.7 },
  { src: "/images/decorations/egg-orange.png", left: 1320, top: 238, size: 689, rot: -16.4 },
];

const DOTS = [
  "/images/decorations/egg-blue.png",
  "/images/decorations/egg-orange.png",
  "/images/decorations/egg-green.png",
  "/images/decorations/egg-red.png",
  "/images/decorations/egg-yellow.png",
];

/* 主な活用シーン（Figma node 52:465 準拠） */
const USE_SCENES = [
  { title: "クリエイター体験", desc: "Fortniteのマップ制作や3DCG制作など、ゲーム制作に関する体験が可能です。" },
  { title: "セミナー / 講演会", desc: "セミナーや講演会、フォーラム、ワークショップ、交流会など様々なイベントでご利用可能です。" },
  { title: "コンテスト", desc: "ピッチコンテストやeスポーツ大会など、様々なコンテストの会場としてご利用可能です。" },
];

/* 設備・サービス（Figma node 52:536 準拠） */
const EQUIPMENT = [
  {
    title: "ハイスペックゲーミングPC",
    desc: "クリエイティブ制作やゲーム制作にも対応する、ハイスペックなゲーミングPCをご利用いただけます。",
  },
  {
    title: "10GBの高速回線",
    desc: "大容量データのやり取りも快適に行える、10Gの高速インターネット回線を完備しています。",
  },
  {
    title: "壁一面ホワイトボード",
    desc: "壁一面のホワイトボードで、アイデア出しやワークショップ、ブレインストーミングにご活用いただけます。",
  },
];

/* 料金表 ご利用プラン（Figma node 52:558 準拠） */
const PLAN_ROWS = [
  { plan: ["スタンダードプラン", "（平日）"], price: "16,500円（税込）/ 1h", time: ["最低3時間から"] },
  { plan: ["FULL DAY", "（平日）"], price: "150,000円（税込）", time: ["11:00 - 21:00（完全撤収）", "最大10時間"] },
];

/* 料金表 無料貸出設備 */
const RENTAL_ROWS = [
  { item: "ハイスペックゲーミングPC", content: "最大8台" },
  { item: "マイク・スピーカー", content: "最大2本" },
  { item: "プロジェクター", content: "1台" },
  { item: "ホワイトボード", content: "全面ホワイトボード" },
  { item: "机・椅子", content: "長テーブル2台 / 椅子15脚" },
];

const NOTES = [
  "※事前に荷物の配送が必要な場合は、スタッフへお申し付けください。",
  "※イベント主催側のスタッフ様全員に、機材貸出の規約として「Hero Egg公式LINEの会員登録」をお願いしておりますので、ご了承ください。",
  "※ゴミは各自でお持ち帰りください。",
  "※イベント終了後、担当スタッフまでご連絡ください。",
  "※準備時間も含めて、貸出のお時間に含まれますので、ご了承ください。",
];

/* ── 汎用パーツ ── */
function SectionHead({ id, title }: { id?: string; title: string }) {
  return (
    <div id={id} className="mb-[40px] scroll-mt-[120px]">
      <h2 className="mb-[16px] text-[32px] font-medium text-[#333] md:text-[40px]">{title}</h2>
      <div className="flex items-center gap-[6px]">
        <span className="h-[4px] w-[30px] rounded-full bg-egg-blue" />
        <span className="h-[2px] flex-1 bg-egg-gray-light" />
      </div>
    </div>
  );
}

function MoreButton({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-[51px] w-[191px] items-center justify-center gap-3 rounded-full border border-egg-blue bg-white text-[20px] font-medium text-egg-blue transition-colors duration-300 hover:bg-egg-blue hover:text-white"
    >
      もっと見る
      <svg width="25" height="10" viewBox="0 0 25 10" fill="none" aria-hidden>
        <path d="M0 5h22M18 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mt-[3px] shrink-0" aria-hidden>
      <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#54c2dc" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="#54c2dc" strokeWidth="1.8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="#54c2dc" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" stroke="#54c2dc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function FacilityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const store = getStore(id);
  if (!store) notFound();

  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa]">
        {/* 背景卵装飾（aboutページと同じ配置） */}
        {BLOBS.map((b) => (
          <div
            key={b.src}
            className="pointer-events-none absolute"
            style={{
              left: `${b.left}px`,
              top: `${b.top}px`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              transform: `rotate(${b.rot}deg)`,
              transformOrigin: "0 0",
            }}
          >
            <Image src={b.src} alt="" fill className="object-contain" />
          </div>
        ))}

        {/* ページタイトル（カード外） */}
        <PageHeader eyebrow="Store" title="施設について" />

        {/* メイン白カード */}
        <div className="relative z-10 mx-auto mb-[80px] w-full max-w-[1342px] rounded-[39px] bg-white px-6 py-[60px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)] md:px-[80px] xl:px-[155px] xl:py-[70px]">
          {/* 5色ドット ＋ 店舗名 */}
          <div className="mb-[24px] flex items-center gap-[2px]">
            {DOTS.map((src) => (
              <span key={src} className="relative h-[20px] w-[20px]">
                <Image src={src} alt="" fill className="object-contain" />
              </span>
            ))}
          </div>
          <h2 className="mb-[60px] text-[32px] font-medium text-[#333] md:text-[48px]">{store.name}</h2>

          {/* 施設情報 ＋ ページ内ナビ */}
          <SectionHead title="施設情報" />
          <Reveal className="mb-[60px]">
            <FacilityNav />
          </Reveal>

          {/* 店舗画像ギャラリー */}
          <Reveal className="mb-[60px]">
            <FacilityGallery
              count={Math.max(store.photoCount + 3, 4)}
              images={store.images}
              alt={`Hero Egg ${store.name}`}
            />
          </Reveal>

          {/* 施設詳細 */}
          <Reveal className="mb-[80px]">
            <h3 className="mb-[20px] text-[28px] font-medium text-[#333] md:text-[36px]">Hero Egg {store.name}</h3>
            <p className="mb-[30px] text-[24px] font-normal leading-[1.5] text-[#333] md:text-[32px]">
              店舗テーマ
              <br />
              店舗テーマ
            </p>
            <p className="mb-[40px] text-[16px] font-light leading-[1.8] tracking-[1.6px] text-[#333] md:text-[24px] md:tracking-[2.4px]">
              最新テクノロジーに触れながら学べるHero EggのDX教育施設です。ハイスペックゲーミングPCや高速回線、壁一面のホワイトボードを完備し、子どもから大人まで幅広い世代がクリエイティブな体験・学習・交流を楽しめる空間です。
            </p>
            <div className="space-y-[16px]">
              <div className="flex items-start gap-[14px]">
                <MapPinIcon />
                <p className="text-[16px] leading-[1.6] tracking-[2px] text-[#333] md:text-[20px]">
                  {store.zip}
                  {store.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-[14px]">
                <ClockIcon />
                <p className="text-[16px] text-[#333] md:text-[20px]">{store.hours}</p>
              </div>
            </div>
          </Reveal>

          {/* 主な活用シーン */}
          <div className="mb-[40px] mt-[60px] h-[2px] w-full bg-egg-gray-light" />
          <Reveal>
            <h3 className="mb-[40px] text-[28px] font-medium text-[#333] md:text-[36px]">主な活用シーン</h3>
            <div className="grid grid-cols-1 gap-[33px] sm:grid-cols-2 lg:grid-cols-3">
              {USE_SCENES.map((scene) => (
                <div
                  key={scene.title}
                  className="overflow-hidden rounded-[20px] bg-white shadow-[0px_0px_20.1px_0px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[322/202] w-full">
                    <ImagePlaceholder className="h-full w-full" />
                  </div>
                  <div className="flex h-[64px] items-center justify-center bg-egg-blue">
                    <span className="text-[24px] font-semibold text-white md:text-[32px]">{scene.title}</span>
                  </div>
                  <p className="px-[25px] py-[22px] text-[16px] leading-[1.5] tracking-[2px] text-[#333] md:text-[20px]">
                    {scene.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-[40px] flex justify-center">
              <MoreButton />
            </div>
          </Reveal>

          {/* アクセス */}
          <div className="mt-[80px]">
            <SectionHead title="アクセス" />
            <Reveal>
              <div className="aspect-[1025/577] w-full overflow-hidden rounded-[18px]">
                <ImagePlaceholder className="h-full w-full" />
              </div>
            </Reveal>
          </div>

          {/* 設備・サービス */}
          <div className="mt-[80px]">
            <SectionHead id="equipment" title="設備・サービス" />
            <div className="space-y-[40px]">
              {EQUIPMENT.map((eq) => (
                <Reveal key={eq.title}>
                  <div className="flex flex-col items-start gap-[30px] md:flex-row md:items-center md:gap-[55px]">
                    <div className="aspect-[508/286] w-full overflow-hidden rounded-[18px] md:w-[508px] md:shrink-0">
                      <ImagePlaceholder className="h-full w-full" />
                    </div>
                    <div>
                      <h4 className="mb-[16px] text-[24px] font-medium text-[#333] md:text-[32px]">{eq.title}</h4>
                      <p className="text-[16px] leading-[1.8] text-egg-gray md:text-[20px]">{eq.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* 料金表 */}
          <div className="mt-[80px]">
            <SectionHead id="pricing" title="料金表" />

            {/* ご利用プラン */}
            <Reveal>
              <h3 className="mb-[24px] text-[24px] font-medium text-[#333] md:text-[32px]">ご利用プラン</h3>
              <div className="overflow-hidden rounded-[20px] shadow-[0px_0px_13.4px_0px_rgba(0,0,0,0.1)]">
                <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-egg-blue text-center text-[18px] text-white md:text-[32px]">
                  <div className="flex items-center justify-center py-[24px] md:py-[28px]">プラン</div>
                  <div className="flex items-center justify-center py-[24px] md:py-[28px]">料金</div>
                  <div className="flex items-center justify-center py-[24px] md:py-[28px]">時間</div>
                </div>
                {PLAN_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[1.1fr_1fr_1fr] items-center bg-white text-center text-[15px] md:text-[24px] ${
                      i > 0 ? "border-t border-egg-gray-light" : ""
                    }`}
                  >
                    <div className="px-2 py-[36px] font-medium text-egg-blue md:py-[50px]">
                      {row.plan.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </div>
                    <div className="px-2 py-[36px] text-[#333] md:py-[50px]">{row.price}</div>
                    <div className="px-2 py-[36px] text-[#333] md:py-[50px]">
                      {row.time.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-[20px] text-[16px] tracking-[2.4px] text-[#333] md:text-[24px]">
                ※休日の場合、上記料金×1.5倍の料金になります。
              </p>
            </Reveal>

            {/* 無料貸出設備 */}
            <Reveal className="mt-[60px]">
              <h3 className="mb-[24px] text-[24px] font-medium text-[#333] md:text-[32px]">無料貸出設備</h3>
              <div className="overflow-hidden rounded-[20px] shadow-[0px_0px_13.4px_0px_rgba(0,0,0,0.1)]">
                <div className="grid grid-cols-[1.1fr_2fr] bg-egg-blue text-[18px] text-white md:text-[32px]">
                  <div className="flex items-center justify-center py-[24px] md:py-[28px]">項目</div>
                  <div className="flex items-center justify-center py-[24px] md:py-[28px]">内容</div>
                </div>
                {RENTAL_ROWS.map((row, i) => (
                  <div
                    key={row.item}
                    className={`grid grid-cols-[1.1fr_2fr] items-center bg-white text-[15px] md:text-[24px] ${
                      i > 0 ? "border-t border-egg-gray-light" : ""
                    }`}
                  >
                    <div className="px-2 py-[30px] text-center font-medium text-egg-blue md:py-[44px]">{row.item}</div>
                    <div className="px-2 py-[30px] pl-[24px] text-[#333] md:py-[44px] md:pl-[51px]">{row.content}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ご利用の注意点 */}
            <Reveal className="mt-[60px]">
              <h3 className="mb-[24px] text-[24px] font-medium text-[#333] md:text-[32px]">ご利用の注意点</h3>
              <div className="space-y-[8px]">
                {NOTES.map((note, i) => (
                  <p key={i} className="text-[15px] font-light leading-[1.5] tracking-[2.4px] text-[#333] md:text-[24px]">
                    {note}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
