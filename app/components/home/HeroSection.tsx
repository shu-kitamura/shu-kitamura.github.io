import Link from 'next/link';
import { Mail } from 'lucide-react';

import { Label } from '@/components/ui/label';
import GitHubIcon from '@/app/components/icons/github';
import MyIcon from '@/app/components/icons/myIcon';
import XIcon from '@/app/components/icons/x';
import ZennIcon from '@/app/components/icons/zenn';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 text-center">
      <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-400/20" />
      <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-400/20" />
      <div className="relative flex flex-col items-center">
        <Label>
          <MyIcon width={200} height={200} />
        </Label>
        <h1 className="mt-3 text-4xl font-black text-slate-900 dark:text-white sm:text-5xl">
          shu-kitamura
        </h1>
        <div className="mt-4 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500 sm:text-3xl">
          面倒駆動開発
        </div>
        <p className="mt-5 text-base text-slate-700 dark:text-slate-200 sm:text-lg">
          Software Developer
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
          <Link href="https://github.com/shu-kitamura" aria-label="GitHub">
            <GitHubIcon className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
          </Link>
          <Link href="https://x.com/prog_shu" aria-label="X (Twitter)">
            <XIcon className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
          </Link>
          <Link href="https://zenn.dev/shu_kitamura" aria-label="Zenn">
            <ZennIcon className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
          </Link>
          <Link href="mailto:shusei3316@yahoo.co.jp" aria-label="Email">
            <Mail className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
          </Link>
        </div>
      </div>
    </section>
  );
}
