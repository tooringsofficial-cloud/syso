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
      usage: "중요한 일정을 앞둔 밤, 뒤척임 없는 깊은 힐링이 필요할 때",
      bgColor: "bg-indigo-50/40 border-indigo-100/40",
      textColor: "text-indigo-600",
      tagColor: "bg-indigo-100/40 text-indigo-700"
    },
    b: {
      ingredients: "칼륨 300mg + 국산 호박 추출물 500mg",
      intention: "아침 컨디션 중심 설계 (순환 및 수분 균형 관리)",
      usage: "자고 일어난 후 무거운 몸을 비우고 가볍게 아침을 시작할 때",
      bgColor: "bg-amber-50/30 border-amber-100/40",
      textColor: "text-amber-700",
      tagColor: "bg-amber-100/30 text-amber-800"
    },
    ab: {
      ingredients: "밤의 휴식(멜라토닌+마그네슘) + 아침의 가벼움(칼륨+호박)",
      intention: "한 포 루틴 설계 (2-in-1 올인원 더블 케어)",
      usage: "밤새 편안한 휴식과 아침의 개운한 순환을 한 포로 케어할 때",
      bgColor: "bg-brand-surface/40 border-brand-primary/10",
      textColor: "text-brand-primary",
      tagColor: "bg-brand-primary/10 text-brand-primary"
    }
  };

  const currentLogic = formulationLogic[variant as "a" | "b" | "ab"] || formulationLogic.ab;

  const specItems = {
    melatonin: { label: "식물 유래 멜라토닌", value: "2 mg", desc: "편안한 밤 루틴을 채우는 핵심 식물 원료", icon: "🌱" },
    magnesium: { label: "글루콘산 마그네슘", value: "600 mg", desc: "지친 하루의 긴장을 덜고 몸을 편안하게 돕는 성분", icon: "🍊" },
    potassium: { label: "칼륨 (포타슘)", value: "300 mg", desc: "가벼운 아침 컨디션을 챙기는 균형 잡힌 배합", icon: "💧" },
    pumpkin: { label: "국산 호박 추출 분말", value: "500 mg", desc: "불규칙한 식습관 다음 날 가벼운 루틴을 위한 설계", icon: "🎃" },
    cherry: { label: "새콤달콤 타트체리맛", value: "스틱젤리 타입", desc: "물 없이 맛있고 탱글하게 간식처럼 섭취", icon: "🍒" },
    pack: { label: "제품 구성", value: "20g x 14포", desc: "2주일 동안 매일 밤 챙기는 확실한 나이트 루틴", icon: "📦" }
  };

  let specs: ({ label: string; value: string; desc: string; icon: string; tag?: string; isHighlighted?: boolean })[] = [];

  if (variant === "a") {
    specs = [
      { ...specItems.melatonin, tag: "밤 루틴 안심 설계", isHighlighted: true },
      { ...specItems.magnesium, tag: "신체 긴장 완화", isHighlighted: true },
      { ...specItems.potassium },
      { ...specItems.pumpkin },
      { ...specItems.cherry },
      { ...specItems.pack }
    ];
  } else if (variant === "b") {
    specs = [
      { ...specItems.potassium, tag: "아침 컨디션 중심 설계", isHighlighted: true },
      { ...specItems.pumpkin, tag: "가벼운 시작 고려 배합", isHighlighted: true },
      { ...specItems.melatonin },
      { ...specItems.magnesium },
      { ...specItems.cherry },
      { ...specItems.pack }
    ];
  } else {
    specs = [
      { ...specItems.melatonin, tag: "🌙 밤의 휴식 케어", isHighlighted: true },
      { ...specItems.magnesium, tag: "🌙 밤의 휴식 케어", isHighlighted: true },
      { ...specItems.potassium, tag: "☀️ 아침의 가벼움 케어", isHighlighted: true },
      { ...specItems.pumpkin, tag: "☀️ 아침의 가벼움 케어", isHighlighted: true },
      { ...specItems.cherry },
      { ...specItems.pack }
    ];
  }

  return (
    <section className="px-5 py-16 bg-warm-cream">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <h2 className="text-xl font-black text-neutral-900 text-center mb-2 md:text-3xl tracking-tight leading-snug">
          V Night 제품 상세 구성
        </h2>
        <p className="text-xs text-neutral-400 text-center mb-8 leading-relaxed max-w-xs mx-auto">
          밤의 편안함과 아침의 가벼움을 동시에 관리하는<br />
          V Night의 엄선된 핵심 성분과 패키지 스펙을 소개합니다.
        </p>

        {/* 1. 성분 배합 설계 논리 영역 (Dynamic Logic Card) */}
        <div className={`mb-10 p-5.5 rounded-2xl border ${currentLogic.bgColor} shadow-[0_4px_20px_rgba(12,14,40,0.02)]`}>
          <h3 className="text-xs font-black text-neutral-800 tracking-wider mb-4 flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="w-1.5 h-3.5 bg-brand-primary rounded-full" />
            V Night 포지셔닝 설계 배합 원칙
          </h3>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-stretch sm:justify-between items-center sm:gap-2">
            {/* Step 1: 원료 */}
            <div className="flex-1 text-center sm:text-left bg-white p-3.5 rounded-xl border border-neutral-100 shadow-sm/5 w-full flex flex-col justify-center">
              <span className="text-[8px] font-black text-neutral-400 uppercase tracking-wider block mb-1">01. 핵심 성분 조합</span>
              <p className="text-xs font-extrabold text-neutral-900 leading-snug">{currentLogic.ingredients}</p>
            </div>

            {/* 연결 화살표 */}
            <span className="text-neutral-300 text-base font-bold sm:self-center rotate-90 sm:rotate-0">&rarr;</span>

            {/* Step 2: 설계 의도 */}
            <div className="flex-1 text-center sm:text-left bg-white p-3.5 rounded-xl border border-neutral-100 shadow-sm/5 w-full flex flex-col justify-center">
              <span className="text-[8px] font-black text-neutral-400 uppercase tracking-wider block mb-1">02. 설계 의도</span>
              <p className={`text-xs font-extrabold ${currentLogic.textColor} leading-snug`}>{currentLogic.intention}</p>
            </div>

            {/* 연결 화살표 */}
            <span className="text-neutral-300 text-base font-bold sm:self-center rotate-90 sm:rotate-0">&rarr;</span>

            {/* Step 3: 사용 상황 */}
            <div className="flex-1 text-center sm:text-left bg-white p-3.5 rounded-xl border border-neutral-100 shadow-sm/5 w-full flex flex-col justify-center">
              <span className="text-[8px] font-black text-neutral-400 uppercase tracking-wider block mb-1">03. 추천 사용 상황</span>
              <p className="text-xs font-extrabold text-neutral-900 leading-snug">{currentLogic.usage}</p>
            </div>
          </div>
        </div>

        {/* 2. 메인 레이아웃: 이미지와 정보 카드 그리드 */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:items-start md:gap-8">
          {/* 이미지 섹션: 원료 플랫레이 고화질 뷰 (2/5) */}
          <div className="md:col-span-2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white border border-neutral-150 shadow-premium group">
            <Image
              src="/images/ingredients_flatlay.jpg"
              alt="V Night Ingredients Flatlay"
              fill
              sizes="(max-w-768px) 100vw, 250px"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-4">
              <span className="text-white font-extrabold text-xs">V Night 주원료 및 부원료</span>
              <span className="text-white/80 text-[9px] mt-0.5">식물성 멜라토닌 및 자연 추출 성분 flatlay</span>
            </div>
          </div>

          {/* 스펙 리스트 섹션: borderless 가로선 표 구조 (3/5) */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm divide-y divide-neutral-100">
            {specs.map((item) => (
              <div
                key={item.label}
                className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span 
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border text-base
                               ${item.isHighlighted 
                                 ? "bg-brand-surface text-brand-primary border-brand-primary/10" 
                                 : "bg-neutral-50 text-neutral-500 border-neutral-100"}`}
                    role="img"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-extrabold text-neutral-800 text-xs sm:text-[13px]">
                        {item.label}
                      </span>
                      {item.tag && (
                        <span className={`px-1.5 py-0.2 rounded ${currentLogic.tagColor} text-[8px] font-black tracking-tight`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-0.5 leading-normal truncate max-w-[200px] sm:max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-neutral-950 font-black text-xs sm:text-[13px] tracking-tight block">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 제형 소개 블록 (Texture Detail) */}
        <div className="mt-8 p-5 rounded-2xl border border-neutral-100 bg-white shadow-sm flex flex-col sm:flex-row items-center gap-5">
          <div className="w-full sm:w-[140px] aspect-[4/3] sm:aspect-square relative rounded-xl overflow-hidden shrink-0 border border-neutral-100">
            <Image
              src="/images/jelly_texture.jpg"
              alt="V Night Jelly Texture"
              fill
              sizes="(max-w-768px) 100vw, 140px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-[9px] font-black bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full inline-block mb-1.5">제형 특징</span>
            <h4 className="font-extrabold text-neutral-950 text-xs sm:text-sm mb-1.5">
              물 없이 상큼하고 간편하게 씹어먹는 스틱 젤리
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              알약 섭취의 불편함과 쓴 약초의 단점을 해결했습니다. 달콤하고 새콤한 타트체리맛의 쫀득한 젤리 제형으로, 자기 전 침대 옆에서 기분 좋은 마지막 디저트처럼 물 없이 맛있게 챙기실 수 있습니다.
            </p>
          </div>
        </div>

        {/* 4. D2C 상세 고시 테이블 */}
        <div className="mt-8 p-5 rounded-2xl border border-neutral-100 bg-white shadow-sm">
          <h3 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-3 pb-2 border-b border-neutral-100 flex items-center gap-1.5">
            <span className="w-1 h-3 bg-brand-primary rounded-full" />
            제품 기본 표시 정보
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 text-[10px] sm:text-[11px] text-neutral-500">
            <div>
              <span className="font-bold text-neutral-700 block mb-0.5">제품명</span>
              V Night (브이 나이트)
            </div>
            <div>
              <span className="font-bold text-neutral-700 block mb-0.5">식품 유형</span>
              기타가공품 (스틱 젤리)
            </div>
            <div>
              <span className="font-bold text-neutral-700 block mb-0.5">내용량 및 칼로리</span>
              280g (20g x 14포 / 1포당 70 kcal)
            </div>
            <div>
              <span className="font-bold text-neutral-700 block mb-0.5">섭취량 및 섭취방법</span>
              1일 1회, 1회 1포를 씹어서 섭취
            </div>
            <div>
              <span className="font-bold text-neutral-700 block mb-0.5">제조 및 생산 관리</span>
              HACCP 및 GMP 위생 관리 기준 시설 매칭 제조 예정
            </div>
            <div>
              <span className="font-bold text-neutral-700 block mb-0.5">보관 방법</span>
              고온다습한 곳을 피하여 실온 보관
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
