import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ data }: DesiredOutcomeProps) {
  return (
    <section className="px-5 py-14 bg-gradient-to-b from-brand-surface/40 to-white">
      <h2 className="text-xl font-bold text-neutral-900 text-center mb-8 md:text-2xl">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto md:grid-cols-3 md:max-w-2xl">
        {data.outcomes.map((o) => (
          <div
            key={o.title}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-neutral-200/60 shadow-sm"
          >
            <span className="text-3xl mb-3" role="img" aria-label={o.title}>
              {o.emoji}
            </span>
            <p className="font-semibold text-neutral-800 text-[0.95rem]">
              {o.title}
            </p>
            <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
              {o.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
