import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface ProblemProps {
  data: CopyDataset["problem"];
  variant?: string;
}

export default function Problem({ data, variant }: ProblemProps) {
  // 거대하고 감성적인 질문 문구 정의
  const bigQuestion = variant === "a"
    ? "중요한 날을 앞둔 당신의 밤은\n정말 안녕한가요?"
    : variant === "b"
    ? "중요한 날을 앞둔 당신의 아침은\n정말 가벼운가요?"
    : "중요한 날을 앞둔 당신의 밤과 아침,\n모두 안녕한가요?";

  const subCopy = variant === "a"
    ? "수없이 뒤척이며 채워지지 않는 밤의 휴식,\n이제는 달라져야 합니다."
    : variant === "b"
    ? "눈뜨자마자 당황하며 거울을 보는 아침의 무거움,\n이제는 달라져야 합니다."
    : "설레는 마음 뒤에 찾아오는 뒤척이는 밤과 아침의 무거움,\n이제는 달라져야 합니다.";

  return (
    <section className="px-6 py-28 sm:py-36 bg-[#292541] text-white relative w-full flex flex-col items-center">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* 거대하고 감성적인 질문 */}
        <h2 className="text-[28px] sm:text-[38px] font-bold text-white leading-tight tracking-tight text-keep-all whitespace-pre-line mb-8">
          {bigQuestion}
        </h2>

        {/* 설명 카피 */}
        <p className="text-sm sm:text-base text-[#D1D1D6] leading-relaxed font-normal text-keep-all whitespace-pre-line mb-16 max-w-xl px-2">
          {subCopy}
        </p>

        {/* 대형 밤샘 고민 비주얼 */}
        <div className="w-full max-w-[480px] aspect-[3/4] sm:aspect-[4/3] relative rounded-[24px] overflow-hidden bg-neutral-900 shadow-2xl shrink-0">
          <Image
            src="/images/lifestyle_desk_work.jpg"
            alt="밤샘 작업 중인 고민"
            fill
            sizes="(max-w-768px) 100vw, 480px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-6 right-6 text-left">
            <span className="text-[9px] text-[#D9B76A] font-bold tracking-widest font-sans uppercase">
              V NIGHT INSIGHT
            </span>
            <p className="text-[10px] text-white/50 tracking-tight leading-normal font-normal text-keep-all mt-1.5 select-none">
              *사전 FGI 및 설문조사 시 소비자들이 가장 많이 토로했던 실제 고민 사례들을 기반으로 제작되었습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
