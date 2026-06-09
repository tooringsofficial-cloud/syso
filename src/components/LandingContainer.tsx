"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { CopyDataset } from "@/data/copyData";
import { analytics } from "@/lib/analytics";

import Hero from "./Hero";
import Problem from "./Problem";
import DesiredOutcome from "./DesiredOutcome";
import Concept from "./Concept";
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
    <main className="flex-1">
      <Hero data={data.hero} onCtaClick={handleCtaClick} />
      <Problem data={data.problem} />
      <DesiredOutcome data={data.desiredOutcome} />
      <Concept data={data.concept} />
      <CTAButton data={data.cta} onCtaClick={handleCtaClick} />

      {/* 풋터 */}
      <footer className="py-8 text-center text-xs text-neutral-400 border-t border-neutral-100">
        <p>© {new Date().getFullYear()} SYSO. 본 페이지는 수요 검증 목적으로 운영됩니다.</p>
      </footer>
    </main>
  );
}
