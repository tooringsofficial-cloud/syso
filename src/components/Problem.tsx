import type { CopyDataset } from "@/data/copyData";

interface ProblemProps {
  data: CopyDataset["problem"];
}

export default function Problem({ data }: ProblemProps) {
  return (
    <section className="px-5 py-24 bg-[#292541] text-white relative">
      <div className="max-w-md mx-auto md:max-w-2xl relative z-10 text-center">
        {/* 서브 타이틀 */}
        <span className="text-xs font-semibold tracking-wider text-[#D9B76A] uppercase block mb-3 select-none">
          CUSTOMER VOICES
        </span>
        {/* 메인 타이틀 (clamp() 기반 반응형 타이포 스케일) */}
        <h2 className="text-section-title font-semibold text-white leading-snug tracking-tight mb-16 max-w-sm md:max-w-xl mx-auto text-keep-all px-2">
          {data.title}
        </h2>

        {/* 편집디자인 감성의 플랫 인용구 리스트 */}
        <div className="space-y-12 max-w-md mx-auto">
          {data.situations.map((s, idx) => (
            <div
              key={s.label}
              className="flex flex-col items-center group"
            >
              {/* 원물/상황 구분 태그 */}
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <span className="text-base shrink-0" role="img" aria-label={s.label}>
                  {s.emoji}
                </span>
                <span className="text-xs font-semibold text-[#D9B76A] tracking-wider uppercase whitespace-nowrap">
                  {s.label}
                </span>
              </div>

              {/* 감성 자극 인용구 텍스트 (clamp() 타이포 적용) */}
              <p className="text-body-custom font-medium text-white/90 leading-relaxed tracking-tight max-w-sm text-keep-all px-4">
                &ldquo;{s.desc}&rdquo;
              </p>
              
              {/* 심플한 구분선 */}
              {idx < data.situations.length - 1 && (
                <div className="w-8 h-[1px] bg-white/10 mt-10 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* 하단 출처 표기 (clamp() 캡션) */}
        <p className="text-center text-caption-custom text-white/40 mt-20 tracking-tight leading-normal max-w-xs mx-auto font-normal text-keep-all px-2">
          *사전 FGI 및 설문조사 시 소비자들이 가장 많이 토로했던 실제 고민 사례들을 기반으로 연출되었습니다.
        </p>
      </div>
    </section>
  );
}
