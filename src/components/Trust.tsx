"use client";

export default function Trust() {
  const credentials = [
    { text: "서울대학교 약학대학 출신 참여", icon: "🎓" },
    { text: "차의과학대학교 약학대학 출신 참여", icon: "🎓" },
    { text: "중앙대학교 약학대학 출신 참여", icon: "🎓" },
    { text: "현직 약사 참여 · 의료진 검토 진행", icon: "🩺" },
  ];

  return (
    <section className="px-6 py-20 bg-white border-y border-neutral-100/40">
      <div className="max-w-md mx-auto md:max-w-2xl text-center">
        {/* 섹션 서브 타이틀 */}
        <span className="text-[10px] font-black tracking-widest text-brand-primary uppercase block mb-3">
          OUR EXPERTISE
        </span>
        {/* 섹션 대제목 */}
        <h2 className="text-xl font-black text-neutral-900 mb-10 md:text-2xl tracking-tight leading-snug">
          왜 SYSO가 만들고 있을까요?
        </h2>

        {/* 브랜드 제품 철학 설명 블록 (SaaS형 테두리 카드 박스 전면 제거) */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <p className="text-base sm:text-lg font-black text-neutral-950 leading-relaxed max-w-md mx-auto whitespace-pre-line">
            &ldquo;밤의 휴식과 다음 날 아침 컨디션은<br />
            사실 하나의 연결된 흐름입니다.&rdquo;
          </p>
          
          <div className="w-8 h-[1px] bg-brand-primary/15 mx-auto my-6" />

          <p className="text-xs text-neutral-500 leading-relaxed max-w-md mx-auto whitespace-pre-line">
            그래서 SYSO는 밤과 아침을 동시에 생각하여 설계한 V Night를 만들고 있습니다.
            {"\n\n"}
            약학 기반의 개발팀이 참여하여 밤의 릴렉싱 루틴과 아침의 개운한 컨디션을 깊이 있게 분석했으며, 일상 속에서 과장 없이 정직하게 매일 챙길 수 있는 안심 제품을 완성해 나갑니다.
          </p>
        </div>

        {/* 크레덴셜 한 줄 플로우 배너 (SaaS 카드 뱃지 그리드 탈피) */}
        <div className="py-5 px-6 rounded-2xl bg-brand-surface border border-neutral-200/40 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5 text-xs sm:text-[13px] font-extrabold text-neutral-850 tracking-tight">
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
