import type { CopyDataset } from "@/data/copyData";

interface ConceptProps {
  data: CopyDataset["concept"];
  variant: string;
}

export default function Concept({ data, variant }: ConceptProps) {
  const safetyPrinciples = [
    {
      title: "100% 식물 유래 핵심 원료",
      desc: "인위적인 합성 원료를 배제하고 자연 유래 식물성 원료(식물성 멜라토닌 등)를 기본으로 안전하게 배합합니다.",
      emoji: "🌱",
    },
    {
      title: "철저한 성분 함량 투명 공개",
      desc: "제품 패키지 뒷면에 모든 주원료와 부원료의 함량을 투명하게 명시하여 언제나 신뢰할 수 있습니다.",
      emoji: "⚖️",
    },
    {
      title: "검증된 제조 시설 생산 추진",
      desc: "엄격한 식품 안전 인증(HACCP/GMP)을 획득한 전문 위생 제조사 매칭을 완료하여 안전하게 생산할 예정입니다.",
      emoji: "🏭",
    },
  ];

  return (
    <section className="px-5 py-16 bg-white">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 브랜드 슬로건 및 철학 선언 배너 (기존 슬로건/문구 유지) */}
        <div className="mb-10 p-6 rounded-2xl bg-brand-surface/40 border border-brand-primary/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -mr-10 -mt-10 blur-xl" />
          <span className="text-[9px] font-black tracking-widest text-brand-primary uppercase mb-1 block">
            Brand Identity
          </span>
          <h3 className="font-black text-neutral-900 text-lg tracking-wide">
            SYSO
          </h3>
          <p className="text-[11px] font-black text-brand-primary mt-0.5 mb-2.5">
            Science, Yet So Organic
          </p>
          <div className="w-6 h-[1.5px] bg-neutral-200 mx-auto mb-2.5" />
          <p className="text-xs font-bold text-neutral-800 leading-snug mb-1">
            “Evidence-based wellness, rooted in nature.”
          </p>
          <p className="text-[10px] text-neutral-400">
            Bring scientific wellness into everyday life.
          </p>
        </div>

        {/* 섹션 대제목 */}
        <h2 className="text-xl font-black text-neutral-900 text-center mb-2 md:text-3xl tracking-tight leading-snug">
          V Night 제품 설계 논리
        </h2>
        <p className="text-xs text-neutral-400 text-center mb-10 leading-relaxed">
          어떤 성분이 어떤 고민 상황을 거쳐 하나의 루틴으로 완결되는지 보여드립니다.
        </p>

        {/* 포지셔닝별 성분 ➡️ 상황 ➡️ 루틴 비주얼 다이어그램 */}
        <div className="mb-12">
          {variant === "a" && (
            /* Variant A: 수면 중심 비주얼 흐름 */
            <div className="flex flex-col items-center gap-3 max-w-md mx-auto relative py-2">
              {/* Step 1: 성분 */}
              <div className="w-full p-4 rounded-xl bg-indigo-50/50 border border-indigo-100/60 flex items-center gap-3.5 shadow-sm/5">
                <span className="text-xl w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm/5 border border-indigo-100">🌿</span>
                <div className="text-left">
                  <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest block leading-none mb-0.5">01. Ingredient</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-sm">식물 유래 멜라토닌 2mg + 글루콘산 마그네슘 600mg</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">↓</span>
              
              {/* Step 2: 상황 */}
              <div className="w-full p-4 rounded-xl bg-indigo-50/50 border border-indigo-100/60 flex items-center gap-3.5 shadow-sm/5">
                <span className="text-xl w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm/5 border border-indigo-100">📱</span>
                <div className="text-left">
                  <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest block leading-none mb-0.5">02. Situation</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-sm">중요한 일정 전날 밤 뒤척임과 긴장 상태</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">↓</span>
              
              {/* Step 3: 루틴 */}
              <div className="w-full p-4.5 rounded-xl bg-brand-primary text-white flex items-center gap-3.5 shadow-premium">
                <span className="text-xl w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">🌙</span>
                <div className="text-left">
                  <span className="text-[9px] text-white/70 uppercase tracking-widest block leading-none mb-0.5">03. Routine</span>
                  <h4 className="font-extrabold text-xs sm:text-sm">의존 걱정 없이 부드러운 안착 및 편안한 밤 루틴</h4>
                </div>
              </div>
            </div>
          )}

          {variant === "b" && (
            /* Variant B: 붓기 중심 비주얼 흐름 */
            <div className="flex flex-col items-center gap-3 max-w-md mx-auto relative py-2">
              {/* Step 1: 성분 */}
              <div className="w-full p-4 rounded-xl bg-amber-50/40 border border-amber-100/60 flex items-center gap-3.5 shadow-sm/5">
                <span className="text-xl w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm/5 border border-amber-100">💧</span>
                <div className="text-left">
                  <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block leading-none mb-0.5">01. Ingredient</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-sm">칼륨 300mg + 국산 늙은 호박 추출물 500mg</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">↓</span>
              
              {/* Step 2: 상황 */}
              <div className="w-full p-4 rounded-xl bg-amber-50/40 border border-amber-100/60 flex items-center gap-3.5 shadow-sm/5">
                <span className="text-xl w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm/5 border border-amber-100">💼</span>
                <div className="text-left">
                  <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block leading-none mb-0.5">02. Situation</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-sm">소개팅, 면접, 촬영 전날 밤 및 아침 거울 앞 고민</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">↓</span>
              
              {/* Step 3: 루틴 */}
              <div className="w-full p-4.5 rounded-xl bg-brand-primary text-white flex items-center gap-3.5 shadow-premium">
                <span className="text-xl w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">☀️</span>
                <div className="text-left">
                  <span className="text-[9px] text-white/70 uppercase tracking-widest block leading-none mb-0.5">03. Routine</span>
                  <h4 className="font-extrabold text-xs sm:text-sm">자신감 넘치는 개운하고 산뜻한 아침 가벼움 시작</h4>
                </div>
              </div>
            </div>
          )}

          {variant !== "a" && variant !== "b" && (
            /* Variant AB: 2-in-1 밤과 아침의 더블 루틴 수렴 흐름 */
            <div className="relative py-2 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-3.5 relative">
                {/* 밤 블록 */}
                <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100/50 flex flex-col items-center text-center shadow-sm/5">
                  <span className="text-lg mb-1">🌙 밤 루틴</span>
                  <span className="text-[9px] text-indigo-600 font-bold bg-indigo-100/40 px-2 py-0.5 rounded-full mb-2.5">멜라토닌 + 마그네슘</span>
                  <p className="text-[10px] text-neutral-500 font-semibold leading-relaxed">밤마다 겪는 뒤척임과 긴장을 덜어 편안한 휴식 유도</p>
                </div>
                
                {/* 아침 블록 */}
                <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-100/50 flex flex-col items-center text-center shadow-sm/5">
                  <span className="text-lg mb-1">☀️ 아침 루틴</span>
                  <span className="text-[9px] text-amber-700 font-bold bg-amber-100/30 px-2 py-0.5 rounded-full mb-2.5">칼륨 + 늙은 호박</span>
                  <p className="text-[10px] text-neutral-500 font-semibold leading-relaxed">체내 전해질을 조율하여 무거움 없는 개운한 출발</p>
                </div>
              </div>

              {/* 수렴 화살표 */}
              <div className="flex flex-col items-center my-3.5">
                <span className="text-brand-primary text-base font-bold">↓</span>
              </div>

              {/* 통합 올인원 루틴 */}
              <div className="p-4.5 rounded-2xl bg-brand-primary text-white border border-brand-primary/5 shadow-premium text-center max-w-md mx-auto">
                <span className="text-[9px] bg-white/20 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1 inline-block">One Double Routine</span>
                <h4 className="font-extrabold text-xs sm:text-sm mb-1">하루 1포, 연결된 올인원 나이트 루틴</h4>
                <p className="text-[10px] text-white/80 leading-normal">
                  자는 동안 밤의 휴식과 아침의 가벼움을 동시에 관리하여,<br />
                  다음 날 최상의 컨디션으로 이어지게 만드는 V Night의 설계 가치입니다.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 3. 품질 3대 약속 */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-3 pb-1.5 border-b border-neutral-100 flex items-center gap-1.5">
            <span className="w-1 h-3 bg-brand-primary rounded-full" />
            안심할 수 있는 3대 신뢰 제조 원칙
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {safetyPrinciples.map((p, idx) => (
              <div 
                key={p.title} 
                className="p-4.5 rounded-xl bg-white border border-neutral-100 flex flex-col shadow-sm transition-all hover:border-brand-primary/15"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-brand-surface flex items-center justify-center text-sm border border-brand-primary/5">
                    {p.emoji}
                  </span>
                  <span className="text-[10px] font-black text-brand-primary">0{idx + 1}</span>
                </div>
                <h4 className="font-bold text-neutral-850 text-xs sm:text-sm mb-1.5">{p.title}</h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



