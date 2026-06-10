import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  variant: string;
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ variant, data }: DesiredOutcomeProps) {
  const imageSrc = "/images/bedside_morning.jpg";

  return (
    <section className="px-5 py-24 bg-[#F8F8FB] relative w-full">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 섹션 서브 타이틀 */}
        <span className="text-xs font-semibold tracking-wider text-[#292541] uppercase text-center block mb-3 select-none">
          DESIRED OUTCOME
        </span>
        {/* 섹션 타이틀 (clamp() 타이포 스케일) */}
        <h2 className="text-section-title font-semibold text-[#111827] text-center mb-12 tracking-tight leading-snug text-keep-all px-2">
          {data.title}
        </h2>

        {/* 라이프스타일 프리미엄 결과 이미지 배너 */}
        <div className="w-full max-w-lg mx-auto mb-16 relative aspect-[1.8] rounded-[16px] overflow-hidden border border-neutral-200/50 shadow-premium bg-white group shrink-0">
          <Image
            src={imageSrc}
            alt="Desired Outcome Visual"
            fill
            sizes="(max-w-768px) 100vw, 512px"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 shrink-0">
            <span className="text-[10px] bg-white/20 text-white font-bold px-2.5 py-1 rounded-[12px] backdrop-blur-sm whitespace-nowrap">
              {variant === "b" ? "🌙 Relax Routine" : "☀️ Light Morning"}
            </span>
          </div>
        </div>

        {/* 세로형 루틴 타임라인 레이아웃 */}
        <div className="relative pl-12 md:pl-16 space-y-12 max-w-lg mx-auto">
          {/* 수직 타임라인 라인 */}
          <div className="absolute left-[18px] md:left-[22px] top-4 bottom-8 w-[1px] bg-neutral-200 pointer-events-none" />

          {data.outcomes.map((o, idx) => (
            <div
              key={o.title}
              className="relative flex flex-col"
            >
              {/* 타임라인 노드 버블 - shrink-0 고정으로 모양 붕괴 방지 */}
              <span 
                className="absolute -left-[36px] md:-left-[42px] top-0 w-9 h-9 rounded-[12px] bg-[#292541] text-white text-xs font-bold flex items-center justify-center shrink-0 z-10 shadow-premium select-none"
              >
                0{idx + 1}
              </span>

              {/* 핵심 문구 (clamp() 타이포 적용) */}
              <h3 className="font-semibold text-[#111827] text-body-custom leading-none pt-2 text-keep-all">
                {o.title}
              </h3>

              {/* 상세 설명 (clamp() 캡션) */}
              <p className="text-caption-custom text-[#6B7280] leading-relaxed mt-2.5 max-w-md font-normal text-keep-all">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
