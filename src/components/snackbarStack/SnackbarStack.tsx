import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { Stack } from "@mui/material";

interface snackbarType {
  type: "error" | "success";
  content: string;
}

export default function SnackbarStack({ data }: { data: snackbarType[] }) {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      {data.map(({ type, content }) => {
        return (
          <Snackbar
            key={content}
            open={true}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            color={"red"}
          >
            <Alert
              // onClose={handleClose}
              //   severity={type}
              severity={"success"}
              sx={{ width: "100%" }}
            >
              {content}
            </Alert>
          </Snackbar>
        );
      })}
    </Stack>
  );
}
