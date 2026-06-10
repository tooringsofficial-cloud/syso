/* ==========================================================
   analytics.ts — 추상화된 트래킹 유틸리티
   현재: GA4 + Microsoft Clarity + Meta Pixel
   향후: PostHog, Mixpanel 등 확장 가능
   ========================================================== */

type ScrollDepth = 50 | 75 | 100;

interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

// ----------------------------------------------------------
// Device 감지 헬퍼
// ----------------------------------------------------------
function getDevice(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  return window.innerWidth < 768 ? "mobile" : "desktop";
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
// Meta Pixel 헬퍼 (Conversions API 테스트 모드 연동)
// ----------------------------------------------------------
function fbEvent(eventName: string, params: AnalyticsPayload) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    const testCode = getTestEventCode();
    const options: AnalyticsPayload = {};
    const data = { ...params };
    
    if (testCode) {
      data.test_event_code = testCode; // custom data
      options.test_event_code = testCode; // custom options (Meta Pixel / CAPI 매핑 대응)
    }

    const standardEvents = ["PageView", "ViewContent", "Search", "AddToCart", "AddToWishlist", "InitiateCheckout", "AddPaymentInfo", "Purchase", "Lead", "CompleteRegistration"];
    if (standardEvents.includes(eventName)) {
      window.fbq("track", eventName, data, options);
    } else {
      window.fbq("trackCustom", eventName, data, options);
    }
  }
}

// URL의 쿼리 스트링에서 test_event_code 추출
function getTestEventCode(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("test_event_code") || undefined;
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
    const device = getDevice();
    const params = {
      variant,
      device,
      page_title: typeof document !== "undefined" ? document.title : "",
      page_location: typeof window !== "undefined" ? window.location.href : "",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    };
    devLog("page_view", params);
    ga4Event("page_view", params);
    clarityTag("variant", variant);
    clarityTag("device", device);
    
    // Meta Pixel
    fbEvent("PageView", params);
  },

  /** CTA 클릭 — 구매 의향 */
  trackPurchaseIntent(variant: string) {
    const device = getDevice();
    const params = { variant, device };
    devLog("purchase_intent_click", params);
    ga4Event("purchase_intent_click", params);
    
    // Meta Pixel (Legacy 호환용)
    fbEvent("purchase_intent_click", params);
  },

  /** Waitlist 페이지 도달 */
  trackWaitlistView(variant: string) {
    const device = getDevice();
    const params = {
      variant,
      device,
      page_title: typeof document !== "undefined" ? document.title : "",
      page_location: typeof window !== "undefined" ? window.location.href : "",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    };
    devLog("waitlist_page_view", params);
    ga4Event("waitlist_page_view", params);
    
    // Meta Pixel
    fbEvent("waitlist_page_view", params);
  },

  /** Tally 설문 완료 */
  trackSurveyComplete(variant: string) {
    const device = getDevice();
    const params = { variant, device };
    devLog("survey_complete", params);
    ga4Event("survey_complete", params);
    
    // Meta Pixel
    fbEvent("survey_complete", params);
  },

  /** 스크롤 깊이 */
  trackScrollDepth(depth: ScrollDepth, variant: string) {
    const device = getDevice();
    const params = { 
      depth, 
      variant,
      device,
      percent_scrolled: depth 
    };
    devLog(`scroll_${depth}`, params);
    ga4Event(`scroll_${depth}`, params); // Legacy event name compatibility
    ga4Event("scroll_depth", params);    // Standardized GA4 event name
  },

  /** 이메일 수집 */
  trackEmailCapture(variant: string) {
    const device = getDevice();
    const params = { variant, device };
    devLog("email_capture", params);
    ga4Event("email_capture", params);
  },

  /** 전화번호 수집 */
  trackPhoneCapture(variant: string) {
    const device = getDevice();
    const params = { variant, device };
    devLog("phone_capture", params);
    ga4Event("phone_capture", params);
  },

  /** CTA 클릭 (위치별 상세 분석) */
  trackCtaClick(variant: string, location: string) {
    const device = getDevice();
    const params = { variant, location, device };
    devLog("cta_click", params);
    ga4Event("cta_click", params);
    
    // Meta Pixel
    fbEvent("cta_click", params);
  },

  /** 주요 섹션 도달 (IntersectionObserver 연동) */
  trackSectionView(variant: string, section: string) {
    const device = getDevice();
    const params = { variant, section, device };
    devLog("section_view", params);
    ga4Event("section_view", params);
    
    // Meta Pixel — section_view 통합 이벤트명으로 전송
    fbEvent("section_view", params);
  },

  /** Tally 설문 시작 (첫 입력/상호작용 시작) */
  trackSurveyStart(variant: string) {
    const device = getDevice();
    const params = { variant, device };
    devLog("survey_start", params);
    ga4Event("survey_start", params);
    
    // Meta Pixel
    fbEvent("survey_start", params);
  },

  /** SNS 링크 클릭 */
  trackSocialClick(platform: string) {
    const device = getDevice();
    const params = { platform, device };
    devLog("social_click", params);
    ga4Event("social_click", params);
  },

  /** Lead 전환 (Thank You 페이지 진입 시) */
  trackLead(variant: string) {
    const device = getDevice();
    const params = { variant, device };
    devLog("lead_complete", params);
    ga4Event("generate_lead", params);
    fbEvent("Lead", params);
    
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("event", "lead_complete");
      window.clarity("set", "lead_complete", "true");
    }
  },
};

// ----------------------------------------------------------
// window 타입 확장 (GA4 + Clarity + Meta Pixel)
// ----------------------------------------------------------
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}
