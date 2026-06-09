import Image from "next/image";
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
    <section className="px-6 py-20 bg-white">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 1. 제품 철학을 전달하는 구간 (Brand Philosophy - 무보더 편집 디자인) */}
        <div className="text-center mb-16 max-w-lg mx-auto">
          <span className="text-[10px] font-black tracking-widest text-brand-primary uppercase mb-2 block">
            Brand Philosophy
          </span>
          <h3 className="font-black text-neutral-900 text-2xl tracking-wide leading-none">
            SYSO
          </h3>
          <p className="text-xs font-black text-brand-primary mt-1 mb-4">
            Science, Yet So Organic
          </p>
          <div className="w-8 h-[1px] bg-neutral-200 mx-auto mb-4" />
          <p className="text-sm font-bold text-neutral-800 leading-relaxed max-w-sm mx-auto">
            “Evidence-based wellness, rooted in nature.”
          </p>
          <p className="text-[10px] text-neutral-400 mt-2">
            데이터와 자연의 힘으로 지속가능한 웰니스를 매일의 일상에 전합니다.
          </p>
        </div>

        {/* 2. 이미지가 화면을 채우는 연구원 R&D 비주얼 (lab_science.jpg) */}
        <div className="w-full max-w-lg mx-auto mb-14 relative aspect-[1.8] rounded-2xl overflow-hidden border border-neutral-100 shadow-premium bg-neutral-50 group">
          <Image
            src="/images/lab_science.jpg"
            alt="Scientific Development"
            fill
            sizes="(max-w-768px) 100vw, 512px"
            className="object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[8px] bg-white/20 text-white font-extrabold px-2 py-0.5 rounded backdrop-blur-sm uppercase tracking-wider">
              R&D PROCESS
            </span>
            <p className="text-white text-xs font-bold mt-1.5">
              Science, Yet So Organic &mdash; 데이터 기반의 성분 배합 설계
            </p>
          </div>
        </div>

        {/* 3. 성분 ➡️ 상황 ➡️ 루틴 비주얼 다이어그램 */}
        <div className="mb-16">
          <h2 className="text-xl font-black text-neutral-900 text-center mb-2 md:text-2xl tracking-tight leading-snug">
            V Night 제품 설계 논리
          </h2>
          <p className="text-xs text-neutral-400 text-center mb-8 leading-relaxed max-w-xs mx-auto">
            어떤 성분이 어떤 고민 상황을 거쳐 하나의 루틴으로 완결되는지 보여드립니다.
          </p>

          {variant === "a" && (
            /* Variant A: 수면 중심 비주얼 흐름 (SaaS형 테두리 카드 제거) */
            <div className="flex flex-col items-center gap-3.5 max-w-md mx-auto relative py-2">
              <div className="w-full py-3.5 px-4 rounded-xl bg-[#f4f3f6] border border-[#e1dee5] flex items-center gap-3.5 shadow-sm/5">
                <span className="text-base w-7.5 h-7.5 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-100">🌿</span>
                <div className="text-left">
                  <span className="text-[8px] font-black text-[#292541] uppercase tracking-widest block leading-none mb-0.5">01. Ingredient</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-[13px]">식물 유래 멜라토닌 2mg + 글루콘산 마그네슘 600mg</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">&darr;</span>
              
              <div className="w-full py-3.5 px-4 rounded-xl bg-[#f4f3f6] border border-[#e1dee5] flex items-center gap-3.5 shadow-sm/5">
                <span className="text-base w-7.5 h-7.5 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-100">📱</span>
                <div className="text-left">
                  <span className="text-[8px] font-black text-[#292541] uppercase tracking-widest block leading-none mb-0.5">02. Situation</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-[13px]">중요한 일정 전날 밤 뒤척임과 긴장 상태</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">&darr;</span>
              
              <div className="w-full py-4 px-4.5 rounded-xl bg-brand-primary text-white flex items-center gap-3.5 shadow-premium">
                <span className="text-base w-7.5 h-7.5 rounded-full bg-white/10 flex items-center justify-center shrink-0">🌙</span>
                <div className="text-left">
                  <span className="text-[8px] text-white/70 uppercase tracking-widest block leading-none mb-0.5">03. Routine</span>
                  <h4 className="font-extrabold text-xs sm:text-[13px]">의존 걱정 없이 부드러운 안착 및 편안한 밤 루틴</h4>
                </div>
              </div>
            </div>
          )}

          {variant === "b" && (
            /* Variant B: 붓기 중심 비주얼 흐름 (SaaS형 테두리 카드 제거) */
            <div className="flex flex-col items-center gap-3.5 max-w-md mx-auto relative py-2">
              <div className="w-full py-3.5 px-4 rounded-xl bg-[#f3f4f0] border border-[#dfe2d9] flex items-center gap-3.5 shadow-sm/5">
                <span className="text-base w-7.5 h-7.5 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-100">💧</span>
                <div className="text-left">
                  <span className="text-[8px] font-black text-[#4c5c43] uppercase tracking-widest block leading-none mb-0.5">01. Ingredient</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-[13px]">칼륨 300mg + 국산 늙은 호박 추출물 500mg</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">&darr;</span>
              
              <div className="w-full py-3.5 px-4 rounded-xl bg-[#f3f4f0] border border-[#dfe2d9] flex items-center gap-3.5 shadow-sm/5">
                <span className="text-base w-7.5 h-7.5 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-100">💼</span>
                <div className="text-left">
                  <span className="text-[8px] font-black text-[#4c5c43] uppercase tracking-widest block leading-none mb-0.5">02. Situation</span>
                  <h4 className="font-extrabold text-neutral-800 text-xs sm:text-[13px]">소개팅, 면접, 촬영 전날 밤 및 아침 거울 앞 고민</h4>
                </div>
              </div>
              
              <span className="text-brand-primary text-base font-bold">&darr;</span>
              
              <div className="w-full py-4 px-4.5 rounded-xl bg-brand-primary text-white flex items-center gap-3.5 shadow-premium">
                <span className="text-base w-7.5 h-7.5 rounded-full bg-white/10 flex items-center justify-center shrink-0">☀️</span>
                <div className="text-left">
                  <span className="text-[8px] text-white/70 uppercase tracking-widest block leading-none mb-0.5">03. Routine</span>
                  <h4 className="font-extrabold text-xs sm:text-[13px]">자신감 넘치는 개운하고 산뜻한 아침 가벼움 시작</h4>
                </div>
              </div>
            </div>
          )}

          {variant !== "a" && variant !== "b" && (
            /* Variant AB: 2-in-1 밤과 아침의 더블 루틴 수렴 흐름 */
            <div className="relative py-2 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-3.5 relative">
                {/* 밤 블록 */}
                <div className="p-4.5 rounded-xl bg-[#f4f3f6] border border-[#e1dee5] flex flex-col items-center text-center shadow-sm/5">
                  <span className="text-base mb-1">🌙 밤 루틴</span>
                  <span className="text-[8px] text-[#292541] font-black bg-[#e2e1e7] px-2 py-0.5 rounded-full mb-2.5">멜라토닌 + 마그네슘</span>
                  <p className="text-[10px] text-neutral-500 font-semibold leading-relaxed">밤마다 겪는 뒤척임과 긴장을 덜어 편안한 휴식 유도</p>
                </div>
                
                {/* 아침 블록 */}
                <div className="p-4.5 rounded-xl bg-[#f3f4f0] border border-[#dfe2d9] flex flex-col items-center text-center shadow-sm/5">
                  <span className="text-base mb-1">☀️ 아침 루틴</span>
                  <span className="text-[8px] text-[#4c5c43] font-black bg-[#dfe2d9] px-2 py-0.5 rounded-full mb-2.5">칼륨 + 늙은 호박</span>
                  <p className="text-[10px] text-neutral-500 font-semibold leading-relaxed">체내 전해질을 조율하여 무거움 없는 개운한 출발</p>
                </div>
              </div>

              {/* 수렴 화살표 */}
              <div className="flex flex-col items-center my-3.5">
                <span className="text-brand-primary text-base font-bold">&darr;</span>
              </div>

              {/* 통합 올인원 루틴 */}
              <div className="p-4.5 rounded-2xl bg-brand-primary text-white border border-brand-primary/5 shadow-premium text-center max-w-md mx-auto">
                <span className="text-[9px] bg-white/25 text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider mb-1 inline-block">One Double Routine</span>
                <h4 className="font-extrabold text-xs sm:text-[13px] mb-1">하루 1포, 연결된 올인원 나이트 루틴</h4>
                <p className="text-[10px] text-white/80 leading-normal">
                  자는 동안 밤의 휴식과 아침의 가벼움을 동시에 관리하여,<br />
                  다음 날 최상의 컨디션으로 이어지게 만드는 V Night의 설계 가치입니다.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4. 품질 3대 약속 */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-5 pb-1.5 border-b border-neutral-100 flex items-center gap-1.5">
            <span className="w-1 h-3 bg-brand-primary rounded-full" />
            안심할 수 있는 3대 신뢰 제조 원칙
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {safetyPrinciples.map((p, idx) => (
              <div 
                key={p.title} 
                className="flex flex-col text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-brand-surface text-brand-primary text-sm flex items-center justify-center border border-brand-primary/5 shrink-0">
                    {p.emoji}
                  </span>
                  <span className="text-[9px] font-black text-brand-primary">0{idx + 1}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-xs sm:text-[13px] mb-1.5">{p.title}</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
