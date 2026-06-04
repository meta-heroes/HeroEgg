/** Hero Egg 公式LINEの友だち追加URL（全LINEボタン共通の真実）。 */
export const LINE_URL = "https://line.me/R/ti/p/@280dhzzg";

export const NAV_ITEMS = [
  { label: "Hero Eggについて", href: "/about" },
  { label: "サービス", href: "/service-community" },
  { label: "イベント", href: "/events" },
  { label: "施設について", href: "/facilities" },
  { label: "実績", href: "/#track-record" },
  { label: "お知らせ", href: "/news" },
  { label: "よくある質問", href: "/#faq" },
] as const;

/**
 * サイト全体のグローバルナビゲーション（単一の真実）。
 * Header（ドロワー）と Footer の両方がこの定義を参照する。
 *
 * リンク方針（Figma の各フレームと実ルートを対応付け）:
 *   1.トップビュー            → "/"
 *   2-A.お知らせ              → "/#news"
 *   2-B.Hero Eggについて      → "/about"（子は about ページ内の実在アンカー）
 *   2-D.イベント              → "/events"（子は events ページ内の実在アンカー）
 *   2-E.サービス/コミュニティ → "/service-community"
 *   2-C/3-C.施設について      → "/facilities"
 *   2-F.よくある質問          → "/#faq"
 *   コーポレートサイト        → "/company"
 *
 * 子リンクは「実際に存在する id アンカー」だけを指す（リンク切れを作らない）。
 */
export const MAIN_NAV = [
  {
    label: "Hero Eggについて",
    href: "/about",
    children: [
      { label: "誕生のきっかけ", href: "/about#kikkake" },
      { label: "ミッション", href: "/about#mission" },
      { label: "Hero Eggの魅力", href: "/about#miryoku" },
      { label: "メンバー紹介", href: "/about#member" },
    ],
  },
  {
    label: "プロダクト・サービス",
    href: "/service-community",
  },
  {
    label: "イベント",
    href: "/events",
    children: [
      { label: "イベントプログラム", href: "/events#program" },
      { label: "イベントの種類", href: "/events#event-types" },
      { label: "開催形式", href: "/events#event-formats" },
    ],
  },
  {
    label: "施設について",
    href: "/facilities",
  },
  { label: "実績", href: "/#track-record" },
  { label: "お知らせ", href: "/news" },
  { label: "よくある質問", href: "/#faq" },
  { label: "運営会社", href: "/company" },
] as const;

export const CONTENT_SLIDES = [
  { number: "01", title: "イベント", subtitle: "Event", image: "/images/slides/slide-01.png" },
  { number: "02", title: "施設利用", subtitle: "Rental Space", image: "/images/slides/slide-02.png" },
  { number: "03", title: "コミュニティー", subtitle: "Community", image: "/images/slides/slide-03.png" },
  { number: "04", title: "スクール", subtitle: "School", image: "/images/slides/slide-04.png" },
  { number: "05", title: "実証実験", subtitle: "PoC", image: "/images/slides/slide-05.jpg" },
  { number: "06", title: "HEROサロン", subtitle: "HERO Salon", image: "/images/slides/slide-06.jpg" },
  { number: "07", title: "施設スポンサー", subtitle: "Facility Sponsor", image: "/images/slides/slide-07.jpg" },
  { number: "08", title: "施設地域展開", subtitle: "Regional Expansion", image: "/images/slides/slide-08.jpg" },
] as const;

export const FEATURES = [
  {
    title: "原体験",
    image: "/images/features/feature-1.png",
    items: [
      "無償のテクノロジー教育",
      "メタバース・eスポーツ体験",
      "セミナー・ワークショップ",
    ],
  },
  {
    title: "環境",
    image: "/images/features/feature-2.png",
    items: [
      "PCやHMDなどの最新の設備を無料で自由に利用",
      "子どもたちだけで定期的にイベント企画・運営",
      "共創で企業と提供するコンテンツへの参加",
    ],
  },
  {
    title: "目標",
    image: "/images/features/feature-3.png",
    items: [
      "ピッチコンテストやアワード",
      "大規模イベントでのプレゼン",
      "アンバサダー就任",
    ],
  },
] as const;

