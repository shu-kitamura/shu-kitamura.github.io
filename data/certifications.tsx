import { Database, Cloud, Server, Cpu } from "lucide-react";

import { CertificationInfo } from "@/types/certification";

export const certifications: CertificationInfo[] = [
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
];
