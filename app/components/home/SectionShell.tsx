import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section id={id} className="py-16">
      <div className="text-center">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">{title}</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
