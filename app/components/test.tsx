import Title from "@/app/components/utils/title";
import Section from "@/app/components/utils/section";
import SectionCard from "@/app/components/utils/sectionCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link";

export default function Test() {
  return (
    <Section sectionId="test-section" contents={
      <>
          <Title title="Test Section" />
          <Carousel className="w-full">
            <CarouselContent className="flex space-x-5 p-5">
              <CarouselItem className="basis-1/2">
                <Link href="https://github.com/GyulyVGC/sniffnet">
                  <SectionCard
                    sectionCardId="sniffnet-card"
                    title="Sniffnet"
                    description="Rust製のネットワークモニタリングツール。ARPパケットの監視機能を実装。画面の日本語訳も一部担当。"
                    imageSrc="/sniffnet.svg"
                  />
                </Link>
              </CarouselItem>
              <CarouselItem className="basis-1/2">
              <SectionCard
                sectionCardId="fjall-card"
                title="Fjall"
                description="Rust製のキーバリューストア。Compaction, Flush のカウント処理を実装。"
                imageSrc="/fjall.png"
              />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
              <SectionCard
                sectionCardId="tohyo-communication-card"
                title="TOHYO通信"
                description="リアルタイム投票アプリ。Next.js で開発し、Cloudflare Workers にデプロイ。"
                imageSrc="/tohyo-communication.png"
              />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
              <Link href="/regex">
              <SectionCard
                sectionCardId="regex-card"
                title="regular-expression"
                description="VM型正規表現エンジンとそれを用いたコマンドラインツールを実装。"
                imageSrc="/regex.svg"
              />
              </Link>
              </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </>
    } />
  );
}
