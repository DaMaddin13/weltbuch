export type Thread = {
  id: string;
  since: string;
  title: string;
  summary: string;
  status: string;
};

export type Figure = {
  role: string;
  name: string;
  text: string;
};

export type Source = {
  id: string;
  text: string;
  url?: string;
};

export type ChapterMeta = {
  date: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  lede: string;
  readMinutes: number;
  weekday: string;
  threads: Thread[];
  figures: Figure[];
  sources: Source[];
  yesterday?: {
    slug: string;
    title: string;
    teaser: string;
  };
};

export type Chapter = ChapterMeta & {
  body: string;
};
