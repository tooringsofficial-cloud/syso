"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { analytics } from "@/lib/analytics";
import Header from "@/components/Header";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("variant") ?? "unknown";

  useEffect(() => {
    // Lead 전환 트래킹 실행 (Meta, GA4, Clarity)
    analytics.trackLead(variant);
  }, [variant]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FB]">
      <Header showCta={false} variant={variant} />
      <main className="flex-1 flex items-center justify-center px-5 py-20 bg-[#F8F8FB]">
        <div className="max-w-sm w-full text-center p-8 sm:p-10 rounded-[24px] bg-white border border-neutral-200/50 shadow-premium">
          {/* 아늑하고 감성적인 달 이모지 */}
          <span className="text-5xl mb-6 block animate-bounce-slow select-none">🌙</span>
          
          <h1 className="text-[20px] font-bold text-[#111827] mb-3.5 tracking-tight">
            신청이 완료되었습니다
          </h1>
          
          <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal mb-6 text-keep-all">
            출시 소식을 가장 먼저 알려드릴게요.<br />
            감사합니다.
          </p>

          {/* 메인 랜딩으로 돌아가는 프리미엄 버튼 */}
          <button
            type="button"
            onClick={() => {
              window.location.href = `/${variant !== "unknown" ? variant : "ab"}`;
            }}
            className="w-full py-3.5 rounded-[12px] bg-[#292541] hover:bg-[#1F1C33] text-white font-bold text-xs
                       transition-all duration-200 active:scale-[0.98]
                       shadow-[0_2px_8px_rgba(41,37,65,0.04)]"
          >
            돌아가기
          </button>
        </div>
      </main>
      
      {/* 풋터 */}
      <footer className="py-8 text-center text-xs text-[#6B7280] border-t border-neutral-200/50 bg-[#F8F8FB] font-normal select-none">
        <p>© {new Date().getFullYear()} SYSO. 모든 신청 데이터는 안전하게 보관됩니다.</p>
      </footer>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8FB]">
        <p className="text-stone-400 text-xs font-normal">로딩 중...</p>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
