"use client";

export default function Trust() {
  const credentials = [
    { text: "서울대학교 약학과 구성원 참여", icon: "🎓" },
    { text: "차의과학대학교 약학과 구성원 참여", icon: "🎓" },
    { text: "중앙대학교 약학과 구성원 참여", icon: "🎓" },
    { text: "현직 약사 참여", icon: "🩺" },
    { text: "의사 검토 진행", icon: "🩺" },
    { text: "제조 예정 KOLMAR BNH", icon: "🏭" },
  ];

  return (
    <section className="px-6 py-24 bg-white border-y border-neutral-200/50">
      <div className="max-w-md mx-auto md:max-w-2xl text-center">
        {/* 섹션 서브 타이틀 */}
        <span className="text-xs font-semibold tracking-wider text-[#292541] uppercase block mb-3">
          OUR EXPERTISE
        </span>
        {/* 섹션 대제목 (Section Title: 22~24px, Weight 600) */}
        <h2 className="text-22px md:text-24px font-semibold text-[#111827] mb-12 tracking-tight leading-snug">
          왜 SYSO가 만들고 있을까요?
        </h2>

        {/* 브랜드 제품 철학 설명 블록 (SaaS형 테두리 카드 박스 전면 제거) */}
        <div className="max-w-xl mx-auto text-center mb-12">
          {/* 철학 메시지 (Body: 15~16px, Weight 700) */}
          <p className="text-15px sm:text-16px font-bold text-[#111827] leading-relaxed max-w-md mx-auto whitespace-pre-line">
            &ldquo;밤의 휴식과 다음 날 아침 컨디션은<br />
            사실 하나의 연결된 흐름입니다.&rdquo;
          </p>
          
          {/* 가느다란 브랜드 가로선 */}
          <div className="w-8 h-[1px] bg-[#292541]/15 mx-auto my-7" />

          {/* 브랜드 본문 설명 (Body: 15~16px, Weight 400~500) */}
          <p className="text-14px sm:text-15px font-medium text-[#6B7280] leading-relaxed max-w-md mx-auto whitespace-pre-line">
            그래서 SYSO는 밤과 아침을 동시에 생각하여 설계한 V Night를 만들고 있습니다.
            {"\n\n"}
            약학 기반의 개발팀이 참여하여 밤의 릴렉싱 루틴과 아침의 개운한 컨디션을 깊이 있게 분석했으며, 일상 속에서 과장 없이 정직하게 매일 챙길 수 있는 안심 제품을 완성해 나갑니다.
          </p>
        </div>

        {/* 크레덴셜 한 줄 플로우 배너 (SaaS 카드 뱃지 그리드 탈피 - Card: 12~16px, Shadow: D2C 표준) */}
        <div className="py-6 px-6 rounded-[16px] bg-[#F8F8FB] border border-neutral-200/40 text-center shadow-premium">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-xs sm:text-13px font-semibold text-[#111827] tracking-tight">
            {credentials.map((cred, idx) => (
              <span key={cred.text} className="flex items-center gap-2">
                <span className="text-base">{cred.icon}</span>
                <span>{cred.text}</span>
                {idx < credentials.length - 1 && (
                  <span className="hidden sm:inline text-neutral-300 font-normal ml-4">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
