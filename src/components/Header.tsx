"use client";

import Link from "next/link";

interface HeaderProps {
  showCta?: boolean;
  onCtaClick?: () => void;
  variant?: string;
}

export default function Header({ showCta = true, onCtaClick, variant }: HeaderProps) {
  const logoHref = variant && variant !== "unknown" ? `/${variant}` : "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-md mx-auto px-5 h-14 flex items-center justify-between md:max-w-2xl">
        {/* 로고 영역 */}
        <Link href={logoHref} className="flex items-center">
          <span className="text-base font-bold tracking-widest text-[#292541] uppercase transition-opacity hover:opacity-80">
            SYSO
          </span>
        </Link>

        {/* 미니 CTA 버튼 */}
        {showCta && onCtaClick && (
          <button
            type="button"
            onClick={onCtaClick}
            className="px-4 py-2 rounded-[12px] bg-[#292541] text-white text-xs font-bold
                       transition-all duration-200 active:scale-[0.97] hover:bg-[#1F1C33]
                       shadow-[0_2px_8px_rgba(41,37,65,0.04)] cursor-pointer"
          >
            알림 신청하기
          </button>
        )}
      </div>
    </header>
  );
}
