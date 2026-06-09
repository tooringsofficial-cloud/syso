import type { CopyDataset } from "@/data/copyData";

interface ProblemProps {
  data: CopyDataset["problem"];
}

export default function Problem({ data }: ProblemProps) {
  return (
    <section className="px-6 py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* 백그라운드 차분한 은은한 빛샘 그라데이션 */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-md mx-auto md:max-w-2xl relative z-10 text-center">
        {/* 서브 타이틀 */}
        <span className="text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
          CUSTOMER VOICES
        </span>
        {/* 메인 타이틀 */}
        <h2 className="text-xl md:text-2xl font-black text-white leading-snug tracking-tight mb-14 max-w-sm md:max-w-xl mx-auto whitespace-pre-line">
          {data.title}
        </h2>

        {/* 편집디자인 감성의 플랫 인용구 리스트 (SaaS 카드 버블 탈피) */}
        <div className="space-y-12 max-w-md mx-auto">
          {data.situations.map((s, idx) => (
            <div
              key={s.label}
              className="flex flex-col items-center group"
            >
              {/* 원물/상황 구분 태그 */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="text-sm" role="img" aria-label={s.label}>
                  {s.emoji}
                </span>
                <span className="text-[9px] font-extrabold text-brand-accent tracking-widest uppercase">
                  {s.label}
                </span>
              </div>

              {/* 감성 자극 인용구 텍스트 */}
              <p className="text-base sm:text-lg font-bold text-white/90 leading-relaxed tracking-tight max-w-sm whitespace-pre-line transition-all duration-300 group-hover:text-white">
                &ldquo;{s.desc}&rdquo;
              </p>
              
              {/* 구분선 */}
              {idx < data.situations.length - 1 && (
                <div className="w-6 h-[1px] bg-white/10 mt-10" />
              )}
            </div>
          ))}
        </div>

        {/* 하단 출처 표기 (신뢰성 확보) */}
        <p className="text-center text-[9px] text-white/30 mt-16 tracking-tight leading-normal max-w-xs mx-auto">
          *사전 FGI 및 설문조사 시 소비자들이 가장 많이 토로했던 실제 고민 사례들을 기반으로 연출되었습니다.
        </p>
      </div>
    </section>
  );
}
