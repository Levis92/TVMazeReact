import { KeyboardEventHandler, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  SxProps,
  Theme,
  Stack,
} from "@mui/material";
import { Search } from "@mui/icons-material";

export interface SearchInputProps {
  onSearch(value: string): void;
  defaultValue?: string;
  searchedValue: string;
  resultCount: number | undefined;
  sx?: SxProps<Theme>;
}

export function SearchInput({
  onSearch,
  defaultValue,
  resultCount,
  searchedValue,
  sx,
}: SearchInputProps) {
  const [search, setSearch] = useState(defaultValue ?? "");

  const _onSearch = () => {
    onSearch(search);
  };

  const onKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === "Enter") {
      _onSearch();
    }
  };

  return (
    <Stack gap={2} sx={sx}>
      <Stack direction="row" gap={1}>
        <TextField
          type="search"
          value={search}
          placeholder="Search by show name: Friends, Avatar, Arcane..."
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={onKeyDown}
          fullWidth
        />
        <Button variant="contained" aria-label="Search" onClick={_onSearch}>
          <Search />
        </Button>
      </Stack>
      {resultCount !== undefined && (
        <Typography textAlign="center">
          {`Found ${resultCount} matches for '${searchedValue}'`}
        </Typography>
      )}
    </Stack>
  );
}
