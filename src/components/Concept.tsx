import type { CopyDataset } from "@/data/copyData";

interface ConceptProps {
  data: CopyDataset["concept"];
}

export default function Concept({ data }: ConceptProps) {
  return (
    <section className="px-5 py-14 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-neutral-900 mb-4 md:text-2xl">
          {data.title}
        </h2>

        <p className="text-[0.95rem] leading-relaxed text-neutral-500 mb-8">
          {data.desc}
        </p>

        {/* 제품 특징 */}
        <div className="space-y-3">
          {data.features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200/60 text-left"
            >
              <span className="text-brand-primary text-lg shrink-0">✓</span>
              <span className="text-sm text-neutral-700 font-medium">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
