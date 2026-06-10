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
    melatonin: { label: "식물 유래 멜라토닌", value: "2 mg", desc: "편안한 밤 루틴을 채우는 핵심 식물 원료", icon: "🌱" },
    magnesium: { label: "글루콘산 마그네슘", value: "600 mg", desc: "지친 하루의 긴장을 덜고 몸을 편안하게 돕는 성분", icon: "🍊" },
    potassium: { label: "칼륨 (포타슘)", value: "300 mg", desc: "가벼운 아침 컨디션을 챙기는 균형 잡힌 배합", icon: "💧" },
    pumpkin: { label: "국산 호박 추출 분말", value: "500 mg", desc: "불규칙한 식습관 다음 날 가벼운 루틴을 위한 설계", icon: "🎃" },
    flavor: { label: flavorLabel, value: "스틱젤리 타입", desc: "물 없이 맛있고 탱글하게 간식처럼 섭취", icon: "🍇" },
    pack: { label: "제품 구성", value: "20g x 14포", desc: "2주일 동안 매일 밤 챙기는 확실한 나이트 루틴", icon: "📦" }
  };

  let specs: ({ label: string; value: string; desc: string; icon: string; tag?: string; isHighlighted?: boolean })[] = [];

  if (variant === "a") {
    specs = [
      { ...specItems.melatonin, tag: "밤 루틴 안심 설계", isHighlighted: true },
      { ...specItems.magnesium, tag: "신체 긴장 완화", isHighlighted: true },
      { ...specItems.potassium },
      { ...specItems.pumpkin },
      { ...specItems.flavor },
      { ...specItems.pack }
    ];
  } else if (variant === "b") {
    specs = [
      { ...specItems.potassium, tag: "아침 컨디션 중심 설계", isHighlighted: true },
      { ...specItems.pumpkin, tag: "가벼운 시작 고려 배합", isHighlighted: true },
      { ...specItems.melatonin },
      { ...specItems.magnesium },
      { ...specItems.flavor },
      { ...specItems.pack }
    ];
  } else {
    specs = [
      { ...specItems.melatonin, tag: "🌙 밤의 휴식 케어", isHighlighted: true },
      { ...specItems.magnesium, tag: "🌙 밤의 휴식 케어", isHighlighted: true },
      { ...specItems.potassium, tag: "☀️ 아침의 가벼움 케어", isHighlighted: true },
      { ...specItems.pumpkin, tag: "☀️ 아침의 가벼움 케어", isHighlighted: true },
      { ...specItems.flavor },
      { ...specItems.pack }
    ];
  }

  return (
    <section className="px-4 sm:px-5 py-24 bg-[#F8F8FB] w-full">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 섹션 서브 타이틀 */}
        <span className="text-xs font-semibold tracking-wider text-[#292541] uppercase text-center block mb-3 select-none">
          PRODUCT INGREDIENTS
        </span>
        {/* 섹션 타이틀 (clamp() 폰트 스케일) */}
        <h2 className="text-section-title font-semibold text-[#111827] text-center mb-2 tracking-tight leading-snug text-keep-all px-2">
          V Night 제품 상세 구성
        </h2>
        {/* 세부 캡션 */}
        <p className="text-caption-custom text-[#6B7280] text-center mb-12 leading-relaxed max-w-xs mx-auto font-normal text-keep-all px-4">
          밤의 편안함과 아침의 가벼움을 동시에 관리하는<br />
          V Night의 엄선된 핵심 성분과 패키지 스펙을 소개합니다.
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
          {/* 이미지 섹션: 원료 플랫레이 고화질 뷰 */}
          <div className="md:col-span-2 relative aspect-[4/5] w-full rounded-[16px] overflow-hidden bg-white border border-neutral-200/30 shadow-premium group shrink-0">
            <Image
              src="/images/ingredients_flatlay.jpg"
              alt="V Night Ingredients Flatlay"
              fill
              sizes="(max-w-768px) 100vw, 250px"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex flex-col justify-end p-5 pointer-events-none">
              <span className="text-white font-bold text-xs whitespace-nowrap">V Night 주원료 및 부원료</span>
              <span className="text-white/80 text-[10px] mt-1 font-normal whitespace-nowrap">식물성 멜라토닌 및 자연 추출 성분 flatlay</span>
            </div>
          </div>

          {/* 스펙 리스트 섹션: 우측 값의 whitespace-nowrap 지정으로 텍스트 분리 및 개행 붕괴 방지 */}
          <div className="md:col-span-3 bg-white rounded-[16px] border border-neutral-200/50 p-5 sm:p-6 shadow-premium divide-y divide-neutral-100 min-w-0 w-full">
            {specs.map((item) => (
              <div
                key={item.label}
                className="py-4 flex items-center justify-between gap-3 sm:gap-4 first:pt-0 last:pb-0 min-w-0"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <span 
                    className="w-8 h-8 rounded-[12px] bg-[#F8F8FB] text-[#292541] border border-neutral-200/50 flex items-center justify-center shrink-0 text-base select-none"
                    role="img"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-[#111827] text-caption-custom sm:text-[14px] whitespace-nowrap">
                        {item.label}
                      </span>
                      {item.tag && (
                        <span className={`px-2 py-0.5 rounded-[12px] ${currentLogic.tagColor} text-[8px] sm:text-[9px] font-bold tracking-tight whitespace-nowrap shrink-0`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#6B7280] mt-1 leading-normal truncate font-normal text-keep-all max-w-[160px] sm:max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* 값 영역 분리 및 붕괴 방지 */}
                <div className="text-right shrink-0">
                  <span className="text-[#111827] font-bold text-caption-custom sm:text-[14px] tracking-tight block whitespace-nowrap select-all">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 제형 소개 블록 (Texture Detail) */}
        <div className="mt-8 p-6 rounded-[16px] border border-neutral-200/50 bg-white shadow-premium flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="w-full sm:w-[150px] aspect-[4/3] sm:aspect-square relative rounded-[16px] overflow-hidden shrink-0 border border-neutral-200/30">
            <Image
              src="/images/jelly_texture.jpg"
              alt="V Night Jelly Texture"
              fill
              sizes="(max-w-768px) 100vw, 150px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left min-w-0">
            <span className="text-[10px] font-bold bg-[#292541]/5 text-[#292541] px-2.5 py-1 rounded-[12px] inline-block mb-2.5 select-none whitespace-nowrap">
              제형 특징
            </span>
            <h4 className="font-bold text-[#111827] text-body-custom mb-2 text-keep-all">
              물 없이 상큼하고 간편하게 씹어먹는 스틱 젤리
            </h4>
            <p className="text-caption-custom text-[#6B7280] leading-relaxed font-normal text-keep-all">
              알약 섭취의 불편함과 쓴 약초의 단점을 해결했습니다. {variant === "a" ? "상큼한 샤인머스캣맛" : variant === "b" ? "달콤한 포도맛" : "상큼한 샤인머스캣맛과 달콤한 포도맛"}의 쫀득한 젤리 제형으로, 자기 전 침대 옆에서 기분 좋은 마지막 디저트처럼 물 없이 맛있게 챙기실 수 있습니다.
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
