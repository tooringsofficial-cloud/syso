"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { analytics } from "@/lib/analytics";

// Tally 설문 기본 URL (배포 후 교체)
const TALLY_FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID ?? "REPLACE_ME";

function WaitlistContent() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("variant") ?? "unknown";

  const [surveyDone, setSurveyDone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ----------------------------------------------------------
  // waitlist_page_view
  // ----------------------------------------------------------
  useEffect(() => {
    analytics.trackWaitlistView(variant);
  }, [variant]);

  // ----------------------------------------------------------
  // Tally iframe URL with hidden fields
  // ----------------------------------------------------------
  const tallyUrl = (() => {
    const params = new URLSearchParams();
    params.set("transparentBackground", "1");
    params.set("hideTitle", "1");

    // Hidden fields
    const fields: Record<string, string | null> = {
      variant: searchParams.get("variant"),
      landing_version: searchParams.get("landing_version"),
      utm_source: searchParams.get("utm_source"),
      utm_campaign: searchParams.get("utm_campaign"),
      utm_medium: searchParams.get("utm_medium"),
      utm_content: searchParams.get("utm_content"),
    };

    Object.entries(fields).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    return `https://tally.so/embed/${TALLY_FORM_ID}?${params.toString()}`;
  })();

  // ----------------------------------------------------------
  // Tally postMessage listener (survey_complete)
  // ----------------------------------------------------------
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (typeof event.data === "string") {
        try {
          const parsed = JSON.parse(event.data);
          if (parsed.event === "Tally.FormSubmitted") {
            analytics.trackSurveyComplete(variant);
            setSurveyDone(true);
          }
        } catch {
          // not a Tally message
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [variant]);

  // ----------------------------------------------------------
  // Lead form submission
  // ----------------------------------------------------------
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !agreed) return;

      analytics.trackEmailCapture(variant);
      if (phone) {
        analytics.trackPhoneCapture(variant);
      }

      setSubmitted(true);
    },
    [email, phone, agreed, variant]
  );

  // ----------------------------------------------------------
  // 완료 화면
  // ----------------------------------------------------------
  if (submitted) {
    return (
      <main className="flex-1 flex items-center justify-center px-5 py-20">
        <div className="max-w-sm text-center">
          <span className="text-5xl mb-6 block">🎉</span>
          <h1 className="text-2xl font-bold text-neutral-900 mb-3">
            사전 신청이 완료되었습니다
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            출시 시 입력하신 연락처로 프로모션 혜택을 안내해 드리겠습니다.
            <br />
            관심을 가져주셔서 감사합니다.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-white">
      {/* 상단 안내 */}
      <section className="px-5 pt-14 pb-8 text-center">
        <span className="text-xs font-semibold tracking-widest text-brand-primary uppercase mb-4 block">
          SYSO
        </span>
        <h1 className="text-xl font-bold text-neutral-900 mb-3 md:text-2xl">
          관심 가져주셔서 감사합니다
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed max-w-sm mx-auto">
          현재 제품은 개발 단계에 있습니다.
          <br />
          출시 전 실제 사용자 의견을 수집하고 있습니다.
          <br />
          간단한 설문에 참여해주시면 출시 시 우선 안내를 드립니다.
        </p>
      </section>

      {/* 가격 정보 */}
      <section className="px-5 pb-8">
        <div className="max-w-sm mx-auto p-5 rounded-2xl bg-neutral-50 border border-neutral-200/60 text-center">
          <p className="text-xs text-neutral-400 mb-1">예상 출시 가격</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-neutral-400 line-through text-sm">
              정가 28,000원
            </span>
            <span className="text-brand-primary font-bold text-xl">
              19,600원
            </span>
          </div>
          <p className="text-xs text-brand-primary/70 mt-1.5">
            출시 초기 프로모션 예정가
          </p>
        </div>
      </section>

      {/* Tally 설문 임베드 */}
      <section className="px-5 pb-8">
        <div className="max-w-lg mx-auto rounded-2xl overflow-hidden border border-neutral-200/60 bg-white">
          <iframe
            src={tallyUrl}
            width="100%"
            height="500"
            frameBorder="0"
            title="SYSO 사전 설문"
            className="w-full"
          />
        </div>
      </section>

      {/* 리드 수집 폼 — 설문 완료 후 노출 */}
      {surveyDone && (
        <section className="px-5 pb-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto p-6 rounded-2xl bg-brand-surface/50 border border-brand-primary/10"
          >
            <h2 className="text-lg font-bold text-neutral-900 mb-1 text-center">
              출시 시 우선 안내 신청
            </h2>
            <p className="text-xs text-neutral-500 mb-6 text-center">
              출시 초기 프로모션 혜택을 안내해 드릴 예정입니다.
            </p>

            {/* 이메일 (필수) */}
            <label className="block mb-4">
              <span className="text-sm font-medium text-neutral-700">
                이메일 <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="mt-1.5 w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary
                           placeholder:text-neutral-300"
              />
            </label>

            {/* 휴대폰 (선택) */}
            <label className="block mb-4">
              <span className="text-sm font-medium text-neutral-700">
                휴대폰 번호 <span className="text-neutral-400 text-xs">(선택)</span>
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="mt-1.5 w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary
                           placeholder:text-neutral-300"
              />
            </label>

            {/* 개인정보 동의 */}
            <label className="flex items-start gap-2.5 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-brand-primary 
                           focus:ring-brand-primary/30 accent-brand-primary"
              />
              <span className="text-xs text-neutral-500 leading-relaxed">
                출시 알림 및 프로모션 안내 목적의 개인정보 수집·이용에 동의합니다.
                <span className="text-red-500"> *</span>
              </span>
            </label>

            <button
              type="submit"
              disabled={!email || !agreed}
              className="w-full py-3.5 rounded-xl bg-brand-primary text-white font-semibold text-sm
                         transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light
                         disabled:opacity-40 disabled:cursor-not-allowed
                         shadow-[0_4px_14px_rgba(67,56,202,0.25)]"
            >
              사전 신청 완료하기
            </button>
          </form>
        </section>
      )}

      {/* 풋터 */}
      <footer className="py-8 text-center text-xs text-neutral-400 border-t border-neutral-100">
        <p>
          © {new Date().getFullYear()} SYSO. 본 페이지는 수요 검증 목적으로 운영됩니다.
        </p>
      </footer>
    </main>
  );
}

export default function WaitlistPage() {
  return (
    <Suspense>
      <WaitlistContent />
    </Suspense>
  );
}
