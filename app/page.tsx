import type { ReactNode } from "react";
import Link from "next/link";

type SkillGroup = {
  category: string;
  items: { name: string; years: string; note: string }[];
};

const containerClass = "mx-auto w-full max-w-6xl px-6 sm:px-10";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skill", label: "Skill" },
  { href: "#projects", label: "Projects" },
  { href: "#career", label: "Career" },
];

const socials = [
  { href: "https://x.com/prog_shu", label: "X" },
  { href: "https://github.com/shu-kitamura", label: "GitHub" },
  { href: "mailto:hello@shu-kita.net", label: "Email" },
];

const aboutCards = [
  {
    title: "何をしている人？",
    body: "インフラ運用と自動化が好きです。面倒なことを見つけて、楽にする仕組みを考えています。",
  },
  {
    title: "得意なこと",
    body: "Python・Shell Scriptでの自動化、Linuxトラブルシュート、Rustでの小物づくり。",
  },
  {
    title: "最近ハマっていること",
    body: "eBPF、正規表現の仕組み、OSSコントリビュート。",
  },
];

const skillGroups: SkillGroup[] = [
  {
    category: "言語",
    items: [
      { name: "Python", years: "4年", note: "業務自動化・個人開発" },
      { name: "Rust", years: "1年", note: "OSS / 個人開発" },
      { name: "Shell Script", years: "3年", note: "テスト・ログ収集自動化" },
    ],
  },
  {
    category: "OS・ミドルウェア",
    items: [
      { name: "Linux (RHEL, CentOS)", years: "4年", note: "運用・障害解析" },
      { name: "PostgreSQL", years: "2年", note: "業務・個人開発" },
      { name: "Apache Hadoop (Hive, HBase, Spark)", years: "3年", note: "データ基盤サポート" },
    ],
  },
  {
    category: "資格",
    items: [
      { name: "基本・応用情報", years: "-", note: "情報処理技術者試験" },
      { name: "OSS-DB Silver・Gold", years: "-", note: "DB設計・運用知識" },
      { name: "LinuC Level 1–3", years: "-", note: "Linuxサーバ設計・運用" },
      { name: "AZ-104", years: "-", note: "Azure運用知識" },
    ],
  },
];

const projects = [
  { title: "投票アプリ", description: "みんなの意見を、その場で見える化。" },
  { title: "正規表現エンジン", description: "仕組みを知りたくて作ったRust製エンジン。" },
  { title: "OSS活動", description: "気になったところをちょっとずつ直します。" },
];

const careers = [
  { period: "2021.04 – 2025.03", detail: "Cloudera製品サポート（ログ調査・再現テスト）" },
  { period: "2025.04 – 現在", detail: "VMware ESXi ドライバ評価（テスト自動化・効率化）" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="py-6">
        <div className={containerClass}>
          <nav className="flex items-center justify-between">
            <div className="text-sm font-black uppercase tracking-[0.28em] text-slate-900 dark:text-slate-50">
              Shu Kitamura
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex items-center after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-orange-400 after:transition-transform after:duration-200 hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className={`${containerClass} pb-24`}>
        <section className="relative overflow-hidden py-20 text-center">
          <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-400/20" />
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-400/20" />
          <div className="relative">
            <h1 className="mt-3 text-4xl font-black text-slate-900 dark:text-white sm:text-5xl">
              shu-kitamura
            </h1>
            <div className="mt-4 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500 sm:text-[26px]">
              めんどうを、ちょっと楽しくする
            </div>
            <p className="mt-5 text-base text-slate-700 dark:text-slate-200 sm:text-lg">
              Software Developer
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="rounded-full bg-gradient-to-r from-cyan-50 to-orange-50 px-4 py-2 text-slate-800 shadow-sm ring-1 ring-cyan-100/70 transition hover:-translate-y-0.5 hover:shadow-md dark:from-slate-800 dark:to-slate-700 dark:text-slate-100 dark:ring-white/10"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SectionShell id="about" title="About">
          <div className="grid gap-7 md:grid-cols-3">
            {aboutCards.map((card) => (
              <SurfaceCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="skill" title="Skill & Certification">
          <div className="overflow-hidden rounded-2xl bg-white/95 shadow-[0_16px_36px_rgba(0,0,0,0.08)] ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(0,0,0,0.12)] dark:bg-slate-900/60 dark:ring-white/10">
            <table className="w-full border-collapse text-sm text-slate-800 dark:text-slate-100">
              <thead className="bg-slate-50 text-left text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">
                <tr>
                  <th className="px-5 py-3">分類</th>
                  <th className="px-5 py-3">名前</th>
                  <th className="px-5 py-3">年数</th>
                  <th className="px-5 py-3">備考</th>
                </tr>
              </thead>
              <tbody className="bg-white/80 dark:bg-transparent">
                {skillGroups.map((group) =>
                  group.items.map((item, index) => (
                    <tr key={`${group.category}-${item.name}`} className="align-top">
                      {index === 0 && (
                        <td
                          rowSpan={group.items.length}
                          className="w-36 border-t border-slate-100 px-5 py-4 font-semibold text-slate-900 dark:border-white/10 dark:text-white"
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

        <SectionShell id="projects" title="Projects">
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <SurfaceCard key={project.title} title={project.title} body={project.description} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="career" title="Career">
          <div className="relative overflow-hidden rounded-2xl bg-white/95 p-8 shadow-[0_16px_36px_rgba(0,0,0,0.08)] ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(0,0,0,0.12)] dark:bg-slate-900/60 dark:ring-white/10">
            <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent" />
            <div className="space-y-6">
              {careers.map((career) => (
                <div key={career.period} className="relative pl-10">
                  <span className="absolute left-0 top-2 block h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-100 dark:bg-cyan-300 dark:ring-cyan-900/50" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{career.period}</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{career.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="py-16 text-center text-sm text-slate-500 dark:text-slate-400">
        © Shu Kitamura
      </footer>
    </div>
  );
}

function SectionShell({ id, title, children }: { id: string; title: string; children: ReactNode }) {
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

function SurfaceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white/90 p-7 shadow-[0_16px_36px_rgba(0,0,0,0.08)] ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(0,0,0,0.12)] dark:bg-slate-800/80 dark:ring-white/10">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{body}</p>
    </div>
  );
}
