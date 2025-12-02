import { JSX } from "react";
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type SectionCardProps = {
  sectionCardId: string;
  title: string;
  description: string;
  imageSrc: string;
};

export default function SectionCard({ sectionCardId, title, description, imageSrc }: SectionCardProps) {
  return (
    <Card className="w-full h-full" id={sectionCardId}>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <AspectRatio ratio={16 / 9} className="mb-4 w-full">
          <Image
            src={imageSrc}
            alt={`${title} Image`}
            fill={true}
          />
        </AspectRatio>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
