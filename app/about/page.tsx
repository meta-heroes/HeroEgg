"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* =========================================================================
   Hero Egg について（Figma: 2-B.Hero Eggについて / node 45:230 完全再現）
   - デザインは Figma 準拠（1920幅・1342幅の白カード中央寄せ）
   - アニメ/機能は「見た目から想定されるもの」を実装:
     ・スクロールイン（フェードアップ）
     ・実績カウントアップ
     ・ページ内ナビのスムーススクロール + ホバー
   ========================================================================= */

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#fafafa]">
        <BackgroundEggs />

        {/* ===== ページタイトル（カード外・中央） ===== */}
        <section className="relative z-10 pt-[200px] pb-[60px] text-center">
          <Reveal>
            <div className="mb-[6px] flex items-center justify-center gap-[10px]">
              <Image
                src="/images/logo/hero-egg-logomark.png"
                alt=""
                width={59}
                height={59}
                className="rounded-full"
              />
              <span className="text-[24px] tracking-[0.1em] text-[#333]">About us</span>
            </div>
            <h1 className="text-[64px] font-bold leading-tight text-[#333]">
              Hero Eggについて
            </h1>
          </Reveal>
        </section>

        {/* ===== メイン白カード ===== */}
        <div className="relative z-10 mx-auto mb-[120px] max-w-[1342px] rounded-[39px] bg-white px-[100px] py-[80px] shadow-[0px_0px_61.6px_0px_rgba(0,0,0,0.25)]">
          {/* --- Hero Eggとは + ページ内ナビ --- */}
          <Reveal>
            <div className="mb-[28px]">
              <div className="mb-[20px] flex items-center gap-[6px]">
                {["blue", "orange", "green", "red", "yellow"].map((c) => (
                  <Image
                    key={c}
                    src={`/images/decorations/egg-${c}.png`}
                    alt=""
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <h2 className="text-[48px] font-medium text-[#333]">Hero Eggとは</h2>
            </div>
          </Reveal>

          <Reveal>
            <nav className="mb-[80px]">
              <div className="mb-[15px] grid grid-cols-3 gap-[25px]">
                {PAGE_NAV.slice(0, 3).map((item) => (
                  <NavButton key={item.label} {...item} />
                ))}
              </div>
              <div className="grid grid-cols-4 gap-[17px]">
                {PAGE_NAV.slice(3).map((item) => (
                  <NavButton key={item.label} {...item} />
                ))}
              </div>
            </nav>
          </Reveal>

          {/* ===================== 誕生のきっかけ ===================== */}
          <SectionDivider id="kikkake" title="Hero Egg 誕生のきっかけ" />
          <Reveal className="mb-[80px]">
            <div className="mb-[50px] text-[24px] leading-[2] tracking-[0.1em] text-[#333]">
              <p>
                地方でHoudiniを独学していたAさん。卓越した技術を持ちながら、就職の機会をつかめずにいました。そんな彼をSNSで発見し、一通のDMが採用へとつながりました。
              </p>
              <p className="mt-[1em]">
                入社後、Aさんは防災メタバースのプロシージャル都市ジェネレーターを完成。子どもたちが遊びながら防災を学ぶ体験が生まれました。
              </p>
            </div>

            <div className="mb-[50px] border-l-[5px] border-[#54c2dc] bg-[#e7f6fa] py-[35px] pl-[35px] pr-[35px]">
              <p className="text-[32px] leading-[2] tracking-[0.1em] text-[#54c2dc]">
                もしあのDMが届かなければ——
                <br />
                その才能は、地方に埋もれたままだったでしょう。
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[18px] bg-[#fafafa] p-[67px] shadow-[inset_0px_0px_38.4px_-12px_rgba(0,0,0,0.1)]">
              <DecoEggCluster />
              <p className="relative z-10 mb-[20px] text-[36px] font-medium leading-[2] text-[#ec7072]">
                「できる場所がない」をなくすために。
              </p>
              <div className="relative z-10 text-[24px] leading-[2] tracking-[0.1em] text-[#333]">
                <p>見過ごされがちな才能に、原体験と挑戦の場を。</p>
                <p>Hero Eggは、才能を社会へとつなぐ、学びの拠点です。</p>
              </div>
            </div>
          </Reveal>

          {/* ===================== ミッション ===================== */}
          <SectionDivider id="mission" title="ミッション" />
          <Reveal className="mb-[80px]">
            <p className="mb-[30px] text-[48px] font-medium text-[#333]">
              次世代のHEROを100人創出する
            </p>
            <div className="relative flex h-[291px] items-center justify-center overflow-hidden rounded-[18px] bg-[#fafafa] shadow-[inset_0px_0px_38.4px_-12px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/decorations/egg-yellow.png"
                alt=""
                width={537}
                height={537}
                className="pointer-events-none absolute -left-[100px] -top-[80px] opacity-90"
              />
              <Image
                src="/images/decorations/egg-yellow.png"
                alt=""
                width={537}
                height={537}
                className="pointer-events-none absolute -bottom-[80px] -right-[100px] opacity-90"
              />
              <p className="relative z-10 text-center text-[48px] font-medium text-[#333]">
                次世代の<span className="font-bold text-[#54c2dc]">HERO</span>を
                <span className="font-bold text-[#54c2dc]">100</span>人創出する
              </p>
            </div>
          </Reveal>

          {/* ===================== Hero Eggの魅力 ===================== */}
          <SectionDivider id="miryoku" title="Hero Eggの魅力" />

          {/* 魅力1: 原体験・環境・目標 */}
          <Reveal className="mb-[60px]">
            <FeatureHeading title="子どもたちの原体験・環境・目標を無償提供" />
            <p className="mb-[40px] text-[24px] leading-[2] tracking-[0.1em] text-[#333]">
              子どもたちが持続的に学び続けられる仕組みを構築しています。「原体験・環境・目標」を一気通貫で設計し、継続可能な構造として循環させています。
            </p>
            <div className="space-y-[30px]">
              <ColorBlock
                color="#ec7072"
                title={`新しい可能性に出会う“原体験”を無償で提供`}
                desc={`テクノロジーを活用したメタバース体験会やクリエイター体験会を実施し、子どもたちの興味を引き出す“きっかけ”を提供。`}
              />
              <ColorBlock
                color="#52bc9a"
                title={`挑戦し続けられる“学びの環境”を作る`}
                desc={`自由に使える空間で高性能PCを無料提供し、コンテストやワークショップなど学びをアウトプットするイベントを定期開催。`}
              />
              <ColorBlock
                color="#f6a04d"
                title={`学びの先に立てる“目標の舞台”を用意`}
                desc={`子どもたちが主体的に学べるように、目標となるアワードやコンテストなどの挑戦と成長の場をつくっています。`}
                button="目標となる舞台"
              />
            </div>
          </Reveal>

          {/* 魅力2: デジタルツイン教育環境 */}
          <Reveal className="mb-[60px]">
            <FeatureHeading title="誰も取り残さないデジタルツイン教育環境" />
            <p className="mb-[40px] text-[24px] leading-[2] tracking-[0.1em] text-[#333]">
              リアル環境とバーチャル環境の両面から教育へアプローチ。リアル空間とバーチャル空間を融合することで、地域にいながら世界と接続できるデジタルツイン型の教育を実装しています。
            </p>
            <Image
              src="/images/about/digital-twin.png"
              alt="デジタルツイン教育の図解（リアルとバーチャルの融合）"
              width={1033}
              height={581}
              className="h-auto w-full rounded-[18px]"
            />
            <div className="mt-[30px]">
              <p className="mb-[8px] text-[20px] font-bold text-[#333]">
                デジタルツインとは──
              </p>
              <p className="text-[16px] leading-[2] text-[#333]">
                現実世界（施設、建物など）のデータをもとに、仮想空間にそっくりな「双子」を作成し、現実では再現できないシミュレーションを行う技術。
              </p>
            </div>
          </Reveal>

          {/* 魅力3: 持続可能な教育のエコシステム */}
          <Reveal className="mb-[80px]">
            <FeatureHeading title="持続可能な教育のエコシステム" />
            <p className="mb-[40px] text-[24px] leading-[2] tracking-[0.1em] text-[#333]">
              Hero Eggは、国の助成金でAIリスキリング研修を実施し、大人がAIスキルを習得。その収益で子どもに無償のテクノロジー教育を提供し、子どものアイデアを地域・企業と連携して社会に還元するCSRモデルを実現しています。
            </p>
            <Image
              src="/images/about/ecosystem.png"
              alt="持続可能な教育のエコシステムの図解。子どもの想像力と大人の実行力を融合させ、地域や企業の課題解決へ。"
              width={1033}
              height={770}
              className="block h-auto w-full rounded-[18px]"
            />
          </Reveal>

          {/* ===================== 豊富なイベント開催実績 ===================== */}
          <SectionDivider id="jisseki" title="豊富なイベント開催実績" />
          <Reveal className="mb-[80px]">
            <p className="mb-[40px] text-[24px] leading-[2] text-[#333]">
              2025年は、150回のイベントを4,000名以上の子どもたちに無償提供しました。
            </p>

            <div className="mb-[30px] flex h-[93px] items-center justify-center rounded-[18px] bg-gradient-to-r from-[#d9d9d9] to-[#f3f3f3]">
              <span className="text-[48px] font-bold tracking-[0.1em] text-[#333]">2025</span>
            </div>

            <div className="mb-[50px] grid grid-cols-2 gap-[20px]">
              <StatCard
                bg="#fed649"
                fg="#333"
                label="イベント開催数"
                end={150}
                suffix="回以上"
              />
              <StatCard
                bg="#54c2dc"
                fg="#fff"
                label="子ども層動員数"
                end={4000}
                suffix="名以上"
              />
            </div>

            <div className="mb-[40px] grid grid-cols-5 gap-[20px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="relative aspect-[3/2] overflow-hidden rounded-[9px]"
                >
                  <Image
                    src={`/images/about/event-${i}.png`}
                    alt={`イベント開催の様子 ${i}`}
                    fill
                    sizes="(max-width: 1342px) 18vw, 240px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <PillButton label="もっと見る" />
            </div>
          </Reveal>

          {/* ===================== サービス ===================== */}
          <SectionDivider id="service" title="サービス" />
          <Reveal className="mb-[80px]">
            <p className="mb-[40px] text-[24px] leading-[2] text-[#333]">
              各種、目的に合わせてお選びいただけます。
            </p>
            <div className="flex justify-between gap-[16px]">
              {SERVICE_CARDS.map((s, i) => (
                <ServiceCard key={i} {...s} />
              ))}
            </div>
          </Reveal>

          {/* ===================== コミュニティー ===================== */}
          <SectionDivider id="community" title="コミュニティー" />
          <Reveal className="mb-[80px]">
            <p className="mb-[40px] text-[24px] leading-[2] text-[#333]">
              子ども向けと大人向けのコミュニティー。
            </p>
            <div className="flex flex-wrap gap-[48px]">
              <CommunityCard
                image="/images/community/card-eggjam.png"
                lead="子どもたちで自らつくる"
                name="EGG JAM"
                arrowColor="#fed649"
              />
              <CommunityCard
                image="/images/community/card-aimonday.png"
                lead="大人のAI学び直し"
                name="AI MONDAY"
                arrowColor="#54c2dc"
              />
            </div>
          </Reveal>

          {/* ===================== メンバー紹介 ===================== */}
          <SectionDivider id="member" title="メンバー紹介" />
          <Reveal className="mb-[60px]">
            <MemberRow
              role="代表取締役"
              name="近藤 にこる"
              photo="/images/about/member-nikoru-bg.png"
              catch={["挑戦の場を、", "地域から世界へ広げていく"]}
              bio="HeroEggを拠点に、AIや最新テクノロジーで子どもたちの可能性を広げています。仲間・地域・社会とつながりながら、挑戦の場をともにつくっていく。その輪を、全国へ、世界へ。あなたも一緒に。"
            />
          </Reveal>
          <Reveal className="mb-[80px]">
            <MemberRow
              role="取締役"
              name="北野 裕也"
              photo="/images/about/member-yuya-bg.png"
              catch={["あの「できた！」の顔が、", "原動力"]}
              bio="子どもが「できた！」と笑う瞬間が好きで、それを生み出したくて続けています。AIやテクノロジーは、子どもたちの「やってみたい」を実現する魔法のツール。挑戦するワクワクを、一緒に体感しましょう。"
            />
          </Reveal>

          {/* ===================== 今後の展望 ===================== */}
          <SectionDivider id="vision" title="今後の展望" />
          <Reveal>
            <p className="mb-[40px] text-[24px] leading-[2] tracking-[0.1em] text-[#333]">
              全国には約900万戸以上もの空き施設/スペースが存在しています。私たちHero
              Eggは、これらをHEROを育成するDX教室へ変える取り組みを行っております。最先端技術を学べる環境を全国に届けるべく、2030年までにHero
              Egg 100店舗展開を目指し、新しい教育インフラを実装します。
            </p>
            <FutureVision />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ============================ データ ============================ */

const PAGE_NAV = [
  { label: "Hero Egg 誕生のきっかけ", href: "#kikkake" },
  { label: "ミッション", href: "#mission" },
  { label: "Hero Eggの魅力", href: "#miryoku" },
  { label: "豊富なイベント開催実績", href: "#jisseki" },
  { label: "サービス", href: "#service" },
  { label: "メンバー紹介", href: "#member" },
  { label: "今後の展望", href: "#vision" },
] as const;

const SERVICE_CARDS = [
  { title: ["主催・共催", "イベント実施"], char: "/images/characters/ch-yellow-flag.png", color: "#fed649" },
  { title: ["HEROサロン", "施設スポンサー"], char: "/images/characters/ch-blue-cheer.png", color: "#54c2dc" },
  { title: ["施設", "利用"], char: "/images/characters/ch-orange-microphone.png", color: "#f6a04d" },
  { title: ["Hero Egg", "地域展開"], char: "/images/characters/ch-green-teacher.png", color: "#52bc9a" },
  { title: ["共創", "プログラム"], char: "/images/characters/ch-red-tickets.png", color: "#ec7072" },
] as const;

/* ============================ 部品 ============================ */

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function BackgroundEggs() {
  // Figma: 背景 (419:375) 上部の装飾卵（座標・サイズ・回転を踏襲）
  const eggs = [
    { src: "egg-red", left: 265, top: -143, size: 530, rot: 84 },
    { src: "egg-yellow", left: 884, top: -90, size: 453, rot: 125 },
    { src: "egg-green", left: 226, top: 83, size: 657, rot: 17 },
    { src: "egg-blue", left: 1452, top: 356, size: 587, rot: -125 },
    { src: "egg-orange", left: 1320, top: 238, size: 689, rot: -16 },
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-[1100px] w-[1920px] -translate-x-1/2 overflow-hidden">
      {eggs.map((e) => (
        <div
          key={e.src}
          className="absolute"
          style={{
            left: e.left,
            top: e.top,
            width: e.size,
            height: e.size,
            transform: `rotate(${e.rot}deg)`,
            transformOrigin: "0 0",
            opacity: 0.85,
          }}
        >
          <Image
            src={`/images/decorations/${e.src}.png`}
            alt=""
            fill
            sizes="700px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function DecoEggCluster() {
  const eggs = [
    { src: "egg-blue", className: "bottom-0 left-0 w-[381px] h-[381px]" },
    { src: "egg-yellow", className: "bottom-0 -right-[50px] w-[478px] h-[478px]" },
    { src: "egg-green", className: "bottom-0 left-[35%] w-[400px] h-[400px]" },
    { src: "egg-orange", className: "bottom-0 left-[52%] w-[373px] h-[373px]" },
  ];
  return (
    <>
      {eggs.map((e) => (
        <div
          key={e.src + e.className}
          className={`pointer-events-none absolute opacity-40 ${e.className}`}
        >
          <Image
            src={`/images/decorations/${e.src}.png`}
            alt=""
            fill
            sizes="478px"
            className="object-contain"
          />
        </div>
      ))}
    </>
  );
}

function NavButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex h-[83px] flex-col items-center justify-center rounded-[14px] border-[3px] border-[#54c2dc] px-2 text-center text-[20px] font-medium leading-tight text-[#54c2dc] transition-colors duration-200 hover:bg-[#54c2dc] hover:text-white"
    >
      <span>{label}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mt-[2px]"
      >
        <path
          d="M7 10l5 5 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function SectionDivider({ id, title }: { id: string; title: string }) {
  return (
    <div id={id} className="mb-[40px] scroll-mt-[120px]">
      <div className="mb-[16px] flex items-center gap-[8px]">
        <div className="h-[3px] w-[30px] bg-[#54c2dc]" />
        <div className="h-[1px] flex-1 bg-[#d7d7d7]" />
      </div>
      <h2 className="text-[40px] font-medium text-[#333]">{title}</h2>
    </div>
  );
}

function FeatureHeading({ title }: { title: string }) {
  return (
    <div className="mb-[16px] flex items-start gap-[8px]">
      <div className="mt-[4px] h-[44px] w-[4px] flex-shrink-0 rounded-full bg-[#54c2dc]" />
      <h3 className="text-[36px] font-medium leading-tight text-[#333]">{title}</h3>
    </div>
  );
}

function ColorBlock({
  color,
  title,
  desc,
  button,
}: {
  color: string;
  title: string;
  desc: string;
  button?: string;
}) {
  return (
    <div className="rounded-[18px] p-[50px]" style={{ backgroundColor: color }}>
      <h4 className="mb-[16px] text-[28px] font-bold leading-[1.5] text-white">
        {title}
      </h4>
      <p className="text-[20px] leading-[2] text-white/95">{desc}</p>
      {button && (
        <div className="mt-[20px] flex justify-end">
          <a
            href="#"
            className="inline-flex h-[61px] items-center gap-[8px] rounded-[30px] bg-[#333] px-[24px] text-[14px] font-bold text-white shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
          >
            {button}
            <Arrow />
          </a>
        </div>
      )}
    </div>
  );
}

function StatCard({
  bg,
  fg,
  label,
  end,
  suffix,
}: {
  bg: string;
  fg: string;
  label: string;
  end: number;
  suffix: string;
}) {
  return (
    <div className="rounded-[18px] p-[40px]" style={{ backgroundColor: bg }}>
      <p className="mb-[10px] text-[24px] font-bold" style={{ color: fg }}>
        {label}
      </p>
      <div className="flex items-baseline">
        <CountUp end={end} className="text-[80px] font-bold leading-none" style={{ color: fg }} />
        <span className="ml-[4px] text-[24px] font-bold" style={{ color: fg }}>
          {suffix}
        </span>
      </div>
    </div>
  );
}

function CountUp({
  end,
  className,
  style,
}: {
  end: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const dur = 1600;
        let start: number | null = null;
        const tick = (t: number) => {
          if (start === null) start = t;
          const p = Math.min((t - start) / dur, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(eased * end));
          if (p < 1) requestAnimationFrame(tick);
          else setN(end);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <span ref={ref} className={className} style={style}>
      {n.toLocaleString()}
    </span>
  );
}

function ServiceCard({
  title,
  char,
  color,
}: {
  title: readonly string[];
  char: string;
  color: string;
}) {
  // 全カード同サイズ。ホバーで拡大＋カードがアクセント色に変化。矢印は常にアクセント色。
  return (
    <div className="group relative h-[384px] flex-1 cursor-pointer overflow-hidden rounded-[18px] bg-[#ababab] transition-all duration-300 hover:z-10 hover:scale-[1.05] hover:shadow-[0px_14px_34px_-8px_rgba(0,0,0,0.3)]">
      {/* ホバーで現れるアクセント色のオーバーレイ */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: color }}
      />
      <div className="relative z-10 p-[14px]">
        <div className="text-[15px] font-bold leading-[1.5] text-[#333] transition-colors duration-300 group-hover:text-white">
          {title.map((t, j) => (
            <p key={j}>{t}</p>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[5] h-[72%]">
        <Image src={char} alt="" fill sizes="200px" className="object-contain object-bottom" />
      </div>
      <a
        href="#"
        className="absolute bottom-[14px] right-[14px] z-10 flex h-[43px] w-[43px] items-center justify-center rounded-full transition-all hover:scale-110 group-hover:ring-2 group-hover:ring-white/80"
        style={{ backgroundColor: color }}
        aria-label="詳細を見る"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4 2l6 5-6 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function CommunityCard({
  image,
  lead,
  name,
  arrowColor,
}: {
  image: string;
  lead: string;
  name: string;
  arrowColor: string;
}) {
  // Figma: 上部=写真+暗幕+白ロゴ / 下部=白地にリード文+名前+色付き矢印
  return (
    <div className="w-[491px] max-w-full overflow-hidden rounded-[18px] bg-white shadow-[0px_0px_100.3px_-25px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[491/276]">
        <Image src={image} alt={name} fill sizes="491px" className="object-cover" />
      </div>
      <div className="relative px-[28px] pb-[26px] pt-[18px]">
        <p className="text-[20px] font-bold leading-[1.5] text-[#333]">{lead}</p>
        <p className="text-[20px] font-bold leading-[1.5] text-[#333]">{name}</p>
        <a
          href="#"
          className="absolute bottom-[18px] right-[28px] flex h-[43px] w-[43px] items-center justify-center rounded-full transition-transform hover:scale-110"
          style={{ backgroundColor: arrowColor }}
          aria-label={`${name} の詳細`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 2l6 5-6 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function MemberRow({
  role,
  name,
  photo,
  catch: catchCopy,
  bio,
}: {
  role: string;
  name: string;
  photo: string;
  catch: string[];
  bio: string;
}) {
  // Figma: テキスト左・写真右（写真の背後に淡い青の卵が覗く合成画像）
  return (
    <div className="flex items-start gap-[60px]">
      <div className="flex-1 pt-[40px]">
        <p className="mb-[4px] text-[18px] text-[#333]">{role}</p>
        <h4 className="mb-[20px] text-[36px] font-bold text-[#333]">{name}</h4>
        <div className="mb-[30px] text-[24px] font-bold leading-[1.6] text-[#333]">
          {catchCopy.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
        <p className="text-[16px] leading-[2] text-[#333]">{bio}</p>
      </div>
      <div className="w-[488px] flex-shrink-0">
        <Image
          src={photo}
          alt={name}
          width={523}
          height={545}
          sizes="488px"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function FutureVision() {
  return (
    <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-[#54c2dc] to-[#52bc9a]">
      <Image
        src="/images/decorations/egg-yellow.png"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -left-[60px] -bottom-[80px] opacity-30"
      />
      <Image
        src="/images/decorations/egg-orange.png"
        alt=""
        width={360}
        height={360}
        className="pointer-events-none absolute -right-[40px] -top-[60px] opacity-30"
      />
      <div className="relative z-10 text-center text-white drop-shadow">
        <p className="text-[64px] font-bold leading-none tracking-[0.05em]">2030年</p>
        <p className="mt-[12px] text-[80px] font-bold leading-none">100店舗展開</p>
      </div>
    </div>
  );
}

function PillButton({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="inline-flex h-[51px] items-center gap-[10px] rounded-[30px] border-2 border-[#333] px-[30px] text-[16px] font-bold text-[#333] transition-colors duration-200 hover:bg-[#333] hover:text-white"
    >
      {label}
      <Arrow dark />
    </a>
  );
}

function Arrow({ dark }: { dark?: boolean }) {
  return (
    <svg width="25" height="10" viewBox="0 0 25 10" fill="none">
      <path
        d="M0 5h23M18 1l5 4-5 4"
        stroke={dark ? "currentColor" : "white"}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

