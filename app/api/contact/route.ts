import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * お問い合わせフォームの送信処理。
 *
 * 送信ロジックは gyakuten-hp と同じ nodemailer + SMTP 方式。
 * 稼働中の gyaku-ten.jp（ロリポップ）SMTP を送信元に使い、
 * 運営の受信アドレス（meta-heroes.io）へ通知メールを送る。
 *
 * 必要な環境変数:
 *   SMTP_HOST / SMTP_PORT / SMTP_SECURE / SMTP_USER / SMTP_PASS
 *   FROM_EMAIL / FROM_NAME
 *   CONTACT_TO（任意・カンマ区切り。未指定時は下記2宛先）
 */

const DEFAULT_RECIPIENTS = ["customer@meta-heroes.io", "kondo.kenji@meta-heroes.io"];

const INQUIRY_TYPES = [
  "施設利用について",
  "イベント主催・共催",
  "HEROサロン・施設スポンサー",
  "共創プログラム",
  "取材・メディア",
  "その他",
];

type Payload = {
  type?: string;
  name?: string;
  kana?: string;
  company?: string;
  email?: string;
  tel?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  try {
    let body: Payload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
    }

    const type = (body.type ?? "").trim();
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "必須項目が入力されていません。" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "メールアドレスの形式が正しくありません。" }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, FROM_EMAIL, FROM_NAME, CONTACT_TO } =
      process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP の環境変数が未設定です（SMTP_HOST / SMTP_USER / SMTP_PASS）。");
      return NextResponse.json(
        { error: "送信設定が未完了です。時間をおいて再度お試しください。" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || "465", 10),
      secure: SMTP_SECURE ? SMTP_SECURE === "true" : true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const recipients = (CONTACT_TO ?? DEFAULT_RECIPIENTS.join(","))
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const typeLabel = INQUIRY_TYPES.includes(type) ? type : "（未選択）";

    const text = [
      "Hero Egg サイトのお問い合わせフォームより送信されました。",
      "",
      "──────────────────────",
      `お問い合わせ種別: ${typeLabel}`,
      `お名前: ${name}`,
      `フリガナ: ${(body.kana ?? "").trim() || "（未入力）"}`,
      `会社・団体名: ${(body.company ?? "").trim() || "（未入力）"}`,
      `メールアドレス: ${email}`,
      `電話番号: ${(body.tel ?? "").trim() || "（未入力）"}`,
      "──────────────────────",
      "",
      "【お問い合わせ内容】",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `${FROM_NAME || "Hero Egg"} <${FROM_EMAIL || SMTP_USER}>`,
      to: recipients,
      replyTo: `${name} <${email}>`,
      subject: `【Hero Egg お問い合わせ】${typeLabel} / ${name} 様`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("お問い合わせメールの送信に失敗しました:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }
}
