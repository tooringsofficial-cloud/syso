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
  const imageSrc = variant === "b" ? "/images/bedside_morning.jpg" : "/images/slate_night.jpg";

  return (
    <section className="relative px-5 pt-4 pb-12 flex flex-col items-center bg-gradient-to-b from-brand-surface/40 via-white to-white border-b border-neutral-100/30">
      {/* 1. 모바일 전용 초압축 세로형 레이아웃 (md:hidden) */}
      <div className="w-full flex flex-col items-center md:hidden">
        {/* 런칭 안내 배지 */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary text-[9px] font-black uppercase tracking-wider">
            <span className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
            출시 전 사전 예약 진행 중
          </span>
          <span className="text-[9px] text-neutral-400 font-medium tracking-tight">
            *1차 500세트 한정
          </span>
        </div>

        {/* 헤드라인 카피 */}
        <h1 className="text-xl leading-snug font-black text-neutral-900 text-center whitespace-pre-line tracking-tight max-w-[280px]">
          {data.main}
        </h1>
        <p className="mt-1 text-[11px] text-neutral-500 text-center max-w-[240px] leading-relaxed">
          {data.sub}
        </p>

        {/* 제품 이미지 - Above the fold 내 존재감을 위해 크게 배치 */}
        <div className="w-full max-w-[280px] aspect-[1.1] mt-3 relative rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 shadow-premium flex items-center justify-center group">
          <Image
            src={imageSrc}
            alt="SYSO V Night"
            fill
            sizes="(max-w-768px) 100vw, 280px"
            className="object-cover transition-transform duration-700 group-hover:scale-102"
            priority
          />
          <div className="absolute bottom-2.5 right-2.5 bg-neutral-900/70 backdrop-blur-sm px-2 py-0.5 rounded">
            <span className="text-[8px] text-white/90 font-bold tracking-wide">
              V Night 출시 예고
            </span>
          </div>
        </div>

        {/* 가격 정보 슬림 티켓 */}
        <div className="w-full max-w-[280px] mt-3 px-3.5 py-2 rounded-xl border border-brand-primary/10 bg-brand-surface/40 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-black bg-brand-primary text-white px-1.5 py-0.2 rounded">30% OFF</span>
            <span className="text-[10px] font-black text-neutral-800">사전예약 혜택가</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[9px] text-neutral-400 line-through">{priceOriginal}</span>
            <span className="text-xs font-black text-brand-primary">&rarr;</span>
            <span className="text-sm font-black text-neutral-950">{pricePromo}</span>
          </div>
        </div>

        {/* 메인 CTA 버튼 */}
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-3 w-full max-w-[280px] py-3 rounded-xl bg-brand-primary text-white font-bold text-xs sm:text-sm 
                     transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium
                     shadow-[0_4px_12px_rgba(41,37,65,0.18)] cursor-pointer"
        >
          {data.cta}
        </button>

        {/* 간단 특징 배지 */}
        <div className="mt-3.5 flex items-center justify-center gap-2.5 text-[9px] font-bold text-neutral-500">
          <span>🌿 식물성 멜라토닌</span>
          <span className="text-neutral-200">|</span>
          <span>🍒 타트체리맛</span>
          <span className="text-neutral-200">|</span>
          <span>⚡ 스틱젤리</span>
        </div>
      </div>

      {/* 2. 데스크톱 전용 프리미엄 2열 레이아웃 (hidden md:flex) */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-12 md:max-w-4xl md:w-full md:py-8">
        {/* 좌측 대형 이미지 영역 */}
        <div className="w-[45%] aspect-[1.1] relative rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 shadow-premium group shrink-0">
          <Image
            src={imageSrc}
            alt="SYSO V Night Desktop"
            fill
            sizes="400px"
            className="object-cover transition-transform duration-700 group-hover:scale-102"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-neutral-900/70 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-[10px] text-white/95 font-bold tracking-wide">
              V Night 출시 예고
            </span>
          </div>
        </div>

        {/* 우측 텍스트 및 상세 구매/CTA 영역 */}
        <div className="flex-1 flex flex-col items-start text-left max-w-md">
          {/* 배지 */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              출시 전 사전 예약 진행 중
            </span>
            <span className="text-[11px] text-neutral-400 font-medium">
              *1차 500세트 한정 수량
            </span>
          </div>

          {/* 제목 */}
          <h1 className="text-2xl sm:text-3xl leading-snug font-black text-neutral-900 whitespace-pre-line tracking-tight">
            {data.main}
          </h1>
          <p className="mt-2.5 text-sm text-neutral-500 leading-relaxed max-w-sm">
            {data.sub}
          </p>

          {/* 가격 카드 */}
          <div className="w-full max-w-sm mt-6 p-4 rounded-xl border border-brand-primary/10 bg-brand-surface/40 flex items-center justify-between shadow-sm">
            <div className="flex flex-col">
              <span className="text-[10px] text-brand-primary font-bold bg-brand-primary/10 px-2 py-0.5 rounded-full w-max mb-1">
                사전 예약 30% 즉시 혜택
              </span>
              <span className="text-[11px] text-neutral-400 line-through">정상가 {priceOriginal}</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-brand-primary font-black text-xl">30%</span>
              <span className="text-neutral-950 font-black text-xl">{pricePromo}</span>
            </div>
          </div>

          {/* CTA 버튼 */}
          <button
            type="button"
            onClick={onCtaClick}
            className="mt-4 w-full max-w-sm py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm sm:text-base 
                       transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium-lg
                       shadow-[0_6px_16px_rgba(41,37,65,0.18)] cursor-pointer"
          >
            {data.cta}
          </button>

          {/* 특징 */}
          <div className="mt-6 flex items-center gap-3 text-xs font-bold text-neutral-600">
            <span className="flex items-center gap-1">🌿 식물성 멜라토닌</span>
            <span className="text-neutral-200">|</span>
            <span className="flex items-center gap-1">🍒 타트체리맛</span>
            <span className="text-neutral-200">|</span>
            <span className="flex items-center gap-1">⚡ 스틱젤리</span>
          </div>
        </div>
      </div>
    </section>
  );
}
