import Image from "next/image";
import type { CopyDataset } from "@/data/copyData";

interface ConceptProps {
  data: CopyDataset["concept"];
  variant: string;
}

export default function Concept({ data, variant }: ConceptProps) {
  return (
    <section className="bg-[#FAF9F5] py-24 sm:py-32 w-full border-t border-stone-200/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* 1. 브랜드 철학 편지글 (Brand Letter) */}
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-[24px] border border-stone-200/40 shadow-sm mb-20 text-left">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D9B76A] uppercase block mb-6 select-none font-sans">
            OUR SINCERITY
          </span>
          <h3 className="font-bold text-[#1F1F1F] text-xl sm:text-2xl mb-6 leading-snug text-keep-all font-sans">
            가장 순수한 자연에서 찾은<br />
            내일의 가능성을 위하여
          </h3>

          {/* Brand Identity Board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 border-b border-stone-100 pb-8 mb-8 text-xs font-sans">
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1 select-none">Brand Name</span>
              <span className="font-bold text-[#292541] text-sm">SYSO</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1 select-none">Slogan</span>
              <span className="font-semibold text-stone-600">Science, Yet So Organic</span>
            </div>
            <div className="sm:col-span-2">
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1 select-none">Brand Statement</span>
              <span className="font-semibold text-stone-600">Evidence-based wellness, rooted in nature.</span>
            </div>
            <div className="sm:col-span-2">
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1 select-none">Mission</span>
              <span className="font-semibold text-stone-600">Bring scientific wellness into everyday life.</span>
            </div>
          </div>
          <div className="space-y-6 text-stone-500 text-sm leading-relaxed font-normal text-keep-all">
            <p>
              안녕하세요, SYSO 기획팀입니다. V Night는 &ldquo;어떻게 하면 다음 날 가장 개운하고 산뜻한 모습으로 일상을 시작할 수 있을까?&rdquo;라는 질문에서 시작되었습니다.
            </p>
            <p>
              저희는 수많은 논문과 데이터를 검토하며, 밤의 편안한 휴식과 아침의 가벼운 시작이 완전히 하나로 연결된 일상의 흐름이라는 사실을 깨달았습니다. 밤샘 공부나 늦은 야식, 짠 음식에 힘들어하는 현대인들에게는 각각의 영양제를 먹는 복잡함보다, 하루 끝에 단 한 포로 밤과 아침을 모두 케어하는 직관적인 루틴이 필요하다고 믿었습니다.
            </p>
            <p>
              그렇기에 합성 원료의 자극 없이 매일 먹어도 안심할 수 있는 타트체리 추출 식물 유래 멜라토닌과 국산 늙은 호박, 그리고 긴장을 덜어주는 마그네슘과 전해질 칼륨을 정밀하게 설계하여 한 포의 스틱 젤리로 빚어냈습니다.
            </p>
            <p>
              우리의 진심이 매일 밤 머리맡에서, 그리고 눈뜨는 아침의 가벼운 거울 속에서 당신에게 가닿기를 소망합니다.
            </p>
            <p className="pt-4 text-right text-stone-700 font-semibold select-none font-sans">
              &mdash; SYSO 제품 연구 및 기획 개발팀 드림
            </p>
          </div>
        </div>

        {/* 2. 대형 R&D 비주얼 (lab_science.jpg) */}
        <div className="w-full max-w-3xl mx-auto mb-16 relative aspect-[1.8] rounded-[24px] overflow-hidden bg-stone-50 shrink-0 shadow-sm border border-stone-200/20">
          <Image
            src="/images/lab_science.jpg"
            alt="Scientific Development"
            fill
            sizes="(max-w-768px) 100vw, 768px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <span className="text-[9px] sm:text-[10px] bg-white/20 text-white font-bold px-3 py-1 rounded-full backdrop-blur-sm tracking-wider uppercase whitespace-nowrap font-sans">
              R&D PROCESS
            </span>
          </div>
        </div>

        {/* 3. 브랜드 3대 원칙 (텍스트 다이어트 50%) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 max-w-3xl mx-auto pt-8">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[#D9B76A] mb-3 font-serif">01</span>
            <h4 className="font-bold text-[#1F1F1F] text-sm mb-2 font-sans">100% 식물 유래 원료</h4>
            <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed font-normal text-keep-all">
              인위적인 합성 원료를 배제하고 자연 유래 식물성 원료 배합을 기본으로 안전하게 설계합니다.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[#D9B76A] mb-3 font-serif">02</span>
            <h4 className="font-bold text-[#1F1F1F] text-sm mb-2 font-sans">함량 투명 공개</h4>
            <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed font-normal text-keep-all">
              모든 주원료와 부원료의 함량을 투명하게 명시하여 고객이 언제나 안심하고 신뢰할 수 있습니다.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[#D9B76A] mb-3 font-serif">03</span>
            <h4 className="font-bold text-[#1F1F1F] text-sm mb-2 font-sans">검증된 위생 생산</h4>
            <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed font-normal text-keep-all">
              HACCP 및 GMP 인증을 획득한 국내 우수 전문 시설 매칭을 완료하여 철저한 위생 관리에 따라 생산을 진행합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
