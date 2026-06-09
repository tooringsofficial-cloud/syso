"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { CopyDataset } from "@/data/copyData";
import { analytics } from "@/lib/analytics";

import Header from "./Header";
import Hero from "./Hero";
import Problem from "./Problem";
import DesiredOutcome from "./DesiredOutcome";
import Recommend from "./Recommend";
import ProductInfo from "./ProductInfo";
import Concept from "./Concept";
import FAQ from "./FAQ";
import CTAButton from "./CTAButton";

interface LandingContainerProps {
  data: CopyDataset;
}

export default function LandingContainer({ data }: LandingContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollFired = useRef({ 50: false, 75: false, 100: false });
  const [showStickyCta, setShowStickyCta] = useState(false);

  // ----------------------------------------------------------
  // page_view
  // ----------------------------------------------------------
  useEffect(() => {
    analytics.trackPageView(data.variant);
  }, [data.variant]);

  // ----------------------------------------------------------
  // Scroll depth tracking & Sticky CTA visibility
  // ----------------------------------------------------------
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      
      // Hero CTA 영역을 지나면 Sticky CTA 노출 (약 550px)
      setShowStickyCta(scrollTop > 550);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);

      if (pct >= 50 && !scrollFired.current[50]) {
        scrollFired.current[50] = true;
        analytics.trackScrollDepth(50, data.variant);
      }
      if (pct >= 75 && !scrollFired.current[75]) {
        scrollFired.current[75] = true;
        analytics.trackScrollDepth(75, data.variant);
      }
      if (pct >= 100 && !scrollFired.current[100]) {
        scrollFired.current[100] = true;
        analytics.trackScrollDepth(100, data.variant);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.variant]);

  // ----------------------------------------------------------
  // CTA handler — purchase_intent_click → /waitlist
  // ----------------------------------------------------------
  const handleCtaClick = useCallback(() => {
    analytics.trackPurchaseIntent(data.variant);

    // UTM 파라미터 전달
    const params = new URLSearchParams();
    params.set("variant", data.variant);

    const utmKeys = ["utm_source", "utm_campaign", "utm_medium", "utm_content"] as const;
    utmKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) params.set(key, val);
    });

    params.set("landing_version", "v1");

    router.push(`/waitlist?${params.toString()}`);
  }, [data.variant, searchParams, router]);

  // ----------------------------------------------------------
  // Render
  // ----------------------------------------------------------
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. 상단 고정 헤더 */}
      <Header showCta={true} onCtaClick={handleCtaClick} />

      <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]">
        {/* 2. Hero 섹션 */}
        <Hero
          data={data.hero}
          priceOriginal={data.cta.priceOriginal}
          pricePromo={data.cta.pricePromo}
          onCtaClick={handleCtaClick}
        />

        <div className="h-2.5 bg-neutral-100/50" />

        {/* 3. Problem 섹션 (고민 상황 카드) */}
        <Problem data={data.problem} />

        {/* 4. Desired Outcome 섹션 (원하는 상태 카드) */}
        <DesiredOutcome data={data.desiredOutcome} />

        <div className="h-2.5 bg-neutral-100/50" />

        {/* 타겟 공감 체크리스트 카드 구성 */}
        <Recommend />

        <div className="h-2.5 bg-neutral-100/50" />

        {/* 5. 중간 CTA 배너 */}
        <section className="px-5 py-12 bg-brand-surface/40 border-y border-brand-primary/5 text-center">
          <div className="max-w-md mx-auto">
            <h3 className="font-extrabold text-neutral-900 text-lg mb-2 leading-snug tracking-tight">
              중요한 전날 밤 뒤척임과 다음 날 아침 고민,<br />
              V Night로 간편하게 관리해 보세요.
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              출시 프로모션 혜택이 적용되는 알림 신청은 10초 만에 완료됩니다.
            </p>
            <button
              type="button"
              onClick={handleCtaClick}
              className="py-3 px-8 rounded-xl bg-brand-primary text-white font-bold text-sm
                         transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium
                         shadow-[0_4px_12px_rgba(79,70,229,0.2)] cursor-pointer"
            >
              얼리액세스 알림 신청하기
            </button>
          </div>
        </section>

        <div className="h-2.5 bg-neutral-100/50" />

        {/* 6. Product Info 섹션 (제품 구성 정보) */}
        <ProductInfo />

        <div className="h-2.5 bg-neutral-100/50" />

        {/* 7. Concept 섹션 (출시 스토리 및 브랜드 원칙) */}
        <Concept data={data.concept} />

        <div className="h-2.5 bg-neutral-100/50" />

        {/* 8. FAQ 섹션 */}
        <FAQ />

        <div className="h-2.5 bg-neutral-100/50" />

        {/* 9. 최종 하단 CTA 섹션 */}
        <CTAButton data={data.cta} onCtaClick={handleCtaClick} />

        {/* 풋터 */}
        <footer className="py-8 text-center text-xs text-neutral-400 border-t border-neutral-100 bg-neutral-50/50">
          <p>© {new Date().getFullYear()} SYSO. 본 페이지는 수요 검증 목적으로 운영됩니다.</p>
        </footer>
      </main>

      {/* 10. 플로팅 하단 CTA 바 (Sticky Bottom CTA Bar) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-neutral-200/50 
                   transition-all duration-300 transform
                   ${showStickyCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}
      >
        <div className="max-w-md mx-auto px-5 py-3.5 flex items-center justify-between gap-4 md:max-w-2xl pb-[calc(0.85rem+env(safe-area-inset-bottom,0px))]">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-brand-primary/10 text-brand-primary font-bold px-1 rounded">30% OFF</span>
              <span className="text-[10px] text-neutral-400 line-through">예상가 {data.cta.priceOriginal}</span>
            </div>
            <span className="text-sm font-extrabold text-neutral-900 leading-none mt-1">
              {data.cta.pricePromo}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCtaClick}
            className="flex-grow max-w-[200px] py-3 px-4 rounded-xl bg-brand-primary text-white font-bold text-xs sm:text-sm
                       transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium
                       shadow-[0_4px_12px_rgba(79,70,229,0.2)] text-center cursor-pointer"
          >
            출시 알림 신청
          </button>
        </div>
      </div>
    </div>
  );
}


