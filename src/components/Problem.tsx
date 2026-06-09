import type { CopyDataset } from "@/data/copyData";

interface ProblemProps {
  data: CopyDataset["problem"];
}

export default function Problem({ data }: ProblemProps) {
  return (
    <section className="px-5 py-16 bg-warm-cream">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <span className="text-xs font-semibold tracking-wider text-brand-primary uppercase text-center block mb-2">
          Daily Troubles
        </span>
        <h2 className="text-xl font-extrabold text-neutral-900 text-center mb-8 md:text-3xl tracking-tight">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {data.situations.map((s, idx) => (
            <div
              key={s.label}
              className={`p-5 rounded-2xl bg-white border border-neutral-200/50 shadow-premium card-hover-effect
                         ${idx === data.situations.length - 1 && data.situations.length % 2 !== 0 ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full" : ""}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span 
                  className="w-10 h-10 rounded-xl bg-brand-surface text-2xl flex items-center justify-center shrink-0 shadow-sm" 
                  role="img" 
                  aria-label={s.label}
                >
                  {s.emoji}
                </span>
                <h3 className="font-bold text-neutral-800 text-[1rem]">
                  {s.label}
                </h3>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

