"use client";

interface RecommendProps {
  variant: string;
}

export default function Recommend({ variant }: RecommendProps) {
  const recommendationsA = [
    {
      emoji: "🌙",
      text: "중요한 날을 앞두고 생각이 많아 밤늦게까지 뒤척이시는 분",
    },
    {
      emoji: "📱",
      text: "늦은 밤까지 침대에서 스마트폰을 보며 뒤척임이 잦으신 분",
    },
    {
      emoji: "🥱",
      text: "자고 일어나도 개운하지 않고 아침이 무겁게 느껴지시는 분",
    },
    {
      emoji: "🌿",
      text: "인위적인 원료 걱정 없이 매일 안심하고 챙기는 식물 유래 밤 루틴을 원하시는 분",
    },
    {
      emoji: "🍒",
      text: "정제 타입 영양제 대신 맛있고 부드럽게 섭취하는 나이트 케어를 찾으시는 분",
    },
  ];

  const recommendationsB = [
    {
      emoji: "💼",
      text: "소개팅, 면접, 촬영, 여행 전날 밤 아침 거울이 걱정되시는 분",
    },
    {
      emoji: "🌶️",
      text: "늦은 시간 야식을 즐기거나 맵고 짠 자극적인 음식을 좋아하시는 분",
    },
    {
      emoji: "🥱",
      text: "아침에 눈을 뜨면 얼굴 and 몸의 라인이 무겁고 둔하게 느껴지시는 분",
    },
    {
      emoji: "💧",
      text: "야식을 먹은 뒤나 짠 음식을 먹은 날 밤, 가뿐한 아침 컨디션을 원하시는 분",
    },
    {
      emoji: "🍒",
      text: "물 없이도 상큼하게 씹어서 가볍게 시작하는 젤리 루틴을 찾으시는 분",
    },
  ];

  const recommendationsAB = [
    {
      emoji: "🌙",
      text: "중요한 날 전날 밤의 뒤척임과 다음 날 아침의 무거움이 동시에 걱정되시는 분",
    },
    {
      emoji: "☀️",
      text: "하루를 마무리하는 시간은 편안하게, 아침은 가볍고 개운하게 시작하고 싶으신 분",
    },
    {
      emoji: "🔄",
      text: "여러 개 챙길 필요 없이, 밤 루틴과 아침 컨디션을 한 번에 관리하고 싶으신 분",
    },
    {
      emoji: "📦",
      text: "여러 영양제를 챙길 필요 없이 한 포로 끝내는 완벽한 나이트-투-모닝 케어를 찾으시는 분",
    },
    {
      emoji: "🍒",
      text: "맛과 기능, 성분의 안전성까지 타협 없이 설계된 프리미엄 스틱 젤리를 원하시는 분",
    },
  ];

  const recommendations = variant === "a" 
    ? recommendationsA 
    : variant === "b" 
      ? recommendationsB 
      : recommendationsAB;

  return (
    <section className="px-6 py-24 bg-white w-full">
      <div className="max-w-2xl mx-auto">
        {/* 섹션 서브 타이틀 */}
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#292541] uppercase text-center block mb-4 select-none font-sans">
          RECOMMENDATION
        </span>
        {/* 섹션 타이틀 */}
        <h2 className="text-[24px] sm:text-[30px] font-bold text-[#1F1F1F] text-center mb-4 tracking-tight leading-snug text-keep-all px-2">
          이런 분들께 추천합니다
        </h2>
        {/* 세부 캡션 */}
        <p className="text-sm text-stone-400 text-center mb-16 leading-relaxed max-w-sm mx-auto font-normal text-keep-all px-4">
          하나라도 해당된다면, 오늘 밤부터 시작해 보세요.<br />
          밤의 휴식과 아침의 가벼움을 동시에 선물합니다.
        </p>

        {/* 미니멀 체크리스트 (테두리/배경색 지움) */}
        <div className="space-y-6 max-w-xl mx-auto">
          {recommendations.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 py-2 px-2"
            >
              {/* 심플 체크 아이콘 */}
              <span className="text-[#D9B76A] text-lg font-bold shrink-0 pt-0.5 select-none">
                ✓
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed font-normal text-keep-all">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
