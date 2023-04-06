import { Search } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography, styled } from "@mui/material";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography>Tv Maze</Typography>
          <Button
            color="inherit"
            LinkComponent={NextLink}
            href="/"
            startIcon={<Search />}
            sx={{ marginLeft: "auto" }}
          >
            Search
          </Button>
        </Toolbar>
      </AppBar>
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}))

const Main = styled("main")(({ theme }) => ({
  flex: 1,
  overflow: "auto",
}))
