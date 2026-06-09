import type { CopyDataset } from "@/data/copyData";

interface DesiredOutcomeProps {
  data: CopyDataset["desiredOutcome"];
}

export default function DesiredOutcome({ data }: DesiredOutcomeProps) {
  return (
    <section className="px-5 py-16 bg-white">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <span className="text-xs font-semibold tracking-wider text-brand-primary uppercase text-center block mb-2">
          Desired Outcomes
        </span>
        <h2 className="text-xl font-extrabold text-neutral-900 text-center mb-8 md:text-3xl tracking-tight">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {data.outcomes.map((o) => (
            <div
              key={o.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-brand-surface/20 to-white 
                         border border-neutral-200/50 shadow-premium card-hover-effect"
            >
              <span 
                className="w-12 h-12 rounded-full bg-white text-3xl flex items-center justify-center mb-4 shadow-sm border border-neutral-100" 
                role="img" 
                aria-label={o.title}
              >
                {o.emoji}
              </span>
              <h3 className="font-bold text-neutral-900 text-[1rem]">
                {o.title}
              </h3>
              <p className="text-xs text-neutral-500 mt-2.5 leading-relaxed">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

