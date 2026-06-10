import type { CopyDataset } from "@/data/copyData";

interface CTAButtonProps {
  data: CopyDataset["cta"];
  onCtaClick: () => void;
}

export default function CTAButton({ data, onCtaClick }: CTAButtonProps) {
  return (
    <section className="px-5 py-20 bg-gradient-to-b from-white via-[#F8F8FB] to-[#F8F8FB]">
      <div className="max-w-md mx-auto text-center p-8 rounded-[16px] bg-[#292541] text-white border border-[#292541]/10 shadow-premium">
        <h2 className="text-xl font-bold text-white mb-2.5 md:text-2xl tracking-tight leading-snug">
          {data.title}
        </h2>
        <p className="text-xs text-neutral-300 mb-8 leading-relaxed max-w-xs mx-auto font-normal">
          {data.desc}
        </p>

        {/* 가격 정보 (Coupon / Price Bar: 12px) */}
        <div className="mb-7 py-4.5 px-6 rounded-[12px] bg-white/5 border border-white/10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] bg-[#D9B76A]/20 text-[#D9B76A] font-bold px-2 py-0.5 rounded-[12px]">30% OFF</span>
            <span className="text-[10px] text-neutral-400 font-medium">사전 예약 단독 혜택가</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-neutral-400 line-through text-xs font-normal">
              정가 {data.priceOriginal}
            </span>
            <span className="text-[#D9B76A] font-bold text-2xl tracking-tight">
              {data.pricePromo}
            </span>
          </div>
        </div>

        {/* CTA 버튼 (Button: 12px) */}
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full py-4 rounded-[12px] bg-white text-[#292541] font-bold text-sm sm:text-base 
                     transition-all duration-200 active:scale-[0.98] hover:bg-[#F8F8FB]
                     shadow-[0_2px_8px_rgba(41,37,65,0.04)] cursor-pointer"
        >
          {data.button}
        </button>

        <p className="mt-5 text-[10px] text-neutral-400 leading-normal font-normal">
          *출시 시 혜택 확인용 번호로 알림 문자가 발송되며,<br />
          출시 전에는 어떠한 결제도 진행되지 않으니 안심하세요.
        </p>
      </div>
    </section>
  );
}
