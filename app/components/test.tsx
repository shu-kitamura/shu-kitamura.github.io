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


export default function Test() {
  return (
    <Section sectionId="test-section" contents={
      <>
          <Title title="Test Section" />
          <Carousel className="w-full">
            <CarouselContent className="flex space-x-5">
              <CarouselItem className="basis-1/2">
              <SectionCard
                sectionCardId="sniffnet-card"
                title="Sniffnet"
                description="Rust製のネットワークモニタリングツール。ARPパケットの監視機能を実装。画面の日本語訳も一部担当。"
                imageSrc="/sniffnet.svg"
              />
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
                title="TOHYO通信 ~Vote Communication~"
                description="リアルタイム投票アプリ。Next.js で開発し、Cloudflare Workers にデプロイ。"
                imageSrc="/tohyo-communication.png"
              />
              </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </>
    } />
  );
}
