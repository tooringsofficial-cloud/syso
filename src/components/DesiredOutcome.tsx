import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  variant: string;
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ variant, data }: DesiredOutcomeProps) {
  const imageSrc = variant === "b" ? "/images/slate_night.jpg" : "/images/bedside_morning.jpg";

  return (
    <section className="px-5 py-16 bg-gradient-to-b from-brand-surface/30 via-warm-cream/20 to-white relative">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 섹션 타이틀 */}
        <h2 className="text-xl font-black text-neutral-900 text-center mb-6 md:text-3xl tracking-tight leading-snug">
          {data.title}
        </h2>

        {/* 라이프스타일 프리미엄 결과 이미지 배너 */}
        <div className="w-full max-w-lg mx-auto mb-8 relative aspect-[1.8] rounded-2xl overflow-hidden border border-neutral-100 shadow-premium bg-neutral-50 group">
          <Image
            src={imageSrc}
            alt="Desired Outcome Visual"
            fill
            sizes="(max-w-768px) 100vw, 512px"
            className="object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] bg-white/20 text-white font-extrabold px-2 py-0.5 rounded backdrop-blur-sm">
              {variant === "b" ? "🌙 Relax Routine" : "☀️ Light Morning"}
            </span>
          </div>
        </div>

        {/* 세로형 루틴 타임라인 레이아웃 */}
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
