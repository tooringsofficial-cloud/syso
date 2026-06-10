import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  variant: string;
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ variant, data }: DesiredOutcomeProps) {
  // 사용자의 명시적인 요청사항 #4: DesiredOutcome은 bedside_morning.jpg로 이미지 고정 사용
  const imageSrc = "/images/bedside_morning.jpg";

  return (
    <section className="px-6 py-24 bg-[#F8F8FB] relative">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 섹션 서브 타이틀 */}
        <span className="text-xs font-semibold tracking-wider text-[#292541] uppercase text-center block mb-3">
          DESIRED OUTCOME
        </span>
        {/* 섹션 타이틀 (Section Title: 22~24px, Weight 600) */}
        <h2 className="text-22px md:text-24px font-semibold text-[#111827] text-center mb-12 tracking-tight leading-snug">
          {data.title}
        </h2>

        {/* 라이프스타일 프리미엄 결과 이미지 배너 (Image: 16px, Shadow: D2C 표준) */}
        <div className="w-full max-w-lg mx-auto mb-16 relative aspect-[1.8] rounded-[16px] overflow-hidden border border-neutral-200/50 shadow-premium bg-white group">
          <Image
            src={imageSrc}
            alt="Desired Outcome Visual"
            fill
            sizes="(max-w-768px) 100vw, 512px"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] bg-white/20 text-white font-bold px-2.5 py-1 rounded-[12px] backdrop-blur-sm">
              {variant === "b" ? "🌙 Relax Routine" : "☀️ Light Morning"}
            </span>
          </div>
        </div>

        {/* 세로형 루틴 타임라인 레이아웃 */}
        <div className="relative pl-12 md:pl-16 space-y-12 max-w-lg mx-auto">
          {/* 수직 타임라인 라인 (D2C 감성의 얇고 단정한 선) */}
          <div className="absolute left-[18px] md:left-[22px] top-4 bottom-8 w-[1px] bg-neutral-200" />

          {data.outcomes.map((o, idx) => (
            <div
              key={o.title}
              className="relative flex flex-col"
            >
              {/* 타임라인 노드 버블 - 둥근 버튼 12px 및 shadow 제한 */}
              <span 
                className="absolute -left-[36px] md:-left-[42px] top-0 w-9 h-9 rounded-[12px] bg-[#292541] text-white text-xs font-bold flex items-center justify-center shrink-0 z-10 shadow-premium"
              >
                0{idx + 1}
              </span>

              {/* 핵심 문구 (Body: 15~16px, Weight 600) */}
              <h3 className="font-semibold text-[#111827] text-15px sm:text-16px leading-none pt-2">
                {o.title}
              </h3>

              {/* 상세 설명 (Caption/Detail: 13~14px) */}
              <p className="text-13px text-[#6B7280] leading-relaxed mt-2.5 max-w-md font-normal">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
