import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  variant: string;
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ variant, data }: DesiredOutcomeProps) {
  // 아침 해를 받으며 기분 좋게 커튼을 여는 모델 컷
  const mainBannerSrc = "/images/lifestyle_morning_curtain.jpg";
  // 기지개를 켜며 가뿐하게 미소 짓는 모델 컷
  const sideImageSrc = "/images/lifestyle_morning_stretch.jpg";

  return (
    <section className="bg-white py-24 sm:py-32 w-full">
      {/* 1. Full-bleed 또는 최대 너비의 고품격 비주얼 배너 */}
      <div className="w-full max-w-5xl mx-auto px-6 mb-24">
        <div className="relative w-full max-w-[480px] mx-auto rounded-[24px] overflow-hidden bg-stone-100 shadow-sm" style={{ aspectRatio: "819/1024" }}>
          <Image
            src={mainBannerSrc}
            alt="Welcome Morning - Opening Curtains"
            fill
            priority
            className="object-cover"
          />
          {/* 부드러운 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-[#1F1F1F] leading-tight tracking-tight text-keep-all whitespace-pre-line px-2 font-sans">
            {data.title}
          </h2>
        </div>

        {/* 2열 레이아웃: 좌측에 텍스트 리스트, 우측에 가뿐한 기지개 모델 비주얼 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-4xl mx-auto">
          {/* 좌측 텍스트 리스트 */}
          <div className="flex-1 space-y-12">
            {data.outcomes.map((o, idx) => (
              <div
                key={o.title}
                className="flex flex-col items-start text-left"
              >
                {/* 심플 에디토리얼 번호 */}
                <span className="text-stone-300 font-bold text-3xl mb-3 select-none font-serif">
                  0{idx + 1}
                </span>

                {/* 핵심 문구 */}
                <h3 className="font-bold text-[#1F1F1F] text-lg leading-snug tracking-tight text-keep-all">
                  {o.title}
                </h3>

                {/* 상세 설명 */}
                <p className="text-stone-500 text-sm leading-relaxed mt-2.5 max-w-sm font-normal text-keep-all">
                  {o.desc}
                </p>

                {/* 하단 보조 비주얼 힌트 (미니멀 텍스트로 보조) */}
                {o.title.includes("밤") && (
                  <div className="mt-4 text-[11px] font-semibold text-stone-400 flex items-center gap-1.5 select-none">
                    <span className="w-1 h-1 rounded-full bg-[#D9B76A]" />
                    타트체리 식물성 멜라토닌 배합
                  </div>
                )}

                {(o.title.includes("아침") || o.title.includes("가벼운")) && (
                  <div className="mt-4 text-[11px] font-semibold text-stone-400 flex items-center gap-1.5 select-none">
                    <span className="w-1 h-1 rounded-full bg-[#D9B76A]" />
                    늙은 호박 추출물 배합
                  </div>
                )}

                {(o.title.includes("컨디션") || o.title.includes("휴식") || o.title.includes("자신감")) && (
                  <div className="mt-4 text-[11px] font-semibold text-stone-400 flex items-center gap-1.5 select-none">
                    <span className="w-1 h-1 rounded-full bg-[#D9B76A]" />
                    {variant === "a" ? "글루콘산 마그네슘 설계" : "전해질 균형 칼륨 배합"}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 우측 기지개 모델 비주얼 (세로형 aspect-[3/4] 대신 원본 종횡비 적용) */}
          <div className="w-full md:w-[45%] relative rounded-[24px] overflow-hidden bg-stone-50 shadow-sm border border-stone-200/20 shrink-0" style={{ aspectRatio: "803/1024" }}>
            <Image
              src={sideImageSrc}
              alt="가뿐한 아침 기지개"
              fill
              sizes="(max-w-768px) 100vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
