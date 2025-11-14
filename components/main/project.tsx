import Link from "next/link";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";
import ProjectCard from "@/components/main/utils/projectCard";

export default function Project() {
  return (
    <Section sectionId="project-section" contents={
      <>
        <Title title="Project" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            個人開発・貢献したOSSプロジェクト
          </p>
          <ProjectCard
            title="Sniffnet"
            badgeText="OSS"
            badgeColor="bg-blue-600"
            description="Rust製 ネットワークモニタリングアプリ"
            repoLink="https://github.com/GyulyVGC/sniffnet"
            contents={
              <ul className="list-disc pl-5">
                <li>
                  ARPパケットのモニタリング機能を実装(<Link href="https://github.com/GyulyVGC/sniffnet/pull/759" className="text-blue-700 dark:text-blue-400 underline">#759</Link>)
                </li>
                <li>
                  ver 1.4の日本語翻訳(<Link href="https://github.com/GyulyVGC/sniffnet/pull/849" className="text-blue-700 dark:text-blue-400 underline">#849</Link>)
                </li>
              </ul>
            }
          />

          <ProjectCard
            title="etherparse"
            badgeText="OSS"
            badgeColor="bg-blue-600"
            description="Sniffnetが依存するパケット解析ライブラリ"
            repoLink="https://github.com/JulianSchmid/etherparse"
            contents={
              <ul className="list-disc pl-5">
                <li>
                  Linux_SLLヘッダの解析機能を実装(<Link href="https://github.com/JulianSchmid/etherparse/pull/125" className="text-blue-700 dark:text-blue-400 underline">#125</Link>)
                </li>
              </ul>
            }
          />

          <ProjectCard
            title="regex"
            badgeText="個人開発"
            badgeColor="bg-orange-600"
            description="自作のVM型正規表現エンジンとそれを使用したコマンド"
            repoLink="https://github.com/shu-kitamura/regular-expression"
            contents={
              <ul className="list-disc pl-5">
                <li>Zennに解説記事を投稿(<Link href="https://zenn.dev/shu_kitamura/articles/0f6a69c343e08a" className="text-blue-700 dark:text-blue-400 underline">記事</Link>)</li>
                <li>Sapporo Engineer BaseのLTで発表(<Link href="https://speakerdeck.com/shu_kita/zheng-gui-biao-xian-enzinwozi-zuo-sitahua" className="text-blue-700 dark:text-blue-400 underline">発表資料</Link>)</li>
              </ul>
            }
          />

          <ProjectCard
            title="このサイト"
            badgeText="個人開発"
            badgeColor="bg-orange-600"
            description="以下の技術で作成・ホスティングしています。"
            repoLink="https://github.com/shu-kitamura/shu-kitamura.github.io"
            contents={
              <ul className="list-disc pl-5">
                <li>Next.js + Tailwind CSSで作成</li>
                <li>GitHub Pagesでホスティング</li>
              </ul>
            }
          />
        </div>
      </>
    } />
  );
}