/** イベント案内セクションの画像カルーセル（Figma: メイン 4:704 + キャンバス上の予備 547:386/387/388） */
export const EVENT_IMAGES = [
  { src: "/images/events/event-main.png", alt: "イベントの様子（集合写真）" },
  { src: "/images/events/event-2.png", alt: "VR・XR機材を使った体験の様子" },
  { src: "/images/events/event-3.png", alt: "VRヘッドセットを体験する子ども" },
  { src: "/images/events/event-4.png", alt: "教室でのワークショップの様子" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "主催・共催 イベント実施",
    description: "ワークショップ、ハッカソン、講座など、目的に合わせたイベントを企画・運営します。",
    character: "/images/characters/ch-yellow-flag.png",
    color: "egg-yellow" as const,
    ctaLabel: "イベント主催者向け",
    ctaColor: "orange" as const,
  },
  {
    number: "02",
    title: "HEROサロン・施設スポンサー",
    description: "月定額で施設を共同利用。企業ブランディングやコミュニティ形成をサポートします。",
    character: "/images/characters/ch-blue-cheer.png",
    color: "egg-blue" as const,
    ctaLabel: "スポンサー候補者向け",
    ctaColor: "blue" as const,
  },
  {
    number: "03",
    title: "施設利用",
    description: "体験・学習・交流のための有用なスペースを時間帯制でご利用できます。",
    character: "/images/characters/ch-orange-microphone.png",
    color: "egg-orange" as const,
    ctaLabel: "施設利用者向け",
    ctaColor: "orange" as const,
  },
  {
    number: "04",
    title: "Hero Egg 地域展開",
    description: "Hero Eggのモデルを地域に展開するパートナーシッププログラム。地域の次世代育成を支援します。",
    character: "/images/characters/ch-green-teacher.png",
    color: "egg-green" as const,
    ctaLabel: "パートナー企業向け",
    ctaColor: "green" as const,
  },
  {
    number: "05",
    title: "共創プログラム",
    description: "企業・団体と学生・若者が共にプロジェクトに取り組む実践型プログラム提供。",
    character: "/images/characters/ch-red-tickets.png",
    color: "egg-red" as const,
    ctaLabel: "コンテンツホルダー向け",
    ctaColor: "red" as const,
  },
] as const;

export const TRACK_RECORDS = [
  {
    label: "イベント総動員数",
    value: 22,
    suffix: "万人",
    color: "bg-egg-blue",
    icon: "/images/icons/event-people.png",
  },
  {
    label: "イベント開催数",
    value: 500,
    suffix: "回",
    color: "bg-egg-red",
    icon: "/images/icons/event-icon.png",
  },
  {
    label: "公式LINE登録者数",
    value: 696,
    suffix: "名",
    color: "bg-egg-green",
    icon: "/images/icons/user-icon.png",
  },
] as const;

export const NEWS_ITEMS = [
  {
    date: "2026.03.06",
    categories: [
      { label: "プレスリリース", color: "bg-egg-blue" },
      { label: "メディア掲載", color: "bg-egg-yellow" },
      { label: "開催情報", color: "bg-egg-red" },
    ],
    title: "【お知らせ】Hero Egg なんば本店にて新サービスを開始しました",
  },
  {
    date: "2026.03.06",
    categories: [
      { label: "プレスリリース", color: "bg-egg-blue" },
      { label: "メディア掲載", color: "bg-egg-yellow" },
      { label: "開催情報", color: "bg-egg-red" },
    ],
    title: "【イベント】春のテクノロジー体験フェスタを開催いたします",
  },
  {
    date: "2026.03.06",
    categories: [
      { label: "プレスリリース", color: "bg-egg-blue" },
      { label: "メディア掲載", color: "bg-egg-yellow" },
      { label: "開催情報", color: "bg-egg-red" },
    ],
    title: "【メディア】日経新聞にHero Eggの取り組みが掲載されました",
  },
  {
    date: "2026.03.06",
    categories: [
      { label: "プレスリリース", color: "bg-egg-blue" },
      { label: "メディア掲載", color: "bg-egg-yellow" },
      { label: "開催情報", color: "bg-egg-red" },
    ],
    title: "【募集】共創プログラム参加企業を募集しています",
  },
  {
    date: "2026.03.06",
    categories: [
      { label: "プレスリリース", color: "bg-egg-blue" },
      { label: "メディア掲載", color: "bg-egg-yellow" },
      { label: "開催情報", color: "bg-egg-red" },
    ],
    title: "【開催報告】第5回プログラミングコンテストの結果を発表します",
  },
] as const;

