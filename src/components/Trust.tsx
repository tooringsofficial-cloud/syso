"use client";

import Image from "next/image";

export default function Trust() {
  const credentials = [
    "서울대학교 약학과 구성원 참여",
    "차의과학대학교 약학과 구성원 참여",
    "중앙대학교 약학과 구성원 참여",
    "현직 약사 참여",
    "의사 검토 진행",
    "제조 예정 KOLMAR BNH"
  ];

  const logos = [
    { name: "서울대학교", src: "/images/logo_snu.png", width: 32 },
    { name: "차의과학대학교", src: "/images/logo_cha.png", width: 90 },
    { name: "중앙대학교", src: "/images/logo_cau.png", width: 85 },
    { name: "KOLMAR BNH", src: "/images/logo_kolmar.png", width: 110 }
  ];

  return (
    <section className="px-5 py-24 bg-white border-y border-neutral-200/50 w-full">
      <div className="max-w-md mx-auto md:max-w-2xl text-center">
        {/* 1. 브랜드 메시지 */}
        <span className="text-xs font-semibold tracking-wider text-[#292541]/70 uppercase block mb-3.5 select-none">
          TRUST & BELIEF
        </span>
        <h2 className="text-section-title font-bold text-[#111827] tracking-tight leading-snug text-keep-all px-2 mb-10">
          밤의 휴식과 다음 날 아침 컨디션은<br />
          하나의 흐름입니다.
        </h2>

        {/* 2. 크레덴셜 (텍스트 중심의 정갈한 신뢰 구조) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-16 text-left">
          {credentials.map((text, idx) => (
            <div 
              key={idx}
              className="py-3 px-4 bg-[#F8F8FB] border border-neutral-200/40 rounded-[12px] flex items-center gap-3 min-w-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#292541]/50 shrink-0" />
              <span className="text-caption-custom sm:text-13px font-bold text-[#111827] text-keep-all select-all">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* 3. 보조 로고 영역 (흰색 배경, 그림자 없음, 입체효과 없음, 동일 높이 정렬) */}
        <div className="bg-white border border-neutral-200/40 rounded-[16px] py-6 px-4.5 max-w-xl mx-auto select-none">
          <span className="text-[10px] font-bold text-[#6B7280] tracking-widest uppercase block mb-5">
            개발 참여 및 제조 협력 기관
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {logos.map((logo) => (
              <div 
                key={logo.name} 
                className="h-8 relative flex items-center justify-center shrink-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} 로고`}
                  width={logo.width}
                  height={32}
                  className="object-contain max-h-[26px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
