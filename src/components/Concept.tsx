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
      image: "/images/cherry.jpg",
    },
    {
      title: "철저한 성분 함량 투명 공개",
      desc: "제품 패키지 뒷면에 모든 주원료와 부원료의 함량을 투명하게 명시하여 언제나 신뢰할 수 있습니다.",
      image: "/images/potassium.jpg",
    },
    {
      title: "검증된 제조 시설 생산 추진",
      desc: "엄격한 식품 안전 인증(HACCP/GMP)을 획득한 전문 위생 제조사 매칭을 완료하여 안전하게 생산할 예정입니다.",
      image: "/images/lab_science.jpg",
    },
  ];

  return (
    <section className="px-5 py-24 bg-white w-full">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 1. 제품 철학을 전달하는 구간 (Brand Philosophy) */}
        <div className="text-center mb-16 max-w-lg mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#292541] uppercase mb-2.5 block select-none">
            Brand Philosophy
          </span>
          <h3 className="font-bold text-[#111827] text-2xl tracking-wide leading-none select-none">
            SYSO
          </h3>
          <p className="text-xs font-semibold text-[#292541] mt-1.5 mb-4 select-none">
            Science, Yet So Organic
          </p>
          <div className="w-8 h-[1px] bg-neutral-200 mx-auto mb-5 select-none" />
          <p className="text-body-custom font-bold text-[#111827] leading-relaxed max-w-sm mx-auto text-keep-all">
            “Evidence-based wellness, rooted in nature.”
          </p>
          <p className="text-caption-custom text-[#6B7280] mt-3 font-normal text-keep-all">
            데이터와 자연의 힘으로 지속가능한 웰니스를 매일의 일상에 전합니다.
          </p>
        </div>

        {/* 2. 이미지가 화면을 채우는 연구원 R&D 비주얼 */}
        <div className="w-full max-w-lg mx-auto mb-16 relative aspect-[1.8] rounded-[16px] overflow-hidden border border-neutral-200/30 shadow-premium bg-neutral-50 group shrink-0">
          <Image
            src="/images/lab_science.jpg"
            alt="Scientific Development"
            fill
            sizes="(max-w-768px) 100vw, 512px"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-left shrink-0">
            <span className="text-[10px] bg-white/20 text-white font-bold px-2.5 py-1 rounded-[12px] backdrop-blur-sm uppercase tracking-wider whitespace-nowrap">
              R&D PROCESS
            </span>
            <p className="text-white text-xs font-semibold mt-2 text-keep-all">
              Science, Yet So Organic &mdash; 데이터 기반의 성분 배합 설계
            </p>
          </div>
        </div>

        {/* 3. 성분 ➡️ 상황 ➡️ 루틴 비주얼 다이어그램 */}
        <div className="mb-20 w-full">
          {/* 섹션 타이틀 (clamp() 적용) */}
          <h2 className="text-section-title font-semibold text-[#111827] text-center mb-2 tracking-tight leading-snug text-keep-all px-2">
            V Night 제품 설계 논리
          </h2>
          <p className="text-caption-custom text-[#6B7280] text-center mb-10 leading-relaxed max-w-xs mx-auto font-normal text-keep-all px-4">
            어떤 성분이 어떤 고민 상황을 거쳐 하나의 루틴으로 완결되는지 보여드립니다.
          </p>

          {variant === "a" && (
            /* Variant A: 수면 중심 비주얼 흐름 */
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto relative py-2">
              <div className="w-full py-4 px-5 rounded-[16px] bg-[#F8F8FB] border border-neutral-200/40 flex items-center gap-4 shadow-premium min-w-0">
                <div className="w-10 h-10 rounded-[12px] overflow-hidden shrink-0 border border-neutral-200/50 relative select-none">
                  <Image src="/images/cherry.jpg" alt="체리" fill sizes="40px" className="object-cover" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-[10px] font-semibold text-[#292541] uppercase tracking-wider block leading-none mb-1 whitespace-nowrap">01. Ingredient</span>
                  <h4 className="font-bold text-[#111827] text-caption-custom sm:text-[14px] text-keep-all">식물 유래 멜라토닌 2mg (체리 등 추출)</h4>
                </div>
              </div>
              
              <span className="text-[#292541] text-base font-bold select-none shrink-0">&darr;</span>
              
              <div className="w-full py-4 px-5 rounded-[16px] bg-[#F8F8FB] border border-neutral-200/40 flex items-center gap-4 shadow-premium min-w-0">
                <div className="w-10 h-10 rounded-[12px] overflow-hidden shrink-0 border border-neutral-200/50 relative select-none bg-white">
                  <Image src="/images/magnesium.jpg" alt="마그네슘 상징" fill sizes="40px" className="object-cover" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-[10px] font-semibold text-[#292541] uppercase tracking-wider block leading-none mb-1 whitespace-nowrap">02. Ingredient (*상징 이미지)</span>
                  <h4 className="font-bold text-[#111827] text-caption-custom sm:text-[14px] text-keep-all">글루콘산 마그네슘 600mg (긴장 완화 설계)</h4>
                  <p className="text-[9px] text-[#6B7280] mt-1 leading-normal text-keep-all">
                    ※ 원료의 기원을 묘사한 성분 상징 비주얼입니다. 본 제품은 흡수율을 고려하여 안전하게 젤리로 배합된 스틱 젤리 형태의 제품입니다.
                  </p>
                </div>
              </div>
              
              <span className="text-[#292541] text-base font-bold select-none shrink-0">&darr;</span>
              
              <div className="w-full py-4.5 px-5 rounded-[16px] bg-[#292541] text-white flex items-center gap-4 shadow-premium min-w-0">
                <span className="text-base w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center shrink-0 select-none">🌙</span>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-[10px] text-white/70 uppercase tracking-wider block leading-none mb-1 whitespace-nowrap">03. Routine</span>
                  <h4 className="font-bold text-xs sm:text-[13px] text-keep-all">의존 걱정 없이 부드러운 안착 및 편안한 밤 루틴</h4>
                </div>
              </div>
            </div>
          )}

          {variant === "b" && (
            /* Variant B: 붓기 중심 비주얼 흐름 */
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto relative py-2">
              <div className="w-full py-4 px-5 rounded-[16px] bg-[#F8F8FB] border border-neutral-200/40 flex items-center gap-4 shadow-premium min-w-0">
                <div className="w-10 h-10 rounded-[12px] overflow-hidden shrink-0 border border-neutral-200/50 relative select-none bg-white">
                  <Image src="/images/potassium.jpg" alt="칼륨 상징" fill sizes="40px" className="object-cover" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-[10px] font-semibold text-[#292541] uppercase tracking-wider block leading-none mb-1 whitespace-nowrap">01. Ingredient (*상징 이미지)</span>
                  <h4 className="font-bold text-[#111827] text-caption-custom sm:text-[14px] text-keep-all">칼륨 300mg (수분/순환 조율)</h4>
                  <p className="text-[9px] text-[#6B7280] mt-1 leading-normal text-keep-all">
                    ※ 원료의 기원을 묘사한 성분 상징 비주얼입니다. 본 제품은 흡수율을 고려하여 안전하게 젤리로 배합된 스틱 젤리 형태의 제품입니다.
                  </p>
                </div>
              </div>
              
              <span className="text-[#292541] text-base font-bold select-none shrink-0">&darr;</span>
              
              <div className="w-full py-4 px-5 rounded-[16px] bg-[#F8F8FB] border border-neutral-200/40 flex items-center gap-4 shadow-premium min-w-0">
                <div className="w-10 h-10 rounded-[12px] overflow-hidden shrink-0 border border-neutral-200/50 relative select-none">
                  <Image src="/images/pumpkin.jpg" alt="늙은 호박" fill sizes="40px" className="object-cover" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-[10px] font-semibold text-[#292541] uppercase tracking-wider block leading-none mb-1 whitespace-nowrap">02. Ingredient</span>
                  <h4 className="font-bold text-[#111827] text-caption-custom sm:text-[14px] text-keep-all">국산 늙은 호박 추출물 500mg (아침의 무거움 케어)</h4>
                </div>
              </div>
              
              <span className="text-[#292541] text-base font-bold select-none shrink-0">&darr;</span>
              
              <div className="w-full py-4.5 px-5 rounded-[16px] bg-[#292541] text-white flex items-center gap-4 shadow-premium min-w-0">
                <span className="text-base w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center shrink-0 select-none">☀️</span>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-[10px] text-white/70 uppercase tracking-wider block leading-none mb-1 whitespace-nowrap">03. Routine</span>
                  <h4 className="font-bold text-xs sm:text-[13px] text-keep-all">자신감 넘치는 개운하고 산뜻한 아침 가벼움 시작</h4>
                </div>
              </div>
            </div>
          )}

          {variant !== "a" && variant !== "b" && (
            /* Variant AB: 2-in-1 수렴형 루틴 다이어그램 */
            <div className="relative py-2 max-w-lg mx-auto w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                {/* 밤 블록 */}
                <div className="p-5 rounded-[16px] bg-[#F8F8FB] border border-neutral-200/40 flex flex-col items-center text-center shadow-premium min-w-0">
                  <div className="flex gap-2.5 mb-3.5 select-none shrink-0">
                    <div className="w-9 h-9 rounded-[12px] overflow-hidden border border-neutral-200/50 relative bg-white">
                      <Image src="/images/cherry.jpg" alt="체리" fill sizes="36px" className="object-cover" />
                    </div>
                    <div className="w-9 h-9 rounded-[12px] overflow-hidden border border-neutral-200/50 relative bg-white">
                      <Image src="/images/magnesium.jpg" alt="마그네슘" fill sizes="36px" className="object-cover" />
                    </div>
                  </div>
                  <span className="text-base mb-1 select-none">🌙 밤 루틴</span>
                  <span className="text-[9px] text-[#292541] font-bold bg-[#D9B76A]/20 px-2.5 py-0.5 rounded-[12px] mb-3 whitespace-nowrap">멜라토닌 + 마그네슘</span>
                  <p className="text-[11px] text-[#6B7280] font-medium leading-relaxed text-keep-all">밤마다 겪는 뒤척임과 긴장을 덜어 편안한 휴식</p>
                  <span className="text-[8px] text-[#6B7280]/80 mt-2 block leading-normal">※ 마그네슘 이미지는 성분 상징 비주얼입니다.</span>
                </div>
                
                {/* 아침 블록 */}
                <div className="p-5 rounded-[16px] bg-[#F8F8FB] border border-neutral-200/40 flex flex-col items-center text-center shadow-premium min-w-0">
                  <div className="flex gap-2.5 mb-3.5 select-none shrink-0">
                    <div className="w-9 h-9 rounded-[12px] overflow-hidden border border-neutral-200/50 relative bg-white">
                      <Image src="/images/potassium.jpg" alt="칼륨" fill sizes="36px" className="object-cover" />
                    </div>
                    <div className="w-9 h-9 rounded-[12px] overflow-hidden border border-neutral-200/50 relative bg-white">
                      <Image src="/images/pumpkin.jpg" alt="늙은 호박" fill sizes="36px" className="object-cover" />
                    </div>
                  </div>
                  <span className="text-base mb-1 select-none">☀️ 아침 루틴</span>
                  <span className="text-[9px] text-[#292541] font-bold bg-[#D9B76A]/20 px-2.5 py-0.5 rounded-[12px] mb-3 whitespace-nowrap">칼륨 + 호박</span>
                  <p className="text-[11px] text-[#6B7280] font-medium leading-relaxed text-keep-all">체내 전해질을 조율하여 무거움 없는 개운한 출발</p>
                  <span className="text-[8px] text-[#6B7280]/80 mt-2 block leading-normal">※ 칼륨 이미지는 성분 상징 비주얼입니다.</span>
                </div>
              </div>

              {/* 수렴 화살표 */}
              <div className="flex flex-col items-center my-4 shrink-0">
                <span className="text-[#292541] text-base font-bold select-none">&darr;</span>
              </div>

              {/* 통합 올인원 루틴 */}
              <div className="p-6 rounded-[16px] bg-[#292541] text-white border border-[#292541]/5 shadow-premium text-center max-w-md mx-auto min-w-0">
                <span className="text-[10px] bg-white/20 text-[#D9B76A] font-bold px-2.5 py-1 rounded-[12px] uppercase tracking-wider mb-2 inline-block select-none whitespace-nowrap">
                  One Double Routine
                </span>
                <h4 className="font-bold text-xs sm:text-[14px] mb-1.5 text-keep-all px-2">하루 1포, 연결된 올인원 나이트 루틴</h4>
                <p className="text-[11px] text-white/80 leading-relaxed font-normal text-keep-all">
                  자는 동안 밤의 휴식과 아침의 가벼움을 동시에 관리하여,<br />
                  다음 날 최상의 컨디션으로 이어지게 만드는 V Night의 설계 가치입니다.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4. 품질 3대 약속 */}
        <div className="space-y-6 w-full">
          <h3 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-200/60 flex items-center gap-2 select-none">
            <span className="w-1.5 h-3.5 bg-[#292541] rounded-[2px]" />
            안심할 수 있는 3대 신뢰 제조 원칙
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {safetyPrinciples.map((p, idx) => (
              <div 
                key={p.title} 
                className="flex flex-col text-center sm:text-left min-w-0"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-3.5 shrink-0">
                  <div className="w-10 h-10 rounded-[12px] overflow-hidden border border-neutral-200/50 relative shrink-0 shadow-premium select-none bg-[#F8F8FB]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#292541] select-none">0{idx + 1}</span>
                </div>
                <h4 className="font-bold text-[#111827] text-caption-custom sm:text-[13px] mb-2 text-keep-all">{p.title}</h4>
                <p className="text-[12px] text-[#6B7280] leading-relaxed font-normal text-keep-all">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
