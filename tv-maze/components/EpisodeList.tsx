import { Episode } from "@/models";
import { Typography, Stack } from "@mui/material";
import { EpisodeCard } from "./EpisodeCard";

export interface EpisodeListProps {
  seasonName: string;
  episodes: Episode[];
}

export function EpisodeList({ episodes, seasonName }: EpisodeListProps) {
  return (
    <Stack gap={1}>
      <Typography variant="h4">{seasonName}</Typography>
      <Stack gap={1}>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </Stack>
    </Stack>
  );
}
