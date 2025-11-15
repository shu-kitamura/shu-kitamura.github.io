import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ServiceIcon from "@/components/main/utils/serviceIcon";
import { JSX } from "react";

type ProjectCardProps = {
  title: string;
  badgeText?: string;
  badgeColor?: string;
  description: string;
  repoLink?: string;
  contents: JSX.Element;
}

export default function ProjectCard( { title, badgeText, badgeColor, description, repoLink, contents }: ProjectCardProps ) {
  return (
    <Card className="w-full gap-2 border-2 border-black/30 dark:border-white/30 bg-gray-100 dark:bg-gray-600 py-1">
      <CardHeader>
        <div className="flex items-center gap-2 h-10">
          <CardTitle>{title}</CardTitle>
          {badgeText && badgeColor && (
            <Label>
              <Badge className={`h-4 ${badgeColor} text-white`}>{badgeText}</Badge>
            </Label>
          )}
          {repoLink && (
            <ServiceIcon
              href={repoLink}
              imagePathLight="/logos/github/github-mark-light.svg"
              imagePathDark="/logos/github/github-mark-dark.svg"
              altText="GitHub icon"
            />
          )}
        </div>
        <CardDescription className="text-gray-700 dark:text-gray-200">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-700 dark:text-gray-200">
        {contents}
      </CardContent>
    </Card>
  );
}
