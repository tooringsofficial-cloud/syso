import type { CopyDataset } from "@/data/copyData";

interface ConceptProps {
  data: CopyDataset["concept"];
}

export default function Concept({ data }: ConceptProps) {
  const safetyPrinciples = [
    {
      title: "100% 식물 유래 핵심 원료",
      desc: "인위적인 합성 원료를 배제하고 자연에서 찾은 식물성 멜라토닌 성분을 기본으로 배합합니다.",
    },
    {
      title: "철저한 성분 함량 투명 공개",
      desc: "제품 패키지 뒷면에 모든 주원료와 부원료의 함량을 투명하게 명시하여 신뢰할 수 있습니다.",
    },
    {
      title: "검증된 제조 시설 매칭",
      desc: "엄격한 식품 안전 인증(HACCP/GMP)을 획득한 전문 제조 라인을 매칭하여 위생적으로 생산을 추진합니다.",
    },
  ];

  return (
    <section className="px-5 py-16 bg-white">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <span className="text-xs font-semibold tracking-wider text-brand-primary uppercase text-center block mb-2">
          Brand Philosophy
        </span>
        <h2 className="text-xl font-extrabold text-neutral-900 text-center mb-4 md:text-3xl tracking-tight">
          {data.title}
        </h2>
        <p className="text-sm leading-relaxed text-neutral-500 text-center mb-8 max-w-sm mx-auto">
          {data.desc}
        </p>

        {/* 브랜드 아이덴티티 & 미션 선언 카드 */}
        <div className="mb-10 p-6 rounded-2xl bg-brand-surface/40 border border-brand-primary/10 text-center">
          <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-2 block">
            Brand Identity
          </span>
          <h3 className="font-black text-neutral-900 text-xl tracking-wide">
            SYSO
          </h3>
          <p className="text-xs font-bold text-brand-primary mt-0.5 mb-3">
            Science, Yet So Organic
          </p>
          <div className="w-8 h-0.5 bg-neutral-200 mx-auto mb-3" />
          <p className="text-sm font-bold text-neutral-800 leading-snug mb-1">
            “Evidence-based wellness, rooted in nature.”
          </p>
          <p className="text-xs text-neutral-400">
            Bring scientific wellness into everyday life.
          </p>
        </div>

        {/* 품질 3대 원칙 */}
        <div className="mb-10 space-y-4">
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">
            SYSO의 안심 품질 원칙
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {safetyPrinciples.map((p, idx) => (
              <div 
                key={p.title} 
                className="p-5 rounded-2xl bg-neutral-50/50 border border-neutral-100 flex flex-col shadow-sm"
              >
                <span className="text-xs font-bold text-brand-primary mb-2">0{idx + 1}</span>
                <h4 className="font-bold text-neutral-800 text-[0.95rem] mb-1.5">{p.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 제품 특징 리스트 */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
            제품 핵심 포인트
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {data.features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-brand-surface/40 border border-brand-primary/10 text-left shadow-sm"
              >
                <span className="text-brand-primary text-base shrink-0">✓</span>
                <span className="text-xs text-neutral-700 font-semibold">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

