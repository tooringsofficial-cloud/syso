"use client";

import Image from "next/image";

export default function Trust() {
  const credentials = [
    { text: "제조 예정 KOLMAR BNH", logo: "/images/logo_kolmar.png", width: 80, height: 20 },
    { text: "식품안전관리인증", subtext: "HACCP 인증 시설 제조", logo: "/images/logo_haccp.png", width: 30, height: 30 },
    { text: "우수건강기능식품 제조기준", subtext: "GMP 인증 시설 제조", logo: "/images/logo_gmp.jpg", width: 30, height: 30 },
    { text: "현직 약사 참여" },
    { text: "의사 검토 진행" },
    { text: "대학 연구진 참여" }
  ];

  const logos = [
    { name: "서울대학교", src: "/images/logo_snu.png", width: 28 },
    { name: "차의과학대학교", src: "/images/logo_cha.png", width: 75 },
    { name: "중앙대학교", src: "/images/logo_cau.png", width: 70 },
    { name: "KOLMAR BNH", src: "/images/logo_kolmar.png", width: 95 },
    { name: "HACCP", src: "/images/logo_haccp.png", width: 28 },
    { name: "GMP", src: "/images/logo_gmp.jpg", width: 28 }
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

        {/* 2. 크레덴셜 (텍스트 + 로고/도트 조합의 정갈한 신뢰 구조) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-16 text-left">
          {credentials.map((item, idx) => (
            <div 
              key={idx}
              className="py-3.5 px-4 bg-[#F8F8FB] border border-neutral-200/40 rounded-[12px] flex items-center gap-4.5 min-w-0"
            >
              {item.logo ? (
                /* 로고가 함께 들어가는 크레덴셜 */
                <div className="w-10 h-10 rounded-[8px] bg-white border border-neutral-200/40 flex items-center justify-center shrink-0 p-1 select-none">
                  <Image
                    src={item.logo}
                    alt={item.text}
                    width={item.width}
                    height={item.height}
                    className="object-contain max-h-[32px] w-auto"
                  />
                </div>
              ) : (
                /* 미니멀한 도트 서포트 */
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#292541]/40 shrink-0" />
                </div>
              )}

              <div className="min-w-0 flex-1 flex flex-col justify-center">
                <span className="text-caption-custom sm:text-13px font-bold text-[#111827] text-keep-all select-all leading-tight">
                  {item.text}
                </span>
                {item.subtext && (
                  <span className="text-[10px] font-semibold text-[#6B7280] mt-1 whitespace-nowrap">
                    {item.subtext}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. 보조 로고 영역 (흰색 배경, 그림자 없음, 입체효과 없음, 동일 높이 정렬) */}
        <div className="bg-white border border-neutral-200/40 rounded-[16px] py-6 px-4.5 max-w-xl mx-auto select-none">
          <span className="text-[10px] font-bold text-[#6B7280] tracking-widest uppercase block mb-5">
            개발 참여 및 제조 협력 기관
          </span>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
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
                  className="object-contain max-h-[24px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
