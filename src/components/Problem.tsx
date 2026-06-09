import type { CopyDataset } from "@/data/copyData";

interface ProblemProps {
  data: CopyDataset["problem"];
}

export default function Problem({ data }: ProblemProps) {
  return (
    <section className="px-5 py-16 bg-brand-dark text-white relative overflow-hidden">
      {/* 백그라운드 밤하늘 빛샘 그라데이션 */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square rounded-full bg-brand-primary/15 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square rounded-full bg-brand-accent/5 blur-[90px] pointer-events-none" />

      <div className="max-w-md mx-auto md:max-w-2xl relative z-10">
        <h2 className="text-xl font-black text-center mb-10 md:text-3xl tracking-tight leading-snug">
          {data.title}
        </h2>

        {/* 세로형 대화형 말풍선 흐름 (AI 카드 격자 탈피) */}
        <div className="space-y-4.5 max-w-lg mx-auto">
          {data.situations.map((s, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={s.label}
                className={`flex items-end gap-2.5 ${isEven ? "justify-start" : "justify-end"}`}
              >
                {/* 짝수 번째(왼쪽 정렬): 아이콘을 왼쪽에 배치 */}
                {isEven && (
                  <span 
                    className="w-8 h-8 rounded-full bg-white/10 text-lg flex items-center justify-center shrink-0 border border-white/5 shadow-sm" 
                    role="img" 
                    aria-label={s.label}
                  >
                    {s.emoji}
                  </span>
                )}

                {/* 말풍선 본체 */}
                <div
                  className={`max-w-[80%] p-4 rounded-2xl border transition-all duration-300 shadow-sm
                             ${isEven 
                               ? "bg-white/10 border-white/10 rounded-bl-none text-left" 
                               : "bg-brand-primary/25 border-brand-primary/20 rounded-br-none text-left"}`}
                >
                  <span className="text-[10px] font-bold text-brand-accent/90 block mb-1 uppercase tracking-wider">
                    {s.label}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed">
                    &ldquo;{s.desc}&rdquo;
                  </p>
                </div>

                {/* 홀수 번째(오른쪽 정렬): 아이콘을 오른쪽에 배치 */}
                {!isEven && (
                  <span 
                    className="w-8 h-8 rounded-full bg-white/10 text-lg flex items-center justify-center shrink-0 border border-white/5 shadow-sm" 
                    role="img" 
                    aria-label={s.label}
                  >
                    {s.emoji}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* 하단 공감 서브스크립트 */}
        <p className="text-center text-[10px] text-white/35 mt-10 tracking-tight leading-normal">
          *사전 FGI 및 내부 설문조사 시 소비자들이 가장 많이 토로했던 실제 고민 사례들을 기반으로 재구성되었습니다.
        </p>
      </div>
    </section>
  );
}


