import { AboutSection } from "@/app/components/home/AboutSection";
import { CareerSection } from "@/app/components/home/CareerSection";
import { HeroSection } from "@/app/components/home/HeroSection";
import { ProjectsSection } from "@/app/components/home/ProjectsSection";
import { SkillSection } from "@/app/components/home/SkillSection";
import { Footer } from "@/app/components/layout/Footer";
import { Header } from "@/app/components/layout/Header";
import aboutCards from "@/data/about.json";
import careers from "@/data/career.json";
import projects from "@/data/project.json";
import skillGroups from "@/data/skill.json";

const containerClass = "mx-auto w-full max-w-6xl px-6 sm:px-10";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header containerClass={containerClass} />

      <main className={`${containerClass} pb-24`}>
        <HeroSection />
        <AboutSection cards={aboutCards} />
        <SkillSection groups={skillGroups} />
        <ProjectsSection projects={projects} />
        <CareerSection careers={careers} />
      </main>

      <Footer />
    </div>
  );
}
