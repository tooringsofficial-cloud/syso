import { Suspense } from "react";
import { copyData } from "@/data/copyData";
import LandingContainer from "@/components/LandingContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYSO — 편안한 밤을 위한 나이트 루틴 젤리",
  description: "내일이 중요한 밤, 뒤척이고 싶지 않다면. 자기 전 한 포 스틱젤리.",
};

export default function VariantAPage() {
  return (
    <Suspense>
      <LandingContainer data={copyData.a} />
    </Suspense>
  );
}
