import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Title from "@/app/components/utils/title";
import Section from "@/app/components/utils/section";
import TopicCard from "@/app/components/utils/topicCard";

export default function Activity() {
  const myBikes = [
    { 
      generation: "初代自転車",
      description: "Giantのクロスバイク",
      image: "/bikes/giant.jpg",
      trip: [
        "四国一周",
        "大阪 - 東海 - 関東",
        "大阪 - 中国 - 九州一周・沖縄（フェリー）",
      ]
    }, {
      generation: "二代目自転車",
      description: "Arayaのランドナー",
      image: "/bikes/araya.jpg",
      trip: [
        "北陸 - 東北",
        "北海道（苫小牧 - 函館のみ）",
      ]
    }, {
      generation: "三代目自転車",
      description: "Fujiのグラベルロード。今も使っている",
      image: "/bikes/fuji.jpg",
      trip: [
        "三島 - 山梨 - 長野",
        "大阪 - 敦賀 - (フェリー) - 苫小牧 - 札幌",
      ]
    }
  ]
  return (
    <Section sectionId="activity-section" contents={
      <>
        <Title title="Activity" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            やってた・やってること
          </p>

          <TopicCard
            title="自転車旅行"
            description="大学時代は自転車旅行をやっていた。全都道府県に行ったことがある。"
            contents={
              <div className="flex justify-center">
                <Carousel className="w-full">
                  <CarouselContent>
                    {myBikes.map((bike, index) => (
                      <CarouselItem key={index} className="max-w-xs 2xl:basis-1/3">
                        <Card className="bg-gray-200 dark:bg-gray-800">
                          <CardHeader>
                            <CardTitle>{bike.generation}</CardTitle>
                            <CardDescription>{bike.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex flex-col">
                            <Image
                              src={bike.image}
                              alt={bike.generation}
                              width={300}
                              height={300}
                            />
                            <span className="font-semibold mb-2">主な旅行先:</span>
                            <ul className="list-disc pl-5">
                              {bike.trip.map((place, idx) => (
                                <li key={idx}>{place}</li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            }
          />

          <TopicCard
            title="テニス"
            description="中高でソフトテニスをやっていた。社会人になってから硬式テニスを始めた。"
            contents={
              <ul className="list-disc pl-5">
                <li>ソフトテニス</li>
                  <ul className="list-disc pl-5">
                    <li>ポジションは前衛。スマッシュが得意だった</li>
                    <li>実は近畿大会に出たことがある（唯一の自慢）</li>
                  </ul>
                <li>硬式テニス</li>
                  <ul className="list-disc pl-5">
                    <li>週1でやっている。スクールで中級</li>
                    <li>バックハンドが得意</li>
                  </ul>
              </ul>
            }
          />

          <TopicCard
            title="フットサル"
            description="2024年から始めた。週に1回やっている。全然上手くないが楽しい。"
            contents={
              <>
                <p>観戦は日本代表ぐらいしかしません。</p>
                <p>好きな選手はロナウジーニョとスアレスです。</p>
              </>
            }
          />
        </div>
      </>
    } />
  );
}
