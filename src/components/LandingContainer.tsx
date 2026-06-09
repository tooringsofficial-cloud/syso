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
import Trust from "./Trust";
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
  // 주요 섹션 도달 트래킹 (IntersectionObserver)
  // ----------------------------------------------------------
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // 20% 이상 화면 노출 시 트리거
    };

    const trackedSections = new Set<string>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const sectionName = id.replace("section-", "");
          
          if (!trackedSections.has(sectionName)) {
            trackedSections.add(sectionName);
            analytics.trackSectionView(data.variant, sectionName);
          }
        }
      });
    }, observerOptions);

    const targetIds = ["section-product-info", "section-trust", "section-concept"];
    targetIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [data.variant]);

  // ----------------------------------------------------------
  // CTA handler — purchase_intent_click → /waitlist
  // ----------------------------------------------------------
  const handleCtaClick = useCallback((location: "hero" | "mid" | "sticky" | "bottom") => {
    analytics.trackCtaClick(data.variant, location);
    analytics.trackPurchaseIntent(data.variant); // 하위 호환성 유지

    // 모든 쿼리 파라미터를 그대로 waitlist로 전달 (UTM, GCLID, FBCLID 등 자동 포함)
    const params = new URLSearchParams();
    params.set("variant", data.variant);
    params.set("landing_version", "v1");

    // device 식별 추가
    if (typeof window !== "undefined") {
      params.set("device", window.innerWidth < 768 ? "mobile" : "desktop");
    }

    searchParams.forEach((value, key) => {
      if (key !== "variant" && key !== "landing_version" && key !== "device") {
        params.set(key, value);
      }
    });

    router.push(`/waitlist?${params.toString()}`);
  }, [data.variant, searchParams, router]);

  // ----------------------------------------------------------
  // Render
  // ----------------------------------------------------------
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. 상단 고정 헤더 - location은 hero로 집계 */}
      <Header showCta={true} onCtaClick={() => handleCtaClick("hero")} />

      <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]">
        {/* 2. Hero 섹션 */}
        <Hero
          variant={data.variant}
          data={data.hero}
          priceOriginal={data.cta.priceOriginal}
          pricePromo={data.cta.pricePromo}
          onCtaClick={() => handleCtaClick("hero")}
        />

        {/* 3. Problem 섹션 (고민 상황 카드) */}
        <Problem data={data.problem} />

        {/* 4. Desired Outcome 섹션 (원하는 상태 카드) */}
        <DesiredOutcome variant={data.variant} data={data.desiredOutcome} />

        {/* 타겟 공감 체크리스트 카드 구성 */}
        <Recommend variant={data.variant} />

        {/* 5. Product Info 섹션 (제품 구성 정보) */}
        <div id="section-product-info">
          <ProductInfo variant={data.variant} />
        </div>

        {/* 신규 신뢰 섹션 (왜 SYSO가 만들까요? + 제품 철학) */}
        <div id="section-trust">
          <Trust />
        </div>

        {/* 6. Concept 섹션 (출시 스토리 및 브랜드 원칙) */}
        <div id="section-concept">
          <Concept data={data.concept} variant={data.variant} />
        </div>

        {/* 7. 중간 CTA 배너 (Concept 학습 후 전환 기회 제공) */}
        <section className="px-5 py-14 bg-brand-surface/70 border-y border-neutral-200/40 text-center">
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
              onClick={() => handleCtaClick("mid")}
              className="py-3 px-8 rounded-xl bg-brand-primary text-white font-bold text-sm
                         transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium
                         shadow-[0_4px_12px_rgba(41,37,65,0.15)] cursor-pointer"
            >
              얼리액세스 알림 신청하기
            </button>
          </div>
        </section>

        {/* 8. FAQ 섹션 */}
        <FAQ />

        {/* 9. 최종 하단 CTA 섹션 */}
        <CTAButton data={data.cta} onCtaClick={() => handleCtaClick("bottom")} />

        {/* SNS 채널 섹션 */}
        <section className="px-5 py-8 bg-neutral-50 border-t border-neutral-100 text-center">
          <div className="max-w-md mx-auto">
            <span className="text-[9px] font-black tracking-widest text-brand-primary uppercase block mb-1.5">
              INSTAGRAM
            </span>
            <a
              href="https://instagram.com/syso.mag"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackSocialClick("instagram")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-200/50 shadow-sm
                         text-xs font-extrabold text-neutral-800 transition-all duration-200 hover:border-brand-primary/20 hover:shadow-premium"
            >
              <span className="text-sm">📸</span>
              <span>SYSO 매거진 @syso.mag 팔로우</span>
              <span className="text-neutral-400 font-normal">&rarr;</span>
            </a>
          </div>
        </section>

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
            onClick={() => handleCtaClick("sticky")}
            className="flex-grow max-w-[200px] py-3 px-4 rounded-xl bg-brand-primary text-white font-bold text-xs sm:text-sm
                       transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium
                       shadow-[0_4px_12px_rgba(41,37,65,0.18)] text-center cursor-pointer"
          >
            출시 알림 신청
          </button>
        </div>
      </div>
    </div>
  );
}


