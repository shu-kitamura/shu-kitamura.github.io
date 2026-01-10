export type AboutCardInfo = {
  title: string;
  body: string;
};

export type SkillGroup = {
  category: string;
  items: { name: string; years: string; note: string }[];
};

export type ProjectType = 'personal' | 'oss' | 'work';

export const projectTypeLabels: Record<
  ProjectType,
  string
> = {
  personal: '個人開発',
  oss: 'OSS',
  work: '業務',
};

export type ProjectInfo = {
  title: string;
  type: ProjectType;
  description: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
};

export type CareerStep = {
  period: string;
  detail: string;
};
