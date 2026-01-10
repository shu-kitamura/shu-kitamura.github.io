import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  projectTypeLabels,
  type ProjectType,
} from '@/types/home';

type ProjectCardProps = {
  title: string;
  type: ProjectType;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

export function ProjectCard({
  title,
  type,
  description,
  imgSrc,
  imgAlt,
}: ProjectCardProps) {
  return (
    <Card className="w-full h-full border-none shadow-md hover:shadow-lg/20 transition hover:-translate-y-2">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Badge>{projectTypeLabels[type]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col space-y-10">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={810}
          height={799}
          className="aspect-square w-full object-contain"
        />
        <div className="min-h-[180px]">
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
