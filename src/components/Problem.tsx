import type { CopyDataset } from "@/data/copyData";

interface ProblemProps {
  data: CopyDataset["problem"];
}

export default function Problem({ data }: ProblemProps) {
  return (
    <section className="px-5 py-14 bg-white">
      <h2 className="text-xl font-bold text-neutral-900 text-center mb-8 md:text-2xl">
        {data.title}
      </h2>

      <div className="space-y-4 max-w-md mx-auto">
        {data.situations.map((s) => (
          <div
            key={s.label}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200/60"
          >
            <span className="text-2xl shrink-0 mt-0.5" role="img" aria-label={s.label}>
              {s.emoji}
            </span>
            <div>
              <p className="font-semibold text-neutral-800 text-[0.95rem]">
                {s.label}
              </p>
              <p className="text-sm text-neutral-500 mt-0.5 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
