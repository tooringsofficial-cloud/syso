import { Suspense } from "react";
import { copyData } from "@/data/copyData";
import LandingContainer from "@/components/LandingContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYSO — 편안한 밤, 가벼운 아침을 위한 나이트 루틴 젤리",
  description:
    "푹 자고 가볍게 일어나고 싶다면. 밤부터 아침까지 한 번에 관리하는 스틱젤리.",
};

export default function VariantABPage() {
  return (
    <Suspense>
      <LandingContainer data={copyData.ab} />
    </Suspense>
  );
}
