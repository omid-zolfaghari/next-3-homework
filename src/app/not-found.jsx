import { Box, Container, Stack, Typography } from "@mui/material";


function notFound() {
  return (
    <Container>
      <Stack maxHeight={800} alignItems="center">
        <Typography color="error" variant="h3">Page Not Found :((</Typography>
      </Stack>
    </Container>
  );
}

export default notFound;