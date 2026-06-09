"use client";

import Image from "next/image";

export default function ProductInfo() {
  const specs = [
    {
      label: "식물 유래 멜라토닌",
      value: "2 mg",
      desc: "편안한 밤 루틴을 채우는 핵심 식물 원료",
      icon: "🌱",
    },
    {
      label: "글루콘산 마그네슘",
      value: "600 mg",
      desc: "지친 하루의 긴장을 덜고 몸을 편안하게 돕는 성분",
      icon: "🍊",
    },
    {
      label: "칼륨 (포타슘)",
      value: "300 mg",
      desc: "가벼운 아침 라인을 챙기는 균형 잡힌 배합",
      icon: "💧",
    },
    {
      label: "국산 호박 추출 분말",
      value: "500 mg",
      desc: "야식이나 불규칙한 식습관 다음 날을 위한 설계",
      icon: "🎃",
    },
    {
      label: "새콤달콤 타트체리맛",
      value: "스틱젤리 타입",
      desc: "물 없이 맛있고 탱글하게 간식처럼 섭취",
      icon: "🍒",
    },
    {
      label: "제품 구성",
      value: "20g x 14포",
      desc: "2주일 동안 매일 밤 챙기는 확실한 나이트 루틴",
      icon: "📦",
    },
  ];

  return (
    <section className="px-5 py-16 bg-warm-cream">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <h2 className="text-xl font-black text-neutral-900 text-center mb-3 md:text-3xl tracking-tight leading-snug">
          V Night 제품 상세 구성
        </h2>
        <p className="text-xs text-neutral-400 text-center mb-10 leading-relaxed max-w-xs mx-auto">
          밤의 편안함과 아침의 가벼움을 동시에 관리하는<br />
          V Night의 엄선된 핵심 성분과 패키지 스펙을 소개합니다.
        </p>

        {/* 메인 레이아웃: 이미지와 정보 카드 그리드 */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:items-start md:gap-6">
          {/* 이미지 섹션 (2/5) */}
          <div className="md:col-span-2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-premium flex items-center justify-center group">
            <Image
              src="/images/package.png"
              alt="V Night Detail"
              fill
              sizes="(max-w-768px) 100vw, 250px"
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-white font-bold text-xs">V Night (브이 나이트)</span>
              <span className="text-white/80 text-[9px] mt-0.5">식물 유래 원료 기반 밤 루틴 스틱젤리</span>
            </div>
          </div>

          {/* 스펙 리스트 섹션 (3/5) - 리니어 고밀도 로우 레이아웃 */}
          <div className="md:col-span-3 space-y-2.5">
            {specs.map((item) => (
              <div
                key={item.label}
                className="p-3.5 rounded-xl bg-white border border-neutral-100 shadow-sm flex items-center gap-3.5 transition-all duration-200 hover:border-brand-primary/10"
              >
                <span 
                  className="w-9 h-9 rounded-full bg-brand-surface text-xl flex items-center justify-center shrink-0 border border-brand-primary/5"
                  role="img"
                  aria-label={item.label}
                >
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-neutral-800 text-xs sm:text-sm">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5 leading-normal truncate">
                    {item.desc}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-brand-primary font-black text-sm sm:text-base tracking-tight block">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* D2C 상세 고시 테이블 (실제 상세페이지 느낌의 신뢰감 확보) */}
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

