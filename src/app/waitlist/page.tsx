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
      <div className="min-h-screen flex flex-col bg-[#F8F8FB]">
        <Header showCta={false} />
        <main className="flex-1 flex items-center justify-center px-5 py-20 bg-[#F8F8FB]">
          <div className="max-w-sm text-center p-8 rounded-[16px] bg-white border border-neutral-200/50 shadow-premium">
            <span className="text-5xl mb-6 block">🎉</span>
            <h1 className="text-xl font-bold text-[#111827] mb-3">
              사전 신청이 완료되었습니다
            </h1>
            <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
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
    <div className="min-h-screen flex flex-col bg-[#F8F8FB]">
      <Header showCta={false} />
      <main className="flex-1 bg-[#F8F8FB]">
        {/* 상단 안내 */}
        <section className="px-5 pt-12 pb-6 text-center max-w-sm mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#292541] uppercase mb-2.5 block">
            PRE-LAUNCHING
          </span>
          <h1 className="text-lg font-bold text-[#111827] mb-2.5 md:text-xl">
            사전 의견 등록 및 알림 신청
          </h1>
          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
            현재 제품은 개발 마무리 단계에 있습니다.<br />
            아래 간단한 설문에 응답해주시면 출시 알림 및 선런칭 혜택을 우선적으로 제공해 드리겠습니다.
          </p>
        </section>


      {/* 가격 정보 (Coupon: 12px) */}
      <section className="px-5 pb-8">
        <div className="max-w-sm mx-auto p-5 rounded-[12px] bg-white border border-neutral-200/60 text-center shadow-premium">
          <p className="text-xs text-[#6B7280] mb-1 font-normal">예상 출시 가격</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#6B7280] line-through text-sm font-normal">
              정가 28,000원
            </span>
            <span className="text-[#292541] font-bold text-xl">
              19,600원
            </span>
          </div>
          <p className="text-xs text-[#D9B76A] font-semibold mt-1.5">
            출시 초기 프로모션 예정가
          </p>
        </div>
      </section>

      {/* Tally 설문 임베드 (Image/Iframe Wrapper: 16px) */}
      <section className="px-5 pb-8">
        <div className="max-w-lg mx-auto rounded-[16px] overflow-hidden border border-neutral-200/60 bg-white shadow-premium">
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

      {/* 리드 수집 폼 — 설문 완료 후 노출 (Card: 16px, Button: 12px) */}
      {surveyDone && (
        <section className="px-5 pb-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto p-6 rounded-[16px] bg-white border border-neutral-200/50 shadow-premium"
          >
            <h2 className="text-lg font-bold text-[#111827] mb-1.5 text-center">
              출시 시 우선 안내 신청
            </h2>
            <p className="text-xs text-[#6B7280] mb-6 text-center font-normal">
              출시 초기 프로모션 혜택을 안내해 드릴 예정입니다.
            </p>

            {/* 이메일 (필수) */}
            <label className="block mb-4">
              <span className="text-sm font-medium text-[#111827]">
                이메일 <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="mt-1.5 w-full px-4 py-3 rounded-[12px] border border-neutral-200 bg-white text-sm
                           focus:outline-none focus:ring-2 focus:ring-[#292541]/30 focus:border-[#292541]
                           placeholder:text-neutral-300 font-normal"
              />
            </label>

            {/* 휴대폰 (선택) */}
            <label className="block mb-4">
              <span className="text-sm font-medium text-[#111827]">
                휴대폰 번호 <span className="text-[#6B7280] text-xs font-normal">(선택)</span>
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="mt-1.5 w-full px-4 py-3 rounded-[12px] border border-neutral-200 bg-white text-sm
                           focus:outline-none focus:ring-2 focus:ring-[#292541]/30 focus:border-[#292541]
                           placeholder:text-neutral-300 font-normal"
              />
            </label>

            {/* 개인정보 동의 */}
            <label className="flex items-start gap-2.5 mb-6 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#292541] 
                           focus:ring-[#292541]/30 accent-[#292541]"
              />
              <span className="text-xs text-[#6B7280] leading-relaxed font-normal">
                출시 알림 및 프로모션 안내 목적의 개인정보 수집·이용에 동의합니다.
                <span className="text-red-500"> *</span>
              </span>
            </label>

            <button
              type="submit"
              disabled={!email || !agreed}
              className="w-full py-3.5 rounded-[12px] bg-[#292541] hover:bg-[#1F1C33] text-white font-bold text-sm
                         transition-all duration-200 active:scale-[0.98]
                         disabled:opacity-40 disabled:cursor-not-allowed
                         shadow-[0_2px_8px_rgba(41,37,65,0.04)]"
            >
              사전 신청 완료하기
            </button>
          </form>
        </section>
      )}

      </main>
      {/* 풋터 */}
      <footer className="py-8 text-center text-xs text-[#6B7280] border-t border-neutral-200/50 bg-[#F8F8FB] font-normal">
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
