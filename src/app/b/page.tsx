import { Suspense } from "react";
import { copyData } from "@/data/copyData";
import LandingContainer from "@/components/LandingContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYSO — 가벼운 아침을 위한 나이트 루틴 젤리",
  description: "중요한 날 아침, 거울 보고 당황한 적 있다면. 자기 전 한 포 스틱젤리.",
};

export default function VariantBPage() {
  return (
    <Suspense>
      <LandingContainer data={copyData.b} />
    </Suspense>
  );
}
