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
        <span className="text-xs font-semibold tracking-wider text-brand-primary uppercase text-center block mb-2">
          Product Details
        </span>
        <h2 className="text-xl font-extrabold text-neutral-900 text-center mb-3 md:text-3xl tracking-tight">
          V Night 제품 상세 구성
        </h2>
        <p className="text-xs text-neutral-500 text-center mb-10 leading-relaxed max-w-sm mx-auto">
          밤의 편안함과 아침의 가벼움을 동시에 관리하는<br />
          V Night의 엄선된 핵심 성분과 패키지 스펙을 소개합니다.
        </p>

        {/* 메인 레이아웃: 이미지와 정보 카드 그리드 */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:items-start md:gap-6">
          {/* 이미지 섹션 (2/5) */}
          <div className="md:col-span-2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white border border-neutral-200/50 shadow-premium flex items-center justify-center group">
            <Image
              src="/images/package.png"
              alt="V Night Detail"
              fill
              sizes="(max-w-768px) 100vw, 250px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-white font-bold text-sm">V Night (브이 나이트)</span>
              <span className="text-white/80 text-[10px] mt-0.5">식물 유래 원료 기반 밤 루틴 스틱젤리</span>
            </div>
          </div>

          {/* 스펙 리스트 섹션 (3/5) */}
          <div className="md:col-span-3 space-y-3">
            {specs.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-white border border-neutral-200/50 shadow-premium flex items-start gap-4"
              >
                <span 
                  className="w-10 h-10 rounded-lg bg-neutral-50 text-2xl flex items-center justify-center shrink-0 border border-neutral-100 shadow-sm"
                  role="img"
                  aria-label={item.label}
                >
                  {item.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between flex-wrap gap-x-2">
                    <h4 className="font-bold text-neutral-800 text-sm">
                      {item.label}
                    </h4>
                    <span className="text-brand-primary font-extrabold text-sm">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
