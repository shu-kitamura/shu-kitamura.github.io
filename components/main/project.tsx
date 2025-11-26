import Link from "next/link";

import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";
import TopicCard from "@/components/main/utils/topicCard";

export default function Project() {
  return (
    <Section sectionId="project-section" contents={
      <>
        <Title title="Project" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            個人開発・貢献したOSSプロジェクト
          </p>
          <TopicCard
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
                <li>
                  依存ライブラリ（etherparse）にLinux_SLLヘッダの解析機能を実装(<Link href="https://github.com/JulianSchmid/etherparse/pull/125" className="text-blue-700 dark:text-blue-400 underline">#125</Link>)
                </li>
              </ul>
            }
          />

          <TopicCard
            title="fjall"
            badgeText="OSS"
            badgeColor="bg-blue-600"
            description="LSMツリーベースのKey Value Store"
            repoLink="https://github.com/fjall-rs/fjall"
            contents={
              <ul className="list-disc pl-5">
                <li>
                  Compaction 実行回数を数える機能を実装(<Link href="https://github.com/fjall-rs/fjall/pull/159" className="text-blue-700 dark:text-blue-400 underline">#159</Link>)
                </li>
                <li>
                  パーティション毎の Flush 実行回数を数える機能を実装(<Link href="https://github.com/fjall-rs/fjall/pull/161" className="text-blue-700 dark:text-blue-400 underline">#161</Link>)
                </li>
              </ul>
            }
          />

          <TopicCard
            title="TOHYO通信 ~Vote Communication~"
            badgeText="個人開発"
            badgeColor="bg-orange-600"
            description="リアルタイムで結果が反映される投票Webアプリ"
            repoLink="https://github.com/shu-kitamura/tohyo-communication"
            contents={
              <>
              <p>
                <Link href="https://vote.shu-kita.net/" className="text-blue-700 dark:text-blue-400 underline">https://vote.shu-kita.net/</Link>で公開しています。
              </p>
              <p>Next.jsで開発し、Cloudflare Workersでホスティングしています。</p>
              </>
            }
          />

          <TopicCard
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

          <TopicCard
            title="このサイト"
            badgeText="個人開発"
            badgeColor="bg-orange-600"
            description="以下の技術で構成されています"
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
