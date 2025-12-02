import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Title from "@/app/components/utils/title";
import Section from "@/app/components/utils/section";
import TopicCard from "@/app/components/utils/topicCard";

export default function Creative() {
  const myPunIllustrations = [
    { 
      title: "いかさま",
      image: "/illustrations/ikasama.jpg",
    }, {
      title: "ウマ・ワトソン",
      image: "/illustrations/umawatson.jpg",
    }, {
      title: "モーモー太郎",
      image: "/illustrations/momotaro.jpg",
    }
  ]
  return (
    <Section sectionId="creative-section" contents={
      <>
        <Title title="Creative" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            作ったモノ
          </p>
          <TopicCard
            title="ネタスライド"
            description="時々ネタスライドを作っています。LTで発表しています。一応、技術を絡めています。"
            contents={
              <>
                <span>代表作</span>
                <ul className="list-disc pl-5">
                  <li>ギャルのパンティおくれ！（<Link href="https://speakerdeck.com/shu_kita/giyarunopanteiokure" className="text-blue-700 dark:text-blue-400 underline">資料</Link>）</li>
                  <li>Azure AI Content Safety でフワちゃんを救う（<Link href="https://speakerdeck.com/shu_kita/jie-shi-ban-henobu-shi-qie-natou-gao-wofang-gu" className="text-blue-700 dark:text-blue-400 underline">資料</Link>）</li>
                </ul>
                </>
            }
          />

          <TopicCard
            title="ダジャレ絵"
            description="ダジャレを絵にしています"
            contents={
              <div className="flex justify-center">
                <Carousel className="w-full">
                  <CarouselContent>
                    {myPunIllustrations.map((illustration, index) => (
                      <CarouselItem key={index} className="max-w-xs 2xl:basis-1/3">
                        <Card className="bg-gray-200 dark:bg-gray-800">
                          <CardHeader>
                            <CardTitle>{illustration.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-col">
                            <Image
                              src={illustration.image}
                              alt={illustration.title}
                              width={300}
                              height={300}
                            />
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
        </div>
      </>
    } />
  );
}
