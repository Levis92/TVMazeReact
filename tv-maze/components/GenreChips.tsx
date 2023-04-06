import { Chip, Box } from "@mui/material";

export interface GenreChipsProps {
  genres: string[];
}

export function GenreChips({ genres }: GenreChipsProps) {
  if (!genres.length) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {genres.map((genre) => (
        <Chip key={genre} label={genre} size="small" />
      ))}
    </Box>
  );
}
