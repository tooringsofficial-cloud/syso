import type { CopyDataset } from "@/data/copyData";

interface ConceptProps {
  data: CopyDataset["concept"];
}

export default function Concept({ data }: ConceptProps) {
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
        {/* 섹션 대제목 */}
        <h2 className="text-xl font-black text-neutral-900 text-center mb-10 md:text-3xl tracking-tight leading-snug">
          V Night를 만들게 된 배경
        </h2>

        {/* 1. 개발 배경 & 해결 과제 (Brand Identity + Story를 제품 배경으로 치환) */}
        <div className="mb-10 p-6 rounded-2xl bg-brand-surface/40 border border-brand-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -mr-10 -mt-10 blur-xl" />
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black tracking-widest text-brand-primary uppercase">
              Brand Statement
            </span>
          </div>
          <h3 className="font-extrabold text-neutral-950 text-base sm:text-lg mb-2">
            &ldquo;Evidence-based wellness, rooted in nature.&rdquo;
          </h3>
          <p className="text-xs text-neutral-500 leading-relaxed whitespace-pre-line">
            우리는 수면과 휴식을 돕는 수많은 합성 약물이나 임시방편적인 대안이 아닌, 자연에서 유래하면서도 과학적인 근거를 갖춘 안전한 나이트 루틴을 만들고 싶었습니다.
            {"\n\n"}
            과학적이되 자연에 가장 가까운 안전한 배합(**Science, Yet So Organic**)으로 매일 밤 의존 없이 안심하고 먹을 수 있는 웰니스를 일상 속으로 가져오는 것(**Bring scientific wellness into everyday life**)이 SYSO V Night의 개발 약속입니다.
          </p>
        </div>

        {/* 2. 해결하려는 문제 & 제품 구성 */}
        <div className="mb-10 space-y-4">
          <h3 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-3 pb-1.5 border-b border-neutral-100 flex items-center gap-1.5">
            <span className="w-1 h-3 bg-brand-primary rounded-full" />
            V Night가 해결하고자 하는 두 가지 고민
          </h3>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100/60 shadow-sm">
              <span className="text-sm font-extrabold text-neutral-800 block mb-1">🌙 밤의 고민 해결</span>
              <p className="text-xs text-neutral-500 leading-relaxed">
                인위적인 합성 보조제 대신, 식물 유래 멜라토닌과 마그네슘 배합으로 매일 밤 의존 걱정 없이 부드럽고 편안하게 안착할 수 있는 릴렉싱 루틴을 제안합니다.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100/60 shadow-sm">
              <span className="text-sm font-extrabold text-neutral-800 block mb-1">☀️ 아침의 고민 해결</span>
              <p className="text-xs text-neutral-500 leading-relaxed">
                야식이나 늦은 섭취 후 다음 날이 걱정될 때, 칼륨과 늙은 호박 추출물을 배합하여 아침에 눈 떴을 때 한층 더 가볍고 매끄러운 바디 라인을 선사합니다.
              </p>
            </div>
          </div>
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


