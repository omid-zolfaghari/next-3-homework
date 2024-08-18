"use client";
import { Button, Container, Typography } from "@mui/material";

function error({ error, reset }) {
  return (
    <Container>
      <Typography variant="h3">{error.message}</Typography>
      <Button variant="contained" onClick={() => reset()}>
        Reset
      </Button>
    </Container>
  );
}

export default error;