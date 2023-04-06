import { Box, BoxProps, CircularProgress, styled } from "@mui/material";

export type LoadingProps = BoxProps;

export function Loading(props: LoadingProps) {
  return (
    <LoadingContainer {...props}>
      <CircularProgress />
    </LoadingContainer>
  );
}

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  padding: theme.spacing(4),
  placeContent: "center",
}));
