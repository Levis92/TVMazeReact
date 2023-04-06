import Head from "next/head";
import { getSeasonEpisodes, getShow, getShowSeasons } from "@/adapters";
import { CoverImage, GenreChips, RatingStat, SeasonList } from "@/components";
import { SeasonWithEpisodes, ShowWithSeasons } from "@/models";
import { renderHtml, getYear, removeHtmlTags } from "@/util";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

interface ShowProps {
  show: ShowWithSeasons;
}

export default function Show({ show }: ShowProps) {
  const seasonSummary =
    show.seasons?.length +
    " season(s) • " +
    getYear(show?.premiered) +
    "-" +
    getYear(show?.ended);

  return (
    <>
      <Head>
        <title>{show.name} | TV Maze</title>
        <meta name="description" content={removeHtmlTags(show.summary ?? "")} />
      </Head>
      <ShowContainer>
        <OverviewContainer>
          <CoverImage src={show.image?.original} alt={show.name} height={300} />
          <Card sx={{ flex: 1, minWidth: "min(450px, 100%)" }}>
            <CardHeader
              title={show.name}
              subheader={
                <Typography variant="subtitle1">{seasonSummary}</Typography>
              }
              titleTypographyProps={{
                variant: "h1",
                "data-cy": "showPage__title",
              }}
            />
            <DetailsContainer>
              <RatingStat rating={show.rating} />
              <GenreChips genres={show.genres} />
              <Chip variant="outlined" size="small" label={show.language} />
            </DetailsContainer>
          </Card>
        </OverviewContainer>
        <Stack component="section" gap={1}>
          <Typography variant="h3">Summary</Typography>
          {renderHtml(show.summary ?? "")}
        </Stack>
        <SeasonList seasons={show.seasons} />
      </ShowContainer>
    </>
  );
}

const ShowContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  display: "grid",
  gap: theme.spacing(3),
}));

const OverviewContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
}));

const DetailsContainer = styled(CardContent)(({ theme }) => ({
  paddingTop: 0,
  display: "grid",
  gap: theme.spacing(1),
  justifyItems: "start",
}));

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ showId: string }>
): Promise<GetServerSidePropsResult<ShowProps>> {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const showId = parseInt(context.params?.showId ?? "");
  const show = await getShow(showId);
  const seasons = await getShowSeasons(showId);
  const seasonsWithEpisodes: SeasonWithEpisodes[] = await Promise.all(
    seasons.map(async (season) => ({
      ...season,
      displayName: `Season ${season.number}`,
      episodes: await getSeasonEpisodes(season.id),
    }))
  );
  return {
    props: { show: { ...show, seasons: seasonsWithEpisodes } },
  };
}
