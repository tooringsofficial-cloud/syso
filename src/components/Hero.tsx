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
  // 사용자의 명시적인 요청사항 #4: Hero 밤 분위기 이미지로 slate_night.jpg 고정 사용
  const imageSrc = "/images/slate_night.jpg";

  // Flavor label 및 특징 리스트 매핑 (Weight 500/600/700 사용)
  const flavorLabel = variant === "a" 
    ? "상큼한 샤인머스캣맛" 
    : variant === "b" 
    ? "달콤한 포도맛" 
    : "샤인머스캣 · 포도맛";

  return (
    <section className="relative px-5 pt-8 pb-14 flex flex-col items-center bg-[#F8F8FB] border-b border-neutral-200/50">
      {/* 1. 모바일 레이아웃 (md:hidden) — 세로 적층 구조, 비주얼과 신뢰감 최우선 */}
      <div className="w-full flex flex-col items-center md:hidden">
        {/* 사전 예약 배지 */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] bg-[#292541]/5 text-[#292541] text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9B76A]" />
            사전 예약 신청 진행 중
          </span>
        </div>

        {/* 제품 이미지 영역: 모바일 220~280px 존재감 확보 (축소 금지) */}
        <div className="w-full max-w-[280px] min-w-[220px] aspect-[1.1] relative rounded-[16px] overflow-hidden border border-neutral-200/30 bg-white shadow-premium flex items-center justify-center group mb-6">
          <Image
            src={imageSrc}
            alt="SYSO V Night"
            fill
            sizes="(max-w-768px) 100vw, 280px"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-[#292541]/90 backdrop-blur-sm px-2.5 py-1 rounded-[12px]">
            <span className="text-[10px] text-[#D9B76A] font-bold tracking-wide">
              V Night 출시 예고
            </span>
          </div>
        </div>

        {/* 제품명 / 메인 헤드라인 (32px 범위 내 모바일 26~28px 적용) */}
        <h1 className="text-[26px] leading-snug font-bold text-[#111827] text-center tracking-tight max-w-[320px]">
          {data.main}
        </h1>
        <p className="mt-2 text-sm text-[#6B7280] text-center max-w-[260px] leading-relaxed font-normal">
          {data.sub}
        </p>

        {/* 가격 티켓 (Coupon / Price Bar: 12px) */}
        <div className="w-full max-w-[280px] mt-6 px-4 py-3 rounded-[12px] border border-[#292541]/10 bg-white flex items-center justify-between shadow-premium">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold bg-[#D9B76A]/20 text-[#292541] px-2 py-0.5 rounded-[12px]">
              30% OFF
            </span>
            <span className="text-xs font-semibold text-[#6B7280]">사전 혜택가</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs text-[#6B7280] line-through font-normal">{priceOriginal}</span>
            <span className="text-sm font-bold text-[#292541]">&rarr;</span>
            <span className="text-base font-bold text-[#111827]">{pricePromo}</span>
          </div>
        </div>

        {/* 메인 CTA 버튼: 높은 대비, 확실한 Hover/Active, 충분한 여백 */}
        <div className="w-full max-w-[280px] mt-4.5 mb-2.5">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full py-4.5 rounded-[12px] bg-[#292541] text-white font-bold text-sm sm:text-base 
                       transition-all duration-200 active:scale-[0.98] hover:bg-[#1F1C33]
                       shadow-[0_2px_8px_rgba(41,37,65,0.04)] cursor-pointer text-center tracking-tight"
          >
            {data.cta}
          </button>
        </div>

        {/* 특징 */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-medium text-[#6B7280]">
          <span>🌿 식물성 멜라토닌</span>
          <span className="text-neutral-200">|</span>
          <span>{flavorLabel}</span>
          <span className="text-neutral-200">|</span>
          <span>⚡ 스틱젤리</span>
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
          <div className="absolute bottom-4 right-4 bg-[#292541]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-[12px]">
            <span className="text-[11px] text-[#D9B76A] font-bold tracking-wide">
              V Night 출시 예고
            </span>
          </div>
        </div>

        {/* 우측 텍스트 및 상세 구매/CTA 영역 */}
        <div className="flex-1 flex flex-col items-start text-left max-w-md">
          {/* 배지 */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] bg-[#292541]/5 text-[#292541] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9B76A]" />
              출시 전 사전 예약 신청 진행 중
            </span>
          </div>

          {/* 제목 (Desktop: 32~36px, Weight 700) */}
          <h1 className="text-32px leading-snug font-bold text-[#111827] whitespace-pre-line tracking-tight">
            {data.main}
          </h1>
          <p className="mt-3 text-base text-[#6B7280] leading-relaxed max-w-sm font-normal">
            {data.sub}
          </p>

          {/* 가격 카드 */}
          <div className="w-full max-w-sm mt-6 p-4 rounded-[12px] border border-[#292541]/10 bg-white flex items-center justify-between shadow-premium">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#292541] font-bold bg-[#D9B76A]/20 px-2 py-0.5 rounded-[12px] w-max mb-1">
                사전 예약 30% 즉시 혜택
              </span>
              <span className="text-xs text-[#6B7280] line-through font-normal">정상가 {priceOriginal}</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[#D9B76A] font-bold text-lg">30%</span>
              <span className="text-[#111827] font-bold text-xl">{pricePromo}</span>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="w-full max-w-sm mt-4">
            <button
              type="button"
              onClick={onCtaClick}
              className="w-full py-4.5 rounded-[12px] bg-[#292541] text-white font-bold text-sm sm:text-base 
                         transition-all duration-200 active:scale-[0.98] hover:bg-[#1F1C33]
                         shadow-[0_2px_8px_rgba(41,37,65,0.04)] cursor-pointer text-center tracking-tight"
            >
              {data.cta}
            </button>
          </div>

          {/* 특징 */}
          <div className="mt-5 flex items-center gap-3 text-xs font-semibold text-[#6B7280]">
            <span className="flex items-center gap-1">🌿 식물성 멜라토닌</span>
            <span className="text-neutral-200">|</span>
            <span className="flex items-center gap-1">
              {flavorLabel}
            </span>
            <span className="text-neutral-200">|</span>
            <span className="flex items-center gap-1">⚡ 스틱젤리</span>
          </div>
        </div>
      </div>
    </section>
  );
}
