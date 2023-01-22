export enum GuideCategory {
  newbie = "newbie",
  Degen = "Degen",
}

export interface Guide {
  title: string;
  category: GuideCategory;
  body: string;
  key: string;
}
