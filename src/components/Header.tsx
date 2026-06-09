"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  showCta?: boolean;
  onCtaClick?: () => void;
}

export default function Header({ showCta = true, onCtaClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-md mx-auto px-5 h-14 flex items-center justify-between md:max-w-2xl">
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="SYSO Logo"
            width={72}
            height={22}
            className="w-auto h-5 object-contain"
            priority
          />
        </Link>

        {/* 미니 CTA 버튼 */}
        {showCta && onCtaClick && (
          <button
            type="button"
            onClick={onCtaClick}
            className="px-3 py-1.5 rounded-lg bg-brand-primary text-white text-xs font-semibold
                       transition-all duration-200 active:scale-[0.97] hover:bg-brand-primary-light
                       shadow-[0_2px_8px_rgba(79,70,229,0.15)]"
          >
            알림 신청하기
          </button>
        )}
      </div>
    </header>
  );
}
