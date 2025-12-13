export type AboutCardInfo = {
  title: string;
  body: string;
};

export type SkillGroup = {
  category: string;
  items: { name: string; years: string; note: string }[];
};

export type ProjectInfo = {
  title: string;
  type: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
};

export type CareerStep = {
  period: string;
  detail: string;
};
