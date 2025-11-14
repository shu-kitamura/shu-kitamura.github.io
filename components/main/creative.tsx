import Link from "next/link";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";

export default function Creative() {
  return (
    <Section sectionId="creative-section" contents={
      <>
        <Title title="Creative" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            作ったモノ
          </p>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                ネタスライド
              </ItemTitle>
              <ItemDescription>
                ネタスライドを作って、LTで発表しています。
                一応、技術絡めてます。
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
            <ItemContent>
              <ItemTitle>
                ダジャレ絵
              </ItemTitle>
              <ItemDescription>
                ダジャレを絵にしています。
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </>
    } />
  );
}
