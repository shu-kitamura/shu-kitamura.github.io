import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";

export default function Project() {
  return (
    <Section sectionId="project-section" contents={
      <section>
        <Title title="Project" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            プロジェクト
          </p>
        </div>
      </section>
    } />
  );
}
