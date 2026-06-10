"use client";

import Image from "next/image";

interface ProductInfoProps {
  variant: string;
}

export default function ProductInfo({ variant }: ProductInfoProps) {
  // 1. 설계 의도 / 조합 의도 데이터 매핑 (A / B / AB)
  const formulationLogic = {
    a: {
      ingredients: "식물성 멜라토닌 2mg + 글루콘산 마그네슘 600mg",
      intention: "밤 루틴 중심 설계 (릴랙싱 및 편안함 공급)",
      usage: "잠들기 전 편안한 휴식",
      bgColor: "bg-white",
      textColor: "text-[#292541]",
      tagColor: "bg-[#292541]/5 text-[#292541]"
    },
    b: {
      ingredients: "칼륨 300mg + 국산 호박 500mg",
      intention: "아침 컨디션 중심 설계 (순환 및 수분 균형 관리)",
      usage: "중요한 아침 가벼운 시작",
      bgColor: "bg-white",
      textColor: "text-[#292541]",
      tagColor: "bg-[#292541]/5 text-[#292541]"
    },
    ab: {
      ingredients: "밤의 휴식(멜라토닌+마그네슘) + 아침의 가벼움(칼륨+호박)",
      intention: "한 포 루틴 설계 (2-in-1 올인원 더블 케어)",
      usage: "올인원 이중 케어",
      bgColor: "bg-white",
      textColor: "text-[#292541]",
      tagColor: "bg-[#292541]/5 text-[#292541]"
    }
  };

  const currentLogic = formulationLogic[variant as "a" | "b" | "ab"] || formulationLogic.ab;

  const flavorLabel = variant === "a" 
    ? "상큼한 샤인머스캣맛" 
    : variant === "b" 
    ? "달콤한 포도맛" 
    : "샤인머스캣맛 · 포도맛";

  const specItems = {
    melatonin: {
      label: "식물 유래 멜라토닌",
      value: "2 mg",
      desc: "인위적 호르몬 의존 우려 없는 밤 루틴 안심 설계 (타트체리 등 자연 추출)",
      image: "/images/cherry.jpg",
      tag: variant === "a" ? "밤 루틴 안심 설계" : variant === "ab" ? "🌙 밤의 휴식 케어" : undefined,
      isHighlighted: variant === "a" || variant === "ab"
    },
    magnesium: {
      label: "글루콘산 마그네슘",
      value: "600 mg",
      desc: "지친 하루 끝 신체 긴장을 차분히 덜고 편안한 밤의 릴렉싱을 돕는 유기태 마그네슘",
      image: "/images/magnesium.jpg",
      tag: variant === "a" ? "신체 긴장 완화" : variant === "ab" ? "🌙 밤의 휴식 케어" : undefined,
      isHighlighted: variant === "a" || variant === "ab",
      isMineral: true
    },
    potassium: {
      label: "칼륨 (포타슘)",
      value: "300 mg",
      desc: "짠 식습관이나 불규칙한 생활 다음 날 아침의 가벼운 컨디션을 지키는 체내 수분 조율 전해질",
      image: "/images/potassium.jpg",
      tag: variant === "b" ? "아침 컨디션 중심 설계" : variant === "ab" ? "☀️ 아침의 가벼움 케어" : undefined,
      isHighlighted: variant === "b" || variant === "ab",
      isMineral: true
    },
    pumpkin: {
      label: "국산 호박 추출 분말",
      value: "500 mg",
      desc: "아침의 무거움을 가볍게 비우고 산뜻한 순환 루틴을 돕는 국내산 자연 늙은 호박 원물 배합",
      image: "/images/pumpkin.jpg",
      tag: variant === "b" ? "가벼운 시작 고려 배합" : variant === "ab" ? "☀️ 아침의 가벼움 케어" : undefined,
      isHighlighted: variant === "b" || variant === "ab"
    },
    flavor: {
      label: flavorLabel,
      value: "스틱젤리 타입",
      desc: "물 없이 탱글하고 쫀득하게 즐기는 과일 풍미 젤리 제형으로 기분 좋은 하루의 마지막 디저트",
      image: "/images/grape.jpg"
    }
  };

  // 원료 노출 순서 및 목록 결정
  let ingredientsList: ({ label: string; value: string; desc: string; image: string; tag?: string; isHighlighted?: boolean; isMineral?: boolean })[] = [];
  if (variant === "a") {
    ingredientsList = [specItems.melatonin, specItems.magnesium, specItems.potassium, specItems.pumpkin, specItems.flavor];
  } else if (variant === "b") {
    ingredientsList = [specItems.potassium, specItems.pumpkin, specItems.melatonin, specItems.magnesium, specItems.flavor];
  } else {
    ingredientsList = [specItems.melatonin, specItems.magnesium, specItems.potassium, specItems.pumpkin, specItems.flavor];
  }

  return (
    <section className="px-4 sm:px-5 py-24 bg-[#F8F8FB] w-full">
      <div className="max-w-md mx-auto md:max-w-4xl">
        {/* 섹션 서브 타이틀 */}
        <span className="text-xs font-semibold tracking-wider text-[#292541] uppercase text-center block mb-3 select-none">
          PRODUCT INGREDIENTS
        </span>
        {/* 섹션 타이틀 (clamp() 폰트 스케일) */}
        <h2 className="text-section-title font-semibold text-[#111827] text-center mb-2 tracking-tight leading-snug text-keep-all px-2">
          V Night 5대 핵심 포뮬러 스토리
        </h2>
        {/* 세부 캡션 */}
        <p className="text-caption-custom text-[#6B7280] text-center mb-12 leading-relaxed max-w-sm mx-auto font-normal text-keep-all px-4">
          밤의 편안함과 아침의 가벼움의 관계가 한눈에 이어지도록<br />
          자연에서 엄선한 프리미엄 원료 배합을 투명하게 소개합니다.
        </p>

        {/* 1. 성분 배합 설계 논리 영역 (반응형 붕괴 완벽 방지: 모바일 세로 적층 -> sm 가로 배치) */}
        <div className={`mb-12 p-5.5 rounded-[16px] border border-neutral-200/50 ${currentLogic.bgColor} shadow-premium w-full`}>
          <h3 className="text-xs font-semibold text-[#111827] tracking-wider mb-5 flex items-center gap-2 justify-center sm:justify-start select-none">
            <span className="w-1.5 h-3.5 bg-[#292541] rounded-[2px]" />
            V Night 포지셔닝 설계 배합 원칙
          </h3>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-stretch sm:justify-between items-center sm:gap-2 w-full">
            {/* Step 1: 원료 */}
            <div className="text-center sm:text-left bg-[#F8F8FB] p-4 rounded-[12px] border border-neutral-200/40 w-full sm:w-0 sm:flex-1 min-w-0 flex flex-col justify-center min-h-[88px]">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5 whitespace-nowrap">01. 핵심 성분 조합</span>
              <p className="text-caption-custom sm:text-13px font-bold text-[#111827] leading-snug text-keep-all">{currentLogic.ingredients}</p>
            </div>

            {/* 연결 화살표: 모바일 아래 방향(darr) -> 데스크톱 우측 방향(rarr)으로 미디어쿼리 대응 */}
            <span className="text-neutral-300 text-lg font-bold sm:self-center block sm:hidden rotate-95 select-none shrink-0">&darr;</span>
            <span className="text-neutral-300 text-lg font-bold sm:self-center hidden sm:block select-none shrink-0">&rarr;</span>

            {/* Step 2: 설계 의도 */}
            <div className="text-center sm:text-left bg-[#F8F8FB] p-4 rounded-[12px] border border-neutral-200/40 w-full sm:w-0 sm:flex-1 min-w-0 flex flex-col justify-center min-h-[88px]">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5 whitespace-nowrap">02. 설계 의도</span>
              <p className="text-caption-custom sm:text-13px font-bold text-[#292541] leading-snug text-keep-all">{currentLogic.intention}</p>
            </div>

            {/* 연결 화살표 */}
            <span className="text-neutral-300 text-lg font-bold sm:self-center block sm:hidden rotate-95 select-none shrink-0">&darr;</span>
            <span className="text-neutral-300 text-lg font-bold sm:self-center hidden sm:block select-none shrink-0">&rarr;</span>

            {/* Step 3: 사용 상황 */}
            <div className="text-center sm:text-left bg-[#F8F8FB] p-4 rounded-[12px] border border-neutral-200/40 w-full sm:w-0 sm:flex-1 min-w-0 flex flex-col justify-center min-h-[88px]">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5 whitespace-nowrap">03. 기대 가치</span>
              <p className="text-caption-custom sm:text-13px font-bold text-[#111827] leading-snug text-keep-all">{currentLogic.usage}</p>
            </div>
          </div>
        </div>

        {/* 2. 메인 레이아웃: 이미지와 정보 카드 그리드 */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:items-start md:gap-8">
          {/* 이미지 섹션: 실제 제품 패키지 & 젤리 구성 비주얼 */}
          <div className="md:col-span-2 flex flex-col gap-6 w-full shrink-0">
            <div className="relative aspect-[4/5] w-full rounded-[16px] overflow-hidden bg-white border border-neutral-200/30 shadow-premium group">
              <Image
                src="/images/package_real.jpg"
                alt="V Night Package and Jelly"
                fill
                sizes="(max-w-768px) 100vw, 350px"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex flex-col justify-end p-5 pointer-events-none">
                <span className="text-white font-bold text-xs whitespace-nowrap">V Night 실제 제품 패키지</span>
                <span className="text-white/80 text-[10px] mt-1 font-normal whitespace-nowrap">하루 1포로 완성하는 이중 케어 루틴</span>
              </div>
            </div>

            {/* 제품 구성 요약 */}
            <div className="bg-white rounded-[16px] border border-neutral-200/50 p-5 shadow-premium flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-[12px] bg-[#F8F8FB] border border-neutral-200/50 flex items-center justify-center text-lg select-none" role="img" aria-label="package">
                  📦
                </span>
                <div>
                  <h4 className="font-bold text-[#111827] text-xs leading-none">제품 구성</h4>
                  <p className="text-[10px] text-[#6B7280] mt-1">2주일 동안 매일 밤 챙기는 14포 루틴</p>
                </div>
              </div>
              <span className="text-[#111827] font-extrabold text-xs sm:text-sm whitespace-nowrap">20g x 14포 (280g)</span>
            </div>
          </div>

          {/* 프리미엄 원료 상세 카드 목록 */}
          <div className="md:col-span-3 flex flex-col gap-4 w-full min-w-0">
            {ingredientsList.map((item) => (
              <div
                key={item.label}
                className={`bg-white p-5 rounded-[16px] border border-neutral-200/50 shadow-premium flex flex-col sm:flex-row gap-4 items-start transition-all ${
                  item.isHighlighted ? "ring-1 ring-[#D9B76A]/40" : ""
                }`}
              >
                {/* D2C 고급스러운 원물 이미지 썸네일 탑재 */}
                <div className="w-16 h-16 rounded-[12px] overflow-hidden shrink-0 border border-neutral-200/30 relative select-none bg-[#F8F8FB]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                
                {/* 텍스트 설명 영역 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-bold text-[#111827] text-caption-custom sm:text-[14px]">
                      {item.label}
                    </span>
                    {item.tag && (
                      <span className={`px-2 py-0.5 rounded-[12px] ${item.tag.includes("밤") || item.tag.includes("🌙") ? "bg-[#292541]/5 text-[#292541]" : "bg-[#D9B76A]/15 text-[#8A6F3E]"} text-[8px] sm:text-[9px] font-bold tracking-tight whitespace-nowrap shrink-0`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6B7280] leading-relaxed font-normal text-keep-all">
                    {item.desc}
                  </p>
                  {item.isMineral && (
                    <span className="text-[9px] text-[#6B7280]/80 font-medium block mt-2 leading-relaxed">
                      ※ 위 이미지는 성분 상징 이미지입니다. 미네랄 광물 자체를 먹는 형태가 아니며, 흡수율이 높은 고품질 원료를 스틱 젤리로 안전하게 제형화하여 배합 설명 텍스트와 함께 섭취합니다.
                    </span>
                  )}
                </div>

                {/* 우측 함량 배지 */}
                <div className="text-right shrink-0 sm:self-start">
                  <span className="text-[#292541] font-extrabold text-caption-custom sm:text-[13px] tracking-tight block whitespace-nowrap bg-[#F8F8FB] border border-neutral-200/30 px-2.5 py-1 rounded-[8px] select-all">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 제형 소개 블록 (Texture Detail - 실제 젤리 클로즈업 연동) */}
        <div className="mt-8 p-6 rounded-[16px] border border-neutral-200/50 bg-white shadow-premium flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="w-full sm:w-[150px] aspect-[1] relative rounded-[16px] overflow-hidden shrink-0 border border-neutral-200/30">
            <Image
              src="/images/jelly_real.jpg"
              alt="V Night Stick Jelly Texture"
              fill
              sizes="(max-w-768px) 100vw, 150px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left min-w-0">
            <span className="text-[10px] font-bold bg-[#292541]/5 text-[#292541] px-2.5 py-1 rounded-[12px] inline-block mb-2.5 select-none whitespace-nowrap">
              제형 및 섭취 경험
            </span>
            <h4 className="font-bold text-[#111827] text-body-custom mb-2 text-keep-all">
              물 없이 맛있고 탱글하게 씹어먹는 프리미엄 스틱 젤리
            </h4>
            <p className="text-caption-custom text-[#6B7280] leading-relaxed font-normal text-keep-all">
              기존의 불편한 알약 섭취나 쓴 약초 냄새를 완전히 해결했습니다. {variant === "a" ? "상큼한 샤인머스캣맛" : variant === "b" ? "달콤한 포도맛" : "상큼한 샤인머스캣맛과 달콤한 포도맛"}의 탱글탱글하고 쫀득한 젤리 형태로, 매일 밤 침대 옆에서 기분 좋은 마지막 디저트처럼 간편하게 씹어 드실 수 있습니다.
            </p>
          </div>
        </div>

        {/* 4. D2C 상세 고시 테이블 (반응형 붕괴 방지: 초소형 모바일 세로 1열 -> sm 가로 2열 배치) */}
        <div className="mt-8 p-5 sm:p-6 rounded-[16px] border border-neutral-200/50 bg-white shadow-premium w-full">
          <h3 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-4.5 pb-2.5 border-b border-neutral-200/60 flex items-center gap-2 select-none">
            <span className="w-1.5 h-3.5 bg-[#292541] rounded-[2px]" />
            제품 기본 표시 정보
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-caption-custom text-[#6B7280] font-normal text-keep-all">
            <div className="border-b border-neutral-100 pb-2.5 sm:border-none sm:pb-0">
              <span className="font-semibold text-[#111827] block mb-1">제품명</span>
              V Night (브이 나잇)
            </div>
            <div className="border-b border-neutral-100 pb-2.5 sm:border-none sm:pb-0">
              <span className="font-semibold text-[#111827] block mb-1">식품 유형</span>
              기타가공품 (스틱 젤리)
            </div>
            <div className="border-b border-neutral-100 pb-2.5 sm:border-none sm:pb-0">
              <span className="font-semibold text-[#111827] block mb-1">내용량 및 칼로리</span>
              280g (20g x 14포 / 1포당 70 kcal)
            </div>
            <div className="border-b border-neutral-100 pb-2.5 sm:border-none sm:pb-0">
              <span className="font-semibold text-[#111827] block mb-1">섭취량 및 섭취방법</span>
              1일 1회, 1회 1포를 씹어서 섭취
            </div>
            <div className="border-b border-neutral-100 pb-2.5 sm:border-none sm:pb-0">
              <span className="font-semibold text-[#111827] block mb-1">제조 및 생산 관리</span>
              HACCP 및 GMP 위생 관리 기준 시설 매칭 제조 예정
            </div>
            <div>
              <span className="font-semibold text-[#111827] block mb-1">보관 방법</span>
              고온다습한 곳을 피하여 실온 보관
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
