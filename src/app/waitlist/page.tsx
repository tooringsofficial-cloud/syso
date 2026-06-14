"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { analytics } from "@/lib/analytics";
import Header from "@/components/Header";

// Tally 설문 기본 URL (배포 후 교체)
const TALLY_FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID ?? "REPLACE_ME";

function WaitlistContent() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("variant") ?? "unknown";

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
  // Tally postMessage listener (survey_complete) -> Redirect immediately
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
        // Tally 설문 완료 시 즉시 thank-you 페이지로 이동하여 중복 폼 피로도 방지
        window.location.href = `/thank-you?variant=${variant}`;
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

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FB]">
      <Header showCta={false} variant={variant} />
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
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8FB]">
        <p className="text-stone-400 text-xs font-normal">로딩 중...</p>
      </div>
    }>
      <WaitlistContent />
    </Suspense>
  );
}
