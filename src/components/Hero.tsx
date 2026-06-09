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
    <section className="relative px-5 pt-8 pb-14 flex flex-col items-center bg-gradient-to-b from-brand-surface/30 via-white to-white">
      {/* 런칭 안내 배지 */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
        출시 전 사전 예약 진행 중
      </span>

      {/* 메인 비주얼 - V Night 패키지 렌더 이미지 */}
      <div className="w-full max-w-sm mb-8 relative aspect-square rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center shadow-premium-lg group">
        <Image
          src="/images/package.png"
          alt="SYSO V Night Package Render"
          fill
          sizes="(max-w-768px) 100vw, 384px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* 미니 텍스트 워터마크 또는 정보 */}
        <div className="absolute bottom-4 left-4 bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-lg">
          <span className="text-[10px] text-white/90 font-medium tracking-wide">
            V Night 출시 예정 패키지
          </span>
        </div>
      </div>

      {/* 헤드라인 카피 */}
      <div className="max-w-md text-center">
        <h1 className="text-[1.85rem] leading-snug font-extrabold text-neutral-900 whitespace-pre-line tracking-tight md:text-4xl">
          {data.main}
        </h1>
        <p className="mt-3.5 text-[0.95rem] leading-relaxed text-neutral-500 max-w-sm mx-auto md:text-base">
          {data.sub}
        </p>
      </div>

      {/* 가격 정보 카드 (실제 이커머스 상세페이지 느낌) */}
      <div className="w-full max-w-xs mt-8 p-4 rounded-xl border border-neutral-200/50 bg-neutral-50/50 flex flex-col items-center justify-center shadow-premium">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
          <span>런칭 특별 혜택</span>
          <span className="text-brand-primary font-bold bg-brand-primary/10 px-1.5 py-0.5 rounded">30% OFF</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-neutral-400 line-through text-xs font-medium">
            예상 정가 {priceOriginal}
          </span>
          <span className="text-neutral-900 font-extrabold text-xl">
            {pricePromo}
          </span>
        </div>
        <span className="text-[10px] text-brand-primary/80 font-medium mt-1">
          *알림 신청 시에만 사전 예약 가격 적용
        </span>
      </div>

      {/* 메인 CTA 버튼 */}
      <button
        type="button"
        onClick={onCtaClick}
        className="mt-6 w-full max-w-xs py-4.5 rounded-xl bg-brand-primary text-white font-bold text-base 
                   transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium-lg
                   shadow-[0_8px_20px_rgba(79,70,229,0.3)] cursor-pointer"
      >
        {data.cta}
      </button>

      {/* 신뢰 요소 간략 정보 (3대 특장점 배지) */}
      <div className="mt-8 grid grid-cols-3 gap-2 w-full max-w-sm text-center">
        <div className="p-3 rounded-lg bg-neutral-50/50 border border-neutral-100 flex flex-col items-center">
          <span className="text-lg mb-1">🌿</span>
          <span className="text-[10px] font-semibold text-neutral-800">식물 유래 멜라토닌</span>
        </div>
        <div className="p-3 rounded-lg bg-neutral-50/50 border border-neutral-100 flex flex-col items-center">
          <span className="text-lg mb-1">🍊</span>
          <span className="text-[10px] font-semibold text-neutral-800">새콤달콤 타트체리맛</span>
        </div>
        <div className="p-3 rounded-lg bg-neutral-50/50 border border-neutral-100 flex flex-col items-center">
          <span className="text-lg mb-1">⚡</span>
          <span className="text-[10px] font-semibold text-neutral-800">물 없이 간편하게</span>
        </div>
      </div>
    </section>
  );
}

