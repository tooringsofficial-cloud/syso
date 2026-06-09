"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border border-neutral-200/30 px-4 py-1.5 my-2.5 rounded-xl transition-all duration-300 ease-in-out
                 ${isOpen ? "bg-brand-surface/60 border-brand-primary/10 shadow-sm" : "bg-neutral-50/50 hover:bg-neutral-50"}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-semibold text-neutral-800 text-sm md:text-base cursor-pointer select-none"
      >
        <span className={`transition-colors duration-200 ${isOpen ? "text-brand-primary font-bold" : "text-neutral-800"}`}>
          {question}
        </span>
        <span 
          className={`text-brand-primary font-bold text-lg transition-transform duration-300 transform shrink-0 ml-4
                     ${isOpen ? "rotate-45 scale-110" : "rotate-0"}`}
        >
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out
                   ${isOpen ? "max-h-40 opacity-100 pb-3" : "max-h-0 opacity-0"}`}
      >
        <p className="text-xs text-neutral-500 leading-relaxed pr-4 pt-1">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "언제 출시 예정인가요?",
      answer: "현재 제품 개발 최종 마무리 단계로, 올해 하반기 출시를 목표로 준비하고 있습니다. 사전 예약을 해주신 분들께 출시 일정이 확정되는 즉시 가장 먼저 연락을 드릴 예정입니다.",
    },
    {
      question: "현재 판매 중인 제품인가요?",
      answer: "아니요, 현재 실제 판매는 이루어지지 않고 있습니다. 본 페이지는 출시 전 최종 선호도 조사와 실제 소비자 피드백을 반영하여 가장 만족스러운 레시피와 스펙으로 제품을 완성하기 위한 사전 안내 페이지입니다.",
    },
    {
      question: "알림 신청 시 별도의 비용이 발생하나요?",
      answer: "아니요, 전혀 발생하지 않습니다. 출시 알림 및 선런칭 프로모션 혜택을 무료로 전달받기 위한 이메일/휴대폰 알림 등록이며, 결제 및 어떠한 비용 청구도 이루어지지 않습니다.",
    },
    {
      question: "남겨주신 연락처는 어떻게 활용되나요?",
      answer: "작성해주신 정보는 출시 초기 안내 및 할인 프로모션 혜택 발송 목적 외에는 절대로 사용되지 않으며, 개인정보처리방침에 의거하여 안전하게 보관된 후 목적 달성 즉시 파기됩니다.",
    },
  ];

  return (
    <section className="px-5 py-16 bg-white">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <span className="text-xs font-semibold tracking-wider text-brand-primary uppercase text-center block mb-2">
          FAQ
        </span>
        <h2 className="text-xl font-extrabold text-neutral-900 text-center mb-8 md:text-3xl tracking-tight">
          자주 묻는 질문
        </h2>

        <div className="space-y-1">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

