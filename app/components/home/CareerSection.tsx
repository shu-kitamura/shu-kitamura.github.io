import { SectionShell } from '@/app/components/home/SectionShell';
import type { CareerStep } from '@/types/home';

type CareerSectionProps = {
  careers: CareerStep[];
};

export function CareerSection({
  careers,
}: CareerSectionProps) {
  return (
    <SectionShell id="career" title="Career">
      <div className="relative overflow-hidden rounded-2xl bg-white/95 p-8 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-2 hover:shadow-lg/20 dark:bg-slate-900/60 dark:ring-white/10">
        <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent" />
        <div className="space-y-6">
          {careers.map((career) => (
            <div
              key={career.period}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-2 block h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-100 dark:bg-cyan-300 dark:ring-cyan-900/50" />
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {career.period}
              </p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                {career.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
