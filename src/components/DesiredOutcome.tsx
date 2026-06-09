import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ data }: DesiredOutcomeProps) {
  return (
    <section className="px-5 py-16 bg-gradient-to-b from-brand-surface/30 via-warm-cream/20 to-white relative">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <h2 className="text-xl font-black text-neutral-900 text-center mb-10 md:text-3xl tracking-tight leading-snug">
          {data.title}
        </h2>

        {/* 세로형 루틴 타임라인 레이아웃 (3열 격자 그리드 탈피) */}
        <div className="relative pl-10 md:pl-14 space-y-8 max-w-lg mx-auto">
          {/* 수직 타임라인 라인 */}
          <div className="absolute left-[17px] md:left-[21px] top-3 bottom-6 w-[1.5px] bg-brand-primary/10 border-dashed border-l border-brand-primary/30" />

          {data.outcomes.map((o, idx) => (
            <div
              key={o.title}
              className="relative flex flex-col transition-all duration-300 hover:translate-x-1"
            >
              {/* 타임라인 노드 버블 */}
              <span 
                className="absolute -left-[37px] md:-left-[43px] top-0 w-8.5 h-8.5 md:w-10 md:h-10 rounded-full bg-white text-lg md:text-xl flex items-center justify-center shadow-premium border border-brand-primary/10 shrink-0 z-10"
                role="img"
                aria-label={o.title}
              >
                {o.emoji}
              </span>

              {/* 순서 표시 */}
              <span className="text-[9px] font-bold text-brand-primary/80 uppercase tracking-widest leading-none">
                Step 0{idx + 1}
              </span>

              {/* 핵심 문구 */}
              <h3 className="font-extrabold text-neutral-900 text-sm sm:text-base mt-1.5">
                {o.title}
              </h3>

              {/* 상세 설명 */}
              <p className="text-xs text-neutral-500 leading-relaxed mt-1 max-w-md">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
