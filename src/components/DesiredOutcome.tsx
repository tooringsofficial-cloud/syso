import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  variant: string;
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ variant, data }: DesiredOutcomeProps) {
  const imageSrc = variant === "b" ? "/images/slate_night.jpg" : "/images/bedside_morning.jpg";

  return (
    <section className="px-6 py-20 bg-warm-cream relative">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 섹션 서브 타이틀 */}
        <span className="text-[10px] font-black tracking-widest text-brand-primary uppercase text-center block mb-3">
          DESIRED OUTCOME
        </span>
        {/* 섹션 타이틀 */}
        <h2 className="text-xl font-black text-neutral-900 text-center mb-10 md:text-3xl tracking-tight leading-snug">
          {data.title}
        </h2>

        {/* 라이프스타일 프리미엄 결과 이미지 배너 */}
        <div className="w-full max-w-lg mx-auto mb-12 relative aspect-[1.8] rounded-2xl overflow-hidden border border-neutral-200/50 shadow-premium bg-neutral-50 group">
          <Image
            src={imageSrc}
            alt="Desired Outcome Visual"
            fill
            sizes="(max-w-768px) 100vw, 512px"
            className="object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[9px] bg-white/20 text-white font-extrabold px-2 py-0.5 rounded backdrop-blur-sm">
              {variant === "b" ? "🌙 Relax Routine" : "☀️ Light Morning"}
            </span>
          </div>
        </div>

        {/* 세로형 루틴 타임라인 레이아웃 (세련된 서입 타이포그래피 노드) */}
        <div className="relative pl-10 md:pl-14 space-y-10 max-w-lg mx-auto">
          {/* 수직 타임라인 라인 */}
          <div className="absolute left-[15px] md:left-[19px] top-3 bottom-6 w-[1px] bg-neutral-200" />

          {data.outcomes.map((o, idx) => (
            <div
              key={o.title}
              className="relative flex flex-col transition-all duration-300 hover:translate-x-1"
            >
              {/* 타임라인 노드 버블 - 깔끔한 숫자형 인디케이터 */}
              <span 
                className="absolute -left-[35px] md:-left-[41px] top-0 w-7.5 h-7.5 md:w-9 md:h-9 rounded-full bg-brand-primary text-white text-xs font-black flex items-center justify-center shrink-0 z-10 shadow-sm"
              >
                0{idx + 1}
              </span>

              {/* 핵심 문구 */}
              <h3 className="font-extrabold text-neutral-900 text-sm sm:text-base leading-none">
                {o.title}
              </h3>

              {/* 상세 설명 */}
              <p className="text-xs text-neutral-500 leading-relaxed mt-2.5 max-w-md">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
