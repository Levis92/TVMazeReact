import { Typography, Stack } from "@mui/material";
import { EpisodeList } from "./EpisodeList";
import { SeasonWithEpisodes } from "@/models";

export interface SeasonListProps {
  seasons: SeasonWithEpisodes[];
}

export function SeasonList({ seasons }: SeasonListProps) {
  return (
    <Stack component="section" gap={1}>
      <Typography variant="h3">Episodes</Typography>
      <Stack gap={1}>
        {seasons.map((season) => (
          <EpisodeList
            key={season.id}
            episodes={season.episodes}
            seasonName={season.displayName}
          />
        ))}
      </Stack>
    </Stack>
  );
}
