"use client";

export default function Trust() {
  const credentials = [
    { text: "서울대학교 약학대학 출신 참여", icon: "🎓" },
    { text: "차의과학대학교 약학대학 출신 참여", icon: "🎓" },
    { text: "중앙대학교 약학대학 출신 참여", icon: "🎓" },
    { text: "현직 약사 참여 · 의료진 검토 진행", icon: "🩺" },
  ];

  return (
    <section className="px-5 py-16 bg-warm-cream">
      <div className="max-w-md mx-auto md:max-w-2xl">
        {/* 섹션 대제목 */}
        <h2 className="text-xl font-black text-neutral-900 text-center mb-8 md:text-3xl tracking-tight leading-snug">
          왜 SYSO가 만들고 있을까요?
        </h2>

        {/* 브랜드 제품 철학 설명 블록 */}
        <div className="mb-8 p-6.5 rounded-2xl bg-white border border-neutral-100 shadow-sm text-center">
          <p className="text-sm sm:text-base font-extrabold text-neutral-950 leading-relaxed max-w-md mx-auto whitespace-pre-line">
            &ldquo;밤의 휴식과 다음 날 아침 컨디션은<br />
            사실 하나의 연결된 흐름입니다.&rdquo;
          </p>
          <p className="text-xs text-neutral-500 leading-relaxed mt-4 max-w-md mx-auto whitespace-pre-line">
            그래서 SYSO는 밤과 아침을 동시에 생각하여 설계한 V Night를 만들고 있습니다.
            {"\n\n"}
            약학 기반의 개발팀이 참여하여 밤의 릴렉싱 루틴과 아침의 개운한 컨디션을 깊이 있게 분석했으며, 일상 속에서 과장 없이 정직하게 매일 챙길 수 있는 안심 제품을 완성해 나갑니다.
          </p>
        </div>

        {/* 크레덴셜 카드 뱃지 그리드 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {credentials.map((cred) => (
            <div
              key={cred.text}
              className="py-3 px-4.5 rounded-xl bg-white border border-neutral-100/60 shadow-sm/5 flex items-center gap-3"
            >
              <span className="w-7 h-7 rounded-full bg-brand-surface text-base flex items-center justify-center shrink-0 border border-brand-primary/5">
                {cred.icon}
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-neutral-800 tracking-tight">
                {cred.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
