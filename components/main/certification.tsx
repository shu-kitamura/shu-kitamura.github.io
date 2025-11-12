import { Database, Cloud, Server, Cpu } from "lucide-react"

import { CertificationInfo } from "@/types/certification";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";


export default function Certification() {
  const certifications: CertificationInfo[] = [
    {
      icon: <Database />,
      title: "OSS-DB Silver/Gold",
      description: "PostgreSQLのスキルと知識を認定する資格",
    },
    {
      icon: <Cloud />,
      title: "Microsoft Certified Azure Administrator Associate",
      description: "Azure管理者としてのスキルと知識を認定する資格",
    },
    {
      icon: <Server />,
      title: "LinuC Level 1/2/3(Security)",
      description: "Linuxシステム設計・構築・管理のスキルと知識を認定する資格",
    },
    {
      icon: <Cpu />,
      title: "基本/応用情報技術者試験",
      description: "IT人材としての基本・応用的な知識を認定する資格",
    },
  ]
  return (
    <Section sectionId="certification-section" contents={
      <div>
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
      </div>
    } />
  );
}
