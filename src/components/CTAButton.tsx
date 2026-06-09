import type { CopyDataset } from "@/data/copyData";

interface CTAButtonProps {
  data: CopyDataset["cta"];
  onCtaClick: () => void;
}

export default function CTAButton({ data, onCtaClick }: CTAButtonProps) {
  return (
    <section className="px-5 py-16 bg-gradient-to-b from-white via-neutral-50/50 to-warm-cream">
      <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-brand-dark text-white border border-brand-primary/10 shadow-premium-lg">
        <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-primary/40 px-3 py-1 rounded-full mb-4 inline-block">
          Pre-Register Now
        </span>
        <h2 className="text-xl font-extrabold text-white mb-2 md:text-2xl tracking-tight">
          {data.title}
        </h2>
        <p className="text-xs text-neutral-300 mb-8 leading-relaxed max-w-xs mx-auto">
          {data.desc}
        </p>

        {/* 가격 정보 */}
        <div className="mb-6 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] text-neutral-400 font-medium">사전 예약 30% 런칭 프로모션가 적용</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-neutral-400 line-through text-xs font-medium">
              정가 {data.priceOriginal}
            </span>
            <span className="text-brand-accent font-extrabold text-2xl">
              {data.pricePromo}
            </span>
          </div>
        </div>

        {/* CTA 버튼 */}
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full py-4.5 rounded-xl bg-brand-primary text-white font-bold text-base 
                     transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium-lg
                     shadow-[0_4px_14px_rgba(79,70,229,0.3)] cursor-pointer"
        >
          {data.button}
        </button>

        <p className="mt-4 text-[10px] text-neutral-400">
          비용이 발생하지 않습니다 · 출시 시 알림 문자 및 혜택 발송
        </p>
      </div>
    </section>
  );
}

