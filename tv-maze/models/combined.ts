import { Episode, Season, Show } from "./shows";

export interface ShowWithSeasons extends Show {
  seasons: SeasonWithEpisodes[];
}

export interface SeasonWithEpisodes extends Season {
  displayName: string;
  episodes: Episode[];
}
