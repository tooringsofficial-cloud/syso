"use client";

import Link from "next/link";

interface HeaderProps {
  showCta?: boolean;
  onCtaClick?: () => void;
}

export default function Header({ showCta = true, onCtaClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-neutral-100 shadow-sm/5">
      <div className="max-w-md mx-auto px-5 h-14 flex items-center justify-between md:max-w-2xl">
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center">
          <span className="text-base font-black tracking-widest text-brand-primary uppercase transition-opacity hover:opacity-80">
            SYSO
          </span>
        </Link>

        {/* 미니 CTA 버튼 */}
        {showCta && onCtaClick && (
          <button
            type="button"
            onClick={onCtaClick}
            className="px-3.5 py-1.5 rounded-lg bg-brand-primary text-white text-[11px] font-bold
                       transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light hover:shadow-premium
                       shadow-[0_2px_8px_rgba(41,37,65,0.12)] cursor-pointer"
          >
            알림 신청하기
          </button>
        )}
      </div>
    </header>
  );
}

