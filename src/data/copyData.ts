export interface CopyDataset {
  variant: string;
  variantLabel: string;
  hero: {
    main: string;
    sub: string;
    cta: string;
  };
  problem: {
    title: string;
    situations: {
      emoji: string;
      label: string;
      desc: string;
    }[];
  };
  desiredOutcome: {
    title: string;
    outcomes: {
      emoji: string;
      title: string;
      desc: string;
    }[];
  };
  concept: {
    title: string;
    desc: string;
    features: string[];
  };
  cta: {
    title: string;
    desc: string;
    button: string;
    priceOriginal: string;
    pricePromo: string;
  };
}

export const copyData: Record<string, CopyDataset> = {
  a: {
    variant: "a",
    variantLabel: "수면 중심",
    hero: {
      main: "내일이 중요한 밤,\n뒤척이고 싶지 않다면",
      sub: "자기 전 한 포. 편안한 밤을 위한 나이트 루틴 젤리.",
      cta: "출시 알림 받기",
    },
    problem: {
      title: "이런 밤, 있지 않았나요?",
      situations: [
        {
          emoji: "💼",
          label: "면접 전날",
          desc: "내일 면접인데 잠이 안 와서 뒤척이던 밤",
        },
        {
          emoji: "💑",
          label: "소개팅 전날",
          desc: "긴장돼서 새벽까지 폰만 보던 밤",
        },
        {
          emoji: "🎤",
          label: "발표 전날",
          desc: "내일 큰 발표인데 머릿속이 계속 돌아가는 밤",
        },
        {
          emoji: "📸",
          label: "촬영 전날",
          desc: "컨디션이 얼굴에 다 나올까봐 걱정되는 밤",
        },
        {
          emoji: "📝",
          label: "시험 전날",
          desc: "빨리 자야 하는데 오히려 눈이 말똥말똥한 밤",
        },
      ],
    },
    desiredOutcome: {
      title: "이런 아침을 원하지 않나요?",
      outcomes: [
        {
          emoji: "🌙",
          title: "편안한 밤",
          desc: "뒤척임 없이 푹 쉬는 밤 루틴",
        },
        {
          emoji: "😴",
          title: "깊은 휴식",
          desc: "자기 전 간단하게 한 포, 그게 전부",
        },
        {
          emoji: "☀️",
          title: "개운한 다음 날",
          desc: "아침에 눈 뜨는 게 가볍다는 느낌",
        },
      ],
    },
    concept: {
      title: "지금, 만들고 있습니다",
      desc: "밤 루틴에 하나만 더하면 되는 스틱젤리를 개발 중입니다. 가장 좋은 제형과 맛을 찾기 위해, 출시 전 실제 사용자 의견을 먼저 듣고 있습니다.",
      features: [
        "자기 전 간편하게 한 포",
        "식물 유래 원료 사용",
        "스틱젤리 타입으로 물 없이 섭취",
      ],
    },
    cta: {
      title: "출시되면 가장 먼저 알려드립니다",
      desc: "사전 신청하시면 출시 초기 프로모션 혜택을 안내해 드릴 예정입니다.",
      button: "출시 알림 받고 우선 구매하기",
      priceOriginal: "28,000원",
      pricePromo: "19,600원",
    },
  },

  b: {
    variant: "b",
    variantLabel: "붓기 중심",
    hero: {
      main: "중요한 날 아침,\n거울 보고 당황한 적 있다면",
      sub: "자기 전 한 포. 가벼운 아침을 위한 나이트 루틴 젤리.",
      cta: "출시 알림 받기",
    },
    problem: {
      title: "이런 아침, 있지 않았나요?",
      situations: [
        {
          emoji: "💼",
          label: "면접 아침",
          desc: "거울 보니 얼굴이 부어서 세수를 세 번이나 한 아침",
        },
        {
          emoji: "💑",
          label: "소개팅 아침",
          desc: "눈이 퉁퉁 부어서 선글라스 쓰고 나갈까 고민한 아침",
        },
        {
          emoji: "🎤",
          label: "발표 아침",
          desc: "얼굴 라인이 뭉툭해져서 자신감이 떨어지던 아침",
        },
        {
          emoji: "📸",
          label: "촬영 아침",
          desc: "어제 저녁 라면 하나에 얼굴이 달라져 있는 아침",
        },
        {
          emoji: "📝",
          label: "시험 아침",
          desc: "피곤한 게 얼굴에 그대로 드러난 아침",
        },
      ],
    },
    desiredOutcome: {
      title: "이런 아침을 원하지 않나요?",
      outcomes: [
        {
          emoji: "✨",
          title: "가벼운 아침",
          desc: "일어나자마자 느끼는 가벼운 라인",
        },
        {
          emoji: "💧",
          title: "걱정 없는 컨디션",
          desc: "거울 보고 당황하지 않는 아침",
        },
        {
          emoji: "💪",
          title: "중요한 날 자신감",
          desc: "얼굴 고민 없이 외출할 수 있는 여유",
        },
      ],
    },
    concept: {
      title: "지금, 만들고 있습니다",
      desc: "자기 전 한 포로 다음 날 아침을 준비하는 스틱젤리를 개발 중입니다. 실제 사용자의 고민에 맞는 제품을 만들기 위해, 출시 전 의견을 먼저 듣고 있습니다.",
      features: [
        "자기 전 간편하게 한 포",
        "식물 유래 원료 사용",
        "스틱젤리 타입으로 물 없이 섭취",
      ],
    },
    cta: {
      title: "출시되면 가장 먼저 알려드립니다",
      desc: "사전 신청하시면 출시 초기 프로모션 혜택을 안내해 드릴 예정입니다.",
      button: "출시 알림 받고 우선 구매하기",
      priceOriginal: "28,000원",
      pricePromo: "19,600원",
    },
  },

  ab: {
    variant: "ab",
    variantLabel: "수면 + 붓기 중심",
    hero: {
      main: "내일이 중요한 밤,\n푹 자고 가볍게 일어나고 싶다면",
      sub: "자기 전 한 포. 편안한 밤과 가벼운 아침을 위한 나이트 루틴 젤리.",
      cta: "출시 알림 받기",
    },
    problem: {
      title: "이런 경험, 있지 않았나요?",
      situations: [
        {
          emoji: "💼",
          label: "면접 전날 밤",
          desc: "긴장돼서 잠도 못 자고, 아침엔 얼굴이 부어 있던 날",
        },
        {
          emoji: "💑",
          label: "소개팅 전날 밤",
          desc: "뒤척이다 겨우 잠들었는데, 눈이 퉁퉁 부은 채 일어난 날",
        },
        {
          emoji: "🎤",
          label: "발표 전날 밤",
          desc: "머릿속이 복잡해서 새벽까지 깨어 있던 날",
        },
        {
          emoji: "📸",
          label: "촬영 전날 밤",
          desc: "컨디션 관리가 필요한데 마땅한 방법이 없던 날",
        },
        {
          emoji: "📝",
          label: "시험 전날 밤",
          desc: "빨리 자야 하는데 잠도 안 오고 아침 걱정까지 되는 날",
        },
      ],
    },
    desiredOutcome: {
      title: "이런 다음 날을 원하지 않나요?",
      outcomes: [
        {
          emoji: "🌙",
          title: "편안한 밤",
          desc: "뒤척임 없이 편안하게 쉬는 밤 루틴",
        },
        {
          emoji: "✨",
          title: "가벼운 아침",
          desc: "거울 보고 놀라지 않는 가벼운 라인",
        },
        {
          emoji: "🔥",
          title: "최상의 컨디션",
          desc: "중요한 날, 밤부터 아침까지 한 번에 관리",
        },
      ],
    },
    concept: {
      title: "지금, 만들고 있습니다",
      desc: "밤의 편안함과 아침의 가벼움, 둘 다 챙기는 스틱젤리를 개발 중입니다. 최적의 조합을 찾기 위해, 출시 전 실제 사용자 의견을 먼저 듣고 있습니다.",
      features: [
        "자기 전 간편하게 한 포",
        "식물 유래 원료 사용",
        "스틱젤리 타입으로 물 없이 섭취",
      ],
    },
    cta: {
      title: "출시되면 가장 먼저 알려드립니다",
      desc: "사전 신청하시면 출시 초기 프로모션 혜택을 안내해 드릴 예정입니다.",
      button: "출시 알림 받고 우선 구매하기",
      priceOriginal: "28,000원",
      pricePromo: "19,600원",
    },
  },
};