/** 企業情報ページ「会社概要」テーブル（Figma node 538:404 準拠） */
export const COMPANY_INFO: { label: string; value: string[] }[] = [
  { label: "会社名", value: ["株式会社Hero Egg"] },
  { label: "本店住所", value: ["〒530-0027", "大阪府大阪市北区堂山町1-5", "三共梅田ビル 8F"] },
  { label: "設立日", value: ["2026年5月28日"] },
  { label: "代表取締役", value: ["近藤にこる"] },
  { label: "資本金", value: ["100万円"] },
  { label: "店舗情報", value: ["なんば店", "〒556-0011", "大阪府大阪市浪速区難波中2-10-70", "なんばパークス1階"] },
];

export const STORE_SOCIALS = [
  { label: "LINE", icon: "/images/icons/social-line.png", href: "#" },
  { label: "X", icon: "/images/icons/social-x.png", href: "#" },
  { label: "TikTok", icon: "/images/icons/social-tiktok.png", href: "#" },
  { label: "Instagram", icon: "/images/icons/social-instagram.png", href: "#" },
] as const;

export type Store = {
  id: string;
  name: string;
  zip: string;
  address: string[];
  hours: string;
  capacity: string;
  storeUrl: string;
  /** 写真スライドの枚数（実画像が未用意のためプレースホルダー枚数） */
  photoCount: number;
  /** 実画像ギャラリー（指定時はプレースホルダーの代わりに使用） */
  images?: readonly string[];
};

export const STORE_SECTIONS: { label: string; stores: Store[] }[] = [
  {
    label: "本店",
    stores: [
      {
        id: "namba",
        name: "なんば本店",
        zip: "〒556-0011",
        address: ["大阪府大阪市浪速区難波中2丁目10-70", "なんばパークス1階"],
        hours: "11:00-21:00",
        capacity: "着席最大40名 / 立ち50名程度",
        storeUrl: "/facilities/namba",
        photoCount: 6,
        images: [
          "/images/facilities/namba/1.jpg",
          "/images/facilities/namba/2.jpg",
          "/images/facilities/namba/3.jpg",
          "/images/facilities/namba/4.jpg",
          "/images/facilities/namba/5.jpg",
          "/images/facilities/namba/6.jpg",
        ],
      },
    ],
  },
];

export const FOOTER_NAV = {
  columns: [
    {
      title: "Hero Eggについて",
      titleHref: "/about",
      links: [
        { label: "ビジョン", href: "/#vision" },
        { label: "特徴", href: "/#features" },
      ],
    },
    {
      title: "プロダクト・サービス",
      titleHref: "/#service",
      links: [
        { label: "イベント案内", href: "/#event" },
        { label: "サービス一覧", href: "/#service" },
      ],
    },
    {
      title: "施設について",
      titleHref: "/facilities",
      links: [
        { label: "施設一覧", href: "/facilities" },
        { label: "トピックス一覧", href: "/news" },
      ],
    },
    {
      title: "よくある質問",
      titleHref: "/#faq",
      links: [
        { label: "FAQ", href: "/#faq" },
        { label: "お問い合わせ", href: "/contact" },
      ],
    },
  ],
  address: {
    name: "Hero Egg",
    zip: "〒556-0011",
    address: "大阪府大阪市浪速区難波中2丁目10-70\nなんばパークス 1F eスタジアムなんば本店内",
  },
  legal: [
    { label: "運営会社", href: "/company" },
    { label: "利用規約", href: "/terms" },
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "特定商取引法に基づく表記", href: "/tokushoho" },
  ],
  copyright: "© Hero Egg, inc. All rights reserved.",
} as const;

