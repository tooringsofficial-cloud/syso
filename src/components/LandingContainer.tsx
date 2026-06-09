"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { CopyDataset } from "@/data/copyData";
import { analytics } from "@/lib/analytics";

import Header from "./Header";
import Hero from "./Hero";
import Problem from "./Problem";
import DesiredOutcome from "./DesiredOutcome";
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

  // ----------------------------------------------------------
  // page_view
  // ----------------------------------------------------------
  useEffect(() => {
    analytics.trackPageView(data.variant);
  }, [data.variant]);

  // ----------------------------------------------------------
  // Scroll depth tracking
  // ----------------------------------------------------------
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
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

      <main className="flex-1">
        {/* 2. Hero 섹션 */}
        <Hero
          data={data.hero}
          priceOriginal={data.cta.priceOriginal}
          pricePromo={data.cta.pricePromo}
          onCtaClick={handleCtaClick}
        />

        {/* 3. Problem 섹션 (고민 상황 카드) */}
        <Problem data={data.problem} />

        {/* 4. Desired Outcome 섹션 (원하는 상태 카드) */}
        <DesiredOutcome data={data.desiredOutcome} />

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

        {/* 6. Product Info 섹션 (제품 구성 정보) */}
        <ProductInfo />

        {/* 7. Concept 섹션 (출시 스토리 및 브랜드 원칙) */}
        <Concept data={data.concept} />

        {/* 8. FAQ 섹션 */}
        <FAQ />

        {/* 9. 최종 하단 CTA 섹션 */}
        <CTAButton data={data.cta} onCtaClick={handleCtaClick} />

        {/* 풋터 */}
        <footer className="py-8 text-center text-xs text-neutral-400 border-t border-neutral-100 bg-neutral-50/50">
          <p>© {new Date().getFullYear()} SYSO. 본 페이지는 수요 검증 목적으로 운영됩니다.</p>
        </footer>
      </main>
    </div>
  );
}

