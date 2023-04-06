import React from "react";
import { Typography, Card, CardContent, CardHeader } from "@mui/material";
import { Episode } from "@/models";
import { RatingStat } from "./RatingStat";
import { renderHtml } from "@/util";

export interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Card>
      <CardHeader
        title={episode.name}
        subheader={<RatingStat rating={episode.rating} />}
      />
      {episode.summary && (
        <CardContent sx={{ paddingTop: 0 }}>
          {renderHtml(episode.summary)}
        </CardContent>
      )}
    </Card>
  );
}
