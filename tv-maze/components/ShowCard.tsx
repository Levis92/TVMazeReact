import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
  Stack,
  CardProps,
  Chip,
} from "@mui/material";
import { Show } from "@/models";
import { getYear } from "@/util";
import { RatingStat } from "./RatingStat";
import { GenreChips } from "./GenreChips";
import { useRouter } from "next/router";
import { CoverImage } from "./CoverImage";

export interface ShowCardProps extends Omit<CardProps, "onClick"> {
  show: Show;
}

export function ShowCard({ show, ...props }: ShowCardProps) {
  const { push } = useRouter();
  const navigateToShow = (showId: number) => {
    push("shows/" + showId);
  };

  const onClick = () => {
    navigateToShow(show.id);
  };

  return (
    <Card onClick={onClick} {...props}>
      <CardActionArea sx={{ display: "flex", flexWrap: "wrap" }}>
        <CardMedia>
          <CoverImage src={show.image?.medium} alt={show.name} height={240} />
        </CardMedia>
        <Stack flex={1}>
          <CardHeader
            title={show.name}
            subheader={
              <Typography variant="subtitle1">
                {getYear(show?.premiered) + "-" + getYear(show?.ended)}
              </Typography>
            }
            titleTypographyProps={{ "data-cy": "showCard__title" }}
          />
          <CardContent sx={{ paddingTop: 0 }}>
            <Stack gap={1} alignItems="start" minWidth={180}>
              <RatingStat rating={show.rating} size="small" />
              <GenreChips genres={show.genres} />
              <Chip variant="outlined" size="small" label={show.language} />
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
