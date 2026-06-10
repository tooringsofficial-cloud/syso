import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface HeroProps {
  variant: string;
  data: CopyDataset["hero"];
  priceOriginal: string;
  pricePromo: string;
  onCtaClick: () => void;
}

export default function Hero({ variant, data, priceOriginal, pricePromo, onCtaClick }: HeroProps) {
  // slate_night.jpg로 이미지 고정 사용
  const imageSrc = "/images/slate_night.jpg";

  // Flavor label 및 특징 리스트 매핑
  const flavorLabel = variant === "a" 
    ? "상큼한 샤인머스캣맛" 
    : variant === "b" 
    ? "달콤한 포도맛" 
    : "샤인머스캣 · 포도맛";

  return (
    <section className="relative w-full px-4 sm:px-5 pt-8 pb-14 flex flex-col items-center bg-[#F8F8FB] border-b border-neutral-200/50">
      {/* 1. 모바일 레이아웃 (md:hidden) — 320px 최우선 대응 적층 구조 */}
      <div className="w-full flex flex-col items-center md:hidden">
        {/* 사전 예약 배지 */}
        <div className="flex items-center gap-2 mb-4 shrink-0 select-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] bg-[#292541]/5 text-[#292541] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9B76A] shrink-0" />
            사전 예약 신청 진행 중
          </span>
        </div>

        {/* 제품 이미지 영역: 모바일 220~280px 존재감 확보 (min-width: 220px 설정으로 축소 붕괴 방지) */}
        <div className="w-full max-w-[280px] min-w-[220px] aspect-[1.1] relative rounded-[16px] overflow-hidden border border-neutral-200/30 bg-white shadow-premium flex items-center justify-center group mb-6 shrink-0">
          <Image
            src={imageSrc}
            alt="SYSO V Night"
            fill
            sizes="(max-w-768px) 100vw, 280px"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-[#292541]/90 backdrop-blur-sm px-2.5 py-1 rounded-[12px] shrink-0">
            <span className="text-[10px] text-[#D9B76A] font-bold tracking-wide whitespace-nowrap">
              V Night 출시 예고
            </span>
          </div>
        </div>

        {/* 제품명 / 메인 헤드라인 (clamp() 기반 반응형 타이포 매핑) */}
        <h1 className="text-hero font-bold text-[#111827] text-center tracking-tight max-w-[320px] text-keep-all px-1">
          {data.main}
        </h1>
        <p className="mt-2.5 text-caption-custom sm:text-body-custom text-[#6B7280] text-center max-w-[260px] leading-relaxed font-normal text-keep-all px-2">
          {data.sub}
        </p>

        {/* 가격 티켓: 320px 구간에서도 텍스트가 분리되어 떨어지지 않도록 whitespace-nowrap & shrink-0 처리 */}
        <div className="w-full max-w-[280px] mt-6 px-3.5 py-3 rounded-[12px] border border-[#292541]/10 bg-white flex items-center justify-between shadow-premium shrink-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[9px] sm:text-[10px] font-bold bg-[#D9B76A]/20 text-[#292541] px-1.5 sm:px-2 py-0.5 rounded-[12px] whitespace-nowrap shrink-0">
              30% OFF
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#6B7280] whitespace-nowrap shrink-0">사전 혜택가</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] sm:text-xs text-[#6B7280] line-through font-normal whitespace-nowrap shrink-0">{priceOriginal}</span>
            <span className="text-xs font-bold text-[#292541] shrink-0">&rarr;</span>
            <span className="text-13px sm:text-sm font-bold text-[#111827] whitespace-nowrap shrink-0">{pricePromo}</span>
          </div>
        </div>

        {/* 메인 CTA 버튼: 텍스트 분리 및 개행 붕괴 방지(whitespace-nowrap) */}
        <div className="w-full max-w-[280px] mt-4.5 mb-2.5 shrink-0">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full py-4 rounded-[12px] bg-[#292541] text-white font-bold text-xs sm:text-sm 
                       transition-all duration-200 active:scale-[0.98] hover:bg-[#1F1C33]
                       shadow-[0_2px_8px_rgba(41,37,65,0.04)] cursor-pointer text-center tracking-tight whitespace-nowrap"
          >
            {data.cta}
          </button>
        </div>

        {/* 특징 */}
        <div className="mt-4 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium text-[#6B7280] flex-wrap">
          <span className="whitespace-nowrap">🌿 식물성 멜라토닌</span>
          <span className="text-neutral-200 shrink-0">|</span>
          <span className="whitespace-nowrap">{flavorLabel}</span>
          <span className="text-neutral-200 shrink-0">|</span>
          <span className="whitespace-nowrap">⚡ 스틱젤리</span>
        </div>
      </div>

      {/* 2. 데스크톱 레이아웃 (hidden md:flex) — 2열 대형 프리미엄 레이아웃 */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-12 md:max-w-4xl md:w-full md:py-8">
        {/* 좌측 대형 이미지 영역 */}
        <div className="w-[45%] aspect-[1.1] relative rounded-[16px] overflow-hidden border border-neutral-200/30 bg-white shadow-premium group shrink-0">
          <Image
            src={imageSrc}
            alt="SYSO V Night Desktop"
            fill
            sizes="400px"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-[#292541]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-[12px] shrink-0">
            <span className="text-[11px] text-[#D9B76A] font-bold tracking-wide whitespace-nowrap">
              V Night 출시 예고
            </span>
          </div>
        </div>

        {/* 우측 텍스트 및 상세 구매/CTA 영역 */}
        <div className="flex-1 flex flex-col items-start text-left max-w-md">
          {/* 배지 */}
          <div className="flex items-center gap-2 mb-4 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] bg-[#292541]/5 text-[#292541] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9B76A]" />
              출시 전 사전 예약 신청 진행 중
            </span>
          </div>

          {/* 제목 (Desktop: clamp() 기반의 자동 조절) */}
          <h1 className="text-hero font-bold text-[#111827] whitespace-pre-line tracking-tight text-keep-all w-full">
            {data.main}
          </h1>
          <p className="mt-3 text-body-custom text-[#6B7280] leading-relaxed max-w-sm font-normal text-keep-all">
            {data.sub}
          </p>

          {/* 가격 카드 */}
          <div className="w-full max-w-sm mt-6 p-4.5 rounded-[12px] border border-[#292541]/10 bg-white flex items-center justify-between shadow-premium shrink-0">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#292541] font-bold bg-[#D9B76A]/20 px-2 py-0.5 rounded-[12px] w-max mb-1.5 whitespace-nowrap">
                사전 예약 30% 즉시 혜택
              </span>
              <span className="text-xs text-[#6B7280] line-through font-normal whitespace-nowrap">정상가 {priceOriginal}</span>
            </div>
            <div className="flex items-baseline gap-1.5 shrink-0">
              <span className="text-[#D9B76A] font-bold text-lg whitespace-nowrap">30%</span>
              <span className="text-[#111827] font-bold text-xl whitespace-nowrap">{pricePromo}</span>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="w-full max-w-sm mt-4 shrink-0">
            <button
              type="button"
              onClick={onCtaClick}
              className="w-full py-4 rounded-[12px] bg-[#292541] text-white font-bold text-sm sm:text-base 
                         transition-all duration-200 active:scale-[0.98] hover:bg-[#1F1C33]
                         shadow-[0_2px_8px_rgba(41,37,65,0.04)] cursor-pointer text-center tracking-tight whitespace-nowrap"
            >
              {data.cta}
            </button>
          </div>

          {/* 특징 */}
          <div className="mt-5 flex items-center gap-3 text-xs font-semibold text-[#6B7280] flex-wrap">
            <span className="flex items-center gap-1 whitespace-nowrap">🌿 식물성 멜라토닌</span>
            <span className="text-neutral-200 shrink-0">|</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              {flavorLabel}
            </span>
            <span className="text-neutral-200 shrink-0">|</span>
            <span className="flex items-center gap-1 whitespace-nowrap">⚡ 스틱젤리</span>
          </div>
        </div>
      </div>
    </section>
  );
}
