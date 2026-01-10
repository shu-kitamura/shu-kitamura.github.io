import { AboutCard } from '@/app/components/home/AboutCard';
import { SectionShell } from '@/app/components/home/SectionShell';
import type { AboutCardInfo } from '@/types/home';

type AboutSectionProps = {
  cards: AboutCardInfo[];
};

export function AboutSection({ cards }: AboutSectionProps) {
  return (
    <SectionShell id="about" title="About">
      <div className="grid gap-7 md:grid-cols-3">
        {cards.map((card) => (
          <AboutCard
            key={card.title}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
    </SectionShell>
  );
}
