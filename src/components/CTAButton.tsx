import type { CopyDataset } from "@/data/copyData";

interface CTAButtonProps {
  data: CopyDataset["cta"];
  onCtaClick: () => void;
}

export default function CTAButton({ data, onCtaClick }: CTAButtonProps) {
  return (
    <section className="px-5 py-16 bg-gradient-to-b from-white via-neutral-50/50 to-warm-cream">
      <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-brand-dark text-white border border-brand-primary/10 shadow-premium-lg">
        <h2 className="text-xl font-black text-white mb-2 md:text-2xl tracking-tight leading-snug">
          {data.title}
        </h2>
        <p className="text-xs text-neutral-300 mb-8 leading-relaxed max-w-xs mx-auto">
          {data.desc}
        </p>

        {/* 가격 정보 */}
        <div className="mb-6 py-4.5 px-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[10px] bg-brand-accent/20 text-brand-accent font-bold px-1.5 py-0.2 rounded">30% OFF</span>
            <span className="text-[10px] text-neutral-400 font-medium">사전 예약 단독 혜택가</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-neutral-400 line-through text-xs font-medium">
              정가 {data.priceOriginal}
            </span>
            <span className="text-brand-accent font-black text-2xl tracking-tight">
              {data.pricePromo}
            </span>
          </div>
        </div>

        {/* CTA 버튼 */}
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full py-4 rounded-xl bg-brand-primary text-white font-bold text-sm sm:text-base 
                     transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium-lg
                     shadow-[0_8px_20px_rgba(79,70,229,0.3)] cursor-pointer"
        >
          {data.button}
        </button>

        <p className="mt-4.5 text-[10px] text-neutral-400 leading-normal">
          *출시 시 혜택 확인용 번호로 알림 문자가 발송되며,<br />
          출시 전에는 어떠한 결제도 진행되지 않으니 안심하세요.
        </p>
      </div>
    </section>
  );
}