/* ========================================================================
 * イベントページ (2-D.イベント / Figma node 49:97)
 * ===================================================================== */

// プログラムのカテゴリ（横スクロールカルーセル）
// side: 背景カラーバンドの抜ける方向 / band: カラーバンド・タグの色
export const EVENT_PROGRAMS = [
  {
    id: "tech",
    title: "テクノロジー教育",
    color: "#54c2dc",
    tagText: "#ffffff",
    side: "right",
    cards: ["AIワークショップ", "ゲーム制作", "3DCG制作", "XR体験"],
  },
  {
    id: "global",
    title: "グローバル教育",
    color: "#fed649",
    tagText: "#333333",
    side: "left",
    cards: ["国際交流会", "XR × 国際交流", "国際ビジネスコンテスト"],
  },
  {
    id: "finance",
    title: "ファイナンス教育",
    color: "#52bc9a",
    tagText: "#ffffff",
    side: "right",
    cards: [
      "AIワークショップ",
      "資産形成セミナー",
      "投資シミュレーション",
      "起業ファイナンス",
    ],
  },
  {
    id: "entre",
    title: "アントレプレナー教育",
    color: "#f6a04d",
    tagText: "#ffffff",
    side: "left",
    cards: [
      "アイデアソン",
      "ピッチコンテスト",
      "事業計画ワーク",
      "経営者交流会",
    ],
  },
] as const;

// その他プログラム（全幅レッドバンド・固定4カラム）
export const EVENT_OTHER_PROGRAMS = [
  "スポーツ",
  "メンタルヘルス",
  "防災訓練 / 学習",
  "言語学習",
] as const;

// イベントの種類（番号付き3カード）
export const EVENT_TYPES = [
  {
    no: "01",
    title: ["体験会", "ワークショップ"],
    items: ["XR体験", "AIワークショップ", "3DCG体験", "ゲーム制作体験"],
  },
  {
    no: "02",
    title: ["登壇", "イベント"],
    items: ["セミナー・講演会", "パネルディスカッション", "ピッチイベント", "フォーラム"],
  },
  {
    no: "03",
    title: ["交流会", "コミュニティー"],
    items: ["ファンミーティング", "勉強会", "国際交流会", "経営者交流会"],
  },
] as const;

// イベント形式（対面 / オンライン / ハイブリッド）
export const EVENT_FORMATS = ["対面", "オンライン", "ハイブリッド"] as const;

/* ========================================================================
 * サービス・コミュニティーページ (2-E. / Figma node 53:697, 524:454)
 * ---------------------------------------------------------------------
 * 「サービス / コミュニティー」のトグルで2つのコンテンツ群を切り替える。
 * tabs … カード上部のサブカテゴリタブ（クリックで該当カードへスクロール）
 * cards … 各サービス／コミュニティーの詳細カード（番号順）
 *   tab の並び順とカードの番号順は Figma 通り意図的に異なる（id で対応）。
 * ===================================================================== */

export type ServiceCommunityCard = {
  num: string;
  id: string;
  title: string;
  /** コミュニティーカードのみ：ヘッダーに表示するロゴ */
  logo?: { src: string; width: number; height: number; alt: string };
  description: string;
  items: readonly string[];
  cta: string;
  href: string;
  /** カード右側の画像（コミュニティーは写真＋ロゴの合成画像） */
  image?: string;
  /** サービスカードのキャラクター（色付きボックス上に表示） */
  character?: string;
  /** サービスカードのアクセント色（キャラクター背景ボックス） */
  accent?: string;
};

export type ServiceCommunityTab = {
  id: string;
  /** 2行に分けて表示するためのラベル配列 */
  label: readonly string[];
};

