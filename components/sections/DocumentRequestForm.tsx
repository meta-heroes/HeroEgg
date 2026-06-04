"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

/** ご検討目的（任意） */
const PURPOSES = [
  "施設利用を検討",
  "イベント主催・共催",
  "スポンサー・協賛",
  "共創プログラム",
  "情報収集",
] as const;

type Fields = {
  purpose: string;
  name: string;
  company: string;
  email: string;
  tel: string;
  agree: boolean;
};

const INITIAL: Fields = {
  purpose: PURPOSES[0],
  name: "",
  company: "",
  email: "",
  tel: "",
  agree: false,
};

export function DocumentRequestForm() {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) e.name = "お名前を入力してください。";
    if (!fields.email.trim()) e.email = "メールアドレスを入力してください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "メールアドレスの形式が正しくありません。";
    if (!fields.agree) e.agree = "プライバシーポリシーへの同意が必要です。";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) document.getElementById(`field-${firstKey}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    // バックエンド未接続：受付完了状態を表示（API 接続時はここで fetch する）
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-[18px] bg-[#fafafa] px-6 py-[80px] text-center">
        <div className="mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-egg-blue">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mb-4 text-[28px] font-bold text-[#333]">資料請求を受け付けました</h3>
        <p className="text-[16px] leading-[2] text-[#333]">
          ご入力いただいたメールアドレス宛に資料をお送りします。
          <br />
          数分以内に届かない場合は、迷惑メールフォルダをご確認ください。
        </p>
        <Link
          href="/"
          className="mt-[40px] inline-flex h-[61px] items-center justify-center gap-3 rounded-[30px] border-2 border-[#333] px-[40px] text-[18px] font-bold text-[#333] transition-colors duration-300 hover:bg-[#333] hover:text-white"
        >
          トップページへ戻る
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-[36px]">
      <Field id="field-purpose" label="ご検討の目的">
        <div className="flex flex-wrap gap-[12px]">
          {PURPOSES.map((t) => {
            const active = fields.purpose === t;
            return (
              <button
                type="button"
                key={t}
                onClick={() => update("purpose", t)}
                aria-pressed={active}
                className={`rounded-[30px] border-2 px-[22px] py-[12px] text-[15px] font-bold transition-colors duration-200 ${
                  active
                    ? "border-egg-blue bg-egg-blue text-white"
                    : "border-egg-gray-light bg-white text-[#333] hover:border-egg-blue hover:text-egg-blue"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </Field>

      <div className="grid gap-[36px]">
        <Field id="field-name" label="お名前" required error={errors.name}>
          <TextInput value={fields.name} onChange={(v) => update("name", v)} placeholder="山田 太郎" invalid={!!errors.name} autoComplete="name" />
        </Field>
        <Field id="field-company" label="会社・団体名">
          <TextInput value={fields.company} onChange={(v) => update("company", v)} placeholder="株式会社〇〇" autoComplete="organization" />
        </Field>
      </div>

      <div className="grid gap-[36px]">
        <Field id="field-email" label="メールアドレス" required error={errors.email}>
          <TextInput type="email" value={fields.email} onChange={(v) => update("email", v)} placeholder="example@hero-egg.jp" invalid={!!errors.email} autoComplete="email" />
        </Field>
        <Field id="field-tel" label="電話番号">
          <TextInput type="tel" value={fields.tel} onChange={(v) => update("tel", v)} placeholder="06-1234-5678" autoComplete="tel" />
        </Field>
      </div>

      <div id="field-agree">
        <label className="flex cursor-pointer items-start gap-[12px] text-[16px] text-[#333]">
          <input
            type="checkbox"
            checked={fields.agree}
            onChange={(e) => update("agree", e.target.checked)}
            className="mt-[3px] h-[22px] w-[22px] shrink-0 accent-egg-blue"
          />
          <span>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-bold text-egg-blue underline underline-offset-2"
            >
              プライバシーポリシー
            </a>
            に同意します。
          </span>
        </label>
        {errors.agree && <p className="mt-[8px] text-[14px] font-bold text-egg-red">{errors.agree}</p>}
      </div>

      <div className="flex justify-center pt-[12px]">
        <button
          type="submit"
          className="group inline-flex h-[68px] w-[320px] max-w-full items-center justify-center gap-3 rounded-[34px] bg-egg-red text-[20px] font-bold text-white shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e45c5e] hover:shadow-lg"
        >
          資料を受け取る
          <svg width="25" height="10" viewBox="0 0 25 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M0 5h23M18 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-[120px]">
      <div className="mb-[12px] flex items-center gap-[10px]">
        <span className="text-[18px] font-bold text-[#333]">{label}</span>
        {required && (
          <span className="rounded-[6px] bg-egg-red px-[10px] py-[3px] text-[12px] font-bold text-white">必須</span>
        )}
      </div>
      {children}
      {error && <p className="mt-[8px] text-[14px] font-bold text-egg-red">{error}</p>}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  invalid,
  autoComplete,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  invalid?: boolean;
  autoComplete?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={`h-[58px] w-full rounded-[14px] border-2 bg-white px-[20px] text-[16px] text-[#333] outline-none transition-colors duration-200 placeholder:text-egg-gray focus:border-egg-blue ${
        invalid ? "border-egg-red" : "border-egg-gray-light"
      }`}
    />
  );
}
