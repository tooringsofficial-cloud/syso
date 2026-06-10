"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface ProductInfoProps {
  variant: string;
}

export default function ProductInfo({ variant }: ProductInfoProps) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const flavorLabel = variant === "a" 
    ? "상큼한 샤인머스캣맛" 
    : variant === "b" 
    ? "달콤한 포도맛" 
    : "샤인머스캣 & 포도맛";

  return (
    <section className="bg-[#FAF9F5] py-24 sm:py-32 w-full">
      <div className="max-w-5xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#292541] uppercase block mb-4 select-none">
            FORMULATION & INGREDIENTS
          </span>
          <h2 className="text-[24px] sm:text-[32px] font-bold text-[#1F1F1F] leading-tight tracking-tight text-keep-all px-2">
            설명보다 경험으로 증명하는<br className="hidden sm:block" /> V Night의 핵심 원료
          </h2>
        </div>

        {/* 2. 에디토리얼 원물 전면화 (체리 & 단호박 1:1 교차 배치) */}
        <div className="space-y-28 mb-32 max-w-4xl mx-auto">
          {/* 체리 섹션 (Night) */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* 체리 이미지 */}
            <div className="w-full md:w-1/2 aspect-[1.1] relative rounded-[24px] overflow-hidden bg-white shadow-sm shrink-0">
              <Image
                src="/images/cherry.jpg"
                alt="타트체리 원물"
                fill
                sizes="(max-w-768px) 100vw, 450px"
                className="object-cover transition-transform duration-700 hover:scale-101"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="text-[9px] text-[#292541] font-bold tracking-wider">INGREDIENTS 01</span>
              </div>
            </div>
            {/* 체리 설명 */}
            <div className="w-full md:w-1/2 flex flex-col items-start">

              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#1F1F1F] leading-tight mb-4 text-keep-all">
                타트체리 추출 식물성 멜라토닌
              </h3>
              <p className="text-stone-500 text-sm sm:text-[15px] leading-relaxed font-normal text-keep-all mb-6">
                하루를 마무리하는 저녁 루틴에 안심하고 섭취할 수 있도록 타트체리 추출 식물성 원료 2mg을 정밀 배합했습니다.
              </p>
              {/* 마그네슘 시너지 설명 */}
              <div className="border-t border-stone-200/50 pt-5 w-full flex items-start gap-4">
                <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0 border border-stone-200/40 shadow-sm bg-white">
                  <Image
                    src="/images/magnesium.jpg"
                    alt="글루콘산 마그네슘 원물"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[#292541] mb-1">
                    🌿 마그네슘(글루콘산 마그네슘 600mg) 시너지 배합
                  </p>
                  <p className="text-[11px] text-stone-400 leading-relaxed font-normal text-keep-all">
                    저녁 루틴을 위한 시너지 원료로 글루콘산 마그네슘 600mg을 함께 설계 및 함유했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 칼륨 섹션 (Morning - Potassium Citrate) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
            {/* 칼륨 이미지 */}
            <div className="w-full md:w-1/2 aspect-[1.1] relative rounded-[24px] overflow-hidden bg-white shadow-sm shrink-0">
              <Image
                src="/images/potassium.jpg"
                alt="포타슘 칼륨 원물"
                fill
                sizes="(max-w-768px) 100vw, 450px"
                className="object-cover transition-transform duration-700 hover:scale-101"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="text-[9px] text-[#292541] font-bold tracking-wider">INGREDIENTS 02</span>
              </div>
            </div>
            {/* 칼륨 설명 */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#1F1F1F] leading-tight mb-4 text-keep-all">
                아침 컨디션을 고려한 포타슘 칼륨 설계
              </h3>
              <p className="text-stone-500 text-sm sm:text-[15px] leading-relaxed font-normal text-keep-all mb-6">
                야식이나 짠 음식을 즐기는 식습관이 걱정될 때, 아침 거울 앞에서도 당황하지 않도록 구연산 칼륨 300mg을 담아 밤 루틴 포뮬러를 완성했습니다.
              </p>
              {/* 호박 시너지 설명 */}
              <div className="border-t border-stone-200/50 pt-5 w-full flex items-start gap-4">
                <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0 border border-stone-200/40 shadow-sm bg-white">
                  <Image
                    src="/images/pumpkin.jpg"
                    alt="단호박 원물"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[#292541] mb-1">
                    🎃 늙은 호박(국내산 늙은 호박 추출 분말 500mg) 시너지 배합
                  </p>
                  <p className="text-[11px] text-stone-400 leading-relaxed font-normal text-keep-all">
                    예로부터 친숙하게 활용되어 온 국내산 늙은 호박 추출 분말 500mg을 칼륨과 함께 배합했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 중단: package_real.jpg (패키지 비주얼 배너, 클릭 시 확대) */}
        <div 
          onClick={() => setLightboxImg("/images/package_real.jpg")}
          className="w-full max-w-4xl mx-auto mb-28 cursor-zoom-in group"
        >
          <div className="relative w-full aspect-[1.8] rounded-[24px] overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-stone-200/30">
            <Image
              src="/images/package_real.jpg"
              alt="V Night Package Design"
              fill
              sizes="(max-w-768px) 100vw, 896px"
              className="object-cover transition-transform duration-500 group-hover:scale-101"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#D9B76A] block mb-2 uppercase">
                  THE PREMIUM ALL-IN-ONE
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug text-keep-all">
                  편안한 밤 루틴과 아침 컨디션을 위한 올인원 포뮬러
                </h3>
              </div>
              <span className="text-[11px] sm:text-xs text-white/80 font-medium whitespace-nowrap bg-white/10 backdrop-blur-sm px-4.5 py-2 rounded-full border border-white/20">
                1박스당 20g x 14포 (2주일 루틴)
              </span>
            </div>
          </div>
        </div>

        {/* 4. 하단: 섭취 경험 및 제형 (lifestyle_jelly_consume.jpg & jelly_real.jpg) */}
        <div className="w-full max-w-4xl mx-auto mb-28">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold bg-[#292541]/5 text-[#292541] px-3.5 py-1.5 rounded-full inline-block mb-3 select-none font-sans">
              TEXTURE & TASTE
            </span>
            <h3 className="text-xl sm:text-[24px] font-bold text-[#1F1F1F] leading-tight text-keep-all">
              물 없이 맛있고 탱글하게 즐기는 젤리 습관
            </h3>
          </div>

          {/* 2열 레이아웃: 좌측 모델 섭취 컷, 우측 제형 설명 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-12">
            {/* 좌측: 모델 클로즈업 섭취 컷 */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[3/4] relative rounded-[24px] overflow-hidden bg-stone-100 shadow-sm border border-stone-200/20 shrink-0">
              <Image
                src="/images/lifestyle_jelly_consume.jpg"
                alt="V Night 젤리 섭취 경험"
                fill
                sizes="(max-w-768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 우측: 텍스트 */}
            <div className="flex-grow flex flex-col items-start text-left">
              <span className="text-xs font-semibold text-[#D9B76A] tracking-wider mb-3 block">SENSORY TASTING</span>
              <h4 className="text-lg sm:text-xl font-bold text-[#1F1F1F] mb-4 text-keep-all">
                잠들기 전, 기분 좋은 디저트처럼
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed font-normal text-keep-all">
                삼키기 힘든 굵은 알약이나 쓴 가루의 번거로움을 완전히 지웠습니다. {flavorLabel}의 달콤하고 상큼한 맛이 입안을 가볍게 채우며, 탱글탱글하고 쫀득한 식감 그대로 물 없이 깔끔하게 씹어서 하루를 마무리할 수 있습니다.
              </p>
            </div>
          </div>

          {/* 극대화된 실제 젤리 클로즈업 대형 뷰, 클릭 시 확대 */}
          <div 
            onClick={() => setLightboxImg("/images/jelly_real.jpg")}
            className="w-full aspect-[1.8] sm:aspect-[2.2] relative rounded-[24px] overflow-hidden bg-stone-100 border border-stone-200/20 shadow-md cursor-zoom-in group"
          >
            <Image
              src="/images/jelly_real.jpg"
              alt="스틱 젤리 극대화 질감"
              fill
              sizes="(max-w-768px) 100vw, 896px"
              className="object-cover transition-transform duration-700 group-hover:scale-101"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#D9B76A] block mb-1 uppercase font-sans">
                ACTUAL TEXTURE
              </span>
              <p className="text-xs sm:text-sm text-white/90 font-medium">
                눈으로도 느껴지는 쫀득하고 탱글탱글한 수분 젤리 포뮬러
              </p>
            </div>
          </div>
        </div>

        {/* 미네랄 성분 상징 고지문 */}
        <div className="max-w-4xl mx-auto text-center mb-24 px-4">
          <p className="text-[11px] text-stone-400 leading-relaxed max-w-2xl mx-auto font-normal text-keep-all">
            ※ 안내 사항: 본 제품에 사용된 마그네슘과 칼륨의 이미지는 성분 상징 비주얼입니다. 이는 원물 광물 형태가 아니며, 인체 흡수 효율이 극대화된 글루콘산 마그네슘 및 구연산 칼륨 등으로 정밀 설계하여 정제된 스틱 젤리 제형에 가공/배합되어 안전하게 섭취 가능합니다.
          </p>
        </div>

        {/* 5. D2C 상세 고시 테이블 (미니멀화) */}
        <div className="w-full max-w-4xl mx-auto pt-16 border-t border-stone-200/50">
          <h3 className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider mb-8 flex items-center gap-2 select-none font-sans">
            Product Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-xs text-stone-500 font-normal text-keep-all">
            <div className="flex justify-between py-2 border-b border-stone-200/40">
              <span className="font-semibold text-stone-700">제품명</span>
              <span>V Night (브이 나잇)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200/40">
              <span className="font-semibold text-stone-700">식품 유형</span>
              <span>기타가공품 (스틱 젤리)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200/40">
              <span className="font-semibold text-stone-700">내용량 및 열량</span>
              <span>280g (20g x 14포 / 1포당 70 kcal)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200/40">
              <span className="font-semibold text-stone-700">섭취 방법</span>
              <span>1일 1회, 1회 1포를 충분히 씹어서 섭취</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200/40">
              <span className="font-semibold text-stone-700">제조 생산</span>
              <span>HACCP 및 GMP 인증 청결 관리 시설 위탁 생산 예정</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200/40">
              <span className="font-semibold text-stone-700">보관 조건</span>
              <span>고온다습 및 직사광선을 피해 서늘한 실온 보관</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <Lightbox
          src={lightboxImg}
          alt={lightboxImg.includes("jelly") ? "SYSO V Night 젤리 제형 상세" : "SYSO V Night 패키지 상세"}
          onClose={() => setLightboxImg(null)}
        />
      )}
    </section>
  );
}
