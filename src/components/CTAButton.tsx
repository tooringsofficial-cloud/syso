import type { CopyDataset } from "@/data/copyData";

interface CTAButtonProps {
  data: CopyDataset["cta"];
  onCtaClick: () => void;
}

export default function CTAButton({ data, onCtaClick }: CTAButtonProps) {
  return (
    <section className="px-5 py-14 bg-gradient-to-b from-white to-brand-surface/40">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-neutral-900 mb-2 md:text-2xl">
          {data.title}
        </h2>

        <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
          {data.desc}
        </p>

        {/* 가격 정보 */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="text-neutral-400 line-through text-sm">
            정가 {data.priceOriginal}
          </span>
          <span className="text-brand-primary font-bold text-lg">
            {data.pricePromo}
          </span>
          <span className="text-xs text-brand-primary bg-brand-surface px-2 py-0.5 rounded-full font-medium">
            출시 프로모션 예정
          </span>
        </div>

        {/* CTA 버튼 */}
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full max-w-xs py-4 rounded-xl bg-brand-primary text-white font-semibold text-base 
                     transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light
                     shadow-[0_4px_14px_rgba(67,56,202,0.25)]"
        >
          {data.button}
        </button>

        <p className="mt-4 text-xs text-neutral-400">
          비용이 발생하지 않습니다 · 출시 시 알림만 발송
        </p>
      </div>
    </section>
  );
}
