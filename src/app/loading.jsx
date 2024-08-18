import { CircularProgress, Stack } from "@mui/material";

function loading() {
  return (
    <Stack alignItems="center" justifyContent="center" height="80vh">
      <CircularProgress />
    </Stack>
  );
}

export default loading;