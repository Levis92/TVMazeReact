import { Refresh } from "@mui/icons-material";
import { Button, ButtonProps, Alert, AlertTitle } from "@mui/material";

export interface ErrorStatusProps {
  onRefresh: ButtonProps["onClick"];
}

export function ErrorStatus({ onRefresh }: ErrorStatusProps) {
  return (
    <Alert
      severity="error"
      action={
        <Button startIcon={<Refresh />} color="inherit" onClick={onRefresh}>
          Retry
        </Button>
      }
    >
      <AlertTitle>Something went wrong</AlertTitle>
    </Alert>
  );
}