export const SERVICE_COMMUNITY: {
  service: { tabs: readonly ServiceCommunityTab[]; cards: readonly ServiceCommunityCard[] };
  community: { tabs: readonly ServiceCommunityTab[]; cards: readonly ServiceCommunityCard[] };
} = {
  service: {
    tabs: [
      { id: "event", label: ["主催・共催", "イベント実施"] },
      { id: "facility", label: ["施設利用"] },
      { id: "regional", label: ["Hero Egg", "地域展開"] },
      { id: "salon", label: ["HEROサロン", "施設スポンサー"] },
      { id: "co-creation", label: ["共創プログラム"] },
    ],
    cards: [
      {
        num: "01",
        id: "event",
        title: "主催・共催 イベント実施",
        description:
          "ワークショップ・ハッカソン・講演会など、目的に合わせたイベントを企画・運営します。",
        items: ["企画〜当日運営まで一括サポート", "オンライン・オフライン対応", "参加者集客の支援も可能"],
        cta: "もっと見る",
        href: "#",
        character: "/images/characters/ch-yellow-flag.png",
        accent: "#fed649",
      },
      {
        num: "02",
        id: "salon",
        title: "HEROサロン・施設スポンサー",
        description: "次世代育成に共感する企業・自治体向けのスポンサーシップ。",
        items: ["施設へのブランド露出・命名権", "会員コミュニティへのリーチ", "CSR・採用ブランディングに活用"],
        cta: "もっと見る",
        href: "#",
        character: "/images/characters/ch-blue-cheer.png",
        accent: "#54c2dc",
      },
      {
        num: "03",
        id: "facility",
        title: "施設利用",
        description: "体験・学習・交流のための専用スペースを時間単位でご利用できます。",
        items: ["高速Wi-Fi・プロジェクター完備", "施設運営サポート", "幅広い用途に対応"],
        cta: "施設を選ぶ",
        href: "/facilities",
        character: "/images/characters/ch-orange-microphone.png",
        accent: "#f6a04d",
      },
      {
        num: "04",
        id: "regional",
        title: "Hero Egg 地域展開",
        description:
          "Hero Eggのモデルを地域に展開するパートナーシッププログラム。地域の次世代育成を支援します。",
        items: ["直営型で手離れがよい", "カリキュラム・運営ノウハウを提供", "地域の特性に合わせたカスタマイズ対応"],
        cta: "もっと見る",
        href: "#",
        character: "/images/characters/ch-green-teacher.png",
        accent: "#52bc9a",
      },
      {
        num: "05",
        id: "co-creation",
        title: "共創プログラム",
        description: "企業・団体と学生・若者が共にプロジェクトに取り組む実践型プログラム展開。",
        items: ["企業の実課題をテーマにした共同プロジェクト", "企業の実証実験フィールドとしての活用", "成果発表の場を用意"],
        cta: "もっと見る",
        href: "#",
        character: "/images/characters/ch-red-tickets.png",
        accent: "#ec7072",
      },
    ],
  },
  community: {
    tabs: [
      { id: "egg-jam", label: ["EGG JAM"] },
      { id: "ai-monday", label: ["AI MONDAY"] },
    ],
    cards: [
      {
        num: "01",
        id: "egg-jam",
        title: "EGG JAM",
        logo: { src: "/images/community/egg-jam-logo.png", width: 259, height: 95, alt: "EGG JAM" },
        description:
          "子どもたちが自ら企画・運営し、テクノロジーを活用したクリエイティブ制作を行うコミュニティー。",
        items: ["AIやプログラミングのワークショップ", "コミュニティー内部活動", "課外活動を通じた職業体験"],
        cta: "もっと見る",
        href: "#",
        image: "/images/community/sc-egg-jam.jpg",
      },
      {
        num: "02",
        id: "ai-monday",
        title: "AI MONDAY",
        logo: { src: "/images/community/ai-monday-logo.png", width: 200, height: 112, alt: "AI MONDAY" },
        description: "豪華講師を招いて、交流とAIを勉強する大人の学び直しコミュニティー。",
        items: ["毎月豪華ゲストを招待", "毎月1回、無料で参加できる", "オンラインなので、どこでも参加可能"],
        cta: "もっと見る",
        href: "#",
        image: "/images/community/sc-ai-monday.jpg",
      },
    ],
  },
} as const;
