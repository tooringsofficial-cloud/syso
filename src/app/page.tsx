import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYSO — 내부 테스트 허브",
  description: "수요 검증 실험 테스트 페이지. 외부 트래픽 사용 금지.",
  robots: "noindex, nofollow",
};

const variants = [
  {
    key: "a",
    label: "Variant A",
    desc: "수면 중심 포지셔닝",
    color: "bg-indigo-50 border-indigo-200",
  },
  {
    key: "b",
    label: "Variant B",
    desc: "붓기 중심 포지셔닝",
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    key: "ab",
    label: "Variant AB",
    desc: "수면 + 붓기 복합 포지셔닝",
    color: "bg-violet-50 border-violet-200",
  },
];

export default function HomePage() {
  const testUtm =
    "utm_source=test&utm_medium=internal&utm_campaign=dev_test&utm_content=hub";

  return (
    <main className="flex-1 flex items-center justify-center px-5 py-16">
      <div className="max-w-md w-full">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-brand-primary uppercase">
            SYSO
          </span>
          <h1 className="text-2xl font-bold text-neutral-900 mt-2">
            내부 테스트 허브
          </h1>
          <p className="text-sm text-neutral-500 mt-2">
            이 페이지는 내부 개발 및 테스트 목적입니다.
            <br />
            실제 광고 트래픽은 각 Variant URL로 직접 유입됩니다.
          </p>
        </div>

        {/* Variant 링크 */}
        <div className="space-y-3 mb-8">
          {variants.map((v) => (
            <Link
              key={v.key}
              href={`/${v.key}?${testUtm}`}
              className={`block p-5 rounded-xl border ${v.color} transition-all hover:shadow-md`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-neutral-800">{v.label}</p>
                  <p className="text-sm text-neutral-500 mt-0.5">{v.desc}</p>
                </div>
                <span className="text-neutral-400 text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Waitlist 직접 접근 */}
        <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
          <p className="font-semibold text-neutral-800 mb-2">Waitlist 직접 테스트</p>
          <div className="space-y-2 text-sm">
            <Link
              href={`/waitlist?variant=a&${testUtm}&landing_version=v1`}
              className="block text-brand-primary hover:underline"
            >
              /waitlist?variant=a →
            </Link>
            <Link
              href={`/waitlist?variant=b&${testUtm}&landing_version=v1`}
              className="block text-brand-primary hover:underline"
            >
              /waitlist?variant=b →
            </Link>
            <Link
              href={`/waitlist?variant=ab&${testUtm}&landing_version=v1`}
              className="block text-brand-primary hover:underline"
            >
              /waitlist?variant=ab →
            </Link>
          </div>
        </div>

        {/* 이벤트 디버그 안내 */}
        <p className="text-xs text-neutral-400 text-center mt-8">
          개발 환경에서는 브라우저 콘솔에서 [Analytics] 태그로 이벤트 로그를 확인할 수 있습니다.
        </p>
      </div>
    </main>
  );
}
