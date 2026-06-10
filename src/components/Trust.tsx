import Image from "next/image";

export default function Trust() {
  return (
    <section className="px-6 py-28 bg-white w-full border-t border-stone-100">
      <div className="max-w-3xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16 select-none">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#292541]/70 uppercase block mb-4">
            Q&A WITH RESEARCHERS
          </span>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#1F1F1F] tracking-tight leading-snug text-keep-all px-2 font-sans">
            성분과 안전성에 대해<br className="sm:hidden" /> 고객이 묻고 연구원이 답합니다.
          </h2>
          <p className="mt-4 text-xs text-stone-400 max-w-sm mx-auto font-normal text-keep-all">
            매일 밤 먹는 제품이기에, 타협 없는 안전성과 정직한 성분만을 담아 1:1 대화하듯 투명하게 설명해 드립니다.
          </p>
        </div>

        {/* 1:1 대화방 스레드 */}
        <div className="space-y-10 max-w-2xl mx-auto">
          {/* 문답 1 */}
          <div className="flex flex-col gap-3">
            {/* 질문 (우측 고객) */}
            <div className="flex justify-end w-full">
              <div className="max-w-[85%] bg-stone-100/80 text-stone-800 text-sm py-3 px-4.5 rounded-[20px] rounded-br-[4px] leading-relaxed text-keep-all shadow-sm">
                자기 전에 매일 밤 먹는 건데, 합성 호르몬이나 인공 첨가물로부터 안전한가요?
              </div>
            </div>
            {/* 답변 (좌측 연구원) */}
            <div className="flex justify-start w-full gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#292541] flex items-center justify-center shrink-0 text-white text-[10px] font-bold select-none shadow-sm">
                SYSO
              </div>
              <div className="max-w-[80%] bg-[#292541]/5 text-[#292541] border border-[#292541]/10 text-sm py-4 px-4.5 rounded-[20px] rounded-bl-[4px] leading-relaxed text-keep-all shadow-[0_2px_12px_rgba(41,37,65,0.02)]">
                <span className="font-semibold block mb-1">100% 식물 유래 안심 성분</span>
                그럼요. 브이 나잇은 매일 밤 안심하고 섭취할 수 있도록 화학 합성 멜라토닌 대신 타트체리에서 추출한 100% 식물 유래 멜라토닌만을 사용합니다. 또한 인공 감미료나 합성 착색료를 완전히 배제하여 체내 부담 없이 건강한 나이트 루틴을 만듭니다.
              </div>
            </div>
          </div>

          {/* 문답 2 */}
          <div className="flex flex-col gap-3">
            {/* 질문 (우측 고객) */}
            <div className="flex justify-end w-full">
              <div className="max-w-[85%] bg-stone-100/80 text-stone-800 text-sm py-3 px-4.5 rounded-[20px] rounded-br-[4px] leading-relaxed text-keep-all shadow-sm">
                식품안전인증이나 제조 생산 시설의 위생 상태는 믿을 수 있을까요?
              </div>
            </div>
            {/* 답변 (좌측 연구원) */}
            <div className="flex justify-start w-full gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#292541] flex items-center justify-center shrink-0 text-white text-[10px] font-bold select-none shadow-sm">
                SYSO
              </div>
              <div className="max-w-[80%] bg-[#292541]/5 text-[#292541] border border-[#292541]/10 text-sm py-4 px-4.5 rounded-[20px] rounded-bl-[4px] leading-relaxed text-keep-all shadow-[0_2px_12px_rgba(41,37,65,0.02)]">
                <span className="font-semibold block mb-1">식약처 인증 HACCP 및 GMP 동시 충족</span>
                안전과 위생은 결코 양보할 수 없는 철학입니다. 식품의약품안전처의 철저한 위생 감사를 통과하고 공인 인증을 획득한 HACCP(식품안전관리인증) 및 GMP(우수건강기능식품제조기준) 동시 인증 시설에서 전 공정이 설계 및 위생 생산됩니다.
                
                {/* 인증 마크 로고 배치 */}
                <div className="flex items-center gap-3 mt-3.5 pt-3 border-t border-[#292541]/10 select-none">
                  <div className="h-7 relative flex items-center justify-center bg-white rounded-md px-2 py-0.5 border border-stone-200/50 shadow-sm shrink-0">
                    <Image src="/images/logo_haccp.png" alt="HACCP 로고" width={18} height={18} className="object-contain" />
                    <span className="text-[9px] font-bold text-stone-500 ml-1.5">HACCP 인증</span>
                  </div>
                  <div className="h-7 relative flex items-center justify-center bg-white rounded-md px-2 py-0.5 border border-stone-200/50 shadow-sm shrink-0">
                    <Image src="/images/logo_gmp.jpg" alt="GMP 로고" width={18} height={18} className="object-contain" />
                    <span className="text-[9px] font-bold text-stone-500 ml-1.5">GMP 우수제조</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 문답 3 */}
          <div className="flex flex-col gap-3">
            {/* 질문 (우측 고객) */}
            <div className="flex justify-end w-full">
              <div className="max-w-[85%] bg-stone-100/80 text-stone-800 text-sm py-3 px-4.5 rounded-[20px] rounded-br-[4px] leading-relaxed text-keep-all shadow-sm">
                성분 설계나 약학적 공동 R&D 과정도 투명하게 공개되나요?
              </div>
            </div>
            {/* 답변 (좌측 연구원) */}
            <div className="flex justify-start w-full gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#292541] flex items-center justify-center shrink-0 text-white text-[10px] font-bold select-none shadow-sm">
                SYSO
              </div>
              <div className="max-w-[80%] bg-[#292541]/5 text-[#292541] border border-[#292541]/10 text-sm py-4 px-4.5 rounded-[20px] rounded-bl-[4px] leading-relaxed text-keep-all shadow-[0_2px_12px_rgba(41,37,65,0.02)]">
                <span className="font-semibold block mb-1">서울대·중앙대·차의과대 약학도들이 모여 만든 제품</span>
                네, 브이 나잇은 서울대학교, 중앙대학교, 차의과학대학교 약학과 사람들이 모여 연구하여 정성껏 개발한 제품입니다. 현직 약사가 설계부터 배합까지 성분을 직접 정밀 설계하고, 전문 의사가 한 번 더 꼼꼼하게 검수하여 신뢰성을 확보했습니다.
                
                {/* 대학 및 자격 로고 배치 */}
                <div className="flex flex-wrap items-center gap-2 mt-4 pt-3.5 border-t border-[#292541]/10 select-none">
                  <div className="h-7 relative flex items-center justify-center gap-1 bg-white rounded-md px-2 py-0.5 border border-stone-200/50 shadow-sm shrink-0">
                    <Image src="/images/logo_snu.png" alt="서울대학교 로고" width={14} height={14} className="object-contain grayscale" />
                    <span className="text-[9px] font-bold text-stone-500">서울대 약학과</span>
                  </div>
                  <div className="h-7 relative flex items-center justify-center gap-1 bg-white rounded-md px-2 py-0.5 border border-stone-200/50 shadow-sm shrink-0">
                    <Image src="/images/logo_cau.png" alt="중앙대학교 로고" width={32} height={10} className="object-contain grayscale" />
                    <span className="text-[9px] font-bold text-stone-500">중앙대 약학과</span>
                  </div>
                  <div className="h-7 relative flex items-center justify-center gap-1 bg-white rounded-md px-2 py-0.5 border border-stone-200/50 shadow-sm shrink-0">
                    <Image src="/images/logo_cha.png" alt="차의과학대학교 로고" width={32} height={10} className="object-contain grayscale" />
                    <span className="text-[9px] font-bold text-stone-500">차의과대 약학과</span>
                  </div>
                  <div className="h-7 relative flex items-center justify-center gap-1 bg-[#D9B76A]/10 rounded-md px-2 py-0.5 border border-[#D9B76A]/35 shadow-sm shrink-0">
                    <span className="text-[9px] font-bold text-[#292541]">약사 직접 배합</span>
                  </div>
                  <div className="h-7 relative flex items-center justify-center gap-1 bg-[#D9B76A]/10 rounded-md px-2 py-0.5 border border-[#D9B76A]/35 shadow-sm shrink-0">
                    <span className="text-[9px] font-bold text-[#292541]">의사 의학 검수</span>
                  </div>
                  <div className="h-7 relative flex items-center justify-center gap-1 bg-white rounded-md px-2 py-0.5 border border-stone-200/50 shadow-sm shrink-0">
                    <Image src="/images/logo_kolmar.png" alt="KOLMAR BNH 로고" width={36} height={8} className="object-contain grayscale" />
                    <span className="text-[9px] font-bold text-stone-500">KOLMAR 생산</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
