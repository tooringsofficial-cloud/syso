import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface HeroProps {
  data: CopyDataset["hero"];
  priceOriginal: string;
  pricePromo: string;
  onCtaClick: () => void;
}

export default function Hero({ data, priceOriginal, pricePromo, onCtaClick }: HeroProps) {
  return (
    <section className="relative px-5 pt-6 pb-16 flex flex-col items-center bg-gradient-to-b from-brand-surface/40 via-white to-white">
      {/* 런칭 안내 배지 및 한정 표시 */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          출시 전 사전 예약 진행 중
        </span>
        <span className="text-[10px] text-neutral-400 font-medium tracking-tight">
          *1차 런칭 한정 수량 500세트 모집 진행
        </span>
      </div>

      {/* 메인 비주얼 - V Night 패키지 렌더 이미지 */}
      <div className="w-full max-w-sm mb-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-50/80 border border-neutral-100/60 flex items-center justify-center shadow-premium-lg group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/10 to-neutral-200/20" />
        <Image
          src="/images/package.png"
          alt="SYSO V Night Package Render"
          fill
          sizes="(max-w-768px) 100vw, 384px"
          className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* 미니 정보 칩 */}
        <div className="absolute bottom-4 right-4 bg-neutral-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg">
          <span className="text-[9px] text-white/90 font-semibold tracking-wide">
            V Night 출시 예정 패키지
          </span>
        </div>
      </div>

      {/* 헤드라인 카피 */}
      <div className="max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl leading-snug font-black text-neutral-900 whitespace-pre-line tracking-tight">
          {data.main}
        </h1>
        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-neutral-500 max-w-xs mx-auto">
          {data.sub}
        </p>
      </div>

      {/* 가격 정보 카드 (실제 이커머스 상세페이지 느낌의 쿠폰 카드) */}
      <div className="w-full max-w-xs mt-8 p-5 rounded-2xl border border-brand-primary/10 bg-brand-surface/40 flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(79,70,229,0.03)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary/20" />
        <div className="absolute top-0 right-0 w-2 h-full bg-brand-primary/20" />
        
        <div className="flex items-center gap-1.5 text-[10px] text-brand-primary font-bold bg-brand-primary/10 px-2 py-0.5 rounded-full mb-2">
          <span>사전 예약 단독 30% 즉시 혜택</span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-neutral-400 line-through text-[11px] font-medium">
            정상가 {priceOriginal}
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-brand-primary font-black text-2xl tracking-tight">30%</span>
            <span className="text-neutral-950 font-black text-2xl tracking-tight">
              {pricePromo}
            </span>
          </div>
        </div>
        
        <span className="text-[9px] text-neutral-400 mt-2 text-center leading-normal">
          *신청 즉시 혜택가가 확정되며,<br />
          출시 전까지 별도의 결제는 발생하지 않습니다.
        </span>
      </div>

      {/* 메인 CTA 버튼 */}
      <button
        type="button"
        onClick={onCtaClick}
        className="mt-6 w-full max-w-xs py-4 rounded-xl bg-brand-primary text-white font-bold text-sm sm:text-base 
                   transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium-lg
                   shadow-[0_8px_20px_rgba(79,70,229,0.25)] cursor-pointer"
      >
        {data.cta}
      </button>

      {/* 신뢰 요소 간략 정보 (3대 특장점 배지) */}
      <div className="mt-8 grid grid-cols-3 gap-2.5 w-full max-w-sm text-center">
        <div className="py-2.5 px-1.5 rounded-xl bg-neutral-50/80 border border-neutral-100 flex flex-col items-center shadow-sm/5">
          <span className="text-lg mb-1">🌿</span>
          <span className="text-[10px] font-bold text-neutral-700">식물 유래 멜라토닌</span>
        </div>
        <div className="py-2.5 px-1.5 rounded-xl bg-neutral-50/80 border border-neutral-100 flex flex-col items-center shadow-sm/5">
          <span className="text-lg mb-1">🍒</span>
          <span className="text-[10px] font-bold text-neutral-700">새콤달콤 타트체리</span>
        </div>
        <div className="py-2.5 px-1.5 rounded-xl bg-neutral-50/80 border border-neutral-100 flex flex-col items-center shadow-sm/5">
          <span className="text-lg mb-1">⚡</span>
          <span className="text-[10px] font-bold text-neutral-700">물 없이 씹는 젤리</span>
        </div>
      </div>
    </section>
  );
}



