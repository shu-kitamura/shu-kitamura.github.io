import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import Title from "@/app/components/utils/title";
import Section from "@/app/components/utils/section";

import { certifications } from "@/data/certifications";


export default function Certification() {
  return (
    <Section sectionId="certification-section" contents={
      <>
        <Title title="Certification" />
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            所有資格一覧です。
          </p>
          {certifications.map((certification, index) => (
            <Item key={index} variant="outline" className="w-full border-2 border-black/30 dark:border-white/30">
              <ItemMedia variant="icon">
                {certification.icon}
              </ItemMedia>
              <ItemContent>
              <ItemTitle>{certification.title}</ItemTitle>
              <ItemDescription>
                {certification.description}
              </ItemDescription>
            </ItemContent>
          </Item>
          ))}
        </div>
      </>
    } />
  );
}
