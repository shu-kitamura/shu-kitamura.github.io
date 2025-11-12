import Link from "next/link";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";

export default function Project() {
  return (
    <Section sectionId="project-section" contents={
      <>
        <Title title="Project" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            個人開発・貢献したOSSプロジェクト
          </p>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                Sniffnet
                <Label>
                  <Badge className="h-4 bg-blue-600 text-white">OSS</Badge>
                </Label>
              </ItemTitle>
              <ItemDescription>
                ネットワークトラフィックをリアルタイムで監視・可視化するOSSツール
                ARPパケットのモニタリング機能を実装しました(<Link href="https://github.com/GyulyVGC/sniffnet/pull/759" className="text-blue-700 dark:text-blue-400 underline">#759</Link>)
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                etherparse
                <Label>
                  <Badge className="h-4 bg-blue-600 text-white">OSS</Badge>
                </Label>
              </ItemTitle>
              <ItemDescription>
                Sniffnetが依存するパケット解析ライブラリ
                Linux_SLLヘッダの解析機能を実装しました。(<Link href="https://github.com/JulianSchmid/etherparse/pull/125" className="text-blue-700 dark:text-blue-400 underline">#59</Link>)
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                regex
                <Label>
                  <Badge className="h-4 bg-orange-600 text-white">個人開発</Badge>
                </Label>
              </ItemTitle>
              <ItemDescription>
                自作のVM型正規表現エンジンとそれを使用したコマンド
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </>
    } />
  );
}
