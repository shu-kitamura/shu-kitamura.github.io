import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "@/app/components/home/ProjectCard";
import { SectionShell } from "@/app/components/home/SectionShell";
import type { ProjectInfo } from "@/types/home";

type ProjectsSectionProps = {
  projects: ProjectInfo[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionShell id="projects" title="Projects">
      <div className="flex justify-center">
        <Carousel className="w-4/5">
          <CarouselContent className="py-10">
            {projects.map((project) => (
              <CarouselItem key={project.title} className="basis-1/1 md:basis-1/2 lg:basis-1/3 w-full h-full max-w-[300px] px-4">
                <Link href={project.href}>
                  <ProjectCard
                    title={project.title}
                    type={project.type}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600" />
          <CarouselNext className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600" />
        </Carousel>
      </div>
    </SectionShell>
  );
}
