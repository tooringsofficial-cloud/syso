import type { CopyDataset } from "@/data/copyData";

interface CTAButtonProps {
  data: CopyDataset["cta"];
  onCtaClick: () => void;
}

export default function CTAButton({ data, onCtaClick }: CTAButtonProps) {
  return (
    <section className="px-4 sm:px-5 py-20 bg-gradient-to-b from-white via-[#F8F8FB] to-[#F8F8FB] w-full">
      <div className="max-w-md mx-auto text-center p-6 sm:p-8 rounded-[16px] bg-[#292541] text-white border border-[#292541]/10 shadow-premium shrink-0">
        {/* 제목 (clamp() 스케일 대응) */}
        <h2 className="text-section-title font-bold text-white mb-2.5 tracking-tight leading-snug text-keep-all px-2">
          {data.title}
        </h2>
        <p className="text-caption-custom text-neutral-300 mb-8 leading-relaxed max-w-xs mx-auto font-normal text-keep-all px-3">
          {data.desc}
        </p>

        {/* 가격 정보 (Coupon / Price Bar: 12px) */}
        <div className="mb-7 py-4.5 px-4 sm:px-6 rounded-[12px] bg-white/5 border border-white/10 flex flex-col items-center justify-center shrink-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap justify-center shrink-0 select-none">
            <span className="text-[10px] bg-[#D9B76A]/20 text-[#D9B76A] font-bold px-2 py-0.5 rounded-[12px] whitespace-nowrap">30% OFF</span>
            <span className="text-[10px] text-neutral-400 font-medium whitespace-nowrap">사전 예약 단독 혜택가</span>
          </div>
          <div className="flex items-baseline gap-2 shrink-0 flex-wrap justify-center">
            <span className="text-neutral-400 line-through text-xs font-normal whitespace-nowrap">{data.priceOriginal}</span>
            <span className="text-[#D9B76A] font-bold text-xl sm:text-2xl tracking-tight whitespace-nowrap">
              {data.pricePromo}
            </span>
          </div>
        </div>

        {/* CTA 버튼 - whitespace-nowrap으로 320px 모바일 화면에서도 버튼 텍스트 분리 방지 */}
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full py-4 rounded-[12px] bg-white text-[#292541] font-bold text-xs sm:text-sm md:text-base 
                     transition-all duration-200 active:scale-[0.98] hover:bg-[#F8F8FB]
                     shadow-[0_2px_8px_rgba(41,37,65,0.04)] cursor-pointer whitespace-nowrap"
        >
          {data.button}
        </button>

        <p className="mt-5 text-[10px] text-neutral-400 leading-normal font-normal text-keep-all select-none">
          *출시 시 혜택 확인용 번호로 알림 문자가 발송되며,<br />
          출시 전에는 어떠한 결제도 진행되지 않으니 안심하세요.
        </p>
      </div>
    </section>
  );
}
