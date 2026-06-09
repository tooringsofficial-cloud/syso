"use client";

export default function Recommend() {
  const recommendations = [
    {
      emoji: "🌙",
      text: "중요한 일정을 앞두고 긴장감으로 인해 밤마다 쉽게 잠들지 못하고 뒤척이시는 분",
    },
    {
      emoji: "🍊",
      text: "늦은 시간 야식이나 맵고 짠 음식을 먹은 다음 날 아침 거울 앞이 걱정되시는 분",
    },
    {
      emoji: "☕",
      text: "아침에 알람 소리에 눈을 떠도 개운하지 않고 몸이 천근만근 무겁게 느껴지시는 분",
    },
    {
      emoji: "🌿",
      text: "바쁜 일상 속에서 인공 원료 없이 매일 안심하고 먹을 수 있는 식물 유래 루틴을 원하시는 분",
    },
    {
      emoji: "🍒",
      text: "삼키기 힘든 정제 대신 언제 어디서나 맛있고 탱글하게 먹을 수 있는 젤리 영양식을 찾으시는 분",
    },
  ];

  return (
    <section className="px-5 py-16 bg-white">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <span className="text-xs font-semibold tracking-wider text-brand-primary uppercase text-center block mb-2">
          Recommended For
        </span>
        <h2 className="text-xl font-extrabold text-neutral-900 text-center mb-3 md:text-3xl tracking-tight">
          이런 분들께 V Night를 추천합니다
        </h2>
        <p className="text-xs text-neutral-500 text-center mb-10 leading-relaxed max-w-sm mx-auto">
          하나라도 해당된다면, 오늘 밤부터 가벼운 아침을 위한<br />
          SYSO V Night 나이트 루틴을 시작할 때입니다.
        </p>

        <div className="space-y-3">
          {recommendations.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-neutral-50/50 border border-neutral-200/40 shadow-sm flex items-start gap-4 card-hover-effect"
            >
              <span 
                className="w-10 h-10 rounded-full bg-white text-2xl flex items-center justify-center shrink-0 border border-neutral-100 shadow-sm"
                role="img"
                aria-label="recommendation item"
              >
                {item.emoji}
              </span>
              <div className="flex-1 pt-1.5">
                <p className="text-xs sm:text-sm font-semibold text-neutral-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <span className="text-brand-primary font-bold text-base shrink-0 pt-1">✓</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
