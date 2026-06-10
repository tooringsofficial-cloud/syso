import { useState } from "react";
import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";
import Lightbox from "./Lightbox";

interface HeroProps {
  variant: string;
  data: CopyDataset["hero"];
  priceOriginal: string;
  pricePromo: string;
  onCtaClick: () => void;
  countdownText: string;
  isExpired: boolean;
}

export default function Hero({ variant, data, priceOriginal, pricePromo, onCtaClick, countdownText, isExpired }: HeroProps) {
  const imageSrc = "/images/package_real.jpg";
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <section className="relative w-full px-4 sm:px-6 pt-8 pb-16 flex flex-col items-center bg-[#FAF9F5]">
      {/* 1. 모바일 레이아웃 (md:hidden) */}
      <div className="w-full flex flex-col items-center md:hidden">
        {/* 매거진 타이포그래피 (상단 배치) */}
        <div className="text-center mt-4 mb-6 select-none">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-[#292541]/60 uppercase mb-2">
            SYSO V NIGHT
          </span>
          <h1 className="text-[26px] font-bold text-[#1F1F1F] tracking-tight leading-tight whitespace-pre-line text-keep-all px-2">
            {data.main}
          </h1>
          <p className="mt-2.5 text-xs text-stone-500 max-w-[280px] leading-relaxed font-normal text-keep-all mx-auto px-2">
            {data.sub}
          </p>
        </div>

        {/* 대형 매거진 커버 컷 배지 및 컨테이너 */}
        <div className="w-full max-w-[340px] flex flex-col items-start gap-2.5 mb-8 shrink-0 select-none">
          <span className="text-[10px] text-[#D9B76A] font-bold tracking-wider uppercase font-sans">
            PRE-ORDER 30% OFF
          </span>
          <div 
            onClick={() => setShowLightbox(true)}
            className="w-full aspect-video relative rounded-[20px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.03)] cursor-zoom-in group"
          >
            <Image
              src={imageSrc}
              alt="SYSO V Night Cover"
              fill
              sizes="(max-w-768px) 100vw, 340px"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
              priority
            />
          </div>
        </div>

        {/* 가격 & CTA (테두리 카드 제거, 여백 중심 통합) */}
        <div className="w-full max-w-[340px] flex flex-col items-center">
          <div className="flex items-center gap-3.5 mb-3.5 text-sm">
            {isExpired ? (
              <span className="text-[10px] font-bold bg-stone-200 text-stone-500 px-2 py-0.5 rounded-full">
                사전예약 혜택 종료
              </span>
            ) : (
              <span className="text-[10px] font-bold bg-[#D9B76A]/20 text-[#292541] px-2 py-0.5 rounded-full">
                사전예약 30% OFF
              </span>
            )}
            <div className="flex items-center gap-1.5">
              {isExpired ? (
                <>
                  <span className="text-xs text-stone-400 line-through font-normal">{pricePromo}</span>
                  <span className="text-sm font-bold text-[#1F1F1F]">{priceOriginal}</span>
                </>
              ) : (
                <>
                  <span className="text-xs text-stone-400 line-through font-normal">{priceOriginal}</span>
                  <span className="text-sm font-bold text-[#1F1F1F]">{pricePromo}</span>
                </>
              )}
            </div>
          </div>

          {/* 카운트다운 타이머 배지 */}
          <div className="text-[11px] text-[#292541] font-semibold mb-5 flex items-center gap-1.5 select-none bg-[#292541]/5 px-3 py-1 rounded-full">
            {!isExpired && <span className="w-1.5 h-1.5 rounded-full animate-glow-slow" />}
            <span>{isExpired ? "사전예약이 종료되었습니다" : `사전예약 마감까지 ${countdownText}`}</span>
          </div>

          <button
            type="button"
            onClick={onCtaClick}
            className="w-full py-4.5 rounded-full bg-[#292541] text-white font-bold text-sm 
                       transition-all duration-300 active:scale-[0.98] hover:bg-[#1C1A2E]
                       shadow-[0_4px_12px_rgba(41,37,65,0.12)] cursor-pointer text-center tracking-wide whitespace-nowrap"
          >
            {isExpired ? "출시 알림 신청하기" : data.cta}
          </button>
        </div>
      </div>

      {/* 2. 데스크톱 레이아웃 (hidden md:flex) */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-20 md:max-w-5xl md:w-full md:py-20">
        {/* 좌측 대형 이미지 및 상단 배지 */}
        <div className="w-[50%] flex flex-col items-start gap-2.5 shrink-0 select-none">
          <span className="text-[11px] text-[#D9B76A] font-bold tracking-widest font-sans uppercase">
            PRE-ORDER 30% OFF
          </span>
          <div 
            onClick={() => setShowLightbox(true)}
            className="w-full aspect-video relative rounded-[28px] overflow-hidden bg-white shadow-[0_16px_48px_rgba(0,0,0,0.03)] border border-stone-200/20 cursor-zoom-in group"
          >
            <Image
              src={imageSrc}
              alt="SYSO V Night Desktop Cover"
              fill
              sizes="520px"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
              priority
            />
          </div>
        </div>

        {/* 우측 텍스트 및 상세 구매/CTA 영역 */}
        <div className="flex-1 flex flex-col items-start text-left max-w-md">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#292541]/60 uppercase mb-4 font-sans select-none">
            SYSO V NIGHT
          </span>
          <h1 className="text-[38px] font-bold text-[#1F1F1F] whitespace-pre-line tracking-tight leading-snug text-keep-all w-full mb-4">
            {data.main}
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed max-w-sm font-normal text-keep-all mb-8">
            {data.sub}
          </p>

          {/* 가격 (카드 보더 없이 우아하게 노출) */}
          <div className="flex items-center gap-4 mb-4">
            {isExpired ? (
              <span className="text-[11px] text-stone-500 font-bold bg-stone-200 px-3 py-1 rounded-full whitespace-nowrap">
                사전예약 혜택 종료
              </span>
            ) : (
              <span className="text-[11px] text-[#292541] font-bold bg-[#D9B76A]/20 px-3 py-1 rounded-full whitespace-nowrap">
                사전 예약 특별 혜택
              </span>
            )}
            <div className="flex items-baseline gap-2">
              {isExpired ? (
                <>
                  <span className="text-xs text-stone-400 line-through font-normal">혜택가 {pricePromo}</span>
                  <span className="text-lg font-bold text-[#1F1F1F]">정상가 {priceOriginal}</span>
                </>
              ) : (
                <>
                  <span className="text-xs text-stone-400 line-through font-normal">정상가 {priceOriginal}</span>
                  <span className="text-lg font-bold text-[#1F1F1F]">{pricePromo}</span>
                </>
              )}
            </div>
          </div>

          {/* 카운트다운 타이머 배지 */}
          <div className="text-[11px] text-[#292541] font-semibold mb-6 flex items-center gap-1.5 select-none bg-[#292541]/5 px-3 py-1 rounded-full w-max">
            {!isExpired && <span className="w-1.5 h-1.5 rounded-full animate-glow-slow" />}
            <span>{isExpired ? "사전예약이 종료되었습니다" : `사전예약 마감까지 ${countdownText}`}</span>
          </div>

          {/* CTA 버튼 */}
          <div className="w-full max-w-sm shrink-0">
            <button
              type="button"
              onClick={onCtaClick}
              className="w-full py-4.5 rounded-full bg-[#292541] text-white font-bold text-base 
                         transition-all duration-300 active:scale-[0.98] hover:bg-[#1C1A2E]
                         shadow-[0_4px_16px_rgba(41,37,65,0.15)] cursor-pointer text-center tracking-wide whitespace-nowrap"
            >
              {isExpired ? "출시 알림 신청하기" : data.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {showLightbox && (
        <Lightbox
          src={imageSrc}
          alt="SYSO V Night 패키지 디자인"
          onClose={() => setShowLightbox(false)}
        />
      )}
    </section>
  );
}
