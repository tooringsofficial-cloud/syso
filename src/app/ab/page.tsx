import { Suspense } from "react";
import { copyData } from "@/data/copyData";
import LandingContainer from "@/components/LandingContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYSO — 편안한 밤, 가벼운 아침을 위한 나이트 루틴 젤리",
  description:
    "중요한 날 전날, 밤 루틴과 아침 컨디션을 생각한 스틱 젤리",
};

export default function VariantABPage() {
  return (
    <Suspense>
      <LandingContainer data={copyData.ab} />
    </Suspense>
  );
}
