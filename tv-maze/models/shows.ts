export interface ShowResponse {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image | null;
  summary: string | null;
  updated: number;
  _links: {
    self: {href: string};
    previousepisode: {href: string};
  };
}

export interface Rating {
  average: number | null;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Image {
  medium: string;
  original: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: null;
  webChannel: WebChannel;
  image: Image;
  summary: string | null;
  _links: {self: {href: string}};
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: null;
  summary: string | null;
  _links: {
    self: {href: string};
    show: {href: string};
  };
}
