import { getData } from "@/utils/fetchData";
import { Container, Stack, Typography } from "@mui/material";


export default async function page({params}) {
  const data = await getData(`https://dummyjson.com/posts/${params.id}`);

  return (
    <Container sx={{display : "flex", alignItems : "center", height : "500px"}}>
      <Stack direction="column" gap={4} justifyContent= "center" alignItems="center">
        <Typography color="primary" variant="h2">
          {`Post id : ${params.id}`}
        </Typography>
      <Typography variant="h3">
        {data.title}
      </Typography>
      <Typography variant="body1">
        {data.body}
      </Typography>
      <Typography color="error" variant="h4">
          {`User id : ${data.userId}`}
        </Typography>
      </Stack>
    </Container>
  )
}
