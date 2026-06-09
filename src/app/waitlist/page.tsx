"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { analytics } from "@/lib/analytics";
import Header from "@/components/Header";

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

    // 모든 쿼리 파라미터를 그대로 Tally Hidden Fields로 전달 (variant, UTM, GCLID 등 자동 포함)
    searchParams.forEach((value, key) => {
      params.set(key, value);
    });

    // device 파라미터가 없으면 동적 감지하여 추가
    if (!params.has("device") && typeof window !== "undefined") {
      params.set("device", window.innerWidth < 768 ? "mobile" : "desktop");
    }

    return `https://tally.so/embed/${TALLY_FORM_ID}?${params.toString()}`;
  })();

  // ----------------------------------------------------------
  // Tally postMessage listener (survey_complete)
  // ----------------------------------------------------------
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      let data = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          // Tally가 보낸 JSON 문자열이 아닐 경우 예외 처리
          return;
        }
      }
      
      if (data && data.event === "Tally.FormSubmitted") {
        analytics.trackSurveyComplete(variant);
        setSurveyDone(true);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [variant]);

  // ----------------------------------------------------------
  // Tally 설문 시작 트래킹 (iframe 첫 클릭/상호작용 감지)
  // ----------------------------------------------------------
  useEffect(() => {
    let started = false;

    function handleBlur() {
      // activeElement 갱신을 위해 100ms 대기 후 감지
      setTimeout(() => {
        if (document.activeElement && document.activeElement.tagName === "IFRAME") {
          const src = (document.activeElement as HTMLIFrameElement).src;
          if (src.includes("tally.so") && !started) {
            started = true;
            analytics.trackSurveyStart(variant);
          }
        }
      }, 100);
    }

    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
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
      <div className="min-h-screen flex flex-col bg-white">
        <Header showCta={false} />
        <main className="flex-1 flex items-center justify-center px-5 py-20 bg-warm-cream">
          <div className="max-w-sm text-center p-8 rounded-3xl bg-white border border-neutral-200/50 shadow-premium">
            <span className="text-5xl mb-6 block">🎉</span>
            <h1 className="text-xl font-bold text-neutral-900 mb-3">
              사전 신청이 완료되었습니다
            </h1>
            <p className="text-xs text-neutral-500 leading-relaxed">
              출시 시 입력하신 연락처로 프로모션 혜택을 안내해 드리겠습니다.
              <br />
              관심을 가져주셔서 감사합니다.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header showCta={false} />
      <main className="flex-1 bg-warm-cream">
        {/* 상단 안내 */}
        <section className="px-5 pt-12 pb-6 text-center max-w-sm mx-auto">
          <span className="text-xs font-bold tracking-wider text-brand-primary uppercase mb-2 block">
            PRE-LAUNCHING
          </span>
          <h1 className="text-lg font-bold text-neutral-900 mb-2 md:text-xl">
            사전 의견 등록 및 알림 신청
          </h1>
          <p className="text-xs text-neutral-500 leading-relaxed">
            현재 제품은 개발 마무리 단계에 있습니다.<br />
            아래 간단한 설문에 응답해주시면 출시 알림 및 선런칭 혜택을 우선적으로 제공해 드리겠습니다.
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

      </main>
      {/* 풋터 */}
      <footer className="py-8 text-center text-xs text-neutral-400 border-t border-neutral-100 bg-neutral-50/50">
        <p>© {new Date().getFullYear()} SYSO. 본 페이지는 수요 검증 목적으로 운영됩니다.</p>
      </footer>
    </div>
  );
}

export default function WaitlistPage() {
  return (
    <Suspense>
      <WaitlistContent />
    </Suspense>
  );
}
