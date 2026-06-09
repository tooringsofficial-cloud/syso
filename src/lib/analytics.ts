/* ==========================================================
   analytics.ts — 추상화된 트래킹 유틸리티
   현재: GA4 + Microsoft Clarity
   향후: PostHog, Mixpanel 등 확장 가능
   ========================================================== */

type ScrollDepth = 50 | 75 | 100;

interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

// ----------------------------------------------------------
// GA4 헬퍼
// ----------------------------------------------------------
function ga4Event(eventName: string, params: AnalyticsPayload) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// ----------------------------------------------------------
// 개발 환경 로거
// ----------------------------------------------------------
function devLog(label: string, data: AnalyticsPayload) {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `%c[Analytics] ${label}`,
      "color:#6366f1;font-weight:bold",
      data
    );
  }
}

// ----------------------------------------------------------
// Clarity 커스텀 태그 (세션에 variant 등 부여)
// ----------------------------------------------------------
function clarityTag(key: string, value: string) {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("set", key, value);
  }
}

// ----------------------------------------------------------
// Public API
// ----------------------------------------------------------
export const analytics = {
  /** 랜딩페이지 page_view */
  trackPageView(variant: string) {
    const params = { variant };
    devLog("page_view", params);
    ga4Event("page_view", params);
    clarityTag("variant", variant);
  },

  /** CTA 클릭 — 구매 의향 */
  trackPurchaseIntent(variant: string) {
    const params = { variant };
    devLog("purchase_intent_click", params);
    ga4Event("purchase_intent_click", params);
  },

  /** Waitlist 페이지 도달 */
  trackWaitlistView(variant: string) {
    const params = { variant };
    devLog("waitlist_page_view", params);
    ga4Event("waitlist_page_view", params);
  },

  /** Tally 설문 완료 */
  trackSurveyComplete(variant: string) {
    const params = { variant };
    devLog("survey_complete", params);
    ga4Event("survey_complete", params);
  },

  /** 스크롤 깊이 */
  trackScrollDepth(depth: ScrollDepth, variant: string) {
    const params = { depth, variant };
    devLog(`scroll_${depth}`, params);
    ga4Event(`scroll_${depth}`, params);
  },

  /** 이메일 수집 */
  trackEmailCapture(variant: string) {
    const params = { variant };
    devLog("email_capture", params);
    ga4Event("email_capture", params);
  },

  /** 전화번호 수집 */
  trackPhoneCapture(variant: string) {
    const params = { variant };
    devLog("phone_capture", params);
    ga4Event("phone_capture", params);
  },
};

// ----------------------------------------------------------
// window 타입 확장 (GA4 + Clarity)
// ----------------------------------------------------------
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
  }
}
