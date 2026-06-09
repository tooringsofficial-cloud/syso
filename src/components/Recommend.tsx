"use client";

interface RecommendProps {
  variant: string;
}

export default function Recommend({ variant }: RecommendProps) {
  const recommendationsA = [
    {
      emoji: "🌙",
      text: "중요한 시험이나 발표 전날 밤, 머릿속이 복잡해 잠들기 어려우신 분",
    },
    {
      emoji: "📱",
      text: "늦은 밤까지 침대에서 스마트폰을 보며 뒤척임이 잦으신 분",
    },
    {
      emoji: "🥱",
      text: "아침에 일어나도 깊은 잠을 자지 못한 듯 몸이 무거우신 분",
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
      text: "아침에 눈을 뜨면 얼굴과 몸의 라인이 무겁고 둔하게 느껴지시는 분",
    },
    {
      emoji: "💧",
      text: "나트륨 배출과 일상적인 체내 수분/전해질 균형 관리가 필요하신 분",
    },
    {
      emoji: "🍒",
      text: "물 없이도 상큼하게 씹어서 가볍게 시작하는 젤리 루틴을 찾으시는 분",
    },
  ];

  const recommendationsAB = [
    {
      emoji: "🌙",
      text: "중요한 날을 앞두고 잠자리 뒤척임과 다음 날 아침의 붓기가 동시에 고민되시는 분",
    },
    {
      emoji: "☀️",
      text: "바쁜 하루 끝에는 편안하게 잠들고, 아침에는 가벼운 라인으로 시작하고 싶으신 분",
    },
    {
      emoji: "🔄",
      text: "자는 동안 이루어지는 밤(릴렉스)과 아침(순환)의 유기적인 올인원 관리를 원하시는 분",
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
    <section className="px-5 py-16 bg-white">
      <div className="max-w-md mx-auto md:max-w-xl">
        <h2 className="text-xl font-black text-neutral-900 text-center mb-3 md:text-3xl tracking-tight leading-snug">
          이런 분들께 V Night를 추천합니다
        </h2>
        <p className="text-xs text-neutral-400 text-center mb-10 leading-relaxed max-w-xs mx-auto">
          하나라도 해당된다면, 오늘 밤부터 가벼운 아침을 위한<br />
          SYSO V Night 나이트 루틴을 시작할 때입니다.
        </p>

        {/* 매거진 레이아웃 스타일의 슬림 체크리스트 */}
        <div className="border-t border-neutral-100 divide-y divide-neutral-100">
          {recommendations.map((item, idx) => (
            <div
              key={idx}
              className="py-4.5 flex items-start gap-4 transition-colors duration-200 hover:bg-neutral-50/40 px-2 rounded-lg"
            >
              <span 
                className="text-lg shrink-0 pt-0.5"
                role="img"
                aria-label="recommendation emoji"
              >
                {item.emoji}
              </span>
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-bold text-neutral-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <span className="text-brand-primary font-black text-base shrink-0 pt-0.5">✓</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


