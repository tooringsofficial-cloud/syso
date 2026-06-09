import type { CopyDataset } from "@/data/copyData";

interface HeroProps {
  data: CopyDataset["hero"];
  onCtaClick: () => void;
}

export default function Hero({ data, onCtaClick }: HeroProps) {
  return (
    <section className="relative px-5 pt-16 pb-14 flex flex-col items-center text-center bg-gradient-to-b from-brand-surface/60 to-white">
      {/* 브랜드 로고 */}
      <span className="text-xs font-semibold tracking-widest text-brand-primary uppercase mb-6">
        SYSO
      </span>

      {/* 메인 카피 */}
      <h1 className="text-[1.75rem] leading-snug font-bold text-neutral-900 whitespace-pre-line md:text-4xl">
        {data.main}
      </h1>

      {/* 서브 카피 */}
      <p className="mt-4 text-[0.95rem] leading-relaxed text-neutral-500 max-w-sm md:text-base">
        {data.sub}
      </p>

      {/* CTA */}
      <button
        type="button"
        onClick={onCtaClick}
        className="mt-8 w-full max-w-xs py-4 rounded-xl bg-brand-primary text-white font-semibold text-base 
                   transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light
                   shadow-[0_4px_14px_rgba(67,56,202,0.25)]"
      >
        {data.cta}
      </button>
    </section>
  );
}
