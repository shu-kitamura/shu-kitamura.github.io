import { SectionShell } from "@/app/components/home/SectionShell";
import type { SkillGroup } from "@/types/home";

type SkillSectionProps = {
  groups: SkillGroup[];
};

export function SkillSection({ groups }: SkillSectionProps) {
  return (
    <SectionShell id="skill" title="Skill & Certification">
      <div className="overflow-x-scroll lg:overflow-x-hidden rounded-2xl bg-white/95 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-2 hover:shadow-lg/20 dark:bg-slate-900/60 dark:ring-white/10">
        <table className="w-full border-collapse text-sm text-slate-800 dark:text-slate-100 min-w-[750px]">
          <thead className="bg-slate-50 text-left text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">
            <tr>
              <th className="px-5 py-3">分類</th>
              <th className="px-5 py-3">名前</th>
              <th className="px-5 py-3">年数</th>
              <th className="px-5 py-3">用途・備考</th>
            </tr>
          </thead>
          <tbody className="bg-white/80 dark:bg-transparent">
            {groups.map((group) =>
              group.items.map((item, index) => (
                <tr key={`${group.category}-${item.name}`} className="align-top">
                  {index === 0 && (
                    <td
                      rowSpan={group.items.length}
                      className="w-40 border-t border-slate-100 px-5 py-4 font-semibold text-slate-900 dark:border-white/10 dark:text-white"
                    >
                      {group.category}
                    </td>
                  )}
                  <td className="border-t border-slate-100 px-5 py-4 dark:border-white/10">{item.name}</td>
                  <td className="border-t border-slate-100 px-5 py-4 text-slate-600 dark:border-white/10 dark:text-slate-200">
                    {item.years}
                  </td>
                  <td className="border-t border-slate-100 px-5 py-4 text-slate-700 dark:border-white/10 dark:text-slate-200">
                    {item.note}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
