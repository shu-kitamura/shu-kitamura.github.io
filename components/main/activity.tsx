import Link from "next/link";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";

export default function Activity() {
  return (
    <Section sectionId="activity-section" contents={
      <>
        <Title title="Activity" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            やってた・やってること
          </p>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                テニス
              </ItemTitle>
              <ItemDescription>
                中学・高校でソフトテニスをやっていた。ポジションは前衛。スマッシュが得意だった。
                就職してから硬式テニスを始めた。バックハンドが得意。
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                フットサル
              </ItemTitle>
              <ItemDescription>
                2024年から始めた。週に1回やっている。
                全然上手くないが楽しい。
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                自転車旅行
              </ItemTitle>
              <ItemDescription>
                大学時代はこれをやっていた。全都道府県に行ったことがある。
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </>
    } />
  );
}
