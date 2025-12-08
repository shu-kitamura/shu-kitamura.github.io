"use client"

import type { ReactNode } from "react";

import { Moon, Sun, Mail } from "lucide-react"
import { useTheme } from "next-themes";

import Link from "next/link";
import Image from "next/image";

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import MyIcon from "@/app/components/icons/myIcon";
import GitHubIcon from "@/app/components/icons/github";
import XIcon from "@/app/components/icons/x";
import ZennIcon from "@/app/components/icons/zenn";

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

const aboutCards = [
  {
    title: "経歴",
    body: "SIerです。少し前までHadoopのテクニカルサポートをしていました。今はサーバ開発・保守をしています。",
  },
  {
    title: "得意なこと",
    body: "Python・Shell Scriptでの自動化。ネットワーク（TCP/IP, Ethernet）。Linuxサーバ運用・障害解析。",
  },
  {
    title: "興味",
    body: "Webアプリ開発。特にバックエンド。最近はNext.jsやFastAPIを触っています。",
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
  {
    title: "投票アプリ",
    description: "みんなの意見を、その場で見える化。",
    imgSrc: "/tohyo-communication.png",
    imgAlt: "投票アプリのアイコン",
  },
  {
    title: "正規表現エンジン",
    description: "仕組みを知りたくて作ったRust製エンジン。",
    imgSrc: "/regex.svg",
    imgAlt: "正規表現エンジンのアイコン",
  },
  {
    title: "Sniffnet",
    description: "Rust製のネットワークモニタリングツール。ARPパケットのモニタリング機能を担当。依存ライブラリへのPRも実施。",
    imgSrc: "/sniffnet.svg",
    imgAlt: "Sniffnet(ネットワークモニタリングツール)のアイコン",
  },
  {
    title: "Fjall",
    description: "Rust製のKVS。Conpaction, Flush の実行回数カウント機能を実装。",
    imgSrc: "/fjall.png",
    imgAlt: "Fjall(KVS)のアイコン",
  },];

const careers = [
  { period: "2021.04 – 2025.03", detail: "Cloudera製品サポート（ログ調査・再現テスト）" },
  { period: "2025.04 – 現在", detail: "VMware ESXi ドライバ評価（テスト自動化・効率化）" },
];

export default function Home() {
  const { setTheme } = useTheme()
  const { theme } = useTheme()
  return (
    <div className="flex min-h-screen flex-col">
      <header className="py-3 sticky top-0 z-50 bg-white/95 backdrop-blur dark:bg-slate-900/60">
        <div className={containerClass}>
          <nav className="flex items-center justify-end sm:justify-between">
            <div className="hidden sm:block text-lg font-black uppercase tracking-[0.28em] text-slate-900 dark:text-slate-50">
              shu-kitamura
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex items-center after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-orange-400 after:transition-transform after:duration-200 hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="ghost" size="icon" onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
              }}>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">change theme</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className={`${containerClass} pb-24`}>
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
              めんどうを、ちょっと楽しくする
            </div>
            <p className="mt-5 text-base text-slate-700 dark:text-slate-200 sm:text-lg">
              Software Developer
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
              <Link href="https://github.com/shu-kitamura">
                <GitHubIcon className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
              </Link>
              <Link href="https://x.com/prog_shu">
                <XIcon className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
              </Link>
              <Link href="https://zenn.dev/shu_kitamura">
                <ZennIcon className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
              </Link>
              <Link href="mailto:shusei3316@yahoo.co.jp">
                <Mail className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700" />
              </Link>
            </div>
          </div>
        </section>

        <SectionShell id="about" title="About">
          <div className="grid gap-7 md:grid-cols-3">
            {aboutCards.map((card) => (
              <AboutCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="skill" title="Skill & Certification">
          <div className="overflow-x-scroll lg:overflow-x-hidden rounded-2xl bg-white/95 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-2 hover:shadow-lg/20 dark:bg-slate-900/60 dark:ring-white/10">
            <table className="w-full border-collapse text-sm text-slate-800 dark:text-slate-100 min-w-[750px]">
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

        <SectionShell id="projects" title="Projects">
          <div className="flex justify-center">
            <Carousel className="w-4/5">
              <CarouselContent className="py-10">
                {projects.map((project) => (
                  <CarouselItem key={project.title} className="basis-1/1 md:basis-1/2 lg:basis-1/3 w-full h-full max-w-[300px] px-4">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgSrc={project.imgSrc}
                      imgAlt={project.imgAlt}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600" />
              <CarouselNext className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600" />
            </Carousel>
          </div>
        </SectionShell>

        <SectionShell id="career" title="Career">
          <div className="relative overflow-hidden rounded-2xl bg-white/95 p-8 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-2 hover:shadow-lg/20 dark:bg-slate-900/60 dark:ring-white/10">
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
        © shu-kitamura
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

function AboutCard({ title, body }: { title: string; body: string }) {
  return (
    <Card className="w-full h-full border-none shadow-md hover:shadow-lg/20 transition hover:-translate-y-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, description, imgSrc, imgAlt }: { title: string; description: string; imgSrc: string; imgAlt: string }) {
  return (
    <Card className="w-full h-full border-none shadow-md hover:shadow-lg/20 transition hover:-translate-y-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-10">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={810}
          height={799}
          className="aspect-square w-full object-contain"
        />
        <div className="min-h-[150px]">
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
